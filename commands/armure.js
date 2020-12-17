const Command = require('./commands')

module.exports = class Armure extends Command {

    static match(message) {
        return message.content.startsWith('!armure')
    }

    static action(message) {

        let roll
        // ID Role Joueurs

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
            result = "Casque mal ajusté Δ4 (part)"
        }
        else if (roll === 2) {
            result = "Bocle ou bouclier de cuir"
        }
        else if (roll === 3) {
            result = "Tunique en peau et coiffe de fourrure Δ4 (part)"
        }
        else if (roll === 4) {
            result = "Manteau de cuir Δ4 et bouclier rond"
        }
        else if (roll === 5) {
            result = "Gambison ou cuir matelassé Δ4 (part)"
        }
        else if (roll === 6) {
            result = "Cuir bouilli Δ6"
        }
        else if (roll === 7) {
            result = "Harnais en cuir Δ6"
        }
        else if (roll === 8) {
            result = "Cuir clouté Δ6 avec bouclier"
        }
        else if (roll === 9) {
            result = "Plastron Δ6"
        }
        else if (roll === 10) {
            result = "Brigandine Δ8"
        }
        else if (roll === 11) {
            result = "Broigne à écailles ou lorique Δ8"
        }
        else if (roll === 12) {
            result = "Plastron avec casque Δ8 et bouclier"
        }
        else if (roll === 13) {
            result = "Cotte de mailles avec heaume Δ8"
        }
        else if (roll === 14) {
            result = "Mailles et cuir avec bouclier Δ8"
        }
        else if (roll === 15) {
            result = "Haubert avec bouclier rond Δ8"
        }
        else if (roll === 16) {
            result = "Armure de plaques composite rouillée Δ10"
        }
        else if (roll === 17) {
            result = "Plastron et chemise de mailles avec camail Δ10"
        }
        else if (roll === 18) {
            result = "Armure de plaques lourde Δ10 avec pavois"
        }
        else if (roll === 19) {
            result = "Armure d’apparat Δ10 avec bouclier normand"
        }
        else if (roll === 20) {
            result = "Plate complète Δ10 et écu"
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Armures",
                    description: roll + ". " + result + "\n\n*si (part) :  Combiné avec une autre armure pour augmenter le dé de risque jusqu’à un maximum de Δ10*"
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Armures",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
