import React from 'react'
import Link from "next/link"
import Layout from '../user/layout'
import Test from '@/app/Components/TestUser'
import SideuserCompo from './SideuserCompo'

const UserPanel = () => {
  return (
  //  <Layout>
  <div className='flex w-full bg-white'>
      <SideuserCompo/>
      <Test />
  </div>
    

  )
}

export default UserPanel
