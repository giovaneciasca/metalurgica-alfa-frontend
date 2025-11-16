import Head from 'next/head'

export default function Services(){
  return (
    <>
      <Head><title>Serviços — Metalúrgica Alfa</title></Head>
      <main style={{padding:24, maxWidth:960, margin:'0 auto'}}>
        <h1>Corte, Dobra e Solda</h1>
        <section>
          <h2>Corte CNC</h2>
          <p>Processos de corte laser/plasma para chapas metálicas com alta precisão.</p>
        </section>
        <section>
          <h2>Dobra CNC</h2>
          <p>Dobra controlada para peças com tolerâncias rígidas.</p>
        </section>
        <section>
          <h2>Solda Industrial</h2>
          <p>Soldagem MIG/TIG para aplicações estruturais e industriais.</p>
        </section>
      </main>
    </>
  )
}
