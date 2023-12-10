/* @flow */

import * as React from 'react';
// import axios from 'axios';

import {Container, SectionLabel, Section} from '../core';
import {YahooConnection} from './integration-card';
import {LeagueSelection} from './league-selection';

// import type {Boost} from '../../util/types';
// import {useGetCompletedBoosts, useDeleteBoost} from '../../api-hooks/boosts';
// import {useGetTags} from '../../api-hooks/tags';
// import {sortByEventTime, filterBoosts, deparam} from '../../util';
// import {BoostPreview} from '../shared/boost-preview';
// import {ResultsBar} from './results-bar';
// import {ResultsGraph} from './results-graph';
// import {BoostTable} from '../boosts/boost-table';
// import {FilterBar, sortBoosts} from '../filter-bar';

export function Account(): React.Node {
    // const [urlString, setUrlString] = React.useState<string>('');
    // const urlParams = deparam(urlString);

    // const {
    //     boosts: completedBoosts,
    //     isLoading,
    //     errorMessage,
    // } = useGetCompletedBoosts();

    // const {
    //     tags,
    //     isLoading: tagsIsLoading,
    //     errorMessage: tagsErrorMessage,
    // } = useGetTags();

    // const {
    //     deleteBoost,
    //     isLoading: isDeletingBoost,
    //     errorMessage: deleteError,
    // } = useDeleteBoost();

    // const [filterBySportsbooks, setFilterBySportsbooks] = React.useState<
    //     string[]
    // >([]);

    // const [evThreshold, setEVThreshold] = React.useState<?string>(null);

    // const [orderByEV, setOrderByEV] = React.useState(false);

    // const filteredBoosts = sortBoosts(
    //     filterBoosts(completedBoosts, urlParams.filter),
    //     orderByEV,
    //     'DESC'

    return (
        <div className="p-4">
            <Container>
                <Section>
                    <SectionLabel>Yahoo connection</SectionLabel>
                    <YahooConnection />
                </Section>
                <Section>
                    <SectionLabel>Your leagues</SectionLabel>
                    <LeagueSelection />
                </Section>
            </Container>
        </div>
    );
}
