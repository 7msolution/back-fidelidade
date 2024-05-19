


class WhatsMensagem {


    async sendMensagem(){

            const accountSid = 'ACd46fb1b8833d18729eff3e95b6f04dc6';
            const authToken = '[AuthToken]';
            const client = require('twilio')(accountSid, authToken);

            client.messages
                .create({
                    body: 'Your appointment is coming up on July 21 at 3PM',
                    from: 'whatsapp:+14155238886',
                    to: 'whatsapp:+5511999554477'
                })
                .then(message => console.log(message.sid))
                .done();

    }




}

export default WhatsMensagem