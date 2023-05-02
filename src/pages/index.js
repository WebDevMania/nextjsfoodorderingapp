import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '../../components/navbar/Navbar'
import Catalog from '../../components/catalog/Catalog'
import Hero from '../../components/hero/Hero'
import axios from 'axios'
import Footer from '../../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meals }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        <Catalog meals={meals}/>
        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('https://nextjsfoodorderingapp.vercel.app/api/meal')

  console.log(data)
  return {
    props: {
      meals: data
    }
  }
}