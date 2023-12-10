/* @flow */

import * as React from 'react';
import Image from 'next/image';
import {useGetYahooConnection} from '../../hooks/yahoo';
import {TextButton} from '../core/button';

export function YahooConnection(): React.Node {
    const {connection, isLoading, errorMessage} = useGetYahooConnection();
    console.log(connection, isLoading, errorMessage);

    const [isConnected, setIsConnected] = React.useState<boolean>(false);

    return (
        <div className="rounded-md border-2 px-8 py-4 justify-between border-slate-100 flex items-center">
            <div className="flex">
                <div className="mr-4 flex flex-start">
                    <Image
                        src="/yahoo.svg"
                        width={30}
                        height={30}
                        alt="Yahoo logo"
                    />
                </div>
                <div className="flex flex-col mr-16">
                    <h3 className="font-bold">Yahoo Fantasy Sports</h3>
                    {isConnected ? (
                        <span>Connected</span>
                    ) : (
                        <span>Not Connected</span>
                    )}
                    {isConnected ? (
                        <div>
                            chrishcain@yahoo.com • Last sync 23 minutes ago
                        </div>
                    ) : null}
                </div>
            </div>
            {isConnected ? (
                <TextButton
                    variant="destructive"
                    onClick={() => setIsConnected(!isConnected)}
                >
                    Disconnect
                </TextButton>
            ) : (
                <TextButton
                    variant="primary"
                    onClick={() => setIsConnected(!isConnected)}
                >
                    Connect
                </TextButton>
            )}
        </div>
    );
}
