namespace SpriteKind {
    export const CircleEnemy = SpriteKind.create()
    export const heroProjectile = SpriteKind.create()
    export const Armor = SpriteKind.create()
    export const Weapon = SpriteKind.create()
    export const Marker = SpriteKind.create()
    export const TopLeftMarker = SpriteKind.create()
    export const TopRightMarker = SpriteKind.create()
    export const BotLeftMarker = SpriteKind.create()
    export const BotRightMarker = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BotLeftMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(controller.B.isPressed())) {
        if (!(bBotLeft)) {
            mySprite = sprites.create(assets.image`CycloneCorner1`, SpriteKind.Player)
            bBotLeft = 1
        } else {
            resetLevel()
        }
    }
})
sprites.onOverlap(SpriteKind.heroProjectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(10)
    statusbar.value += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.down.isPressed()) && (!(controller.right.isPressed()) && !(controller.left.isPressed()))) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
        mySprite3 = sprites.create(assets.image`Cyclone0`, SpriteKind.Weapon)
        mySprite2 = sprites.create(assets.image`laser0`, SpriteKind.heroProjectile)
        mySprite2.setVelocity(0, -1 * laserV)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar.value += statusBarPct
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.TopRightMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(controller.B.isPressed())) {
        if (!(bTopRight)) {
            mySprite = sprites.create(assets.image`CycloneCorner0`, SpriteKind.Player)
            bTopRight = 1
        } else {
            resetLevel()
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    armorSprite = sprites.create(assets.image`Armor`, SpriteKind.Armor)
})
function createTestMarkers (x: number, y: number, r: number) {
    mySprite7 = sprites.create(assets.image`Marker2`, SpriteKind.Marker)
    mySprite7.setPosition(120, 30)
    mySprite7 = sprites.create(assets.image`Marker3`, SpriteKind.Marker)
    mySprite7.setPosition(120, 90)
    mySprite7 = sprites.create(assets.image`Marker4`, SpriteKind.Marker)
    mySprite7.setPosition(40, 30)
    mySprite7 = sprites.create(assets.image`Marker`, SpriteKind.Marker)
    mySprite7.setPosition(40, 90)
    mySprite = sprites.create(assets.image`CycloneCorners`, SpriteKind.TopLeftMarker)
    mySprite = sprites.create(assets.image`CycloneCorners0`, SpriteKind.TopRightMarker)
    mySprite = sprites.create(assets.image`CycloneCorners1`, SpriteKind.BotLeftMarker)
    mySprite = sprites.create(assets.image`CycloneCorners2`, SpriteKind.BotRightMarker)
    mySprite = sprites.create(assets.image`Cyclone`, SpriteKind.Player)
    mySprite = sprites.create(assets.image`Cyclone8`, SpriteKind.Player)
    mySprite = sprites.create(assets.image`Cyclone9`, SpriteKind.Player)
    mySprite = sprites.create(assets.image`Cyclone10`, SpriteKind.Player)
    mySprite = sprites.create(assets.image`Cyclone11`, SpriteKind.Player)
}
function doExplosion () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopRightMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotRightMarker)
    mySprite = sprites.create(assets.image`Cyclone`, SpriteKind.Player)
    if (bTopLeft) {
        mySprite2 = sprites.create(assets.image`CycloneCorner`, SpriteKind.TopLeftMarker)
    } else {
        mySprite2 = sprites.create(assets.image`CycloneCorners`, SpriteKind.TopLeftMarker)
    }
    mySprite2.setVelocity(-50, -50)
    if (bTopHit) {
        mySprite3 = sprites.create(assets.image`Cyclone6`, SpriteKind.Player)
    } else {
        mySprite3 = sprites.create(assets.image`Cyclone8`, SpriteKind.Player)
    }
    mySprite3.setVelocity(0, -50)
    if (bTopRight) {
        mySprite4 = sprites.create(assets.image`CycloneCorner0`, SpriteKind.TopRightMarker)
    } else {
        mySprite4 = sprites.create(assets.image`CycloneCorners0`, SpriteKind.TopRightMarker)
    }
    mySprite4.setVelocity(50, -50)
    if (bLeftHit) {
        mySprite5 = sprites.create(assets.image`Cyclone4`, SpriteKind.Player)
    } else {
        mySprite5 = sprites.create(assets.image`Cyclone10`, SpriteKind.Player)
    }
    mySprite5.setVelocity(-50, 0)
    if (bRightHit) {
        mySprite6 = sprites.create(assets.image`Cyclone5`, SpriteKind.Player)
    } else {
        mySprite6 = sprites.create(assets.image`Cyclone11`, SpriteKind.Player)
    }
    mySprite6.setVelocity(50, 0)
    if (bBotLeft) {
        mySprite7 = sprites.create(assets.image`CycloneCorner1`, SpriteKind.BotLeftMarker)
    } else {
        mySprite7 = sprites.create(assets.image`CycloneCorners1`, SpriteKind.BotLeftMarker)
    }
    mySprite7.setVelocity(-50, 50)
    if (bBottomHit) {
        mySprite8 = sprites.create(assets.image`Cyclone7`, SpriteKind.Player)
    } else {
        mySprite8 = sprites.create(assets.image`Cyclone9`, SpriteKind.Player)
    }
    mySprite8.setVelocity(0, 50)
    if (bBotRight) {
        mySprite9 = sprites.create(assets.image`CycloneCorner2`, SpriteKind.BotRightMarker)
    } else {
        mySprite9 = sprites.create(assets.image`CycloneCorners2`, SpriteKind.BotRightMarker)
    }
    mySprite9.setVelocity(50, 50)
    pause(1000)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.up.isPressed()) && (!(controller.down.isPressed()) && !(controller.right.isPressed()))) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
        mySprite3 = sprites.create(assets.image`Cyclone3`, SpriteKind.Weapon)
        mySprite2 = sprites.create(assets.image`laser1`, SpriteKind.heroProjectile)
        mySprite2.setVelocity(-1 * laserV, 0)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar.value += statusBarPct
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.TopLeftMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(controller.B.isPressed())) {
        if (!(bTopLeft)) {
            mySprite = sprites.create(assets.image`CycloneCorner`, SpriteKind.Player)
            bTopLeft = 1
        } else {
            resetLevel()
        }
    }
})
sprites.onOverlap(SpriteKind.CircleEnemy, SpriteKind.heroProjectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(100)
    killCtr += 1
    bCircleCreated = 0
    statusbar.value += 1
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite.x >= 70 && sprite.x < 80) {
        if (bLeftHit) {
            resetLevel()
        } else {
            bLeftHit = 1
            mySprite = sprites.create(assets.image`Cyclone4`, SpriteKind.Player)
        }
    }
    if (sprite.x >= 85 && sprite.x < 90) {
        if (bRightHit) {
            resetLevel()
        } else {
            bRightHit = 1
            mySprite = sprites.create(assets.image`Cyclone5`, SpriteKind.Player)
        }
    }
    if (sprite.y >= 50 && sprite.y < 60) {
        if (bTopHit) {
            resetLevel()
        } else {
            bTopHit = 1
            mySprite = sprites.create(assets.image`Cyclone6`, SpriteKind.Player)
        }
    }
    if (sprite.y >= 65 && sprite.y < 70) {
        if (bBottomHit) {
            resetLevel()
        } else {
            bBottomHit = 1
            mySprite = sprites.create(assets.image`Cyclone7`, SpriteKind.Player)
        }
    }
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Armor, function (sprite, otherSprite) {
    sprite.destroy()
})
function resetVariables () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.CircleEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.heroProjectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Armor)
    sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
    sprites.destroyAllSpritesOfKind(SpriteKind.Marker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopRightMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotRightMarker)
    statusbar.value = 100
    bCreated = 0
    bCreated2 = 0
    bCreated3 = 0
    bCreated4 = 0
    bCircleCreated = 0
    bShot = 0
    bShot2 = 0
    bShot3 = 0
    bShot4 = 0
    bShot5 = 0
    bLeftHit = 0
    bRightHit = 0
    bTopHit = 0
    bBottomHit = 0
    bTopLeft = 0
    bTopRight = 0
    bBotLeft = 0
    bBotRight = 0
    createTestMarkers(scene.screenWidth(), scene.screenHeight(), 2)
}
function resetLevel () {
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Food)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.heroProjectile)
    Lifectr += -1
    textSprite.destroy()
    displayLife()
    doExplosion()
    if (Lifectr > 0) {
        game.splash("Replay Wave! Level:", curLevel)
    } else {
        game.splash("Good game! Try again!", curLevel)
        game.over(false)
    }
    resetVariables()
}
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    statusbar.value += statusBarPct / 4
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    resetLevel()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.up.isPressed()) && (!(controller.down.isPressed()) && !(controller.left.isPressed()))) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
        mySprite3 = sprites.create(assets.image`Cyclone1`, SpriteKind.Weapon)
        mySprite2 = sprites.create(assets.image`laser1`, SpriteKind.heroProjectile)
        mySprite2.setVelocity(laserV, 0)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar.value += statusBarPct
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.heroProjectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(50)
    killCtr += 1
    bCreated = 0
    bCreated2 = 0
    bCreated3 = 0
    bCreated4 = 0
    statusbar.value += 1
})
sprites.onOverlap(SpriteKind.CircleEnemy, SpriteKind.Marker, function (sprite, otherSprite) {
    if (Math.percentChance(5)) {
        if (!(bShot5)) {
            projectile = sprites.createProjectileFromSprite(assets.image`bomb`, newSprite, vx, vy)
            projectile.follow(mySprite, 150)
            projectile.setFlag(SpriteFlag.AutoDestroy, true)
            bShot5 = 1
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.up.isPressed()) && (!(controller.right.isPressed()) && !(controller.left.isPressed()))) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
        mySprite3 = sprites.create(assets.image`Cyclone2`, SpriteKind.Weapon)
        mySprite2 = sprites.create(assets.image`laser0`, SpriteKind.heroProjectile)
        mySprite2.setVelocity(0, laserV)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar.value += statusBarPct
        music.pewPew.play()
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Armor)
})
function goNextLevel () {
    killCtr = 0
    curLevel += 1
    Lifectr += 1
    textSprite.destroy()
    displayLife()
    game.splash("Next Wave! Level:", curLevel)
    levelCtr += 1
    createPct += createPct * 10
    pulsePct += pulsePct * 10
    gameTimer += -100
    killCtr += 1
    if (curLevel >= 5) {
        bCircle = 1
    }
    resetVariables()
}
function circleEnemy () {
    newSprite = sprites.create(assets.image`circleEnemy`, SpriteKind.CircleEnemy)
    cubicbird.circleSpriteAt(
    newSprite,
    80,
    55,
    30,
    25
    )
    vx = 0
    vy = 0
    newSprite.setFlag(SpriteFlag.AutoDestroy, true)
}
function displayLife () {
    textSprite = textsprite.create("Lives " + Lifectr.toString())
    textSprite.setOutline(1, 6)
    textSprite.setBorder(1, 6, 1)
    textSprite.setStayInScreen(true)
    textSprite.setPosition(15, 6)
}
sprites.onOverlap(SpriteKind.heroProjectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(50)
    statusbar.value += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BotRightMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(controller.B.isPressed())) {
        if (!(bBotRight)) {
            mySprite = sprites.create(assets.image`CycloneCorner2`, SpriteKind.Player)
            bBotRight = 1
        } else {
            resetLevel()
        }
    }
})
let vy = 0
let vx = 0
let textSprite: TextSprite = null
let bShot5 = 0
let bShot4 = 0
let bShot3 = 0
let bShot2 = 0
let bShot = 0
let bCreated4 = 0
let bCreated3 = 0
let bCreated2 = 0
let bCreated = 0
let bCircleCreated = 0
let mySprite9: Sprite = null
let bBotRight = 0
let mySprite8: Sprite = null
let bBottomHit = 0
let mySprite6: Sprite = null
let bRightHit = 0
let mySprite5: Sprite = null
let bLeftHit = 0
let mySprite4: Sprite = null
let bTopHit = 0
let bTopLeft = 0
let mySprite7: Sprite = null
let armorSprite: Sprite = null
let bTopRight = 0
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let bBotLeft = 0
let statusBarPct = 0
let createPct = 0
let pulsePct = 0
let curLevel = 0
let killCtr = 0
let laserV = 0
let newSprite: Sprite = null
let projectile: Sprite = null
let bCircle = 0
let statusbar: StatusBarSprite = null
let Lifectr = 0
game.splash("CYCLON", "Invasion!")
info.setScore(0)
statusbar = statusbars.create(60, 4, StatusBarKind.Health)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.max = 100
Lifectr = 3
displayLife()
bCircle = 0
projectile = sprites.createProjectileFromSprite(assets.image`bomb`, newSprite, 0, 0)
laserV = 300
let pulseV = 150
killCtr = 0
let levelCtr = 1
curLevel = 1
pulsePct = 1e-20
createPct = 1e-20
let gameTimer = 10000
statusBarPct += -1
createTestMarkers(scene.screenWidth(), scene.screenHeight(), 2)
game.onUpdateInterval(gameTimer, function () {
    if (bShot) {
        timer.after(2000, function () {
            bShot = 0
        })
    }
    if (bShot2) {
        timer.after(2000, function () {
            bShot2 = 0
        })
    }
    if (bShot3) {
        timer.after(2000, function () {
            bShot3 = 0
        })
    }
    if (bShot4) {
        timer.after(2000, function () {
            bShot4 = 0
        })
    }
    if (bShot5) {
        timer.after(2000, function () {
            bShot5 = 0
        })
    }
})
game.onUpdate(function () {
    if (killCtr >= levelCtr * 5) {
        goNextLevel()
    } else {
        if (bCircleCreated) {
            if (newSprite.y > scene.screenHeight() / 2) {
                vy = -50
            } else {
                vy = 50
            }
            if (newSprite.x > scene.screenWidth() / 2) {
                vx = -50
            } else {
                vx = 50
            }
        }
        if (Math.percentChance(createPct) && !(bCreated4)) {
            mySprite6 = sprites.create(assets.image`Enemy2`, SpriteKind.Enemy)
            mySprite6.setPosition(80, 88)
            bCreated4 = 1
        }
        if (Math.percentChance(pulsePct) && bCreated4 && !(bShot4)) {
            mySprite3 = sprites.create(assets.image`Pulse`, SpriteKind.Food)
            mySprite3.setPosition(80, 120)
            mySprite3.setVelocity(0, -1 * pulseV)
            mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
            bShot4 = 1
        }
        if (Math.percentChance(createPct) && !(bCreated3)) {
            mySprite5 = sprites.create(assets.image`Enemy1`, SpriteKind.Enemy)
            mySprite5.setPosition(128, 60)
            bCreated3 = 1
        }
        if (Math.percentChance(pulsePct) && bCreated3 && !(bShot3)) {
            mySprite3 = sprites.create(assets.image`Pulse`, SpriteKind.Food)
            mySprite3.setPosition(160, 60)
            mySprite3.setVelocity(-1 * pulseV, 0)
            mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
            bShot3 = 1
        }
        if (Math.percentChance(createPct) && !(bCreated)) {
            mySprite3 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
            mySprite3.setPosition(32, 60)
            bCreated = 1
        }
        if (Math.percentChance(pulsePct) && bCreated && !(bShot)) {
            mySprite2 = sprites.create(assets.image`Pulse`, SpriteKind.Food)
            mySprite2.setPosition(0, 60)
            mySprite2.setVelocity(pulseV, 0)
            mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
            bShot = 1
        }
        if (Math.percentChance(createPct) && !(bCreated2)) {
            mySprite4 = sprites.create(assets.image`Enemy0`, SpriteKind.Enemy)
            mySprite4.setPosition(80, 32)
            bCreated2 = 1
        }
        if (Math.percentChance(pulsePct) && bCreated2 && !(bShot2)) {
            mySprite3 = sprites.create(assets.image`Pulse`, SpriteKind.Food)
            mySprite3.setPosition(80, 0)
            mySprite3.setVelocity(0, pulseV)
            mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
            bShot2 = 1
        }
    }
})
game.onUpdateInterval(500, function () {
    if (bCircle) {
        if (Math.percentChance(5) && !(bCircleCreated)) {
            circleEnemy()
            bCircleCreated = 1
        }
    }
})
