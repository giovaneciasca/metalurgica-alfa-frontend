import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Catalog(){
  const [products, setProducts] = useState([])

  useEffect(()=> {
    // Em produção troque '/api/products' pela URL do seu backend: process.env.NEXT_PUBLIC_API_URL + '/products'
    fetch('/api/products').then(r=>r.json()).then(d=>{
      setProducts(d.items || d || [])
    }).catch(()=> setProducts([]))
  },[])

  return (
    <>
      <Head><title>Catálogo — Metalúrgica Alfa</title></Head>
      <main style={{padding:24, maxWidth:1000, margin:'0 auto'}}>
        <h1>Catálogo</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16, marginTop:16}}>
          {products.length===0 && <div>Nenhum produto encontrado.</div>}
          {products.map(p=> (
            <div key={p.id} style={{border:'1px solid #ddd', padding:12, borderRadius:8}}>
              <div style={{height:140, background:'#f0f0f0', display:'flex', alignItems:'center', justifyContent:'center'}}>Imagem</div>
              <h3 style={{marginTop:8}}>{p.title || p.name}</h3>
              <p style={{fontSize:14}}>{p.description || p.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
