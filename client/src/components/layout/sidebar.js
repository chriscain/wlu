/* @flow */

import * as React from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import {useRouter} from 'next/router';
import {
    HomeIcon,
    BoltIcon,
    InboxArrowDownIcon,
    ChartBarIcon,
    TrophyIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';

import {NavLink} from './nav-link';
import {Logo} from './logo';

export function Sidebar(): React.Node {
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
        <div className="h-screen bg-indigo-500 text-base font-normal text-gray-700 flex flex-col border-b shadow-sm pt-16 px-4">
            <Logo />
            <NavLink href="/" text="Dashboard" icon={HomeIcon} />
            <NavLink href="/boosts" text="Insights" icon={BoltIcon} />
            <NavLink href="/bets" text="Update" icon={InboxArrowDownIcon} />
            <NavLink href="/reports" text="Reports" icon={ChartBarIcon} />
            <NavLink href="/history" text="History" icon={TrophyIcon} />
            <NavLink href="/admin" text="Account" icon={UserCircleIcon} />
        </div>
    );
}
