/* eslint-disable no-unused-vars */

interface ISearchResultsContainer extends IStyle {
    data: any[] | undefined;
}

interface ISearchResultsBook {
    data: any;
}

interface ISearchResultsBookCard extends IStyle, ISearchResultsBook {}

interface IAppHeader extends IStyle {
    label: string;
    showIcon?: boolean;
    labelStyle?: React.CSSProperties;
}

interface INavbar extends IStyle {
    navbarRef: any;
}
