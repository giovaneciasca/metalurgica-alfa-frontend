import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Metalúrgica Alfa</title>
        <meta name="description" content="Corte, dobra e solda industrial - Metalúrgica Alfa" />
      </Head>
      <main style={{fontFamily: 'Inter, system-ui, -apple-system, Roboto, Arial', padding: 24, maxWidth: 960, margin: '0 auto'}}>
        <h1 style={{fontSize: 36}}>Metalúrgica Alfa</h1>
        <p style={{marginTop: 8}}>Corte, dobra e solda industrial com precisão e qualidade.</p>
        <nav style={{marginTop: 16}}>
          <Link href="/services"><a style={{marginRight:12}}>Serviços</a></Link>
          <Link href="/catalog"><a style={{marginRight:12}}>Catálogo</a></Link>
          <Link href="/orcamento"><a>Orçamento</a></Link>
        </nav>
      </main>
    </>
  )
}
