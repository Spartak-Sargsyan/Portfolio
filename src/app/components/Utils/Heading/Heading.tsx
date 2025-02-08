/** @format */

import styles from './heading.module.scss';

interface IHeading {
    title: string;
}

const Heading: React.FC<IHeading> = ({ title }) => {
    return <h2 className={styles['heading']}>{title}</h2>;
};

export default Heading;
