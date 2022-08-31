import React from 'react';
import Layout from '../components/layout/Layout';
import WelcomeApp from '../components/WelcomeApp';
import { TextContent1 } from './../components/TextContent1';

const HomePage = () => {
  return (
    <div>

       <Layout>

       <WelcomeApp/>       
       <TextContent1/>


       </Layout>



    </div>
  )
}

export default HomePage