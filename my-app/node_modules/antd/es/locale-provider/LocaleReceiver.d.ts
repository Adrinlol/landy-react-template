import * as React from 'react';
import { Locale } from '.';
export declare type LocaleComponentName = Exclude<keyof Locale, 'locale'>;
export interface LocaleReceiverProps<C extends LocaleComponentName = LocaleComponentName> {
    componentName: C;
    defaultLocale?: Locale[C] | (() => Locale[C]);
    children: (locale: Exclude<Locale[C], undefined>, localeCode?: string, fullLocale?: object) => React.ReactNode;
}
export default class LocaleReceiver<C extends LocaleComponentName = LocaleComponentName> extends React.Component<LocaleReceiverProps<C>> {
    static defaultProps: {
        componentName: string;
    };
    static contextType: React.Context<(Partial<Locale> & {
        exist?: boolean | undefined;
    }) | undefined>;
    getLocale(): Exclude<Locale[C], undefined>;
    getLocaleCode(): any;
    render(): React.ReactNode;
}
export declare function useLocaleReceiver<T extends LocaleComponentName>(componentName: T, defaultLocale?: Locale[T] | Function): [Locale[T]];
