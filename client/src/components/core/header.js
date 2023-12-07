/* @flow */

import * as React from 'react';

type Props = {
    children: React.Node,
};

export function Header(props: Props): React.Node {
    return (
        <div className="select-none mb-4 text-lg text-gray-700">
            {props.children}
        </div>
    );
}
