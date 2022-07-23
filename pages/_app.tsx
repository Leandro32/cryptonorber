import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Hero from './Hero'
import CardsCryptoPrices from './Cards/CardsCryptoPrices'
import About from './About'
import Articles from './Articles'
import Education from './Education'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function MyApp() {
  return <>
      <Head>
        <title>CryptoNorber</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <CardsCryptoPrices></CardsCryptoPrices>
      <About></About>
      <Articles></Articles>
      <Education></Education>
      <Footer></Footer>
    </>
}
