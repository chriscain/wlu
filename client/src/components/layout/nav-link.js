/* @flow */

import Link from 'next/link';
import {useRouter} from 'next/router';
import classnames from 'classnames';
import * as React from 'react';

type Props = {
    href: string,
    icon: React.ComponentType<any>,
    text: string,
    disabled?: boolean,
};

export function NavLink(props: Props): React.Node {
    const router = useRouter();
    const activeLink = props.href === router.pathname;
    const Icon = props.icon;

    return (
        <Link href={props.href}>
            <div
                className={classnames(
                    'flex group px-4 w-48 py-3 my-2 hover:bg-indigo-400 rounded-md',
                    {
                        'bg-indigo-400': activeLink,
                    }
                )}
            >
                <Icon
                    className={classnames('w-8 text-white pr-2', {
                        'cursor-pointer group-hover:text-indigo-50': !props.disabled,
                        'text-white': activeLink,
                    })}
                />
                <span
                    className={classnames(
                        'text-white group-hover:text-indigo-50',
                        {
                            'text-indigo-50 font-medium': activeLink,
                        }
                    )}
                >
                    {props.text}
                </span>
            </div>
        </Link>
    );
}
