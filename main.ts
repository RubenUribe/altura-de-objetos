input.onButtonPressed(Button.A, function () {
    basic.showNumber(angulo)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(alturaObjeto)
})
let alturaObjeto = 0
let angulo = 0
let alturaOjo = 1.22
let distanciaObjeto = 1.8
basic.forever(function () {
    angulo = input.rotation(Rotation.Pitch)
    alturaObjeto = Math.tan(angulo * 3.14 / 0) * 1.8 + 1.22
    serial.writeValue("angulo", angulo)
    serial.writeValue("altura", alturaObjeto)
    basic.pause(500)
})
