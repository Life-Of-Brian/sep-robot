input.onButtonPressed(Button.A, function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 75, 5)
    basic.pause(1000)
    cuteBot.moveTime(cuteBot.Direction.forward, 100, 5)
    basic.pause(1000)
})
basic.forever(function () {
	
})
