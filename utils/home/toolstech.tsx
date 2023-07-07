import React from 'react'
import { VIcon } from '../icon'
import {
  affinityLogo,
  affinityLogoHover,
  angularLogo,
  angularLogoHover,
  cssLogo,
  cssLogoHover,
  davinciLogo,
  davinciLogoHover,
  gitLogo,
  gitLogoHover,
  htmlLogo,
  htmlLogoHover,
  jestLogo,
  jestLogoHover,
  jsLogo,
  jsLogoHover,
  lessLogo,
  lessLogoHover,
  linuxLogo,
  linuxLogoHover,
  mysqlLogo,
  mysqlLogoHover,
  npmLogo,
  npmLogoHover,
  pythonLogo,
  pythonLogoHover,
  reactLogo,
  reactLogoHover,
  sassLogo,
  sassLogoHover,
  tsLogo,
  tsLogoHover,
  vsLogo,
  vsLogoHover,
  windowsLogo,
  windowsLogoHover,
  yarnLogo,
  yarnLogoHover
} from '../../assets'
import styles from './toolstech.module.scss'

export function VToolsTech() {
  return (
    <div className={styles.technologiesIcons}>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaultIcon={htmlLogo}
          onHoverIcon={htmlLogoHover}
          height="46px"
          width="46px"
          name="HTML"
          tooltipID="html-tooltip" />
        <VIcon
          defaultIcon={cssLogo}
          onHoverIcon={cssLogoHover}
          height="65px"
          width="65px"
          name="CSS"
          tooltipID="css-tooltip" />
        <VIcon
          defaultIcon={jsLogo}
          onHoverIcon={jsLogoHover}
          height="55px"
          width="55px"
          name="JavaScript"
          tooltipID="js-tooltip" />
        <VIcon
          defaultIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="55px"
          width="55px"
          name="React"
          tooltipID="react-tooltip" />
        <VIcon
          defaultIcon={tsLogo}
          onHoverIcon={tsLogoHover}
          height="65px"
          width="65px"
          name="TypeScript"
          tooltipID="ts-tooltip" />
        <VIcon
          defaultIcon={sassLogo}
          onHoverIcon={sassLogoHover}
          height="60px"
          width="60px"
          name="Sass"
          tooltipID="sass-tooltip" />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaultIcon={npmLogo}
          onHoverIcon={npmLogoHover}
          height="65px"
          width="65px"
          name="Node Package Manager"
          tooltipID="npm-tooltip" />
        <VIcon
          defaultIcon={yarnLogo}
          onHoverIcon={yarnLogoHover}
          height="65px"
          width="65px"
          name="yarn"
          tooltipID="yarn-tooltip" />
        <VIcon
          defaultIcon={gitLogo}
          onHoverIcon={gitLogoHover}
          height="65px"
          width="65px"
          name="Git"
          tooltipID="git-tooltip" />
        <VIcon
          defaultIcon={mysqlLogo}
          onHoverIcon={mysqlLogoHover}
          height="70px"
          width="70px"
          name="MySQL"
          tooltipID="mysql-tooltip" />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaultIcon={vsLogo}
          onHoverIcon={vsLogoHover}
          height="50px"
          width="50px"
          name="Visual Studio Code"
          tooltipID="vs-tooltip" />
        <VIcon
          defaultIcon={windowsLogo}
          onHoverIcon={windowsLogoHover}
          height="50px"
          width="50px"
          name="Windows 10"
          tooltipID="windows-tooltip" />
        <VIcon
          defaultIcon={linuxLogo}
          onHoverIcon={linuxLogoHover}
          height="50px"
          width="50px"
          name="Ubuntu Linx"
          tooltipID="linux-tooltip" />
      </div>
    </div>
  )
}
