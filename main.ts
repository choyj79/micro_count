input.onGesture(Gesture.Shake, function () {
    count += 1
})
basic.showNumber(0)
let count = 0
basic.forever(function () {
    basic.showNumber(count)
})
