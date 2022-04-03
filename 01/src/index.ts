const express = require('express')
const app = express()
const port = 5000

app.get('/', (req: any, res: any) => {
    let helloMessage = 'Hello Incubator'
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})