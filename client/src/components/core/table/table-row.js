/* @flow */
/* eslint-disable react/jsx-pascal-case */

import * as React from 'react';
import classnames from 'classnames';
import type {Row} from './types';
import {TableCell} from './table-cell';

type Props<T> = {|
    row: Row<T>,
    isResizable: boolean,
    isCompact: boolean,
    isHoverable: boolean,
    isSelectable: boolean,
    hasCellBorders: boolean,
    hasRowBorders: boolean,
    showCheckbox: boolean,
|};

export function TableRow<T>(props: Props<T>): React.Node {
    const {
        row,
        isResizable,
        isSelectable,
        showCheckbox,
        hasCellBorders,
        isCompact,
    } = props;
    const {toggleRowSelected} = row;

    const TR = isResizable ? 'div' : 'tr';
    const TD = isResizable ? 'div' : 'td';

    const classNames = classnames('bg-white items-stretch', {
        'pointer bg-indigo-200': props.isHoverable,
        'border-b': props.hasRowBorders,
    });

    return (
        <TR
            {...row.getRowProps()}
            className={classNames}
            onClick={
                isSelectable && toggleRowSelected
                    ? () => toggleRowSelected()
                    : undefined
            }
        >
            {row.cells.map((cell, index) => {
                return (
                    <TableCell
                        key={`${cell.column.id}-${cell.row.index}`}
                        cell={cell}
                        hasCellBorders={hasCellBorders}
                        isResizable={isResizable}
                        isCompact={isCompact}
                        showCheckbox={index === 0 && showCheckbox}
                    />
                );
            })}
        </TR>
    );
}
