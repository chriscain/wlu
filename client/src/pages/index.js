/* @flow */

import * as React from 'react';
import Head from 'next/head';
// import {useAuth} from '@/hooks/auth';

import {Layout} from '../components/layout/layout';

type Props = {
    children: React.Node,
};

export default function Home(props: Props): React.Node {
    // const {logout, user} = useAuth({middleware: 'auth'});

    return (
        <Layout>
            <Head>
                <title>Weekly League Update</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div>Home</div>
        </Layout>
    );
}
