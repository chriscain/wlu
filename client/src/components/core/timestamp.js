/* @flow */

import * as React from 'react';
import {format} from 'date-fns';

type Props = {
    date: Date,
};

export function Timestamp(props: Props): React.Element<any> {
    const date = new Date(props.date);

    return <div>{format(date, 'M/d')}</div>;
}
