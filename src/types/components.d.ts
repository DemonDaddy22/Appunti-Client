/* eslint-disable no-unused-vars */

interface ISearchResultsContainer extends IStyle {
    data: any[] | undefined;
}

interface ISearchResultsBook {
    data: any;
    id: string;
    epub: any;
    pdf: any;
}

interface ISearchResultsBookCard extends IStyle {
    data: any;
}

interface IAppHeader extends IStyle {
    label: string;
    showIcon?: boolean;
    labelStyle?: React.CSSProperties;
}

interface INavbar extends IStyle {
    navbarRef: any;
}
