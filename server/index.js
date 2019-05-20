const express = require('express')
const cors = require('cors')
const sendgrid = require('sendgrid')('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')

const app= express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// const api_key = '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'

// sendgrid.setApiKey(api_key)


app.post('/send',  (req, res)=>{
    const {client_email,client_name, client_message} = req.body

    const msg = {
        to:'madsonevesUFRN@gmail.com',
        subject: `Olá, ${client_name} gostaria de contrata-los`,
        from:client_email,
        html:`<strong>${client_message}</string>`
    }
    sendgrid.send(msg).then(msg => console.log('deu certo')).catch(err=> console.log('err'))

    res.send("Finalizando request")
})

app.listen(3001)