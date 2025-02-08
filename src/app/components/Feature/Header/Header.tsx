/** @format */

import Image from 'next/image'
import NavBar from '../Navbar/NavBar'
import logo from '@/public/image/logo.png'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src={logo} alt='logo' width={70} height={70} priority />
            <NavBar />
        </header>
    )
}

export default Header
