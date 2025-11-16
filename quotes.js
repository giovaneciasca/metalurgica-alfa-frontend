export default function handler(req,res){
  if (req.method==='POST'){
    // simple demo: frontend receives success
    return res.status(201).json({ success: true })
  }
  res.status(405).end()
}
