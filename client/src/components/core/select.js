/* @flow */

import * as React from 'react';
import ReactSelect from 'react-select';
import {
    getSportsbookBackgroundHex,
    getSportsbookColorHex,
} from '../../constants/sportsbooks.js';

type Props = {
    name: string,
    value: ?string | string[],
    placeholder: string,
    options: OptionItem[],
    onChange: (newVal: any) => void,
    isMulti?: boolean,
    isClearable?: boolean,
    placeholder?: string,
    id: string,
};

export type OptionItem = {
    id: string,
    value: string,
};

const customStyles = {
    option: (provided: any, state: Object) => {
        return {
            ...provided,
            padding: 8,
        };
    },
    control: (provided: any) => ({
        ...provided,
        minHeight: 26,
        borderColor: '#e5e7eb',
        boxShadow:
            'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#9ca3af',
        fontSize: 14,
    }),
    singleValue: (provided: any, state: Object) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided,
            opacity,
            fontSize: '0.875rem',
            borderRadius: 3,
            padding: '0 4px',
            fontWeight: 500,
            transition,
            ...getSingleValueStyles(state.data ? state.data.id : ''),
        };
    },
    multiValue: (provided: any, state: Object) => ({
        ...provided,
        ...getSingleValueStyles(state.data ? state.data.id : ''),
    }),
    multiValueLabel: (provided: any, state: Object) => ({
        ...provided,
        padding: '0 4px',
        fontSize: '0.875rem',
        borderRadius: 3,
        fontWeight: 500,
        ...getSingleValueStyles(state.data ? state.data.id : ''),
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none',
    }),
    clearIndicator: (provided: any) => ({
        ...provided,
        width: 24,
        padding: '4px 2px 4px 4px',
    }),
    dropdownIndicator: (provided: any, state: Object) => ({
        ...provided,
        padding: '4px 8px 4px 2px',
    }),
    input: (provided: any, state: Object) => ({
        ...provided,
        margin: 0,
    }),
    container: (provided: any, state: Object) => ({
        ...provided,
        border: '#e5e7eb',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    }),
};

function getSingleValueStyles(sportsbook: string) {
    return {
        backgroundColor: getSportsbookBackgroundHex(sportsbook),
        color: getSportsbookColorHex(sportsbook),
    };
}

export function Select(props: Props): React.Node {
    const selected = props.value
        ? props.options.find((option: OptionItem) => {
              return option.id === props.value;
          })
        : null;

    return (
        <ReactSelect
            id={props.id}
            instanceId={props.id}
            name={props.name}
            styles={customStyles}
            options={props.options}
            isMulti={props.isMulti}
            onChange={props.onChange}
            isClearable={props.isClearable}
            placeholder={props.placeholder}
            getOptionLabel={(option) => option.value}
            value={selected}
        />
    );
}
