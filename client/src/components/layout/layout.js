/* @flow */

import * as React from 'react';

import {Sidebar} from './sidebar';
import {MainContainer} from './main-container';

type Props = {
    children: React.Node,
};

export function Layout(props: Props): React.Node {
    return (
        <div className="flex full-width h-screen">
            <Sidebar />
            <MainContainer>{props.children}</MainContainer>
        </div>
    );
}
