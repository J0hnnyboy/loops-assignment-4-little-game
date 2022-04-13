input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        sprite = game.createSprite(randint(0, 4), 0)
        basic.pause(2000)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        if (sprite.isTouching(sprite)) {
            sprite.delete()
        }
    }
})
let sprite: game.LedSprite = null
let points = 0
sprite = game.createSprite(2, 4)
if (sprite.isTouching(sprite)) {
	
} else {
	
}
