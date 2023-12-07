/* @flow */

import * as React from 'react';
import classnames from 'classnames';

type Props = {
    variant: 'success' | 'secondary' | 'primary',
    disabled?: boolean,
    onClick: () => void,
    children: React.Node,
};

export function Button(props: Props): React.Node {
    const color = classnames({
        'bg-indigo-500': !props.variant || props.variant === 'primary',
        'hover:bg-indigo-700':
            (!props.variant || props.variant === 'primary') && !props.disabled,
        'bg-green-500': props.variant === 'success',
        'hover:bg-green-700': props.variant === 'success' && !props.disabled,
        'disabled:opacity-50 cursor-default': props.disabled,
        'bg-gray-200 text-gray-700': props.variant === 'secondary',
        'hover:bg-gray-300 text-gray-900':
            props.variant === 'secondary' && !props.disabled,
    });

    return (
        <button
            {...props}
            onClick={props.onClick}
            className={`h-8 rounded-lg px-4 font-normal text-white ${color}`}
        >
            {props.children}
        </button>
    );
}
