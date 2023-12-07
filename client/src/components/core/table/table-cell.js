/* @flow */
/* eslint-disable react/jsx-pascal-case */

import * as React from 'react';
import classnames from 'classnames';
import type {Cell} from './types';
import {TableRowCheckbox} from './table-row-checkbox';

type Props<T> = {|
    cell: Cell<T>,
    isResizable: boolean,
    isCompact: boolean,
    hasCellBorders: boolean,
    showCheckbox: boolean,
|};

export function TableCell<T>(props: Props<T>): React.Node {
    const {cell, isResizable, hasCellBorders, isCompact, showCheckbox} = props;
    const TD = isResizable ? 'div' : 'td';

    const classNames = classnames('flex items-center px-4 py-1.5', {
        'border-r': hasCellBorders,
        'px-2 py-1': isCompact,
        // $FlowIgnore
        'justify-end':
            cell.column.dataType === 'integer' ||
            cell.column.dataType === 'odds',
    });

    return (
        <TD className={classNames} {...cell.getCellProps()}>
            {showCheckbox && cell.row.getToggleRowSelectedProps ? (
                <TableRowCheckbox
                    getToggleRowSelectedProps={
                        cell.row.getToggleRowSelectedProps
                    }
                />
            ) : null}
            {cell.render('Cell')}
        </TD>
    );
}
