/* @flow */

import * as React from 'react';

type Props = {
    value: ?string | ?number,
    onChange: (newVal: string) => void,
    placeholder?: string,
    className?: string,
    onBlur?: () => void,
};

export function TextField(props: Props): React.Node {
    return (
        <input
            className={`px-3 py-1.5 text-sm focus:placeholder-gray-500 placeholder-gray-400 border-gray-200 hover:border-gray-300 shadow-sm border rounded-md ${
                props.className || ''
            }`}
            spellCheck={false}
            onChange={(e) => props.onChange(e.target.value)}
            onBlur={props.onBlur}
            value={props.value || ''}
            placeholder={props.placeholder}
        />
    );
}
