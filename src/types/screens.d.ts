/* eslint-disable no-unused-vars */

import { RouteComponentProps } from 'react-router-dom';

interface IRouterProps {
    router?: RouteComponentProps;
}

interface IBookSearchData {
    items?: Array<any>;
    kind: string;
    totalItems: number;
}

interface IBookSearchResponse {
    data: IBookSearchData;
    status: number;
    error: any;
}

interface IBooksAPIParams {
    q: string;
    startIndex: number;
    maxResults: number;
}
