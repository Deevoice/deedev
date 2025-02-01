import { FC, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/components/Layout/Layout.module.css'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true) // Темная тема по умолчанию

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        document.documentElement.classList.toggle('dark-theme', !isDarkTheme)
    }

    return (
        <div className={`${styles.layout} ${isDarkTheme ? styles.dark : ''}`}>
            <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <main className={styles.main}>{children}</main>
            <Footer isDarkTheme={isDarkTheme} />
        </div>
    )
}

export default Layout