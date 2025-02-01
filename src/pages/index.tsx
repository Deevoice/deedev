import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import styles from '@/styles/Index.module.css'
// import HeroSection from '../sections/HeroSection'
// import ProjectsSection from '../sections/ProjectsSection'
// import SkillsSection from '../sections/SkillsSection'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Никита Фураев | Frontend Developer</title>
                <meta name="description" content="Портфолио фронтенд-разработчика" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <div className={styles.mainPage}>
                        <h1>HI, I'M DEE</h1>
                        <h3>will work for food</h3>
                    </div>
                    {/* <HeroSection />
                    <ProjectsSection />
                    <SkillsSection /> */}
                </div>

            </Layout>
        </>
    )
}

export default Home