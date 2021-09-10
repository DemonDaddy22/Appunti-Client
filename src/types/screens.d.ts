/* eslint-disable no-unused-vars */

import { RouteComponentProps, match } from 'react-router-dom';
import { History } from 'history';

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

interface IBookshelfScreen {
    match: match<{ bookshelfId: string }>;
    history: History;
}

interface IBookshelf {
    books: Array<any>;
    coverImageLink: string;
    createdAt: string;
    description: string;
    title: string;
    uid: string;
    updatedAt: string;
    userId: string;
    _id: string;
}
