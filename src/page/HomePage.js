import React from 'react'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import WelcomeApp from '../components/WelcomeApp'
import LifeStyle from '../components/LifeStyle'
import HealthScreen from '../components/HealthScreen'
import Rewards from '../components/Rewards'

const HomePage = () => {
  return (
    <div>

      <Layout>

        <WelcomeApp />
        <LifeStyle />
        <HealthScreen />
        <Rewards />



      </Layout>



    </div>
  )
}

export default HomePage