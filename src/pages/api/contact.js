export default async function(request, response) {
    let nodemailer = require('nodemailer');
    // create transporter object
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.hostinger.co.id",
        auth: {
            user: 'marketing@highspeeddoorindonesiacoad.com',
            pass: 'Coad!2345',
        },
        secure: true,
    });

    const formData = await request.body
    const getFormData = await JSON.parse(formData)
    const name = getFormData['name']
    const email = getFormData['email']
    const phone = getFormData['phone']
    const message = getFormData['content']

    try {

        await transporter.sendMail({
            from: 'marketing@highspeeddoorindonesiacoad.com',
            to: 'marketing@highspeeddoorindonesiacoad.com',
            replyTo: email,
            subject: `Website Contact Us from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return response.json({ message: "Success: email was sent" })
    } catch (error) {
        response.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}
