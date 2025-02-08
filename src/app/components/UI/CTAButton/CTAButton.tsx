/** @format */

import styles from './ctaBTN.module.scss';
import Link from 'next/link';

interface ICTABtnProps {
    href: string;
    text: string;
    icon: React.FC<React.SVGProps<SVGAElement>>;
}

const CTAButton: React.FC<ICTABtnProps> = ({ href, text, icon: Icon }) => (
    <div className={styles['button-wrapper']}>
        <div className={styles['background-shadow']}></div>
        <Link href={href} className={styles['button']}>
            {text}
            <Icon className={styles.icon} />
        </Link>
    </div>
);

export default CTAButton;
