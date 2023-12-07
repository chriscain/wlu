/* @flow */
/* eslint-disable react/jsx-pascal-case */

import * as React from 'react';
import classnames from 'classnames';
import {
    ChevronDownIcon,
    ChevronUpIcon,
    FilterIcon,
} from '@heroicons/react/24/solid';
import type {HeaderGroup} from './types';
import {TableHeaderCell} from './table-header-cell';
import {TableRowCheckbox} from './table-row-checkbox';

type Props = {|
    isResizable: boolean,
    isCompact: boolean,
    isSticky: boolean,
    getToggleAllRowsSelectedProps: Function,
    headerGroup: HeaderGroup,
    shouldPreventSelectAll: boolean,
    isCheckboxSelectable: boolean,
    hasCellBorders: boolean,
    hasBottomBorder: boolean,
|};

export function TableHeaderRow(props: Props): React.Node {
    const {isResizable, isCompact, headerGroup} = props;

    const classNames = classnames({
        'border-b': props.hasBottomBorder,
        'sticky top-0 bg-white z-1 pt-4': props.isSticky,
    });

    const TR = isResizable ? 'div' : 'tr';
    const TH = isResizable ? 'div' : 'th';

    return (
        <TR {...headerGroup.getHeaderGroupProps()} className={classNames}>
            {headerGroup.headers.map((column, index) => {
                return (
                    <TableHeaderCell
                        column={column}
                        isResizable={isResizable}
                        isCompact={isCompact}
                        key={column.id}
                        hasCellBorders={props.hasCellBorders}
                    >
                        {index === 0 && props.isCheckboxSelectable ? (
                            <TableRowCheckbox
                                getToggleRowSelectedProps={
                                    props.getToggleAllRowsSelectedProps
                                }
                                disabled={props.shouldPreventSelectAll}
                            />
                        ) : null}
                        {column.dataType === 'integer' ||
                        column.dataType === 'odds' ? (
                            <span
                                style={{width: 24, height: 20, marginTop: -4}}
                                className="flex-shrink-0 text-indigo-500 hover:text-indigo-700"
                            >
                                {getSortIcon(column)}
                            </span>
                        ) : undefined}
                        {column.render('Header')}
                        {column.canFilter ? (
                            <span className="text-gray-500">
                                <FilterIcon />
                            </span>
                        ) : null}
                        {column.dataType !== 'integer' &&
                        column.dataType !== 'odds' ? (
                            <span
                                style={{width: 24, height: 20, marginTop: -4}}
                                className="flex-shrink-0 text-indigo-500 hover:text-indigo-700"
                            >
                                {getSortIcon(column)}
                            </span>
                        ) : undefined}
                        {column.canResize && column.getResizerProps ? (
                            // Add resize handle
                            <div
                                {...column.getResizerProps()}
                                className={`w-1 inline-block h-full hover:bg-blue-700 focus:bg-blue-700 translate-x-1/2 z-1 absolute top-0 right-0 ${
                                    column.isResizing ? 'bg-blue-200' : ''
                                }`}
                            />
                        ) : null}
                    </TableHeaderCell>
                );
            })}
        </TR>
    );
}

function getSortIcon(column: Object) {
    if (column.canSort && column.isSorted) {
        return column.isSortedDesc ? <ChevronDownIcon /> : <ChevronUpIcon />;
    }

    return column.canSort ? '' : '';
}
