basic.forever(function () {
    if (input.lightLevel() < 30) {
        if (input.buttonIsPressed(Button.A)) {
            servos.P0.setAngle(90)
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            if (input.lightLevel() < 30) {
                servos.P0.setAngle(0)
                music.stopAllSounds()
            }
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            servos.P0.setAngle(0)
        }
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("NOPE!")
        }
    }
})
