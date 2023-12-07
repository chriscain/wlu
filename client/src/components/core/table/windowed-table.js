/* @flow */

import * as React from 'react';

import {Table, type Props as TableProps} from './table';

type WindowedProp = {
    windowed?: {
        height: number,
        itemSize: number,
        width?: number,
    },
};

type Props<T> = $Diff<TableProps<T>, WindowedProp>;

/**
 * This component only exists so that we avoid using `Table`
 * with a `isWindowed` prop that could change, which would
 * cause different hooks to be used, which causes an error.
 * Instead, we can use this component and be assured that the
 * `isWindowed` prop doesn't change.
 */
export function WindowedTable<T>(props: Props<T>): React.Node {
    return <Table windowed={props.windowed} {...props} />;
}
