import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VMenuBar,
  VTimelineGrid
} from '../../utils'
import styles from './work.module.scss'

export default function VWork() {
  return(
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Lỉba ndh Portfolio Page" />
        <meta name="author" content="Libra ndh"/>
        <meta name="keywords" content="Libra, Nguyen Duc Hiep, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Work"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              My work history
            </h1>
            <h2>
              I started studying at Ha Noi University Of Industry in 2015,
              which provided me with the most basic knowledge about the industry.
              Later, after I finished my studies, I started as Back-End Developer.
              In 2021 I switched to Font-End React.
              Since then, I have been working as a Front-End React Software Developer.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}