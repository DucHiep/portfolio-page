import Image from 'next/image'
import {
  nobleLogo,
  HNLogo,
  tellyoLogo, HiwinLogo, VnptLogo
} from '../../assets'
import { getDate } from '../date'
import styles from './timelinegrid.module.scss'

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2015</h1>
        <div className={styles.timelinePoint}/>
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom.
        </h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Hanoi University of Industry."
                src={HNLogo}
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Hanoi University of Industry</h1>
              <h2 className={styles.cardContentDetails}>Ha Noi</h2>
              <h2 className={styles.cardContentDetails}>2015 - 2020</h2>
            </div>
          </div>
          {/* Thêm thẻ p vs class styles.cardContentDescription để viết mô tả khi cần thiết*/}
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      {/* Start */}
      <div className={styles.timelineGridItemWide}>
        <h1>03.2019 - 03.2020</h1>
        <h2>Working & learning Web Development in Hiwin Technology</h2>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Hiwin Technology logo."
                src={HiwinLogo}
                height={55}
                width={55}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Hiwin Technology</h1>
              <h2 className={styles.cardContentDetails}>08.2020 - 10.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building on my own a responsive web application,
            which had a catalogue of all company's servers, displayed in the
            tree structure. Server's data was taken and parsed from XML file to JSON.
            Anyone logged could browse through lists of servers.
            Search and sort by name function were applied.
            App had system of accounts as well. Admins, technical and user ones.
            Admins could manage accounts by editing them, deleting and authorize
            (every new user had to be authorized by admin). Admins could also
            see what user is logged at the moment.<br/>
            <br/>
            Main responsibilities:<br/>
            - designing both frontend and backend side of the app,<br/>
            - creating an asynchronous communication between client and server via <b>REST API</b>,<br/>
            - setting up server with database.<br/>
            <br/>
            Languages: SpringBoot, <b>React</b>.<br/>
            Database: <b>Oracle SQL</b>.<br/>
            Styling: SASS.<br/>
            Version Control System: <b>GitHub.</b><br/>
            Issue trancing: Jira.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} style={{backgroundColor: "#0E2245"}}>
              <Image
                alt="Vnpt Technology company logo."
                src={VnptLogo}
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>VNPT Technology</h1>
              <h2 className={styles.cardContentDetails}>OneHome</h2>
              <h2 className={styles.cardContentDetails}>10.2020 - 09.2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building from scratch a complete WebRTC Phone web application, based on SIP.js library. Major functionalities:<br/>
            - making new, answering, and holding calls (conferences as well),<br/>
            - contacts list with functionality of adding, deleting, and editing contacts. Search and sort options applied as well,<br/>
            - history of calls with summarized data,<br/>
            - voicemail and DTMF sending,<br/>
            - account and phone input/output audio settings.<br/>
            <br/>
            My main responsibilities on the front-end side of the project:<br/>
            -working collaboratively in team environment, resolving conflicts,<br/>
            -writing a clean and high-quality codebase,<br/>
            -refactoring of codebase,<br/>
            -writing the documentation,<br/>
            -implementation of the functionalities from the documentation, given previously by PM,<br/>
            -creating responsive, accessible and efficient web views, based on previously given mockups,<br/>
            -reviewing pull requests of my less experienced peers, and helping them with styling/creating components,<br/>
            -writing efficient unit tests.<br/>
            <br/>
            Achievements I am most proud of:<br/>
            -building a 'light' version of main application that could be inserted into an iframe and creating an API via those two elements could communicate,<br/>
            -helping my peer with fixing up commit history on main branch in out project, after his mistaken merging,<br/>
            -creating documentation with code standards of codebase of our project,<br/>
            -implementing CSS modules into our main project, which improved team workflow noticeably,<br/>
            -constructing complete translation system which let the user to change language of application
            (if not chosen, language was detected automatically).
            <br/>
            Languages: SpringBoot, <b>AngularJs</b>.<br/>
            Database: <b>MySQL</b>.<br/>
            Version Control System: <b>GitHub.</b><br/>
            Issue trancing: Jira.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>

      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} style={{backgroundColor: "#0E2245"}}>
              <Image
                  alt="Vnpt Technology company logo."
                  src={VnptLogo}
                  height={50}
                  width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Vnpt Technology</h1>
              <h2 className={styles.cardContentDetails}>DAC</h2>
              <h2 className={styles.cardContentDetails}>09.2021 - now</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
          Building an advanced hybrid cloud web application, based on AngularJS,
          React, Jitsi library, and OBS Studio software.<br/>
            <br/>
            Main responsibilities:<br/>
            - working collaboratively both with frontend and backend teams,<br/>
            - writing a clean and high-quality codebase,<br/>
            - creating new features in the monthly releases,<br/>
            - code review of other developers in our teams,<br/>
            - fixing new and old bugs requested by QA team,<br/>
            - taking active participation in the planning of creating new features.<br/>
            <br/>
            Main achievement:<br/>
            - carrying out migration of our app from JavaScript to TypeSctipt (the whole app) and from AngularJS to React 18.<br/>
            <br/>
            Languages: TypeScript.<br/>
            Frameworks: <b>React</b>, AngularJS.<br/>
            State Management: <b>Redux Thunk</b>.<br/>
            Styling: SCSS, <b>StoryBook</b>.<br/>
            Version Control System: GitHub/GitLab (git).<br/>
            Issue trancing: Jira.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>

      {/*End */}

      {/* Start */}
      <div className={styles.timelineGridItemWide}>
        <h1>03.2019 - 03.2020</h1>
        <h2>Working & learning Web Development in Hiwin Technology</h2>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                  alt="Hiwin Technology logo."
                  src={HiwinLogo}
                  height={55}
                  width={55}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>VNPT Technology</h1>
              <h2 className={styles.cardContentDetails}>ONE DX</h2>
              <h2 className={styles.cardContentDetails}>10.2020 - 09.2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building on my own a responsive web application,
            which had a catalogue of all company's servers, displayed in the
            tree structure. Server's data was taken and parsed from XML file to JSON.
            Anyone logged could browse through lists of servers.
            Search and sort by name function were applied.
            App had system of accounts as well. Admins, technical and user ones.
            Admins could manage accounts by editing them, deleting and authorize
            (every new user had to be authorized by admin). Admins could also
            see what user is logged at the moment.<br/>
            <br/>
            Main responsibilities:<br/>
            - designing both frontend and backend side of the app,<br/>
            - creating an asynchronous communication between client and server via <b>REST API</b>,<br/>
            - setting up server with database.<br/>
            <br/>
            Languages: SpringBoot, <b>React</b>.<br/>
            Database: <b>Oracle SQL</b>.<br/>
            Styling: SASS.<br/>
            Version Control System: <b>GitHub.</b><br/>
            Issue trancing: Jira.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} style={{backgroundColor: "#0E2245"}}>
              <Image
                  alt="Vnpt Technology company logo."
                  src={VnptLogo}
                  height={50}
                  width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>VNPT Technology</h1>
              <h2 className={styles.cardContentDetails}>Workplace</h2>
              <h2 className={styles.cardContentDetails}>10.2020 - 09.2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building from scratch a complete WebRTC Phone web application, based on SIP.js library. Major functionalities:<br/>
            - making new, answering, and holding calls (conferences as well),<br/>
            - contacts list with functionality of adding, deleting, and editing contacts. Search and sort options applied as well,<br/>
            - history of calls with summarized data,<br/>
            - voicemail and DTMF sending,<br/>
            - account and phone input/output audio settings.<br/>
            <br/>
            My main responsibilities on the front-end side of the project:<br/>
            -working collaboratively in team environment, resolving conflicts,<br/>
            -writing a clean and high-quality codebase,<br/>
            -refactoring of codebase,<br/>
            -writing the documentation,<br/>
            -implementation of the functionalities from the documentation, given previously by PM,<br/>
            -creating responsive, accessible and efficient web views, based on previously given mockups,<br/>
            -reviewing pull requests of my less experienced peers, and helping them with styling/creating components,<br/>
            -writing efficient unit tests.<br/>
            <br/>
            Achievements I am most proud of:<br/>
            -building a 'light' version of main application that could be inserted into an iframe and creating an API via those two elements could communicate,<br/>
            -helping my peer with fixing up commit history on main branch in out project, after his mistaken merging,<br/>
            -creating documentation with code standards of codebase of our project,<br/>
            -implementing CSS modules into our main project, which improved team workflow noticeably,<br/>
            -constructing complete translation system which let the user to change language of application
            (if not chosen, language was detected automatically).
            <br/>
            Languages: SpringBoot, <b>AngularJs</b>.<br/>
            Database: <b>MySQL</b>.<br/>
            Version Control System: <b>GitHub.</b><br/>
            Issue trancing: Jira.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>

      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} style={{backgroundColor: "#0E2245"}}>
              <Image
                  alt="Vnpt Technology company logo."
                  src={VnptLogo}
                  height={50}
                  width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Vnpt Technology</h1>
              <h2 className={styles.cardContentDetails}>BOS</h2>
              <h2 className={styles.cardContentDetails}>09.2021 - now</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building an advanced hybrid cloud web application, based on AngularJS,
            React, Jitsi library, and OBS Studio software.<br/>
            <br/>
            Main responsibilities:<br/>
            - working collaboratively both with frontend and backend teams,<br/>
            - writing a clean and high-quality codebase,<br/>
            - creating new features in the monthly releases,<br/>
            - code review of other developers in our teams,<br/>
            - fixing new and old bugs requested by QA team,<br/>
            - taking active participation in the planning of creating new features.<br/>
            <br/>
            Main achievement:<br/>
            - carrying out migration of our app from JavaScript to TypeSctipt (the whole app) and from AngularJS to React 18.<br/>
            <br/>
            Languages: TypeScript.<br/>
            Frameworks: <b>React</b>, AngularJS.<br/>
            State Management: <b>Redux Thunk</b>.<br/>
            Styling: SCSS, <b>StoryBook</b>.<br/>
            Version Control System: GitHub/GitLab (git).<br/>
            Issue trancing: Jira.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>

      {/*End */}
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
        <h1>{getDate()}</h1>
      </div>
    </div>
  )
}