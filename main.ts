radio.setGroup(1)
game.pause()
for (let index = 0; index < 1; index++) {
    basic.showNumber(12)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
if (true) {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
}
