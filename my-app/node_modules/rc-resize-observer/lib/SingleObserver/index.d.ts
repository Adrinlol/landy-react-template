import * as React from 'react';
import type { ResizeObserverProps } from '..';
export interface SingleObserverProps extends ResizeObserverProps {
    children: React.ReactElement | ((ref: React.RefObject<Element>) => React.ReactElement);
}
export default function SingleObserver(props: SingleObserverProps): JSX.Element;
