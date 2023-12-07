/* @flow */

import * as React from 'react';

import {DatePicker} from 'baseui/datepicker';

type Props = {
    value: ?Date,
    minDate?: Date,
    onChange: (newDate: ?Date) => void,
    creatable: boolean,
    nullable: boolean,
    placeholder: string,
};

export function Datepicker(props: Props): React.Node {
    return (
        <div className="w-full bg-white">
            <DatePicker
                value={props.value}
                onChange={(dateTime) =>
                    props.onChange(dateTime ? dateTime.date : null)
                }
                minDate={props.minDate}
                creatable={props.creatable}
                nullable={props.nullable}
                placeholder={props.placeholder}
                formatString="M/dd"
                step={900}
                overrides={{
                    InputWrapper: {
                        style: ({$theme}) => ({
                            backgroundColor: 'white',
                            borderWidth: 0,
                        }),
                    },
                    Input: {
                        props: {
                            overrides: {
                                Root: {
                                    style: ({$theme}) => ({
                                        borderTopWidth: 0,
                                        borderBottomWidth: 0,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        backgroundColor: 'white',
                                    }),
                                    props: {
                                        className:
                                            'shadow-sm border rounded-md text-sm',
                                    },
                                },
                                InputContainer: {
                                    style: ({$theme}) => ({
                                        backgroundColor: 'white',
                                        paddingLeft: '0.75rem',
                                        paddingRight: '0.75rem',
                                        paddingTop: '0.375rem',
                                        paddingBottom: '0.375rem',
                                        lineHeight: '1.25rem',
                                    }),
                                },
                                Input: {
                                    style: ({$theme}) => ({
                                        fontSize: '0.875rem',
                                        lineHeight: '1.25rem',
                                        paddingLeft: 0,
                                        height: '20px',
                                        color: '#000',
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
