/* @flow */

import * as React from 'react';
import {BadgeCheckIcon} from '@heroicons/react/24/solid';
import classnames from 'classnames';

type Props = {
    onClick: () => void,
    disabled?: boolean,
};

export function SuccessButton(props: Props): React.Node {
    return (
        <div className="group flex-shrink-0">
            <BadgeCheckIcon
                disabled={props.disabled}
                onClick={(e) => {
                    e.stopPropagation();

                    props.onClick();
                }}
                className={classnames('w-5 h-5 text-green-400', {
                    'cursor-pointer group-hover:text-green-500': !props.disabled,
                })}
                aria-hidden="true"
            />
        </div>
    );
}
