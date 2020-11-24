let y = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    y += 1
})
input.onGesture(Gesture.Shake, function () {
    x = 10
    while (x > 0) {
        basic.showNumber(x)
        x += -1
    }
    basic.clearScreen()
    if (y >= 25) {
        basic.showString("WIN")
    } else {
        basic.showString("LOSE")
    }
    y = 0
})
input.onButtonPressed(Button.B, function () {
    y += 1
})
