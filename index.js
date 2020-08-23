const express = require('express');
const app = express();

app.get('/hello/:id', (req, res) => {
    const msg = {
        statusCode: 200,
        message: `Hello, `+req.params.id,
    }
    res.send(msg)
})

app.listen(8080, ()=>{
    console.log("Running on 8080");
})