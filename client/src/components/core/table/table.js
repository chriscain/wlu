/* @flow */

import * as React from 'react';
import {
    useTable,
    useSortBy,
    useFilters,
    useRowSelect,
    useResizeColumns,
    useFlexLayout,
    useBlockLayout,
} from '@tanstack/react-table';
import {TableComponent, type TableVariationProps} from './table-component';
import type {Column} from './table-types';
import {getDefault} from './defaults';

export type Props<T> = {
    ...TableVariationProps<T>,
    columns: Column<T>[],
    data: Object[],
    customCellFunctions?: {
        [string]: Function, // These are custom functions that we'll pass to the cell
    },
};

export function Table<T>(props: Props<T>): React.Node {
    const {isResizable, windowed} = props;
    const customOptions = props.customCellFunctions || {};

    const columnData = React.useMemo(
        () =>
            props.columns.map((column) => ({
                ...getDefault(column.dataType),
                ...column,
            })),
        [props.columns]
    );

    const resizableDefaultColumn = React.useMemo(
        () => ({
            minWidth: 70,
            width: 150,
            maxWidth: 400,
        }),
        []
    );
    const plugins = [useFilters, useSortBy, useRowSelect];

    // $FlowIgnore
    const options = {
        columns: columnData,
        data: props.data,
        disableFilters: props.disableFilters,
        disableSortBy: props.disableSorting,
        defaultColumn: undefined,
        ...customOptions,
    };

    if (isResizable) {
        plugins.push(useFlexLayout, useResizeColumns);
        options.defaultColumn = resizableDefaultColumn;
    }

    if (windowed && !isResizable) {
        plugins.push(useBlockLayout);
    }

    const instanceProps = useTable(options, ...plugins);

    return <TableComponent {...instanceProps} {...props} />;
}
