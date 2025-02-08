/** @format */

import styles from './paragraph.module.scss';
import { LuSparkles } from 'react-icons/lu';

interface IParagraph {
    title: string;
}

const Paragraph: React.FC<IParagraph> = ({ title }) => {
    return (
        <p className={styles['paragraph']}>
            <LuSparkles className={styles['icon']} />
            {title}
            <LuSparkles className={styles['icon']} />
        </p>
    );
};

export default Paragraph;
