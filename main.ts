input.onButtonPressed(Button.A, function () {
    Start = true
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    Start = false
})
let Start = false
basic.showIcon(IconNames.Chessboard)
loops.everyInterval(500, function () {
    if (Start) {
        datalogger.log(datalogger.createCV("Temp", input.temperature()))
    }
})
basic.forever(function () {
	
})
