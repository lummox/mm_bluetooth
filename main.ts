input.onButtonPressed(Button.A, function () {
    licht += -2
    basic.showString("" + (licht))
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    licht += 2
    basic.showString("" + (licht))
    basic.pause(500)
})
let licht = 0
licht = input.lightLevel() - 230
servos.P2.run(50)
basic.pause(1000)
servos.P0.run(-50)
basic.pause(1000)
servos.P2.stop()
basic.forever(function () {
    if (input.lightLevel() > licht) {
        servos.P0.stop()
        basic.showString("M")
    } else {
        basic.showIcon(IconNames.SmallHeart)
        for (let index = 0; index < 10; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(50)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(50)
        }
        servos.P0.setAngle(180)
        basic.pause(600)
        servos.P0.setAngle(0)
        servos.P2.run(50)
        basic.pause(1000)
        servos.P2.run(-50)
        basic.pause(1000)
        servos.P2.stop()
    }
})
