//Welcome to The trashcan Discord Bot!
//I made this so i could teach my self how discord bots work and How Discord.js Works 
//So if the code is terrible Don't Judge me 
//and Yes The Code is all in One Document; I dont know how to seprate the code into diffrent documets yet.
//im new to codeing in Javscript!

//*The code start Here*

//This Code is needed So The Bot Works And comes online!, and So Bot Activity is Displayed Propley
require('dotenv').config()
const {Client, RichEmbed, Attachment } = require('discord.js');
const client = new Client();
const PREFEX = 'Trash ';
client.on('ready', message => {
    console.log('Logged in to Your Server!')
    console.log(`Logged in as ${client.user.tag}`)
    console.log('Thanks For using my Bot')
    console.log('//IronWolf\\')
    client.user.setActivity('à͟h̵̨́́͘h͡h̛͘͠͏͡ḩ̶̴̕a̧̨̕g̸̡g̵̛̀h̸́͘͢g̛h͝g̷h̸̨̛h̸́͘͢a̴̛͡͠h͢҉a̴̡̛h̛͏a̸h̶̶̢à̢̕͝h̸́h̷̶͜͞ą̧̧a̶͘̕͜', { type: 'LISTENING'});

});
//For Rich Embeds!
//The Code Below Is for The Bot To Watch Chat So it's Aware What Been Typed and Respond Acordingly!
client.on('message', message => {
        let args = message.content.substring(PREFEX.length).split(" ");
        switch (args[0]) {
        case 'can':
            if(args[1] === 'whos')
            if(args[2] === 'Ele?') {
                const embed = new RichEmbed()
                .addField('a̶͢͡g̴͝ḩ́̀͘͡s̶̡̡͡͝g̷̡͡s̷̷̢̢h͘͟ģ̴͞͠h̶̷̢̛a͢h́͘͠a̡̛͝͏h̴̸̡͘͝f͏͝h̴̛͝͡f̢́a̶͢͡g̴͝ḩ́̀͘͡s̶̡̡͡͝g̷̡͡s̷̷̢̢h͘͟ģ̴͞͠h̶̷̢̛a͢h́͘͠a̡̛͝͏h̴̸̡͘͝s̸͞h̵̸́ģ̶͜s͘͝g̷̸̸̕͟f͏͝h̴̛͝͡f̢́', 'a̶͢͡g̴͝ḩ́̀͘͡s̶̡̡͡͝g̷̡͡s̷̷̢̢h͘͟ģ̴͞͠h̶̷̢̛a͢h́͘͠a̡̛͝͏h̴̸̡͘͝s̸͞h̵̸́ģ̶͜s͘͝g̷̸̸̕͟g̴͝ḩ́̀͘͡s̷̷̢̢h͘͟ģ̴͞͠h̶̷̢̛a͢h́͘͠a̡̛͝͏h̴̸̡͘͝s̸͞h̵̸́ģ̶͜s͘͝g̷̸̸̕͟f͏͝h̴̛͝͡f̢́')
                .addField('a̶͢͡g̴͝ḩ́̀͘͡s̶̡̡͡͝g̷̡͡s̷̷̢̢h͘͟ģ̴͞͠h̶̷̢̛a͢h́͘͠a̡̛͝͏h̴̸̡͘͝s̸͞h̵̸́ģ̶͜s͘͝g̷̸̸̕͟s̷̷̢̢h͘͟ģ̴͞͠h̶̷̢̛a͢h́͘͠a̡̛͝͏h̴̸̡͘͝s̸͞h̵̸́ģ̶͜s͘͝g̷̸̸̕͟f͏͝h̴̛͝͡f̢́', 'a̶͢͡g̴͝ḩ́̀͘͡s̶̡̡͡͝g̷̡͡s̷̷̢̢h͘͟ģ̴͞͠h̶̷̢̛a͢h́͘͠a̡̛͝͏h̴̸̡͘͝s̸͞h̵̸́s̶̡̡͡͝g̷̡͡s̷̷̢̢h͘͟ģ̴͞͠ha͢h́͘͠a̡̛͝͏h̴̸̡͘͝s̸͞h̵̸́ģ̶͜s͘͝g̷̸̸̕͟f͏͝h̴̛͝͡f̢́')
                .setColor('0xFF0000')
                .setThumbnail('https://i.imgur.com/SwIsA5z.png')
                message.channel.send(embed)
                break;
            }
        }
})
//This String Needs To Be at The End So it Gets Your Logon Token (Placed In the .ENV File After the 'Bot_Token=', You Can Get a Bot Token By Going to discordapp.com/developers/applications/)
client.login(process.env.Bot_Token)