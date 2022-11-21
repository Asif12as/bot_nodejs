const { Telegraf } = require('telegraf');

const bot = new Telegraf('5886753051:AAGWYnzYhN8wmBeBHGRR61KM_70BlM2byag');


bot.command('start', ctx => {
    // console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! This is a smart bot web_tak 🎱. ', {
     })
    let greetMessage = `Great woow, Thanks for connecting with us. kindly choose your option to move forward.`;
     
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, greetMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Investor",
                        callback_data: 'investor'
                    },
                    {
                        text: "Company",
                        callback_data: 'company'
                    }
                ],

            ]
        }
    })
})



bot.action('investor', async ctx => {
    const questionOne = await bot.telegram.sendMessage(ctx.chat.id, "Hi, what's your name 🌐🔶?", {
        reply_markup: {
            force_reply: true,
        },
    })
    // console.log(questionOne)
    bot.telegram.onReplyToMessage(ctx.chat.id, questionOne.message_id, async (nameMsg) => {
        const name = nameMsg.text;

        await bot.telegram.sendMessage(ctx.chat.id, `Hello ${name}!`);
    });
})

bot.action('company', async ctx => {
    const question_1 = await bot.telegram.sendMessage(ctx.chat.id, "Hello owner, what's the name of your company 🌐🔶🌐?", {
        reply_markup: {
           
        },
    })
    // console.log(questionOne)
    bot.telegram.onReplyToMessage(ctx.chat.id, question_1.message_id, async (nameMsg) => {
        const name = nameMsg.text;
        

        await bot.telegram.sendMessage(ctx.chat.id, `Hello ${name}!`);
    });
})

bot.launch();

console.log("STARTED")