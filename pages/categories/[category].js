import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Category from '../../components/Category'
import { useRouter } from 'next/router'
import axios from 'axios'

const CategoryPage = () => {
  const router = useRouter()
  const [posts, setPosts] = useState({
    watch: [],
    dress: [],
    eyewear: [],
    new: [],
    top: [],
  })
  const [loading, setLoading] = useState(true)
  const getPost = async () => {
    try {
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
      setPosts({
        ...posts,
        watch: res.data.slice(0, 10),
        dress: res.data.slice(11, 20),
        eyewear: res.data.slice(21, 30),
        new: res.data.slice(31, 40),
        top: res.data.slice(41, 50),
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPost()
  }, [])
  return (
    <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {console.log('working!', posts)}
        {router.query.cat === 'Dresses' ? (
          <Category name={router.query.cat} results={router.query.res} items={posts.dress} />
        ) : router.query.cat === 'Watches' ? (
          <Category name={router.query.cat} results={router.query.res} items={posts.watch} />
        ) : router.query.cat === 'Tops' ? (
          <Category name={router.query.cat} results={router.query.res} items={posts.top} />
        ) : router.query.cat === 'New Arrivals' ? (
          <Category name={router.query.cat} results={router.query.res} items={posts.new} />
        ) : router.query.cat === 'Eyewear' ? (
          <Category name={router.query.cat} results={router.query.res} items={posts.eyewear} />
        ) : null}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CategoryPage
