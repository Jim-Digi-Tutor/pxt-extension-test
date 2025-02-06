input.onButtonPressed(Button.A, function () {
    jimTest.playSomething()
})
basic.forever(function () {
    basic.showString("" + (jimTest.testFunction(5)))
})
