/* @flow */

import * as React from 'react';
import {ArchiveIcon} from '@heroicons/react/24/solid';
import classnames from 'classnames';

type Props = {
    onClick: () => void,
    disabled?: boolean,
};

export function ArchiveButton(props: Props): React.Node {
    return (
        <div className="group flex-shrink-0">
            <ArchiveIcon
                disabled={props.disabled}
                onClick={(e) => {
                    e.stopPropagation();

                    props.onClick();
                }}
                className={classnames('w-5 h-5 text-gray-400', {
                    'cursor-pointer group-hover:text-gray-500': !props.disabled,
                })}
                aria-hidden="true"
            />
        </div>
    );
}
