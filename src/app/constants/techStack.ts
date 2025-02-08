/** @format */

import { ICTA, ISocial } from '../models/interface';
import { CiShare1, CiMail } from 'react-icons/ci';
import { LuGithub, LuLinkedin, LuInstagram } from 'react-icons/lu';

export const techStack: string[] = [
    'JavaScript',
    'Node.js',
    'Python',
    'Django',
];

export const PROFFESION: string[] = [
    'FrontEnd Developer',
    'BackEnd Developer',
    'AI Enthusiast',
];

export const CTA: ICTA[] = [
    {
        id: 1,
        href: '#project',
        text: 'Projects',
        icon: CiShare1,
    },
    {
        id: 2,
        href: '#contact',
        text: 'Contact',
        icon: CiMail,
    },
];

export const SOCIAL: ISocial[] = [
    {
        id: 1,
        link: 'https://www.github.com/Spartak-Sargsyan',
        icon: LuGithub,
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/in/spartak-sargsyan-805870249',
        icon: LuLinkedin,
    },
    {
        id: 3,
        link: 'https://www.instagram.com/sargsyan_s._/',
        icon: LuInstagram,
    },
];
