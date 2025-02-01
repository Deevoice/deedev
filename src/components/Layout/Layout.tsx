import { ReactNode, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/components/Layout/Layout.module.css'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <div className={`${styles.container} ${isDarkTheme ? 'dark-theme' : ''}`}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout