export function isWindow(obj: typeof window | null): boolean {
  return obj !== null && obj !== undefined && obj === obj.window;
}

export const getScroll = (
  target: HTMLElement | Window | Document | null,
  top: boolean
): number => {
  if (typeof window === "undefined") {
    return 0;
  }
  const method = top ? "scrollTop" : "scrollLeft";
  let result = 0;
  if (isWindow(target as typeof window)) {
    result = (target as Window)[top ? "pageYOffset" : "pageXOffset"];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = (target as HTMLElement)[method];
  }
  if (
    target &&
    !isWindow(target as typeof window) &&
    typeof result !== "number"
  ) {
    result = ((target as HTMLElement).ownerDocument || (target as Document))
      .documentElement?.[method];
  }
  return result;
};
