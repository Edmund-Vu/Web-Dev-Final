import Layout from '../components/Layout'
import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [content, setContent] = useState([
    {
      name: 'testing',
      date: 'December 17th, 2021'
    }
  ])
  const contentValue = { content, setContent }
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
