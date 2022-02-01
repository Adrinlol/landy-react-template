import * as React from 'react';
export declare type OptionListProps = Record<string, never>;
export interface RefOptionListProps {
    onKeyDown: React.KeyboardEventHandler;
    onKeyUp: React.KeyboardEventHandler;
    scrollTo?: (index: number) => void;
}
declare const RefOptionList: React.ForwardRefExoticComponent<Pick<OptionListProps, string> & React.RefAttributes<RefOptionListProps>>;
export default RefOptionList;
