// Function to create a unique object id
const uuidV1 = require('uuid/v1')

export default class StatusEffect {
  constructor (type, playerId) {
    this.id = uuidV1()
    this.type = type
    this.playerId = playerId
    this.turnsLeft = -1
    this.image = 'static/cardImages/effects/' + type + '.png'
  }

  update () {
    if (this.turnsLeft > 0) {
      this.turnsLeft--
    }
  }

  isActive () {
    if (this.turnsLeft === 0) {
      return false
    }
    return true
  }

  destroy () {}
}


