import Card from '@/classes/card/Card'

/**
 * A Card that will pretend to be another card but will change the cards effect
 * when played.
 */
export default class TrojanWrapper extends Card {
  /**
   * Constructor for the TrojanWrapper class
   * @constructor Trojan
   * @param {Card} card The card the trojan is hiding behind.
   * @param {Player} player The player that played the trojan.
   */
  constructor (card, player) {
    super(card.type, card.value)
    this.card = card
    this.player = player
    this.isMimic = true
    this.isWrapper = true
  }

  /**
   * Returns a new card to replace the one that was being mimicked.
   */
  replace () {
    let card
    if (this.isSafety() || this.type === "METHOD" || this.type === "INSTRUCTION") {
      card = new Card("RANSOM", 0)
    } else if (this.isAttack() || this.type === "VIRUS") {
      card = new Card("SPYWARE", 0)
    } else {
      card = new Card("VIRUS", 0)
    }
    card.isExtra = true
    return card
  }
}


