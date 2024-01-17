const express = require('express')
const app = express()

app.post('/api/data', function (req, res) {
  res.send('')
})

app.listen(8000,() => {
    console.log("Server is connected!")
}  )