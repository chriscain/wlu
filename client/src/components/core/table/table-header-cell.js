/* @flow */
/* eslint-disable react/jsx-pascal-case */

import * as React from 'react';
import classnames from 'classnames';
import type {Column} from './types';

type Props = {|
    column: Column,
    isResizable: boolean,
    isCompact: boolean,
    hasCellBorders: boolean,
    children: React.Node,
|};

export function TableHeaderCell(props: Props): React.Node {
    const {column, isResizable, isCompact, hasCellBorders, children} = props;
    const {
        canSort,
        getHeaderProps,
        getSortByToggleProps,
        toggleSortBy,
    } = column;

    const TH = isResizable ? 'div' : 'th';

    const handleKeyPress = React.useCallback(
        (event: SyntheticKeyboardEvent<any>) => {
            if (
                toggleSortBy &&
                canSort !== false &&
                (event.key === 'Enter' || event.key === ' ')
            ) {
                event.preventDefault();
                toggleSortBy();
            }
        },
        [canSort, toggleSortBy]
    );

    const classNames = classnames(
        'relative whitespace-nowrap color-gray-700 font-medium flex items-center px-4 py-2',
        {
            'border-r': hasCellBorders,
            'px-2 py-1': isCompact,
            'justify-end':
                column.dataType === 'integer' || column.dataType === 'odds',
            'pointer hover:bg-gray-100': canSort,
        }
    );

    return (
        <TH
            tabIndex={canSort ? 0 : undefined}
            className={classNames}
            // This includes some sane styling so it should go below our custom style prop
            {...getHeaderProps(
                getSortByToggleProps ? getSortByToggleProps() : undefined
            )}
            // This isn't built in, so we need to add it ourselves
            onKeyPress={toggleSortBy ? handleKeyPress : undefined}
        >
            {children}
        </TH>
    );
}
