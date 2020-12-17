const Command = require('./commands')

module.exports = class Melee extends Command {

    static match(message) {
        return message.content.startsWith('!melee')
    }

    static action(message) {

        let roll
        // ID Role Joueurs
        if (!message.member.roles.cache.has('746126396891594822')) { return message.channel.send("Tu n'as pas le droit de faire ça.") }
        if (!message.channel.name.startsWith('labo-des-pjs')) { return message.channel.send("Tu ne peux pas faire ça ici.") }

        if (message.content.endsWith('d20')) {
            roll = Math.floor(Math.random() * 20 + 1)
        }
        else if (message.content.endsWith('d12')) {
            roll = Math.floor(Math.random() * 12 + 1)
        }
        else if (message.content.endsWith('d10')) {
            roll = Math.floor(Math.random() * 10 + 1)
        }
        else if (message.content.endsWith('d8')) {
            roll = Math.floor(Math.random() * 8 + 1)
        }
        else if (message.content.endsWith('d6')) {
            roll = Math.floor(Math.random() * 6 + 1)
        }
        else if (message.content.endsWith('d4')) {
            roll = Math.floor(Math.random() * 4 + 1)
        } else {
            roll = false
        }

        let result = ''
        if (roll === 1) {
            result = "Matraque d4 or fourche d6"
        }
        else if (roll === 2) {
            result = "Dague ou poignard d4"
        }
        else if (roll === 3) {
            result = "Fouet ou knout d4"
        }
        else if (roll === 4) {
            result = "Hachette ou marteau d6"
        }
        else if (roll === 5) {
            result = "Vouge ou anicroche d6*"
        }
        else if (roll === 6) {
            result = "Épée courte ou scramasaxe d6"
        }
        else if (roll === 7) {
            result = "Bâton de combat or shillelagh d6"
        }
        else if (roll === 8) {
            result = "Rapière ou sabre d’abordage d6"
        }
        else if (roll === 9) {
            result = "Pique de brèche ou lance d6/d6 (1/2H)"
        }
        else if (roll === 10) {
            result = "Pertuisane ou corsèque d8 (1/2H)"
        }
        else if (roll === 11) {
            result = "Hache danoise ou fléau d8/d8 (1/2H)"
        }
        else if (roll === 12) {
            result = "Épée à une main ou cimeterre d8"
        }
        else if (roll === 13) {
            result = "Sabre ou yatagan d8"
        }
        else if (roll === 14) {
            result = "Pique ou bardiche d8 (1/2H)"
        }
        else if (roll === 15) {
            result = "Bec de corbin ou masse d8 (1/2H)"
        }
        else if (roll === 16) {
            result = "Épée bâtarde ou claymore d8/d8 (1/2H)"
        }
        else if (roll === 17) {
            result = "Marteau de Lucerne ou plommée d10 (1/2H)"
        }
        else if (roll === 18) {
            result = "Hache de Lochaber ou hallebarde d10 (1/2H)"
        }
        else if (roll === 19) {
            result = "Morgenstern ou marteau à trois têtes d10"
        }
        else if (roll === 20) {
            result = "Flamberge ou espadon d10 (1/2H)"
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Armes de mêlée",
                    description: roll + ". " + result + "\n\n*si (1/2H) deux mains : avantage sur les dégâts*"
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Armes de mêlée",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
