import { VIcon } from './icon'
import {
  gmailLogo,
  gmailLogoHover,
  linkedInLogo,
  linkedInLogoHover,
  gitHubLogo,
  gitHubLogoHover
} from '../assets'
import styles from './footer.module.scss'

export function VFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goUpSquare}/>
      <h4 className={styles.copyrights}>
        ©2023
        <br/>
        Build with <span>Next.js/TypeSript</span>
      </h4>
      <div className={styles.icons}>
        <VIcon
            defaultIcon={gmailLogo}
          onHoverIcon={gmailLogoHover}
          href="mailto:nguyenduchiep171097@gmail.com"
          height="30px"
          width="30px"
          name="Gmail"/>
        <VIcon
            defaultIcon={gitHubLogo}
          onHoverIcon={gitHubLogoHover}
          href="https://github.com/duchiep"
          height="30px"
          width="30px"
          name="GitHub"/>
      </div>
    </footer>
  )
}