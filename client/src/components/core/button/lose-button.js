/* @flow */

import * as React from 'react';
import {BanIcon} from '@heroicons/react/24/solid';
import classnames from 'classnames';

type Props = {
    onClick: () => void,
    disabled?: boolean,
};

export function LoseButton(props: Props): React.Node {
    return (
        <div className="group flex-shrink-0">
            <BanIcon
                disabled={props.disabled}
                onClick={(e) => {
                    e.stopPropagation();

                    props.onClick();
                }}
                className={classnames('w-5 h-5 text-red-400', {
                    'cursor-pointer group-hover:text-red-500': !props.disabled,
                })}
                aria-hidden="true"
            />
        </div>
    );
}
