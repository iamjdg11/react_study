import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href="/sub">pages/sub/index.tsx</a></li>
        <li><a href="/sub/about">pages/sub/about.tsx</a></li>
        <li><a href="/sub/1">pages/sub/[1].tsx</a></li>
        <li><a href="/sub/2">pages/sub/[2].tsx</a></li>
      </ul>
    </div>
  )
}
