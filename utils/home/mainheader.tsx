import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello everyone!", 50)}
        <br/>
        {useTypedText("I'm Nguyen Duc Hiep.", 50, 200)}
      </h1>
      <h2>
        {useTypedText("Welcome on my portfolio page! I'm a Software Developer, currently working as TypeScript and Javascript React and Javascript React Web Developer. Living in Ha Noi capital, Viet Nam.", 30, 350)}
      </h2>
    </div>
  )
}