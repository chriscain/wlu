/* @flow */

import * as React from 'react';

export type TableInstance = any;

export type HeaderGroup = {
    headers: Column[],
    getHeaderGroupProps: (props?: Object) => Object,
    getFooterGroupProps: (props?: Object) => Object,
};

export type Column = {
    id: string,
    isVisible: boolean,
    dataType: string,
    render: (
        | string
        | Function
        | React.ComponentType<{table: TableInstance, column: Column}> // These props might be wrong
    ) => React.Element<any>,
    totalLeft: number,
    totalWidth: number,
    getHeaderProps: (props?: Object) => Object,
    getFooterProps: (props?: Object) => Object,
    toggleHidden: (hidden?: boolean) => void,
    getToggleHiddenProps: (props?: Object) => Object,

    // Added by useSortBy hook:
    canSort?: boolean,
    toggleSortBy?: (descending?: boolean, isMulti?: boolean) => void,
    getSortByToggleProps?: (props?: Object) => Object,
    clearSortBy?: () => void,
    isSorted?: boolean,
    sortedIndex?: number,
    isSortedDesc?: boolean,

    // Added by useFilters
    canFilter?: boolean,

    // Added by useResizeColumns
    canResize?: boolean,
    getResizerProps?: (props?: Object) => Object,
    isResizing?: boolean,

    // Custom for EditInPlace
    isEditInPlace?: boolean,

    // Custom props can be added to a column in the definition provided to the table options

    ...
};

export type Row<T> = {|
    cells: Cell<T>[],
    allCells: Cell<T>[],
    values: {[columnId: string]: any},
    getRowProps: (props?: Object) => Object,
    index: number,
    original: T,
    subRows: Row<T>[],
    state: Object,

    // Added by useRowSelect
    isSelected?: boolean,
    isSomeSelected?: boolean,
    toggleRowSelected?: (isSelected?: boolean) => void,
    getToggleRowSelectedProps?: (
        props?: Object
    ) => {
        onChange: () => void,
        style: {cursor: 'pointer'},
        checked: boolean,
        indeterminate: boolean,
        title: string,
    },
|};

export type Cell<T> = {|
    column: Column,
    row: Row<T>,
    value: any,
    getCellProps: (props?: Object) => Object,
    render: (
        | string
        | Function
        | React.ComponentType<{table: TableInstance, column: Column}> // These props might be wrong
    ) => React.Element<any>,
|};
