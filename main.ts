radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # # # #
            . # # # .
            . # # # .
            `)
    } else if (receivedNumber == 9) {
        if (true) {
            basic.showString("Bruh")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(9)
})
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
radio.setGroup(7)
basic.forever(function () {
	
})
