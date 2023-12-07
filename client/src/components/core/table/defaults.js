/* @flow */

import React from 'react';
import {Timestamp} from '../timestamp';

import type {ColumnDataType} from './table-types';

const DEFAULTS: {[ColumnDataType]: Object} = {
    string: {},
    icon: {width: 30, minWidth: 30, maxWidth: 30},
    integer: {width: 50, minWidth: 50, maxWidth: 100},
    timestamp: {
        width: 75,
        minWidth: 75,
        maxWidth: 75,
        Cell: ({cell}: Object) => {
            const {value} = cell;

            return <Timestamp date={value} />;
        },
    },
    component: {},
};

export function getDefault(columnType: ColumnDataType): Object {
    return DEFAULTS[columnType] || {};
}
