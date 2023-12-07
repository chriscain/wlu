import * as React from 'react';

export function SectionLabel(props) {
    return (
        <div className="select-none mb-2 text-xs uppercase font-medium text-gray-400">
            {props.children}
        </div>
    );
}
