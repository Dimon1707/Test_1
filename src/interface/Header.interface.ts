export interface NavLinkProps {
    href: string;
    label: string;
    hasArrow?: boolean;
    hasDot?: boolean;
    hideOnXl?: boolean;
    isMobile?: boolean;
}

export interface TopInfoProps {
    icon: string;
    text: string;
    size?: number;
}

export interface NavItem {
    href: string;
    label: string;
    hasArrow?: boolean;
    hasDot?: boolean;
    hideOnXl?: boolean;
}

export interface TopLink {
    icon: string;
    text: string;
}
