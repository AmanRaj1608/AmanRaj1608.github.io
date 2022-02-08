import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Highlight from '../components/Highlight'
import Head from 'next/head'
import Image from 'next/image'
import { RoughNotationGroup } from "react-rough-notation";

export default function Index() {

  return (
    <>
      <Head>
        <title>Aman Raj</title>
      </Head>
      <Navbar />
      <main style={{ padding: "1vh" }}>
        <div className="heading">
          <div className="left_sec">
            <Image
              src="/img/aman.jpg"
              alt="Aman"
              width={250}
              height={250}
              className="my_img"
              draggable="false"
            />
            <div className="profile_badge">
              🍀
            </div>
          </div>
          <div className="right_sec">
            <h2 className="title">
              Aman Raj
            </h2>
            <span id="blue_text">SWE → Generalist</span>
            <br />
            <RoughNotationGroup show={true}>
              <h2 className="description">Welcome to my <Highlight color="#BBE7FC">cool corner</Highlight> of the internet. Click here to learn more about me.
                Currently, I'm wroking as
                <Highlight color="#C7D3FC">Software Engineering Intern</Highlight>
                <a href="https://www.certik.com" target=" _blank" className="iiitv" rel="noopener noreferrer">
                  <Highlight color="#10F0B1">@CertiK</Highlight></a>
              </h2>
            </RoughNotationGroup>
          </div>
        </div>
        <RoughNotationGroup show={true}>
        </RoughNotationGroup>
        {/*<hr className="break" />*/}
        <section className="semi" data-sr-id="0" >
          <div className="semi_title">Background</div>
          <div className="semi_desc">
            <p>
              I'm final-year undergraduate in Computer Science <mark>👨🏻‍🎓</mark> student at <strong><a className="iiitv" href="http://iiitvadodara.ac.in/" rel="noopener noreferrer" target="_blank">
                Indian Institute of Information Technology Vadodara</a></strong> and a Software Engineer 👨🏻‍💻 building applications with some awesome people.
            </p>
            <p>
              I'm a motivated <strong>full-stack engineer</strong> who has experience building and scaling web applications.
              I have also experience in technologies like <strong> Blockchain and Machine learning.</strong>
            </p>

            <p>In my free time, I watch Anime, listens music, watch random stuff on YouTube, or sleep.</p>

            <a className="status" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="status__light">
                <div className="status__light__ring"></div>
                <div className="status__light__led"></div> </div>
              <div className="status__message underline-link">Hire me. I'm open for full time opportunities!</div>
            </a>
          </div>
        </section>

        <hr className="break" />

        <section className="semi" >
          <div className="semi_title">Proof of Work</div>
          <div className="semi_desc">
            <div className="achi">

              {/* 1 */}
              <div className="expi__name">
                CertiK ⟠
              </div>
              <div className="achi_name__sub">
                Blockchain Security Intern (Aug'21 - Present)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  Working on cross-chain protocol with security scoring dApps and blockchains.
                </li>
              </ul>

              {/* 2 */}
              <div className="expi__name">
                Polygon (Matic Network) ⟠
              </div>
              <div className="achi_name__sub">
                Software Engineer Intern (Mar'21 - Aug'21)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">Wrote tests and docs for the matic.js library.</li>
                <li className="achi_name__li">Worked on NFT Bridge to transfer assets (ERC721, ERC1155) between root and child chain.</li>
                <li className="achi_name__li">
                  Built NFT Minter (<a href="https://mintnft.today/" target=" _blank" rel="noopener noreferrer">mintnft.today</a>)
                  to mint and list NFTs on Arkane and OpenSea marketplace.
                </li>
                <li className="achi_name__li">Enhanced the WalletWeb V2 to catch dropped transactions (https://wallet.matic.network)</li>
              </ul>

              {/* 3 */}
              <div className="expi__name">
                Devfolio Ethereum India ⟠
              </div>
              <div className="achi_name__sub">
                Fellowship (Feb'21 - Apr'21)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  <strong>20 Web2 developers</strong> were selected to learn and build Web3.
                </li>
                <li className="achi_name__li">
                  Contributed to the <strong>Ethereum ecosystem</strong> under industry mentors.
                </li>
              </ul>

              {/* 4 */}
              <div className="expi__name">
                Hapramp Studio
              </div>
              <div className="achi_name__sub">
                Software Engineer Intern (Sep'20 - Feb'21)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  Build <a href="https://gosocial.io/" target=" _blank" rel="noopener noreferrer">gosocial.io</a>
                </li>
                <li className="achi_name__li">
                  Worked on Hapramp’s GoSocial product with <strong>500k+ downloads</strong>.
                </li>
                <li className="achi_name__li">
                  Leveraged my knowledge of Next.js, Redux, and SSR to develop the product’s web
                  version from scratch.
                </li>
              </ul>

              {/* 4 */}
              {/* <div className="expi__name">
                GDG Gandhinagar
              </div>
              <div className="achi_name__sub">
                Frontend Engineer Intern (Sep'19 - Oct'19)
              </div>
              <ul className="achi_list">
                <li className="achi_name__li">
                  Worked in the core team to <strong>co-organize</strong> GDG Gandhinagar’s DevFest 19.
                </li>
                <li className="achi_name__li">
                  Developed the webpage in Angular 7 in collaboration with the team.
                </li>
              </ul> */}
            </div>
          </div>
        </section>

        <hr className="break" />

        <section className="semi" >
          <div className="semi_title">Achievements</div>
          <div className="semi_desc">

            {/* 0 */}
            {/* <div className="achi">
              <div className="achi_name">
                <a href="https://algorand-innovate.hackerearth.com" rel="noopener noreferrer" target="_blank" className="arrow-link">
                  INNOVATE: Algorand Blockchain Hackathon
                </a>
              </div>
              <p>Hosted by <strong>Algorand</strong> hackathon developed a product AlgoRidge.
                Algoridge is an oracle based bridge between algorand and avalanche.
                <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  ⚡️ Won $20k USDC in second prize and other schwags.
                  <br />
                </p>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">Ether.js</span>
                <span className="achi_used__item">Next.js</span>
                <span className="achi_used__item">Teal</span>
                <span className="achi_used__item">Node.js</span>
              </div>
            </div> */}

            {/* 0 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://devpost.com/software/dclubhouse" rel="noopener noreferrer" target="_blank" className="arrow-link">
                  Neo Frontier Blockchain Launchpad
                </a>
              </div>
              <p>
                Won the Excellence Award with a 1.4x
                multiplier at Neo Frontier Blockchain Launchpad.
                <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  ⚡️ Won $7k USDC in second prize and other schwags.
                </p>
              </p>
              <div className="achi_used">
                <span className="achi_used__item">WebRTC</span>
                <span className="achi_used__item">Next.js</span>
                <span className="achi_used__item">Node.js</span>
                <span className="achi_used__item">Neoline</span>
              </div>
            </div>

            {/* 0 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://medium.com/harmony-one/winners-of-the-hack-the-horizon-hackathon-ae04f95b71ab" rel="noopener noreferrer" target="_blank" className="arrow-link">
                  Harmony One: Hack the Horizon
                </a>
              </div>
              <p>Hosted by <strong>Harmony</strong> hackathon developed a product GitMony. GitMony uses Harmony Bridge and Chainlink oracle,
                to deliver a completely decentralized platform to reward opensource contributors.
                <br />
                {/* <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  ☮️ Won $2k second prize and other schwags.
                  <br />
                </p> */}
              </p>
              <div className="achi_used">
                <span className="achi_used__item">Chainlink</span>
                <span className="achi_used__item">Harmony</span>
                <span className="achi_used__item">Node.js</span>
                <span className="achi_used__item">Next.js</span>
                <span className="achi_used__item">Solidity</span>
              </div>
            </div>

            {/* 0 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://devpost.com/software/oceancaller" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Ocean Protocol: Data Economy Challenge
                </a>
              </div>
              <p>Hosted by <strong>Ocean Protocol</strong> hackathon created decentralized Caller Id app.
                <br />
                {/* <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🌊 Won $2k prize for best integration into phone data as data service.
                  <br />
                </p> */}
              </p>
              <div className="achi_used">
                <span className="achi_used__item">Ethereum</span>
                <span className="achi_used__item">Ocean Protocol</span>
                <span className="achi_used__item">React-Native</span>
                <span className="achi_used__item">Node.js</span>
                <span className="achi_used__item">Flask</span>
              </div>
            </div>



            {/* 1 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.computer.org/education/oracle_hackathon_2020" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Goverment: Gov-TechThon 2020
                </a>
              </div>
              <p>Hosted by <strong>IEEE Computer Society</strong> and <strong>National Informatics Center (NIC) India. </strong>
                We designed and implemented a prototype of Unsupervised Test app. All projects rights are given to NIC.
                Won 1.25lakhs cash Prize. Summer Intern oppurtunity at NIC.
                <br />
                {/* <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🏆 Won 1.25lakhs cash Prize. Summer Intern oppurtunity at NIC.
                  <br />
                </p> */}
              </p>
              <div className="achi_used">
                <span className="achi_used__item">ML</span>
                <span className="achi_used__item">Electron.js</span>
                <span className="achi_used__item">Oracle</span>
                <span className="achi_used__item">Next.js</span>
              </div>
            </div>

            {/* 2 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.hackerearth.com/challenges/hackathon/hackatom-india/" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Winners at HackAtom India: Build The Cosmos
                </a>
              </div>
              <p>
                Won all India blockchain hackathon for developing an app using
                cosmos <strong>Ethermint</strong> tech stack.
                <br />
                {/* <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🌟 Won $500 USD.
                </p> */}
              </p>
              {/* <div className="achi_used">
                <span className="achi_used__item">Ethermint</span>
                <span className="achi_used__item">Solidity</span>
                <span className="achi_used__item">Node.js</span>
                <span className="achi_used__item">React</span>
                <span className="achi_used__item">Web3.js</span>
                <span className="achi_used__item">Flutter</span>
              </div> */}
            </div>

            {/* 3 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://devfolio.co/submissions/offsubmit" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Runner Up in Eduthon
                </a>
              </div>
              <p>A national-level hackathon by <strong>IIIT Lucknow</strong> on Devfolio. Developed an application to
                conduct online examination offline.
                {/**
                <br />
                <p className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  🌟 Won 10k cash prize and devfolio schwag.
                </p>
                
              */}
              </p>
              {/**
                <div className="achi_used">
                <span className="achi_used__item">Matic</span>
                <span className="achi_used__item">Solidity</span>
                <span className="achi_used__item">React.js</span>
                <span className="achi_used__item">Spring Boot</span>
                <span className="achi_used__item">Twilio</span>
                <span className="achi_used__item">Portis</span>
              </div>
              */}
            </div>

            {/* 4 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.linkedin.com/posts/amanraj1608_hackiiitv-hackiiitv-activity-6588635125444116480-dTHg/" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Winners in HackIIITV 2019
                </a>
              </div>
              <p>An intra institute level hackathon by <strong>IIIT Vadodara</strong>.
                We designed a real-time communication app for the specially-abled.
                {/**
                <br />
                <span className="small" style={{ margin: "15px 0px 0px 0px" }}>
                  ⭐ Won GitHub schwags.
                </span>
              */}
              </p>
              {/**
                <div className="achi_used">
                <span className="achi_used__item">cnn-classifier</span>
                <span className="achi_used__item">Django</span>
              </div>
              */}
            </div>

            {/* 5 */}
            <div className="achi">
              <div className="achi_name">
                <a href="https://www.teriin.org/olympiad/" target="_blank" rel="noopener noreferrer" className="arrow-link">
                  National Environment Olympiad 2014
                </a>
              </div>
              <p>
                Got 7th rank 🌳 in annual written examination on environment initiated by The Energy and Resources Institute (TERI).
              </p>
            </div>
          </div>
        </section>

        <hr className="break" />

      </main>
      <Footer />
    </>
  )
}
