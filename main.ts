input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.Strength))
})
