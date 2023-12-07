/* @flow */

import * as React from 'react';

Container.defaultProps = {
    styles: '',
};

type Props = {
    children: React.Node,
    styles?: string,
};

export function Container(props: Props): React.Node {
    return (
        <div
            className={`md:overflow-y-auto bg-white rounded-xl shadow-lg md:px-8 px-4 py-8 md:h-full flex flex-col ${
                props.styles || ''
            }`}
        >
            {props.children}
        </div>
    );
}
