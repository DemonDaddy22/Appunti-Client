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

interface INewBookshelfForm {
    handleSubmit: (...args: any[]) => void;
    handleCancel: (...args: any[]) => void;
    handleAddBook: (...args: any[]) => Promise<void>;
    foundBook: any;
}
