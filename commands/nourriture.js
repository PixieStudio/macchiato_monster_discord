const Command = require('./commands')

module.exports = class Nourriture extends Command {

    static match(message) {
        return message.content.startsWith('!nourriture')
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
            result = "Pain et jambon Δ4, sac en tissu déchiré, chaussette remplie de cailloux"
        }
        else if (roll === 2) {
            result = "Biscuits secs et des noix Δ8, besace, couverture, corde Δ10, chapeau de pèlerin"
        }
        else if (roll === 3) {
            result = "Pot de soupe aux escargots Δ6, bœuf de trait Δ8, tapis enroulé, 2 sacs, pied - de - biche"
        }
        else if (roll === 4) {
            result = "Navets bouillis au beurre Δ6, sacoches vides, drap de lit, 2 pièges à ours"
        }
        else if (roll === 5) {
            result = "Saucisse au foie et à la tomate Δ4, torches Δ6, outils de voleur de cadavres Δ8, pointes de fer Δ6"
        }
        else if (roll === 6) {
            result = "Fèves séchées et viande Δ8, outils de calligraphe Δ8, symbole béni Δ6, lanterne et huile Δ8"
        }
        else if (roll === 7) {
            result = "Lapins fraîchement pris Δ4, pièges, sac de couchage, bougies Δ4, jeu de dés"
        }
        else if (roll === 8) {
            result = "Pommes séchées Δ8, chien de berger Δ6, havresac, tente Δ10, torches Δ6"
        }
        else if (roll === 9) {
            result = "Pain de campagne et poisson salé Δ8, grand filet, lettre de marque, menottes"
        }
        else if (roll === 10) {
            result = "Farine de haricots et chevreuil séché Δ4, vieux canasson Δ6, manteau de pluie, torches Δ6"
        }
        else if (roll === 11) {
            result = "Terrine de sanglier et bière Δ6, eau bénite Δ6, outils d’alchimiste Δ8, bougies Δ4"
        }
        else if (roll === 12) {
            result = "Chou farci au canard Δ6, sac de charbon, canne à pêche, jeu de cartes"
        }
        else if (roll === 13) {
            result = "Pain frais et fruits Δ6, lampe, huile Δ4, carte des environs, pelle, échelle de corde"
        }
        else if (roll === 14) {
            result = "Poule vivante dans une cage Δ6, sac de couchage, torches Δ6, ustensiles de cuisine, jeu de tarot marqué"
        }
        else if (roll === 15) {
            result = "Boudin noir et vin bouchonné Δ6, outils de serrurier, havresac, lanterne et huile Δ8"
        }
        else if (roll === 16) {
            result = "Gâteaux au miel et au citron Δ4, vêtements de voyage raffinés, cheval de guerre Δ10, ingrédients magiques Δ6"
        }
        else if (roll === 17) {
            result = "Tourte à la loutre Δ6, outils de courtisan Δ8, cape de qualité, lampe en cristal, huile Δ8, oiseau chanteur en cage"
        }
        else if (roll === 18) {
            result = "Gâteaux de poisson et vin sec Δ6, sac de café Δ8, outils d’arnaqueur, corde Δ10, dés pipés"
        }
        else if (roll === 19) {
            result = "Repas en conserve Δ8, outils d’alchimiste Δ8, chapeau de magicien, lorgnette, ingrédients magiques Δ8"
        }
        else if (roll === 20) {
            result = "Fromage poivré et cidre Δ4, étalon de race Δ12, outils de cartographe Δ8, torches Δ6"
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Équipement et Nourriture",
                    description: roll + ". " + result
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Équipement et Nourriture",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
