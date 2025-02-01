import { FC, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

type ThemeToggleProps = {
    isDarkTheme: boolean
    toggleTheme: () => void
}

const ThemeToggle: FC<ThemeToggleProps> = ({ isDarkTheme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Переключить тему"
        >
            {isDarkTheme ? '🌞' : '🌙'}
        </button>
    )
}

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        document.documentElement.classList.toggle('dark-theme')
    }

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
                    <ThemeToggle
                        isDarkTheme={isDarkTheme}
                        toggleTheme={toggleTheme}
                    />
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