/** @format */

import Image from 'next/image'
import NavBar from '../Navbar/NavBar'
import logo from '@/public/image/logo.png'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src={logo} alt='logo' width={50} height={50} priority />
            <NavBar />
        </header>
    )
}

export default Header
