import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'
import img from '../public/index.png'


export default function Home() {

  const [session, loading] = useSession();
  


  return (
    <>
      <div className={styles.container} style={{
        backgroundImage: "url(" + `${require("../public/index.png")}` + ")",
        width: "100%",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <main className={styles.main}>

        <h1 className={styles.title}>{process.env.CI} in Next.js app using teste</h1>
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && <> <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
            <img src={session.user.image} alt="" className={styles.avatar} />
          </>}
          {!session &&
            <>
              <p className={styles.title}>Please Sign in</p>
              <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" className={styles.avatar} />
              <p className={styles.credit}>GIF by <a href="https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media">Another man</a> </p>
            </>
          }
        </div>
      </main>
    </div>
    </>
  )
}