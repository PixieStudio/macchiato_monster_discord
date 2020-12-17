const Command = require('./commands')

module.exports = class Distance extends Command {

    static match(message) {
        return message.content.startsWith('!distance')
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
            result = "Galets polis d4(sac Δ10)"
        }
        else if (roll === 2) {
            result = "Couteaux de lancer(ceinture Δ4)"
        }
        else if (roll === 3) {
            result = "Fléchettes d6(carquois Δ6)"
        }
        else if (roll === 4) {
            result = "Fronde d4(sac de pierres Δ10)"
        }
        else if (roll === 5) {
            result = "Pistolet arbalète d6(carreaux Δ8)"
        }
        else if (roll === 6) {
            result = "Pistolet de duel Δ6(poudre et balles Δ4)"
        }
        else if (roll === 7) {
            result = "Bolas d4"
        }
        else if (roll === 8) {
            result = "Javelots d6(carquois Δ4)"
        }
        else if (roll === 9) {
            result = "Arc long d8(flèches Δ8)"
        }
        else if (roll === 10) {
            result = "Tromblon Δ8 (splash) (poudre et clous Δ4)"
        }
        else if (roll === 11) {
            result = "Pistolet de cavalerie Δ8(poudre et balles Δ4)"
        }
        else if (roll === 12) {
            result = "Arc de nomade d6(flèches Δ8)"
        }
        else if (roll === 13) {
            result = "Haches de lancer d6(ceinture Δ4)"
        }
        else if (roll === 14) {
            result = "Lourde lame de lancer d8"
        }
        else if (roll === 15) {
            result = "Arbalète à répétition d8(carreaux Δ10)"
        }
        else if (roll === 16) {
            result = "Grenades d10 (splash) (ceinture Δ4)"
        }
        else if (roll === 17) {
            result = "Arbalète de siège d10(carreaux Δ8)"
        }
        else if (roll === 18) {
            result = "Propulseur d8(javelots Δ6)"
        }
        else if (roll === 19) {
            result = "Arquebuse Δ8(poudre et balles Δ8)"
        }
        else if (roll === 20) {
            result = "Mousquet Δ10(poudre et balles Δ6)"
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Armes à distance",
                    description: roll + ". " + result + "\n\n*si (splash) : Touche plusieurs cibles avec l'accord de l'arbritre*"
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Armes à distance",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
