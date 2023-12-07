/* @flow */

import * as React from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/solid';

type Props = {
    buttonText: string,
    items: {
        icon: React.ComponentType<any>,
        text: string,
        onClick: () => void,
    }[],
};

export function MenuDropdown(props: Props): React.Node {
    return (
        <Menu as="div" className="relative inline-block text-left z-10">
            {({open}) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {props.buttonText}
                            <ChevronDownIcon
                                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        show={open}
                        as={React.Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                {props.items.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <Menu.Item key={index}>
                                            {({active}) => (
                                                <button
                                                    onClick={item.onClick}
                                                    className={`${
                                                        active
                                                            ? 'bg-indigo-500 text-white'
                                                            : 'text-gray-900'
                                                    } group flex rounded-md items-center w-full px-4 py-3 text-md`}
                                                >
                                                    {active ? (
                                                        <Icon
                                                            className="w-5 h-5 mr-2"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <Icon
                                                            className="w-5 h-5 mr-2"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    {item.text}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    );
                                })}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
