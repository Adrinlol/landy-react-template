"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectionMockInstance = exports.mockIsIntersecting = exports.mockAllIsIntersecting = void 0;
const test_utils_1 = require("react-dom/test-utils");
const observers = new Map();
beforeEach(() => {
    /**
     * Create a custom IntersectionObserver mock, allowing us to intercept the observe and unobserve calls.
     * We keep track of the elements being observed, so when `mockAllIsIntersecting` is triggered it will
     * know which elements to trigger the event on.
     */
    global.IntersectionObserver = jest.fn((cb, options = {}) => {
        var _a, _b, _c;
        const item = {
            callback: cb,
            elements: new Set(),
            created: Date.now(),
        };
        const instance = {
            thresholds: Array.isArray(options.threshold)
                ? options.threshold
                : [(_a = options.threshold) !== null && _a !== void 0 ? _a : 0],
            root: (_b = options.root) !== null && _b !== void 0 ? _b : null,
            rootMargin: (_c = options.rootMargin) !== null && _c !== void 0 ? _c : '',
            observe: jest.fn((element) => {
                item.elements.add(element);
            }),
            unobserve: jest.fn((element) => {
                item.elements.delete(element);
            }),
            disconnect: jest.fn(() => {
                observers.delete(instance);
            }),
            takeRecords: jest.fn(),
        };
        observers.set(instance, item);
        return instance;
    });
});
afterEach(() => {
    // @ts-ignore
    if (global.IntersectionObserver)
        global.IntersectionObserver.mockClear();
    observers.clear();
});
function triggerIntersection(elements, trigger, observer, item) {
    const entries = [];
    const isIntersecting = typeof trigger === 'number'
        ? observer.thresholds.some((threshold) => trigger >= threshold)
        : trigger;
    let ratio;
    if (typeof trigger === 'number') {
        const intersectedThresholds = observer.thresholds.filter((threshold) => trigger >= threshold);
        ratio =
            intersectedThresholds.length > 0
                ? intersectedThresholds[intersectedThresholds.length - 1]
                : 0;
    }
    else {
        ratio = trigger ? 1 : 0;
    }
    elements.forEach((element) => {
        var _a;
        entries.push({
            boundingClientRect: element.getBoundingClientRect(),
            intersectionRatio: ratio,
            intersectionRect: isIntersecting
                ? element.getBoundingClientRect()
                : {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                    toJSON() { },
                },
            isIntersecting,
            rootBounds: observer.root instanceof Element
                ? (_a = observer.root) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()
                : null,
            target: element,
            time: Date.now() - item.created,
        });
    });
    // Trigger the IntersectionObserver callback with all the entries
    if (test_utils_1.act)
        (0, test_utils_1.act)(() => item.callback(entries, observer));
    else
        item.callback(entries, observer);
}
/**
 * Set the `isIntersecting` on all current IntersectionObserver instances
 * @param isIntersecting {boolean | number}
 */
function mockAllIsIntersecting(isIntersecting) {
    for (let [observer, item] of observers) {
        triggerIntersection(Array.from(item.elements), isIntersecting, observer, item);
    }
}
exports.mockAllIsIntersecting = mockAllIsIntersecting;
/**
 * Set the `isIntersecting` for the IntersectionObserver of a specific element.
 *
 * @param element {Element}
 * @param isIntersecting {boolean | number}
 */
function mockIsIntersecting(element, isIntersecting) {
    const observer = intersectionMockInstance(element);
    if (!observer) {
        throw new Error('No IntersectionObserver instance found for element. Is it still mounted in the DOM?');
    }
    const item = observers.get(observer);
    if (item) {
        triggerIntersection([element], isIntersecting, observer, item);
    }
}
exports.mockIsIntersecting = mockIsIntersecting;
/**
 * Call the `intersectionMockInstance` method with an element, to get the (mocked)
 * `IntersectionObserver` instance. You can use this to spy on the `observe` and
 * `unobserve` methods.
 * @param element {Element}
 * @return IntersectionObserver
 */
function intersectionMockInstance(element) {
    for (let [observer, item] of observers) {
        if (item.elements.has(element)) {
            return observer;
        }
    }
    throw new Error('Failed to find IntersectionObserver for element. Is it being observed?');
}
exports.intersectionMockInstance = intersectionMockInstance;
