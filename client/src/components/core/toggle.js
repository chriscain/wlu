/* @flow */

import * as React from 'react';
import {Switch} from '@headlessui/react';

type Props = {
    label: string,
    isEnabled: boolean,
    onChange: (isEnabled: boolean) => void,
};

export function Toggle(props: Props): React.Node {
    return (
        <Switch.Group>
            <div className="flex flex-col md:flex-row md:items-center">
                <Switch.Label className="mb-1 md:mb-0 md:mr-4 text-gray-700">
                    {props.label}
                </Switch.Label>
                <Switch
                    checked={props.isEnabled}
                    onChange={props.onChange}
                    className={`${
                        props.isEnabled ? 'bg-indigo-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                    <span
                        className={`${
                            props.isEnabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                </Switch>
            </div>
        </Switch.Group>
    );
}
