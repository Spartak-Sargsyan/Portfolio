/** @format */
'use client'
import { useState } from 'react'
import styles from './NavBar.module.scss'
import { menu } from '@/app/constants/menu'

const NavBar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null)

    const handleActivateMenuItem = (id: number) => {
        setActiveMenuItem(id)
        console.log(id + ' id')
    }
    console.log(activeMenuItem + ' activeMenuItem')

    return (
        <nav>
            <ul className={styles.menu}>
                {menu.map(({ menu, id }) => {
                    return (
                        <li
                            className={`${styles.menuItem} ${activeMenuItem === id ? styles.active : ''}`}
                            key={id}
                            onClick={() => handleActivateMenuItem(id)}
                        >
                            {menu}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar
