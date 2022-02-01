import { SkeletonElementProps } from './Element';
export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'size'> {
    size?: 'large' | 'small' | 'default';
    block?: boolean;
}
declare const SkeletonButton: {
    (props: SkeletonButtonProps): JSX.Element;
    defaultProps: {
        size: string;
    };
};
export default SkeletonButton;
