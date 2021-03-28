input.onGesture(Gesture.Shake, function () {
    de = randint(1, 6)
    if (de == 1) {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
    }
    if (de == 2) {
        images.createImage(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `).showImage(0)
    }
    if (de == 3) {
        images.createImage(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `).showImage(0)
    }
    if (de == 4) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `).showImage(0)
    }
    if (de == 5) {
        images.createImage(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `).showImage(0)
    }
    if (de == 6) {
        images.createImage(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `).showImage(0)
    }
})
let de = 0
de = 1
