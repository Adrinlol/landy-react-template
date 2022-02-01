import type { RawValueType } from '../BaseSelect';
import type { DefaultOptionType, LabelInValueType } from '../Select';
declare const _default: (labeledValues: LabelInValueType[], valueOptions: Map<RawValueType, DefaultOptionType>) => [LabelInValueType[], (val: RawValueType) => DefaultOptionType];
/**
 * Cache `value` related LabeledValue & options.
 */
export default _default;
