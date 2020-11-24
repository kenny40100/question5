input.onButtonPressed(Button.A, function () {
    y += 1
})
input.onButtonPressed(Button.B, function () {
    y += 1
})
let y = 0
let x = 10
while (x > 0) {
    basic.showNumber(x)
    x += -1
}
if (y >= 50) {
    basic.showString("win")
} else {
    basic.showString("lose")
}
basic.forever(function () {
	
})
