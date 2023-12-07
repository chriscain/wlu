/* @flow */

import * as React from 'react';
import {RadioGroup} from '@headlessui/react';
import classnames from 'classnames';

type RadioOption = {
    value: string,
    label: string,
    description?: string,
};

type Props = {
    options: RadioOption[],
    label?: string,
    selected: ?string,
    onChange: (newValue: any) => void,
};

export function Radio(props: Props): React.Node {
    return (
        <RadioGroup
            className="flex"
            value={props.selected}
            onChange={props.onChange}
        >
            {/* This Label is for the root `RadioGroup`.  */}
            <RadioGroup.Label className="sr-only">
                {props.label}
            </RadioGroup.Label>

            <div className="bg-white rounded-md w-64 mr-2 flex">
                {props.options.map((opt) => (
                    <RadioGroup.Option
                        key={opt.value}
                        value={opt.value}
                        className={({checked}) => `
            		  ${checked ? 'bg-indigo-50 border-indigo-200' : 'border-gray-200'}
            		  relative border rounded-md p-4 flex cursor-pointer 
            		`}
                    >
                        {({checked}) => (
                            <div className="flex flex-col">
                                {/* This Label is for the `RadioGroup.Option`.  */}
                                <RadioGroup.Label
                                    as="span"
                                    className={`${
                                        checked
                                            ? 'text-indigo-900'
                                            : 'text-gray-900'
                                    }
            		                          block text-sm font-medium`}
                                >
                                    {opt.label}
                                </RadioGroup.Label>

                                {opt.description ? (
                                    <RadioGroup.Description
                                        as="span"
                                        className={`${
                                            checked
                                                ? 'text-indigo-700'
                                                : 'text-gray-500'
                                        }
            		                          block text-sm`}
                                    >
                                        IOF - ((IOF + IOU - 1) / 2)
                                    </RadioGroup.Description>
                                ) : undefined}
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
}
