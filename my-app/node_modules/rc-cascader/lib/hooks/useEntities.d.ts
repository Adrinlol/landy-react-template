import type { DefaultOptionType, InternalFieldNames } from '../Cascader';
import type { DataEntity } from 'rc-tree/lib/interface';
export interface OptionsInfo {
    keyEntities: Record<string, DataEntity>;
    pathKeyEntities: Record<string, DataEntity>;
}
export declare type GetEntities = () => OptionsInfo['pathKeyEntities'];
declare const _default: (options: DefaultOptionType[], fieldNames: InternalFieldNames) => GetEntities;
/** Lazy parse options data into conduct-able info to avoid perf issue in single mode */
export default _default;
