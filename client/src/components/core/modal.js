/* @flow */

import * as React from 'react';
import {Modal as BaseModal} from 'baseui/modal';

type Props = {
    isOpen: boolean,
    onClose: () => void,
    children: React.Node,
};

export function Modal(props: Props): React.Node {
    return (
        <BaseModal
            onClose={props.onClose}
            isOpen={props.isOpen}
            animate
            autoFocus
            unstable_ModalBackdropScroll={true}
            overrides={{
                Dialog: {
                    props: {
                        className:
                            'w-full max-w-min p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl',
                    },
                },
                Close: {
                    style: ({$theme}) => ({
                        display: 'none',
                    }),
                },
            }}
        >
            {props.children}
        </BaseModal>
    );
}
