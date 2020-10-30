const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => { 
    let role = member.guild.roles.cache.find(role => role.name === 'Torcedor'); 
    member.roles.add(role);
});

client.on('message', msg => {
    if(msg.channel.name === 'comandos') {
        if(msg.content === '!agenda') {
            msg.reply('Em criação da agenda.')
            .then(msg => {
                msg.delete({ timeout: 10000 });
            });
            msg.delete({ timeout: 10000 });
        }
        else if(msg.content === '!nextGame') {
            try {
                
                let nextGame = fs.readFileSync('./nextGame.txt');
                msg.reply('Próximo jogo será : ' + nextGame)
                .then(msg => {
                    msg.delete({ timeout: 10000 }); 
                });
                msg.delete({ timeout: 10000 });
                
            } catch (err) {
                msg.reply('Próximo jogo: não definido.');

            }
        }

        else if(msg.content === '!line') {
            let sunshine = `https://gamersclub.com.br/jogador/135330`;
            msg.reply('A line é composta pela: \nSunshine: ' + sunshine + '\nJoyUme: https://gamersclub.com.br/jogador/521254 \nDienicic: https://gamersclub.com.br/jogador/47043\nLindBR: https://gamersclub.com.br/jogador/788144\nCoala: https://gamersclub.com.br/jogador/193140')
            .then(msg => {
                msg.delete({ timeout: 20000 });
            })
            msg.delete({ timeout: 10000 });
        }

        else if(msg.content === '!contato') {
            msg.delete({ timeout: 10000 });
            msg.reply('Entre em contato através do e-mail: blackphoenixcsgo@gmail.com')
            .then(msg => {
                msg.delete({timeout: 20000});
            })
            msg.delete({ timeout: 10000 });
        }

        else if(msg.content === '!redes') {
            msg.reply("https://bit.ly/blackphoenixcs")
            .then(msg => {
                msg.delete({ timeout: 20000 });
            })
            msg.delete({ timeout: 10000 });
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
                    msg.delete({ timeout: 10000 });
                })
                msg.delete({ timeout: 10000 });

            } catch (err) {
                msg.reply('Erro.')
                .then(msg => {
                    msg.delete({timeout: 20000});
                })
                msg.delete({ timeout: 10000 });

            }
        }

    }

});

client.login(process.env.TOKEN);


