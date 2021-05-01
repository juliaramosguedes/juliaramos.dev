import React, { RefObject } from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { Header, Modal as ModalStyle, ModalBackdrop } from '../styles/components/Modal';
import theme from '../styles/theme';
import { Separator } from '../styles/components/Shared';

interface ModalProps {
    modalRef: RefObject<HTMLElement>;
    close: Function;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ modalRef, title, close, children }) => {
    return (
        <ModalBackdrop onClick={close}>
            <ModalStyle ref={modalRef}>
                <Header>
                    <h3>{title}</h3>
                    <button onClick={close}>
                        <CloseOutline size="40px" color={theme.colors.text} />
                    </button>
                </Header>
                <Separator transparent height="32px"/>
                {children}
            </ModalStyle>
        </ModalBackdrop>
    );
};

export default Modal;
