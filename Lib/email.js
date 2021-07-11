var Templation  = require('nodemailer-templation');
var path        = require('path');
const CONSTANT = require('../Config/constant')

//Create our new new mailer object
 const emailConfigure = (templateType) => {
      return new Templation({
        from: CONSTANT.EMAIL.FROM,
        templates: {
          reply: path.resolve(__dirname, '../Views/'+templateType)
        },
        attachments: [
        //   {
        //     filename: 'logoLite.png',
        //     path: path.resolve(__dirname, '../templates/images/logoLite.png'),
        //     cid: 'light@logo'
        //   }
        ],
        transportOptions: {
            host: CONSTANT.EMAIL.HOST,
            port: CONSTANT.EMAIL.PORT,
            auth: {
              user: CONSTANT.EMAIL.USER,
              pass: CONSTANT.EMAIL.PASS
            }
        }
      });
  }

  module.exports = {
      send : ( templateType, to, subject, messageData ) => {
        let Mailer = emailConfigure( templateType );
        Mailer.send({
            to: to,
            subject: subject,
            template: 'reply',
            messageData: messageData
          }, function(err){
              if(err){
                console.log('Email not Sent: ', err)
              } else{
                console.log('***Email Sent***')
              }
          });
      }
  }