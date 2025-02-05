/** @format */
import styles from './social.module.scss'
import Link from 'next/link'

interface ISocial {
    link: string
    icon: React.FC<React.SVGProps<SVGAElement>>
}

const Social: React.FC<ISocial> = ({ link, icon: Icon }) => {
    return (
        <div className={styles['social-wrapper']}>
            <div className={styles['background-shadow']}></div>
            <Link className={styles['social-link']} href={link} target='_blank'>
                {' '}
                <Icon className={styles.icon} />
            </Link>
        </div>
    )
}

export default Social
