/* @flow */

import * as React from 'react';

import {TimePicker} from 'baseui/timepicker';
import {FormControl} from 'baseui/form-control';

type Props = {
    value: ?Date,
    onChange: (newDate: ?Date) => void,
    creatable: boolean,
    nullable: boolean,
    placeholder: string,
};

export function Timepicker(props: Props): React.Node {
    return (
        <div className="w-full">
            <TimePicker
                value={props.value}
                onChange={props.onChange}
                creatable={props.creatable}
                nullable={props.nullable}
                placeholder={props.placeholder}
                step={900}
                overrides={{
                    // $FlowFixMe
                    Select: {
                        props: {
                            overrides: {
                                ControlContainer: {
                                    style: () => ({
                                        backgroundColor: 'white',
                                    }),
                                    props: {
                                        className:
                                            'shadow-sm border rounded-md text-sm',
                                    },
                                },
                                Input: {
                                    style: () => ({
                                        fontSize: '0.875rem',
                                        lineHeight: '1.25rem',
                                        height: '20px',
                                        color: '#000',
                                    }),
                                },
                                InputContainer: {
                                    style: () => ({
                                        fontSize: '0.875rem',
                                        lineHeight: '1.25rem',
                                        height: '20px',
                                        color: '#000',
                                    }),
                                },
                                SingleValue: {
                                    style: () => ({
                                        fontSize: '0.875rem',
                                        lineHeight: '1.25rem',
                                        height: '20px',
                                        color: '#000',
                                    }),
                                },
                                ValueContainer: {
                                    style: () => ({
                                        paddingLeft: '0.75rem',
                                        paddingRight: '0.75rem',
                                        paddingTop: '0.375rem',
                                        paddingBottom: '0.375rem',
                                        lineHeight: '1.25rem',
                                    }),
                                },
                                Placeholder: {
                                    style: () => ({
                                        color: '#9ca3af',
                                    }),
                                },
                            },
                        },
                    },
                }}
            />
        </div>
    );
}
