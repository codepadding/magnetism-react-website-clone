import React from 'react'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import WelcomeApp from '../components/WelcomeApp'
import LifeStyle from '../components/LifeStyle'
import HealthScreen from '../components/HealthScreen'
import Rewards from '../components/Rewards'
import { listHealth,listFitness } from '../data/data'

const HomePage = () => {





  return (
    <div>

      <Layout>

        <WelcomeApp />
        <LifeStyle />
        <HealthScreen list={listHealth}/>
        <HealthScreen list={listFitness}/>
        <Rewards />



      </Layout>



    </div>
  )
}

export default HomePage