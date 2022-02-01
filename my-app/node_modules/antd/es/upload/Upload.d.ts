import * as React from 'react';
import Dragger from './Dragger';
import { UploadProps } from './interface';
export { UploadProps };
declare const ForwardUpload: <T>(props: UploadProps<T> & {
    children?: React.ReactNode;
} & React.RefAttributes<any>) => React.ReactElement;
declare type InternalUploadType = typeof ForwardUpload;
interface UploadInterface extends InternalUploadType {
    defaultProps?: Partial<UploadProps>;
    displayName?: string;
    Dragger: typeof Dragger;
    LIST_IGNORE: string;
}
declare const Upload: UploadInterface;
export default Upload;
