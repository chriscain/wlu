/* @flow */

import * as React from 'react';

import {Table, type Props as TableProps} from './table';

type ResizeProp = {
    isResizable?: boolean,
};

type Props<T> = $Diff<TableProps<T>, ResizeProp>;

/**
 * This component only exists so that we avoid using `Table`
 * with a `isResizable` prop that could change, which would
 * cause different hooks to be used, which causes an error.
 * Instead, we can use this component and be assured that the
 * `isResizable` prop doesn't change.
 */
export function ResizableTable<T>(props: Props<T>): React.Node {
    return <Table isResizable={true} {...props} />;
}
