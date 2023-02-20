import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const tmp = await sendgrid.send({
      to: req.body.email,
      from: 'smt@gmail.com',
      subject: `${req.body.subject}`,
      html: `<p>${req.body.message}</p>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
