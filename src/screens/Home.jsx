import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'

function Home() {
  return (
    <>
      <div><Navbar></Navbar></div>
      <div className=''><Corousel></Corousel></div>
      <div className='container-fluid mt-4  d-flex'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
      
        <div><Footer></Footer></div>
    </>
  )
}

export default Home