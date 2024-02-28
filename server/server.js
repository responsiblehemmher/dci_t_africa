/* const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const { email } = req.body;

  // Nodemailer transporter using SMTP details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'user-password@gmail.com',
      pass: ''
    }
  });

  // Email Options Address
  const mailOptions = {
    from: 'emmanueledunjobi@gmail.com',
    to: email,
    subject: 'Registration Confirmation',
    text: 'Thank you for registering!',
    html: '<p>Thank you for registering!</p>'
  };

  // Sending email to user
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  // Sending notification email to my domain mail
  transporter.sendMail({ ...mailOptions, to: 'edunjobiemmanuel@gmail.com' });

  res.send('Email sent successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 */