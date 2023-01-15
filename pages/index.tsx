import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import LandingPage from '../pages/LandingPage'

// Context
import { NameInputContextProvider } from '../contexts/NameInputContext/NameInputContext'

const Home: NextPage = () => {
  return (
    <NameInputContextProvider>
      <div className="bg-black text-primary">
        <Head>
          <title>Name Battle</title> 
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <LandingPage />
        <Footer />
      </div>
    </NameInputContextProvider>
  );
}

export default Home;
