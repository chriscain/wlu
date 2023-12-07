/* @flow */

import * as React from 'react';

type Props = {
    children: React.Node,
};

export function ErrorMessage(props: Props): React.Node {
    return <div className="font-medium text-red-500">{props.children}</div>;
}
