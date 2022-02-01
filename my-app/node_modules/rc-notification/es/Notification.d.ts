import * as React from 'react';
import { Component } from 'react';
import type { ReactText } from 'react';
import type { NoticeProps } from './Notice';
export interface NoticeContent extends Omit<NoticeProps, 'prefixCls' | 'children' | 'noticeKey' | 'onClose'> {
    prefixCls?: string;
    key?: React.Key;
    updateMark?: string;
    content?: React.ReactNode;
    onClose?: () => void;
}
export declare type NoticeFunc = (noticeProps: NoticeContent) => void;
export declare type HolderReadyCallback = (div: HTMLDivElement, noticeProps: NoticeProps & {
    key: React.Key;
}) => void;
export interface NotificationInstance {
    notice: NoticeFunc;
    removeNotice: (key: React.Key) => void;
    destroy: () => void;
    component: Notification;
    useNotification: () => [NoticeFunc, React.ReactElement];
}
export interface NotificationProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    transitionName?: string;
    animation?: string | object;
    maxCount?: number;
    closeIcon?: React.ReactNode;
}
interface NotificationState {
    notices: {
        notice: NoticeContent & {
            userPassKey?: React.Key;
        };
        holderCallback?: HolderReadyCallback;
    }[];
}
declare class Notification extends Component<NotificationProps, NotificationState> {
    static newInstance: (properties: NotificationProps & {
        getContainer?: () => HTMLElement;
    }, callback: (instance: NotificationInstance) => void) => void;
    static defaultProps: {
        prefixCls: string;
        animation: string;
        style: {
            top: number;
            left: string;
        };
    };
    state: NotificationState;
    /**
     * @private Internal props do not call it directly.
     * We do not make this as private is caused TS will trade private as
     * different prop that between es and lib
     */
    hookRefs: Map<React.Key, HTMLDivElement>;
    getTransitionName(): string;
    add: (originNotice: NoticeContent, holderCallback?: HolderReadyCallback) => void;
    remove: (removeKey: React.Key) => void;
    noticePropsMap: Record<React.Key, {
        props: NoticeProps & {
            key: ReactText;
        };
        holderCallback?: HolderReadyCallback;
    }>;
    render(): JSX.Element;
}
export default Notification;
