let screensaver = true
// Each Screensaver function updates the pixels on the LED matrix
let row = 0
let column = 0
let counter = 0
let on = true
function fallingblocks() {
    if (wait >= 20) {
        wait = 0
        if (on) {
            if (row == 4 && column == 4 && counter == 1) {
                on = false
                row = 0
                column = 0
                counter = 0
            } else {
                if (counter == 5 - column && row == 4) {
                    counter = 0
                    row = 0
                    column++
                } else if (counter == 5 - column) {
                    counter = 0
                    row++
                } else {
                }
                counter++
                if (counter > 1) {
                    led.unplot(row, counter - 2)
                    led.plot(row, counter - 1)
                } else if (counter == 1) {
                    led.plot(row, counter - 1)
                }
            }
        } else {
            if (row == 4 && column == 4 && counter == 1) {
                on = true
                row = 0
                column = 0
                counter = 0
            } else {
                if (counter == 5 - column && row == 4) {
                    counter = 0
                    row = 0
                    column++
                } else if (counter == 5 - column) {
                    counter = 0
                    row++
                } else {
                }
                counter++
                if (counter > 1) {
                    led.plot(row, counter - 2)
                    led.unplot(row, counter - 1)
                } else if (counter == 1) {
                    led.unplot(row, counter - 1)
                }
            }
        }
    } else {
        wait++
    }
}
let rotations = 0
let wait = 0
function spinningwheel() {
    if (wait >= 4) {
        wait = 0
        rotations++
        if (rotations == 1) {
            led.unplot(0, 0)
            led.unplot(0, 1)
            led.unplot(0, 2)
            led.unplot(1, 0)
            led.unplot(1, 2)
            led.unplot(2, 1)
            led.plot(1, 1)
            led.plot(2, 0)
            led.plot(2, 2)
            led.plot(3, 1)
        } else if (rotations == 2) {
            led.plot(1, 0)
            led.plot(1, 2)
            led.plot(3, 0)
            led.plot(3, 2)
        } else if (rotations == 3) {
            led.unplot(1, 0)
            led.unplot(1, 1)
            led.unplot(1, 2)
            led.unplot(2, 0)
            led.unplot(2, 2)
            led.unplot(3, 1)
            led.plot(2, 1)
            led.plot(4, 1)
        } else if (rotations == 4) {
            led.plot(2, 0)
            led.plot(2, 2)
            led.plot(4, 0)
            led.plot(4, 2)
        } else if (rotations == 5) {
            led.unplot(2, 0)
            led.unplot(2, 1)
            led.unplot(3, 0)
            led.unplot(3, 2)
            led.unplot(4, 0)
            led.unplot(4, 1)
            led.plot(3, 1)
            led.plot(3, 3)
        } else if (rotations == 6) {
            led.plot(2, 1)
            led.plot(2, 3)
            led.plot(4, 1)
            led.plot(4, 3)
        } else if (rotations == 7) {
            led.unplot(2, 1)
            led.unplot(2, 2)
            led.unplot(3, 1)
            led.unplot(3, 3)
            led.unplot(4, 1)
            led.unplot(4, 2)
            led.plot(3, 2)
            led.plot(3, 4)
        } else if (rotations == 8) {
            led.plot(2, 2)
            led.plot(2, 4)
            led.plot(4, 2)
            led.plot(4, 4)
        } else if (rotations == 9) {
            led.unplot(2, 3)
            led.unplot(3, 2)
            led.unplot(3, 4)
            led.unplot(4, 2)
            led.unplot(4, 3)
            led.unplot(4, 4)
            led.plot(1, 3)
            led.plot(3, 3)
        } else if (rotations == 10) {
            led.plot(1, 2)
            led.plot(1, 4)
            led.plot(3, 2)
            led.plot(3, 4)
        } else if (rotations == 11) {
            led.unplot(1, 3)
            led.unplot(2, 2)
            led.unplot(2, 4)
            led.unplot(3, 2)
            led.unplot(3, 3)
            led.unplot(3, 4)
            led.plot(0, 3)
            led.plot(2, 3)
        } else if (rotations == 12) {
            led.plot(0, 2)
            led.plot(0, 4)
            led.plot(2, 2)
            led.plot(2, 4)
        } else if (rotations == 13) {
            led.unplot(0, 3)
            led.unplot(0, 4)
            led.unplot(1, 2)
            led.unplot(1, 4)
            led.unplot(2, 3)
            led.unplot(2, 4)
            led.plot(1, 1)
            led.plot(1, 3)
        } else if (rotations == 14) {
            led.plot(0, 1)
            led.plot(0, 3)
            led.plot(2, 1)
            led.plot(2, 3)
        } else if (rotations == 15) {
            led.unplot(0, 2)
            led.unplot(0, 3)
            led.unplot(1, 1)
            led.unplot(1, 3)
            led.unplot(2, 2)
            led.unplot(2, 3)
            led.plot(1, 0)
            led.plot(1, 2)
        } else if (rotations == 16) {
            led.plot(0, 0)
            led.plot(0, 2)
            led.plot(2, 0)
            led.plot(2, 2)
            rotations = 0
        } else {
            rotations++
        }
    } else {
        wait++
    }
}
let waveposition = 2
let waveform0 = 2
let waveform1 = 2
let waveform2 = 2
let waveform3 = 2
let waveform4 = 2
let wavedirection = true
let wavechange = false
function wave() {
    if (wait >= 30) {
        wait = 0
        wavedirection = Math.randomBoolean()
        wavechange = Math.randomBoolean()
        led.unplot(0, waveform0)
        led.unplot(1, waveform1)
        led.unplot(2, waveform2)
        led.unplot(3, waveform3)
        led.unplot(4, waveform4)
        if (wavedirection && wavechange && waveposition < 4) {
            waveposition++
        } else if (!wavedirection && wavechange && waveposition > 0) {
            waveposition = waveposition - 1
        } else { }
        waveform0 = waveform1
        waveform1 = waveform2
        waveform2 = waveform3
        waveform3 = waveform4
        waveform4 = waveposition
        led.plot(0, waveform0)
        led.plot(1, waveform1)
        led.plot(2, waveform2)
        led.plot(3, waveform3)
        led.plot(4, waveform4)
    } else {
        wait++
    }
}
let dposition = 0
function descend() {
    if (wait >= 20) {
        wait = 0
        if (dposition == 0) {
            led.unplot(0, 2)
            led.unplot(1, 0)
            led.unplot(1, 3)
            led.unplot(2, 1)
            led.unplot(2, 4)
            led.unplot(3, 0)
            led.unplot(3, 3)
            led.unplot(4, 2)
            led.plot(0, 1)
            led.plot(0, 4)
            led.plot(1, 2)
            led.plot(2, 0)
            led.plot(2, 3)
            led.plot(3, 2)
            led.plot(4, 1)
            led.plot(4, 4)
            dposition++
        } else if (dposition == 1) {
            led.unplot(0, 1)
            led.unplot(0, 4)
            led.unplot(1, 2)
            led.unplot(2, 0)
            led.unplot(2, 3)
            led.unplot(3, 2)
            led.unplot(4, 1)
            led.unplot(4, 4)
            led.plot(0, 0)
            led.plot(0, 3)
            led.plot(1, 1)
            led.plot(1, 4)
            led.plot(2, 2)
            led.plot(3, 1)
            led.plot(3, 4)
            led.plot(4, 0)
            led.plot(4, 3)
            dposition++
        } else if (dposition == 2) {
            led.unplot(0, 0)
            led.unplot(0, 3)
            led.unplot(1, 1)
            led.unplot(1, 4)
            led.unplot(2, 2)
            led.unplot(3, 1)
            led.unplot(3, 4)
            led.unplot(4, 0)
            led.unplot(4, 3)
            led.plot(0, 2)
            led.plot(1, 0)
            led.plot(1, 3)
            led.plot(2, 1)
            led.plot(2, 4)
            led.plot(3, 0)
            led.plot(3, 3)
            led.plot(4, 2)
            dposition = 0
        }
    } else {
        wait++
    }
}
let gamereset = true
let first = false
let second = false
let xposition = 0
let yposition = 0
let direction = true
let xydirectionselector = true
let obstacle1x = 0
let obstacle1y = 0
let obstacle2x = 0
let obstacle2y = 0
let obstacle3x = 0
let obstacle3y = 0
function wanderer() {
    if (wait >= 40) {
        wait = 0
        if (gamereset) {
            obstacle1x = Math.randomRange(0, 4)
            obstacle1y = Math.randomRange(0, 4)
            obstacle2x = Math.randomRange(0, 4)
            obstacle2y = Math.randomRange(0, 4)
            obstacle3x = Math.randomRange(0, 4)
            obstacle3y = Math.randomRange(0, 4)
            if (obstacle1x == obstacle2x && obstacle1y == obstacle2y) {
                obstacle2x++
                if (obstacle2x > 4) {
                    obstacle2x = 0
                }
            } else if (obstacle1x == obstacle3x && obstacle1y == obstacle3y) {
                obstacle3y++
                if (obstacle3y > 4) {
                    obstacle3y = 0
                }
            }
            if (obstacle2x == obstacle3x && obstacle2y == obstacle3y) {
                obstacle3x++
                if (obstacle3x > 4) {
                    obstacle3x = 0
                }
            }
            xposition = 0
            yposition = 0
            xydirectionselector = true
            direction = true
            if (xposition == obstacle1x && yposition == obstacle1y) {
                xposition = 4
                xydirectionselector = false
                if (xposition == obstacle2x && yposition == obstacle2y) {
                    yposition = 4
                    xydirectionselector = true
                    direction = false
                    if (xposition == obstacle3x && yposition == obstacle3y) {
                        xposition = 0
                        xydirectionselector = false
                    } else {}
                } else {}
            } else if (xposition == obstacle2x && yposition == obstacle2y) {
                yposition = 4
                xydirectionselector = false
                direction = false
                if (xposition == obstacle1x && yposition == obstacle1y) {
                    xposition = 4
                    xydirectionselector = true
                    if (xposition == obstacle3x && yposition == obstacle3y) {
                        yposition = 0
                        xydirectionselector = false
                        direction = true
                    } else {}
                } else {}
            } else if (xposition == obstacle3x && yposition == obstacle3y) {
                xposition = 4
                yposition = 4
                direction = false
                if (xposition == obstacle1x && yposition == obstacle1y) {
                    xposition = 0
                    xydirectionselector = false
                    if (xposition == obstacle2x && yposition == obstacle2y) {
                        xposition = 4
                        yposition = 0
                        direction = true
                    } else {}
                } else {}
            } else {}
            led.plot(obstacle1x, obstacle1y)
            led.plot(obstacle2x, obstacle2y)
            led.plot(obstacle3x, obstacle3y)
            gamereset = false
        } else {
            if (xydirectionselector && direction) {
                if ((xposition + 1 == obstacle1x && yposition == obstacle1y) || xposition > 3) {
                    xydirectionselector = false
                    if (xposition == obstacle2x && yposition + 1 == obstacle2y) {
                        xydirectionselector = true
                        direction = false
                        if (xposition - 1 == obstacle3x && yposition == obstacle3y) {
                            xydirectionselector = false
                        } else {}
                    } else if (xposition == obstacle3x && yposition + 1 == obstacle3y) {
                        xydirectionselector = true
                        direction = false
                        if (xposition - 1 == obstacle2x && yposition == obstacle2y) {
                            xydirectionselector = false
                        } else {}
                    } else {}
                } else if (xposition + 1 == obstacle2x && yposition == obstacle2y) {
                    xydirectionselector = false
                    if (xposition == obstacle1x && yposition + 1 == obstacle1y) {
                        xydirectionselector = true
                        direction = false
                        if (xposition - 1 == obstacle3x && yposition == obstacle3y) {
                            xydirectionselector = false
                        } else {}
                    } else if (xposition == obstacle3x && yposition + 1 == obstacle3y) {
                        xydirectionselector = true
                        direction = false
                        if (xposition - 1 == obstacle1x && yposition == obstacle1y) {
                            xydirectionselector = false
                        } else {}
                    } else {}
                } else if (xposition + 1 == obstacle3x && yposition == obstacle3y) {
                    xydirectionselector = false
                    if (xposition == obstacle2x && yposition + 1 == obstacle2y) {
                        xydirectionselector = true
                        direction = false
                        if (xposition - 1 == obstacle1x && yposition == obstacle1y) {
                            xydirectionselector = false
                        } else {}
                    } else if (xposition == obstacle1x && yposition + 1 == obstacle1y) {
                        xydirectionselector = true
                        direction = false
                        if (xposition - 1 == obstacle2x && yposition == obstacle2y) {
                            xydirectionselector = false
                        } else {}
                    } else {}
                } else {}
            } else if (xydirectionselector && !direction) {
                if ((xposition - 1 == obstacle1x && yposition == obstacle1y) || xposition < 1) {
                    xydirectionselector = false
                    if (xposition == obstacle2x && yposition - 1 == obstacle2y) {
                        xydirectionselector = true
                        direction = true
                        if (xposition + 1 == obstacle3x && yposition == obstacle3y) {
                            xydirectionselector = false
                        } else {}
                    } else if (xposition == obstacle3x && yposition - 1 == obstacle3y) {
                        xydirectionselector = true
                        direction = true
                        if (xposition + 1 == obstacle2x && yposition == obstacle2y) {
                            xydirectionselector = false
                        } else {}
                    } else {}
                } else if (xposition - 1 == obstacle2x && yposition == obstacle2y) {
                    xydirectionselector = false
                    if (xposition == obstacle1x && yposition - 1 == obstacle1y) {
                        xydirectionselector = true
                        direction = true
                        if (xposition + 1 == obstacle3x && yposition == obstacle3y) {
                            xydirectionselector = false
                        } else {}
                    } else if (xposition == obstacle3x && yposition - 1 == obstacle3y) {
                        xydirectionselector = true
                        direction = true
                        if (xposition + 1 == obstacle1x && yposition == obstacle1y) {
                            xydirectionselector = false
                        } else {}
                    } else {}
                } else if (xposition - 1 == obstacle3x && yposition == obstacle3y) {
                    xydirectionselector = false
                    if (xposition == obstacle2x && yposition - 1 == obstacle2y) {
                        xydirectionselector = true
                        direction = true
                        if (xposition + 1 == obstacle1x && yposition == obstacle1y) {
                            xydirectionselector = false
                        } else {}
                    } else if (xposition == obstacle1x && yposition - 1 == obstacle1y) {
                        xydirectionselector = true
                        direction = true
                        if (xposition + 1 == obstacle2x && yposition == obstacle2y) {
                            xydirectionselector = false
                        } else {}
                    } else {}
                } else {}
            } else if (!xydirectionselector && direction) {
                if ((xposition == obstacle1x && yposition + 1 == obstacle1y) || yposition > 3) {
                    xydirectionselector = true
                    direction = false
                    if (xposition - 1 == obstacle2x && yposition == obstacle2y) {
                        xydirectionselector = false
                        if (xposition == obstacle3x && yposition - 1 == obstacle3y) {
                            xydirectionselector = true
                            direction = true
                        } else {}
                    } else if (xposition - 1 == obstacle3x && yposition == obstacle3y) {
                        xydirectionselector = false
                        if (xposition == obstacle2x && yposition - 1 == obstacle2y) {
                            xydirectionselector = true
                            direction = true
                        } else {}
                    } else {}
                } else if (xposition == obstacle2x && yposition + 1 == obstacle2y) {
                    xydirectionselector = true
                    direction = false
                    if (xposition  - 1 == obstacle1x && yposition == obstacle1y) {
                        xydirectionselector = false
                        if (xposition == obstacle3x && yposition - 1 == obstacle3y) {
                            xydirectionselector = true
                            direction = true
                        } else {}
                    } else if (xposition - 1 == obstacle3x && yposition == obstacle3y) {
                        xydirectionselector = false
                        if (xposition == obstacle1x && yposition - 1 == obstacle1y) {
                            xydirectionselector = true
                            direction = true
                        } else {}
                    } else {}
                } else if (xposition == obstacle3x && yposition + 1 == obstacle3y) {
                    xydirectionselector = true
                    direction = false
                    if (xposition - 1 == obstacle2x && yposition == obstacle2y) {
                        xydirectionselector = false
                        if (xposition == obstacle1x && yposition - 1 == obstacle1y) {
                            xydirectionselector = true
                            direction = true
                        } else {}
                    } else if (xposition - 1 == obstacle1x && yposition == obstacle1y) {
                        xydirectionselector = false
                        if (xposition == obstacle2x && yposition - 1 == obstacle2y) {
                            xydirectionselector = true
                            direction = true
                        } else {}
                    } else {}
                } else {}
            } else if (!xydirectionselector && !direction) {
                if ((xposition == obstacle1x && yposition - 1 == obstacle1y) || yposition < 1) {
                    xydirectionselector = true
                    direction = true
                    if (xposition + 1 == obstacle2x && yposition == obstacle2y) {
                        xydirectionselector = false
                        if (xposition == obstacle3x && yposition + 1 == obstacle3y) {
                            xydirectionselector = true
                            direction = false
                        } else {}
                    } else if (xposition + 1 == obstacle3x && yposition == obstacle3y) {
                        xydirectionselector = false
                        if (xposition == obstacle2x && yposition + 1 == obstacle2y) {
                            xydirectionselector = true
                            direction = false
                        } else {}
                    } else {}
                } else if (xposition == obstacle2x && yposition - 1 == obstacle2y) {
                    xydirectionselector = true
                    direction = true
                    if (xposition + 1 == obstacle1x && yposition == obstacle1y) {
                        xydirectionselector = false
                        if (xposition == obstacle3x && yposition + 1 == obstacle3y) {
                            xydirectionselector = true
                            direction = false
                        } else {}
                    } else if (xposition + 1 == obstacle3x && yposition == obstacle3y) {
                        xydirectionselector = false
                        if (xposition == obstacle1x && yposition + 1 == obstacle1y) {
                            xydirectionselector = true
                            direction = false
                        } else {}
                    } else {}
                } else if (xposition == obstacle3x && yposition - 1 == obstacle3y) {
                    xydirectionselector = true
                    direction = true
                    if (xposition + 1 == obstacle2x && yposition == obstacle2y) {
                        xydirectionselector = false
                        if (xposition == obstacle1x && yposition + 1 == obstacle1y) {
                            xydirectionselector = true
                            direction = false
                        } else {}
                    } else if (xposition + 1 == obstacle1x && yposition == obstacle1y) {
                        xydirectionselector = false
                        if (xposition == obstacle2x && yposition + 1 == obstacle2y) {
                            xydirectionselector = true
                            direction = false
                        } else {}
                    } else {}
                } else {}
            } else {}
            led.unplot(xposition, yposition)
            if (xydirectionselector && direction) {
                xposition++
            } else if (xydirectionselector && !direction) {
                xposition = xposition - 1
            } else if (!xydirectionselector && direction) {
                yposition++
            } else if (!xydirectionselector && !direction) {
                yposition = yposition - 1
            } else {}
            led.plot(xposition, yposition)
        }
    } else {
        wait++
    }
}
let screensaverselect = 4
basic.forever(function () {
    if (screensaverselect == 0) {
        fallingblocks()
    } else if (screensaverselect == 1) {
        spinningwheel()
    } else if (screensaverselect == 2) {
        wave()
    } else if (screensaverselect == 3) {
        descend()
    } else if (screensaverselect == 4) {
        wanderer()
    }
    control.waitMicros(1000)
})
