input.onButtonPressed(Button.A, function () {
    r = 0
    g = 0
    b = 0
    for (let index = 0; index < 255; index++) {
        r = 1
        b = -1
        strip.showColor(neopixel.rgb(r, g, b))
        basic.pause(10)
    }
    for (let index = 0; index < 255; index++) {
        g = 1
        r = -1
        strip.showColor(neopixel.rgb(r, g, b))
        basic.pause(10)
    }
    for (let index = 0; index < 255; index++) {
        b = 1
        g = -1
        strip.showColor(neopixel.rgb(r, g, b))
        basic.pause(10)
    }
})
let b = 0
let g = 0
let r = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 120, NeoPixelMode.RGB)
