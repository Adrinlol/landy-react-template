import * as React from 'react';
import { TableLocale } from '../../interface';
interface FilterSearchProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterSearch: Boolean;
    tablePrefixCls: string;
    locale: TableLocale;
}
declare const FilterSearch: React.FC<FilterSearchProps>;
export default FilterSearch;
