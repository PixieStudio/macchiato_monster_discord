const Command = require('./commands')

module.exports = class Richesses extends Command {

    static match(message) {
        return message.content.startsWith('!richesse')
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
            result = "Un morceau de cordelette et une dent"
        }
        else if (roll === 2) {
            result = "Un sac de longs clous rouillés"
        }
        else if (roll === 3) {
            result = "Des fourrures d’une valeur de cuivre Δ10"
        }
        else if (roll === 4) {
            result = "Une poche pleine de piécettes de cuivre Δ6"
        }
        else if (roll === 5) {
            result = "Une longueur de soie valant argent Δ10"
        }
        else if (roll === 6) {
            result = "Des urnes funéraires valant argent Δ6"
        }
        else if (roll === 7) {
            result = "Une pile de lettres codées et bourse de pièces d’argent Δ4"
        }
        else if (roll === 8) {
            result = "Une bourse en cuir remplie de pièces d’argent Δ8"
        }
        else if (roll === 9) {
            result = "Des livres religieux valant argent Δ12"
        }
        else if (roll === 10) {
            result = "Une escarcelle de pièces argent Δ10"
        }
        else if (roll === 11) {
            result = "Des bijoux volés valant argent Δ12"
        }
        else if (roll === 12) {
            result = "Une bourse brodée de pièces d’électrum Δ6"
        }
        else if (roll === 13) {
            result = "Des vêtements raffinés valant électrum Δ8"
        }
        else if (roll === 14) {
            result = "Un lingot d’électrum Δ10"
        }
        else if (roll === 15) {
            result = "Une aumônière en velours contenant des pièces d’électrum Δ10"
        }
        else if (roll === 16) {
            result = "Une bague valant or Δ8"
        }
        else if (roll === 17) {
            result = "Une ceinture porte - monnaie contenant des pièces d’or Δ6"
        }
        else if (roll === 18) {
            result = "Un lingot de platine Δ4"
        }
        else if (roll === 19) {
            result = "Une lourde statuette valant platine Δ6"
        }
        else if (roll === 20) {
            result = "Un parchemin magique rare valant or Δ12"
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Richesses et objets de valeur",
                    description: roll + ". " + result
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Richesses et objets de valeur",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
