import OriginModal from './Modal';
import { ModalStaticFunctions, modalGlobalConfig } from './confirm';
import useModal from './useModal';
export { ModalProps, ModalFuncProps } from './Modal';
declare type ModalType = typeof OriginModal & ModalStaticFunctions & {
    useModal: typeof useModal;
    destroyAll: () => void;
    config: typeof modalGlobalConfig;
};
declare const Modal: ModalType;
export default Modal;
