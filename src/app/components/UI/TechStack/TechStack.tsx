/** @format */
import styles from './tachStack.module.scss'
interface ITech {
    tech: string
}

const TechStack: React.FC<ITech> = ({ tech }) => {
    return <div className={styles['tech-stack']}>{tech}</div>
}

export default TechStack
