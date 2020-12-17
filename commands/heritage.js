const Command = require('./commands')

module.exports = class Heritage extends Command {

    static match(message) {
        return message.content.startsWith('!heritage')
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
            result = "Une malédiction! Votre sang transporte quelque chose comme la lycanthropie ou un comportement passif - agressif."
        }
        else if (roll === 2) {
            result = "Un bouton de culotte lustré, transmis d’une génération à l’autre."
        }
        else if (roll === 3) {
            result = "La moitié d’une carte… au trésor, peut - être ? C’est difficile à dire tant que vous n’avez pas l’autre moitié."
        }
        else if (roll === 4) {
            result = "La hache de bataille de grand - papi(d6).Elle est usée et mal équilibrée, mais toujours efficace."
        }
        else if (roll === 5) {
            result = "Une caisse de vin rouge millésimé qui a été conservée pour une occasion spéciale.Elle vaut Δ8 argent."
        }
        else if (roll === 6) {
            result = "L’épée de maman(d8).Elle a un nom, une histoire et peut - être un pouvoir magique mineur."
        }
        else if (roll === 7) {
            result = "L’acte de propriété d’une mine, quelque part au fin fond des marches du royaume."
        }
        else if (roll === 8) {
            result = "Un titre de noblesse mineur(chevalier, baronnet, chef de clan, patricien, etc.) et guère plus."
        }
        else if (roll === 9) {
            result = "Votre ancêtre a fabriqué cette flèche qui ne rate jamais sa cible(d8).Elle n’a jamais été utilisée."
        }
        else if (roll === 10) {
            result = "Un héritage considérable(ou Δ12) d’une lointaine tante.Mais il y a une condition à remplir."
        }
        else if (roll === 11) {
            result = "La formule d’un sort unique et puissant.Ça vaut très cher pour certaines personnes."
        }
        else if (roll === 12) {
            result = "Un titre de noblesse(raïs, vicomte, duchesse, khan, etc.) et un garde du corps(Δ10)."
        }
        else if (roll === 13) {
            result = "Une énorme cafetière magique.Elle produit un café si délicieux que vous pouvez le faire payer très cher."
        }
        else if (roll === 14) {
            result = "La clef de la tour d’un archimage et le mot de commande de… quelque chose."
        }
        else if (roll === 15) {
            result = "La faucheuse de fléaux(d12), une arme puissante destinée à sauver le monde.Supposément."
        }
        else if (roll === 16) {
            result = "Le véritable nom d’une princesse démone et un ensemble incomplet d’instructions pour l’utiliser."
        }
        else if (roll === 17) {
            result = "Une orchidée magique et parlante qui connaît le chemin vers un jardin merveilleux."
        }
        else if (roll === 18) {
            result = "Du sang divin, mais pas de pouvoirs magiques.Certains cultes vous portent un intérêt tout particulier."
        }
        else if (roll === 19) {
            result = "Une part dans une société de commerce planaire.Chaque année, vous recevez des dividendes(platine Δ6)."
        }
        else if (roll === 20) {
            result = "Le trône! Enfin, vous êtes bien placé dans l’ordre de succession."
        }

        if (roll !== false) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Héritages",
                    description: roll + ". " + result
                }
            })
        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Héritages",
                    description: "Veuillez indiquer un dé valide."
                }
            })
        }
    }

}
