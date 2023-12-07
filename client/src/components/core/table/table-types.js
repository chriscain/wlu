/* @flow */

import * as React from 'react';

export type ColumnDataType =
    | 'string'
    | 'integer'
    | 'percentage'
    | 'timestamp'
    | 'component'
    | 'icon'
    | 'odds'
    | 'link';

export type GenericColumn<T> = {
    Header: string,
    accessor?: ((T) => any) | string,
    dataType: string,
    width?: number,
    minWidth?: number,
    maxWidth?: number,
};

type StringColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'string',
};

type IntColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'integer',
};

type PercentageColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'percentage',
};

type TimestampColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'timestamp',
};

type LinkColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'link',
};

type IconColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'icon',
};

type OddsColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'odds',
};

type ComponentColumn<T> = {
    ...GenericColumn<T>,
    dataType: 'component',
    Cell: (Object) => React.Element<any>,
};

export type Column<T> =
    | StringColumn<T>
    | IntColumn<T>
    | OddsColumn<T>
    | PercentageColumn<T>
    | TimestampColumn<T>
    | LinkColumn<T>
    | IconColumn<T>
    | ComponentColumn<T>;
