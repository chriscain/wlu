/* @flow */

import * as React from 'react';
import {useAuth} from '@/hooks/auth';

import {Sidebar} from './sidebar';

type Props = {
    children: React.Node,
    header: {
        title: string,
        subtitle: string,
    },
};

export function Layout(props: Props): React.Node {
    const {user} = useAuth({middleware: 'auth'});

    return (
        <div className="flex full-width h-screen min-h-screen">
            <Sidebar />
            <div className="flex flex-col w-full h-full text-base bg-gray-50 overflow-auto">
                <header className="bg-white p-16">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {props.header.title}
                    </h2>
                    <span>{props.header.subtitle}</span>
                </header>
                <main className="p-8">{props.children}</main>
            </div>
        </div>
    );
}
