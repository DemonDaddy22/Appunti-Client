/* eslint-disable no-unused-vars */

interface IBookSearchData {
    items?: Array<any>;
    kind: string;
    totalItems: number;
}

interface IBookSearchResponse {
    data: IBookSearchData;
    status: number;
}
