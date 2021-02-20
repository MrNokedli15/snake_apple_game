input.onButtonPressed(Button.A, function () {
    kigyo.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    kigyo.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    kigyo.move(1)
})
let kigyo: game.LedSprite = null
game.startCountdown(100000)
kigyo = game.createSprite(2, 2)
let alma = game.createSprite(randint(0, 4), randint(0, 4))
let beton = game.createSprite(2, 3)
basic.forever(function () {
    beton.move(-1)
    basic.pause(500)
    if (beton.isTouchingEdge()) {
        beton.move(4)
        basic.pause(500)
    }
    if (kigyo.isTouching(alma)) {
        game.addScore(1)
    }
    if (kigyo.isTouching(alma)) {
        alma.delete()
        alma = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (game.score() > 50) {
        basic.showString("nyetél")
    }
    if (kigyo.isTouching(beton)) {
        game.gameOver()
    }
})
