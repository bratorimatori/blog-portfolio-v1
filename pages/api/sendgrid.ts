import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tmp = await sendgrid.send({
      to: req.body.email,
      from: 'smt@gmail.com',
      subject: `${req.body.subject}`,
      html: `<p>${req.body.message}</p>`,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
