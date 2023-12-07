/* @flow */

import * as React from 'react';

type Props = {
    collection: Object[],
    isLoading: boolean,
    loadingText: string,
    emptyText: string,
    errorMessage: ?string,
    renderRow: (item: Object) => React.Node,
};

export function ListView(props: Props): React.Node {
    return (
        <ul>
            {props.collection.length === 0 &&
            !props.isLoading &&
            !props.errorMessage ? (
                <li className="text-gray-400 italic">{props.emptyText}</li>
            ) : undefined}
            {props.collection.length === 0 && props.isLoading ? (
                <li className="text-gray-400 italic">{props.loadingText}</li>
            ) : undefined}
            {props.collection.length === 0 && props.errorMessage ? (
                <li className="text-gray-400 italic">{props.errorMessage}</li>
            ) : undefined}
            {props.collection.map((item) => {
                return props.renderRow(item);
            })}
        </ul>
    );
}
