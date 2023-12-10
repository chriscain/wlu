/* @flow */

import * as React from 'react';
import Head from 'next/head';

import {Layout} from '../components/layout/layout';
import {Account} from '../components/account';

export default function AccountPage(): React.Node {
    // const {logout, user} = useAuth({middleware: 'auth'});

    return (
        <Layout
            header={{
                title: 'Account',
                subtitle: 'Manage your account settings',
            }}
        >
            <Head>
                <title>Settings</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Account />
        </Layout>
    );
}
