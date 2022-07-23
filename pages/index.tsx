import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MyApp from './_app'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MyApp />
      <Footer></Footer>
    </div>
  )
}
