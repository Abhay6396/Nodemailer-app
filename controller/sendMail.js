const nodemailer = require("nodemailer");    


const sendMail = async (req , res) =>{
    // create test account 
    let testAccount= await nodemailer.createTestAccount();
    
    // connect with smtp server name ethereal
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'casimer.koepp14@ethereal.email',
            pass: 'pCAjAgRFb1Vf1CTcbM'
        }
    });
    const info = await transporter.sendMail({
        from: '"abhay pratap singh" <maddison53@ethereal.email>', // sender address
        to: "thisisabhaypratapsingh@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);

    res.json(info);
}

module.exports = sendMail;