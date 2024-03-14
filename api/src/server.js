const HyperE = require('hyper-express')
const hyper = new HyperE.Server()
const PORT = process.env.PORT || 1999

hyper.get("/", (_, r) => r.send('ok'))
// hyper.post("/", (req, res))
 
hyper.listen(PORT)
    .then(() => console.log(`server running on port ${PORT}`))
    .catch(() => console.warn(`something wrong in server`)); 