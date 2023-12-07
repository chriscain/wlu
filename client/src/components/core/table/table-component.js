/* @flow */

import * as React from 'react';
import {FixedSizeList} from 'react-window';
import type {HeaderGroup, Row} from './types';
import {TableHeaderRow} from './table-header-row';
import {TableRow} from './table-row';

export type TableVariationProps<T> = {|
    hasBorders?: boolean,
    hasHeaderBorder?: boolean,
    isCompact?: boolean,
    /** Use ResizableTable instead if you want resizable columns */
    isResizable?: boolean,
    /** Use WindowedTable instead if you want virtualized rows */
    windowed?: {
        width?: number,
        height: number,
        itemSize: number,
    },
    isCheckboxSelectable?: boolean,
    hasCellBorders?: boolean,
    hasHeaderCellBorders?: boolean,
    stickyHeaders?: boolean,
    disableFilters?: boolean,
    disableSorting?: boolean,
    clickingSelectsRow?: boolean,
    hasHoverState?: boolean,
    renderRowActionMenu?: (row: Row<T>) => React.Node,

    // Variation contingencies
    shouldPreventSelectAll?: boolean,
|};

type Props<T> = {
    ...TableVariationProps<T>,
    // From react-table instance
    getTableProps: Function,
    getTableBodyProps: Function,
    prepareRow: Function,
    headerGroups: HeaderGroup[],
    rows: Row<T>[],
    totalColumnsWidth: number,
    getToggleAllRowsSelectedProps?: Function,
};

export function TableComponent<T>(props: Props<T>): React.Node {
    const {
        getTableProps,
        getTableBodyProps,
        getToggleAllRowsSelectedProps,
        headerGroups,
        rows,
        prepareRow,
        isResizable,
        totalColumnsWidth,
    } = props;

    const renderFixedRow = React.useCallback(
        ({index, style}: {index: number, style: Object}) => {
            const row = rows[index];
            prepareRow(row);
            return (
                <TableRow
                    key={index}
                    row={row}
                    isCompact={Boolean(props.isCompact)}
                    isResizable={Boolean(isResizable)}
                    isHoverable={Boolean(props.hasHoverState)}
                    isSelectable={Boolean(props.clickingSelectsRow)}
                    hasCellBorders={Boolean(props.hasCellBorders)}
                    hasRowBorders={Boolean(props.hasBorders)}
                    showCheckbox={Boolean(props.isCheckboxSelectable)}
                />
            );
        },
        [prepareRow, rows]
    );

    const TableElement = isResizable ? 'div' : 'table';
    const THead = isResizable ? React.Fragment : 'thead';
    const TBody = isResizable ? 'div' : 'tbody';

    return (
        <TableElement className="bg-white text-sm" {...getTableProps()}>
            <THead>
                {headerGroups.map((headerGroup, index) => (
                    <TableHeaderRow
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={index}
                        headerGroup={headerGroup}
                        isResizable={Boolean(isResizable)}
                        isCompact={Boolean(props.isCompact)}
                        isSticky={Boolean(props.stickyHeaders)}
                        getToggleAllRowsSelectedProps={
                            getToggleAllRowsSelectedProps
                        }
                        isCheckboxSelectable={Boolean(
                            props.isCheckboxSelectable
                        )}
                        shouldPreventSelectAll={Boolean(
                            props.shouldPreventSelectAll
                        )}
                        hasCellBorders={Boolean(props.hasHeaderCellBorders)}
                        hasBottomBorder={Boolean(props.hasHeaderBorder)}
                    />
                ))}
            </THead>
            <TBody {...getTableBodyProps()}>
                {props.windowed ? (
                    <FixedSizeList
                        height={props.windowed.height}
                        itemCount={rows.length}
                        itemSize={props.windowed.itemSize}
                        width={props.windowed.width || totalColumnsWidth}
                    >
                        {renderFixedRow}
                    </FixedSizeList>
                ) : (
                    rows.map((row) => {
                        prepareRow(row);

                        return (
                            <TableRow
                                key={row.index}
                                row={row}
                                isCompact={Boolean(props.isCompact)}
                                isResizable={Boolean(isResizable)}
                                isHoverable={Boolean(props.hasHoverState)}
                                isSelectable={Boolean(props.clickingSelectsRow)}
                                hasCellBorders={Boolean(props.hasCellBorders)}
                                hasRowBorders={Boolean(props.hasBorders)}
                                showCheckbox={Boolean(
                                    props.isCheckboxSelectable
                                )}
                            />
                        );
                    })
                )}
            </TBody>
        </TableElement>
    );
}
