/* @flow */

export const DRAFTKINGS = 'draftkings';
export const FANDUEL = 'fanduel';

export const getSportsbookName = (sportsbook: string): string => {
    return (
        {
            [DRAFTKINGS]: 'DraftKings',
            [FANDUEL]: 'FanDuel',
            mgm: 'MGM',
            williamhill: 'Caesars',
            barstool: 'Barstool',
            other: 'Other',
            pointsbet: 'PointsBet',
            betrivers: 'BetRivers',
        }[sportsbook] || '#fff'
    );
};

export const getSportsbookColor = (sportsbook: string): string => {
    return (
        {
            [DRAFTKINGS]: 'text-green-600',
            [FANDUEL]: 'text-blue-600',
            mgm: 'text-yellow-600',
            williamhill: 'text-indigo-600',
            barstool: 'text-blue-600',
            other: 'text-gray-800',
            pointsbet: 'text-red-600',
            betrivers: 'text-purple-600',
        }[sportsbook] || '#fff'
    );
};

export const getSportsbookBackgroundHex = (sportsbook: string): string => {
    return (
        {
            [DRAFTKINGS]: '#61b611',
            [FANDUEL]: '#142947',
            mgm: '#c8a76a',
            williamhill: '#16302e',
            barstool: '#15253a',
            pointsbet: '#141414',
            betrivers: '#f23336',
            other: '#000',
        }[sportsbook] || '#fff'
    );
};

export const getSportsbookColorHex = (sportsbook: string): string => {
    return (
        {
            [DRAFTKINGS]: '#fff',
            [FANDUEL]: '#178df0',
            mgm: '#0f1112',
            williamhill: '#b29b5d',
            barstool: '#f2f2f2',
            pointsbet: '#eb1f41',
            betrivers: '#fff',
            other: '#fff',
        }[sportsbook] || '#fff'
    );
};
