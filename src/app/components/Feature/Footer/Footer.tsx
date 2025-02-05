/** @format */
import styles from './footer.module.scss'
import { MdCopyright } from 'react-icons/md'

const Footer = () => {
    return (
        <footer>
            <hr className={styles.line} />
            <p className={styles.copyright}>
                <MdCopyright />
                {new Date().getFullYear()} All rights Reserved
            </p>
        </footer>
    )
}
export default Footer
