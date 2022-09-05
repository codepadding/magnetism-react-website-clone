import React from 'react'
import Header from '../components/header/Header'
import HealthScreen from '../components/HealthScreen'
import Layout from '../components/layout/Layout'
import WelcomeApp from '../components/WelcomeApp'

const HomePage = () => {
  return (
    <div>

       <Layout>

       
       <WelcomeApp/>
       <HealthScreen />




       </Layout>



    </div>
  )
}

export default HomePage