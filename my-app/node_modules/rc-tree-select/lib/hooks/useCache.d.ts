import type { LabeledValueType } from '../TreeSelect';
declare const _default: (values: LabeledValueType[]) => [LabeledValueType[]];
/**
 * This function will try to call requestIdleCallback if available to save performance.
 * No need `getLabel` here since already fetch on `rawLabeledValue`.
 */
export default _default;
