const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
	.create({
		body: 'Hello this is sabari from twilio😂',
		from: '+18646714648',
		to: '+919444357818',
	})
	.then((message) => console.log(message.sid));
