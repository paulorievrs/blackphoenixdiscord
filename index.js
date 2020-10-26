const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.channel.name === 'comandos') {
        if(msg.content === '!agenda') {
            msg.reply('Em criação da agenda.');
        }
        if(msg.content === '!nextGame') {
            try {
                
                let nextGame = fs.readFileSync('./nextGame.txt');
                msg.reply('Próximo jogo será : ' + nextGame)
                .then(msg => {
                    msg.delete({timeout: 10000})
                });
                msg.delete({timeout: 10000})
                
            } catch (err) {
                msg.reply('Próximo jogo: não definido.');

            }
        }
        if(msg.author.id === '282642062103543808') {
            if(msg.content.split(" ")[0] === '!addNextGame') {
                try {
                    let splited = msg.content.split(" ");
                    let nextGame = "";
                    for(let i = 1; i < splited.length; i++) {
                        nextGame += splited[i] + " ";
                    }
                    fs.writeFileSync('./nextGame.txt', nextGame, err => {
                        console.log(err);
                    });
                    msg.reply('Adicionado com sucesso.')
                    .then(msg => {
                        msg.delete({timeout: 10000})
                    })

                } catch (err) {
                    msg.reply('Erro.')
                    .then(msg => {
                        msg.delete({timeout: 30000})
                    })

                }
            }

            if(msg.content === '!line') {
                let sunshine = `https://gamersclub.com.br/jogador/135330`;
                msg.reply('A line é composta pela: \nSunshine: ' + sunshine + '\nJoyUme: https://gamersclub.com.br/jogador/521254 \n Dienicic: https://gamersclub.com.br/jogador/47043\nLindBR: https://gamersclub.com.br/jogador/788144\nCoala: https://gamersclub.com.br/jogador/193140')
                .then(msg => {
                    msg.delete({timeout: 30000})
                })
            }
        }

        
    }

});

client.login('NzY5NzEwODU5MDMwMjMzMDg5.X5S_GQ.RbZZk1hVBhQ73bVKsSPoban3Dwc');