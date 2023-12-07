/* @flow */

import * as React from 'react';

type Props = {
    children: React.Node,
};

export function MainContainer(props: Props): React.Node {
    return (
        <div className="flex flex-col w-full h-full text-base bg-gray-50 overflow-auto">
            {props.children}
        </div>
    );
}
