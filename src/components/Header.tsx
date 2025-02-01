import Link from 'next/link'
import { FC, useState } from 'react'

import styles from '@/styles/Header.module.css'

type HeaderProps = {
    isDarkTheme: boolean
    toggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ isDarkTheme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navLinks = [
        { name: 'Проекты', href: '#projects' },
        { name: 'Навыки', href: '#skills' },
        { name: 'Контакты', href: '#contact' },
    ]

    return (
        <header className={`${styles.header} ${isDarkTheme ? styles.dark : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    DevPortfolio
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label="Переключить тему"
                    >
                        {isDarkTheme ? '🌞' : '🌙'}
                    </button>
                </nav>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Меню"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    )
}

export default Header