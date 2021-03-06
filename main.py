def on_button_pressed_a():
    global licht
    licht += -1
    basic.show_string("" + str((licht)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global licht
    licht += 1
    basic.show_string("" + str((licht)))
input.on_button_pressed(Button.B, on_button_pressed_b)

licht = 0
licht = 25

def on_forever():
    if input.light_level() > licht:
        basic.show_icon(IconNames.HEART)
    else:
        basic.show_icon(IconNames.SMALL_HEART)
        for index in range(10):
            pins.digital_write_pin(DigitalPin.P1, 1)
            basic.pause(50)
            pins.digital_write_pin(DigitalPin.P1, 0)
            basic.pause(50)
            servos.P0.set_angle(180)
            basic.pause(600)
            servos.P0.set_angle(0)
basic.forever(on_forever)
