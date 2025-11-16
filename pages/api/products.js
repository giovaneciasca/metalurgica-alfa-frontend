export default function handler(req,res){
  if (req.method==='GET'){
    // sample static products for frontend demo
    return res.status(200).json({ items: [
      { id: 'p1', title: 'Peça A', description: 'Peça fabricada em aço', price: 120.0 },
      { id: 'p2', title: 'Peça B', description: 'Peça fabricada em alumínio', price: 80.0 }
    ]})
  }
  res.status(405).end()
}
