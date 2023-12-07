/* @flow */

import * as React from 'react';
import Link from 'next/link';

export function Logo(): React.Node {
    return (
        <Link href="/">
            <div className="relative" style={{width: '100%', height: 80}}>
                <div
                    style={{
                        fontSize: 48,
                        color: '#8070d6',
                        zIndex: 0,
                        position: 'absolute',
                        top: 4,
                        left: 4,
                        fontStyle: 'italic',
                    }}
                >
                    WLU
                </div>
                <div
                    style={{
                        zIndex: 1,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        fontSize: 48,
                        color: 'white',
                        fontStyle: 'italic',
                    }}
                >
                    WLU
                </div>
            </div>
        </Link>
    );
}
