/* @flow */

import * as React from 'react';
import classnames from 'classnames';

type Props = {
    variant?: 'primary' | 'success' | 'destructive',
    onClick: () => void,
    disabled?: boolean,
    children: React.Node,
};

export function TextButton(props: Props): React.Node {
    const color = classnames({
        'text-indigo-500': !props.variant || props.variant === 'primary',
        'hover:text-indigo-800':
            (!props.variant || props.variant === 'primary') && !props.disabled,
        'text-green-500': props.variant === 'success',
        'text-rose-500': props.variant === 'destructive',
        'hover:text-green-800': props.variant === 'success' && !props.disabled,
        'hover:text-rose-800':
            props.variant === 'destructive' && !props.disabled,
        'disabled:opacity-50 cursor-default': props.disabled,
    });

    return (
        <button
            {...props}
            onClick={props.onClick}
            className={`h-8 font-normal px-2 text-sm ${color}`}
        >
            {props.children}
        </button>
    );
}
