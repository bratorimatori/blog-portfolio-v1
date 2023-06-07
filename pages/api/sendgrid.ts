import sendgrid from '@sendgrid/mail';
import { error } from 'console';
import { NextApiRequest, NextApiResponse } from 'next';

if (process.env.SENDGRID_API_KEY !== undefined) {
  console.log(process.env.SENDGRID_API_KEY);
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const msg = {
    to: 'deteplanete@protonmail.com', // Change to your recipient
    from: '224736@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid',
    text: req.body.message,
    html: `<strong>${req.body.message}</strong>`,
  };
  try {
    sendgrid
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].body);
      })
      .catch((error) => {
        console.error(error);
        console.error(error.response.body);
      });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default handler;
