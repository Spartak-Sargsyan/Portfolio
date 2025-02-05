/** @format */
import { IconType } from 'react-icons';

interface ICTA {
    id: number;
    href: string;
    text: string;
    icon: IconType;
}

interface ISocial {
    id: number;
    link: string;
    icon: IconType;
}

export type { ICTA, ISocial };
