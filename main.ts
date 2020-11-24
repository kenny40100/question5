let y = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    y += 1
})
input.onButtonPressed(Button.AB, function () {
    x = 10
    while (x > 0) {
        basic.showNumber(x)
        x += -1
    }
    basic.clearScreen()
    if (y >= 50) {
        basic.showString("WIN")
    } else {
        basic.showString("LOSE")
    }
})
input.onButtonPressed(Button.B, function () {
    y += 1
})
