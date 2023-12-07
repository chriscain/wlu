/* @flow */

import * as React from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import {useRouter} from 'next/router';
import {
    HomeIcon,
    BoltIcon,
    BeakerIcon,
    ChartBarIcon,
    CogIcon,
} from '@heroicons/react/24/outline';

import {MenuDropdown} from '../core';
import {NavLink} from './nav-link';

export function Header(): React.Node {
    const router = useRouter();
    useHotkeys(
        'cmd+o',
        (e) => {
            e.preventDefault();
            router.push('?betType=boost&id=new');
        },
        {
            enabled: !router.query.id,
        }
    );

    useHotkeys(
        'cmd+b',
        (e) => {
            e.preventDefault();
            router.push('?betType=standard&id=new');
        },
        {
            enabled: !router.query.id,
        }
    );

    return (
        <div className="w-full text-base font-normal text-gray-700 flex border-b shadow-sm pr-4">
            <div className="flex flex-grow">
                <NavLink href="/" text="Home" icon={HomeIcon} />
                <NavLink href="/boosts" text="Boosts" icon={BoltIcon} />
                <NavLink href="/bets" text="Bets" icon={BeakerIcon} />
                <NavLink href="/reports" text="Reports" icon={ChartBarIcon} />
            </div>
            <div className="flex items-center">
                <NavLink href="/admin" text="Admin" icon={CogIcon} />
                <MenuDropdown
                    buttonText="+ Add bet"
                    items={[
                        {
                            text: 'Boost',
                            icon: ChartBarIcon,
                            onClick: () => {
                                router.push('?betType=boost&id=new');
                            },
                        },
                        {
                            text: 'Standard bet',
                            icon: BeakerIcon,
                            onClick: () => {
                                router.push(`?betType=standard&id=new`);
                            },
                        },
                    ]}
                />
            </div>
        </div>
    );
}
