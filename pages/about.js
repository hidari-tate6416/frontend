import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import Index from '../components/index.js'

export default function Home() {
  return (
    <Index title="このサイトについて">
      <div>
        本文として表示されます
      </div>
      <div>
        <Link href="/login">
          ログイン
        </Link>
      </div>
    </Index>
  )
}
