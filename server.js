const express = require('express');
const bodyParser = require('body-parser'); 
require('dotenv').config();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

app.use(express.static(path.join(__dirname, '/build')));


app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, "build")
  })
});
app.post('/api/sendmail', (req, res, next) => {
    const { sender, email, message } = req.body;
    var transporter = 
    nodemailer.createTransport(
        {  
            service: 'gmail',  
            auth: {    
                user: 'honorpurpose@gmail.com',    
                pass: process.env.password
            }
        });
        var mailOptions = 
        {  
            from: 'honorpurpose@gmail.com',  
            to: 'brockston.king@gmail.com',  
            subject: `${ sender }, portfolio website email`,  
            text: `Email: ${ email } => ${ message }`
        };
        transporter.sendMail(
            mailOptions, 
            (error, info) => {  
                if (error) {    
                    console.log(error); 
                    res.status(500).send(error) 
                } else {    
                    console.log('Email sent: ' + info.response);  
                    res.status(200).send('Email sent')
                }
            });
});
const port = 3015;

app.listen(process.env.port || port, () => {
    console.log(`Listening on port ${ port }`);
})