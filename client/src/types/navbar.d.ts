export interface INav {
    id?: string;
    type: string;
    text: string;
    link: string;
    icon?: JSX.Element;
    position?: number;
    children?: INav[];
}

export interface INavLink {
    text: string;
    link: string;
    type?: string;
    icon?: JSX.Element;
    [key: string]: string | JSX.Element | undefined;
}

export interface INavMenu {
    text: string;
    link: string;
    type?: string;
    children: INav[];
    [key: string]: string | number | INav[] | undefined;
}

export interface ISearchBar {
    placeholder: string;
}
