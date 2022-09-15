radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(1)
