import * as React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from '../../styletron';

import 'tailwindcss/tailwind.css';

const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
    return (
        <QueryClientProvider client={queryClient}>
            <StyletronProvider value={styletron}>
                <BaseProvider theme={LightTheme}>
                    <Component {...pageProps} />
                </BaseProvider>
            </StyletronProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
