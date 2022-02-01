/// <reference types="react" />
import type { SingleValueType, DefaultOptionType, InternalFieldNames } from '../Cascader';
import type { GetEntities } from '../hooks/useEntities';
export declare function formatStrategyValues(pathKeys: React.Key[], getKeyPathEntities: GetEntities): import("react").Key[];
export declare function toPathOptions(valueCells: SingleValueType, options: DefaultOptionType[], fieldNames: InternalFieldNames, stringMode?: boolean): {
    value: SingleValueType[number];
    index: number;
    option: DefaultOptionType;
}[];
