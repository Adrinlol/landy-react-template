import type * as React from 'react';
import type { RawValueType } from './BaseSelect';
export interface FlattenOptionData<OptionType> {
    label?: React.ReactNode;
    data: OptionType;
    key: React.Key;
    value?: RawValueType;
    groupOption?: boolean;
    group?: boolean;
}
