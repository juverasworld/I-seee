import Head from 'next/head'
import SignIn from "../Components/SignIn"

export default function Home() {
  return (
    <div>
      <Head>
        <title>I-SEE</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
       <SignIn/>
      </main>

    </div>
  )
}