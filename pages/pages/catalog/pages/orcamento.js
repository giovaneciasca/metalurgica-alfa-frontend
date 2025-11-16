import Head from 'next/head'

export default function Orcamento(){
  async function enviar(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const obj = Object.fromEntries(form.entries())

    // Em produção, mude '/api/quotes' para a URL completa do backend: https://SEU_BACKEND.onrender.com/api/quotes
    await fetch('/api/quotes', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(obj) })
    alert('Orçamento enviado')
    e.target.reset()
  }

  return (
    <>
      <Head><title>Orçamento — Metalúrgica Alfa</title></Head>
      <main style={{padding:24, maxWidth:700, margin:'0 auto'}}>
        <h1>Solicitar Orçamento</h1>
        <form onSubmit={enviar} style={{display:'grid', gap:12, marginTop:12}}>
          <input name="name" placeholder="Nome" required style={{padding:8}}/>
          <input name="email" type="email" placeholder="Email" required style={{padding:8}}/>
          <input name="phone" placeholder="Telefone" style={{padding:8}}/>
          <textarea name="description" placeholder="Descreva o serviço" required style={{padding:8}}/>
          <button type="submit" style={{padding:'8px 12px'}}>Enviar</button>
        </form>
      </main>
    </>
  )
}
