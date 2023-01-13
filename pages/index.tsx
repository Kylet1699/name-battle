import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'

// function Home(): NextPage {
//   return (
//     <div>
//       <Head>
//         <title>Name Battle</title> 
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//     </div>
//   );
// }

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-900">
      <Head>
        <title>Name Battle</title> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
