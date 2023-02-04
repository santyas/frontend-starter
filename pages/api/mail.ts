import type {NextApiRequest, NextApiResponse} from 'next'

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

type Data = {
	status: number
}

export default function handlerEmail (req: NextApiRequest, res: NextApiResponse<Data>) {
	const body = JSON.parse(req.body)
	const message = `
	  Nombre: ${body.name}\r\n
	  Apellido: ${body.lastname}\r\n
	  Email: ${body.email}\r\n
	  Tel: ${body.tel}
	`

	const data = {
		to: 'santiago.grufi@wearevernon.com',
		from: 'noreply@wearevernon.com',
		subject: 'Contacto SendGrid Frontend Starter.',
		text: message,
		html: message.replace(/\r\n/g, '<br/>'),
	}

	sgMail.send(data).then(() => {
		res.status(200).json({status: 200})
	}, (error: { response: { body: unknown } }) => {
		if (error.response) {
			console.error(error.response.body)
		}
	})
}