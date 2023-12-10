/* @flow */

import * as React from 'react';

Section.defaultProps = {
    styles: '',
};

type Props = {
    children: React.Node,
    styles?: string,
};

export function Section(props: Props): React.Node {
    return (
        <div className={`mb-12 ${props.styles || ''}`}>{props.children}</div>
    );
}
