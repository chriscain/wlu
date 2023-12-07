/* @flow */

import * as React from 'react';
import classnames from 'classnames';

type Props = {
    text: string,
    isActive?: boolean,
    size: 'small' | 'large',
    onClick?: () => void,
    activeColor?: string,
    inactiveColor?: string,
};

export function Capsule(props: Props): React.Node {
    const activeColor: string = props.activeColor || 'bg-indigo-600';
    const inactiveColor: string = props.inactiveColor || 'bg-gray-300';

    const tagClasses = classnames(
        'px-2 py-1 cursor-pointer rounded-md text-xs text-white self-center whitespace-nowrap',
        // $FlowIgnore
        {
            [activeColor]: props.isActive,
            [inactiveColor]: !props.isActive,
            'px-2 py-1 text-xs': props.size === 'small',
            'px-4 py-1 text-sm': props.size === 'large',
            'cursor-pointer': props.onClick,
        }
    );

    return (
        <div onClick={props.onClick} className={tagClasses}>
            {props.text}
        </div>
    );
}
