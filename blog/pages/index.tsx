import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { Posts } from '../components/Posts'
import { query } from '../libs/db'
import styles from '../styles/Home.module.css'
import { Post } from '../types'
import { generateFeed } from '../libs/generateFeed'

export const  getStaticProps: GetStaticProps = async () => {
  const results: Post[] = JSON.parse(JSON.stringify(await query('SELECT * FROM post WHERE published = true ORDER BY published_at DESC')))
  generateFeed(results)
  return {
    props: { posts: results }
  }
}

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>92thunder.dev</title>
        <meta name="description" content="Ryota Kunisada@92thunder Blog" />
        <meta property="og:url" content="https://92thunder.dev" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="92thunder.dev"></meta>
        <meta property="og:description" content="Ryota Kunisada@92thunder Blog" />
        <meta property="og:site_name" content="92thunder.dev" />
        <meta property="og:image" content="https://92thunder.dev/ogp.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" type="application/atom+xml" title="92thunder.dev" href="/feeds/atom.xml" />
        <link rel="alternate" type="application/rss+xml" title="92thunder.dev" href="/feeds/feed.xml" />
      </Head>

      <main className={styles.main}>
        <Posts posts={posts}></Posts>
      </main>
    </div>
  )
}

export default Home
