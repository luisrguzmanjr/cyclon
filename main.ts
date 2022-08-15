namespace SpriteKind {
    export const CircleEnemy = SpriteKind.create()
    export const HeroProjectile = SpriteKind.create()
    export const Armor = SpriteKind.create()
    export const Weapon = SpriteKind.create()
    export const Marker = SpriteKind.create()
    export const TopLeftMarker = SpriteKind.create()
    export const TopRightMarker = SpriteKind.create()
    export const BotLeftMarker = SpriteKind.create()
    export const BotRightMarker = SpriteKind.create()
    export const TopMarker = SpriteKind.create()
    export const BotMarker = SpriteKind.create()
    export const LeftMarker = SpriteKind.create()
    export const RightMarker = SpriteKind.create()
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(bDisabled)) {
        if (!(controller.down.isPressed()) && (!(controller.right.isPressed()) && !(controller.left.isPressed()))) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
            mySprite3 = sprites.create(assets.image`Cyclone0`, SpriteKind.Weapon)
            mySprite2 = sprites.create(assets.image`laser0`, SpriteKind.HeroProjectile)
            mySprite2.setVelocity(0, -1 * laserV)
            mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
            statusbar.value += statusBarPct
            music.pewPew.play()
        }
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
function circleSpriteAt2 (sprite: Sprite, x: number, y: number, r: number, rx: number, ry: number, velocity: number) {
    sprite.x = x - rx
    sprite.y = y - ry
    interval = 30
    game.onUpdateInterval(interval, () => {
        let time = game.runtime() / 20000
        sprite.x = x + r * Math.cos(velocity * time)  ;
        sprite.y = y + r * Math.sin(velocity * time);
    })
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.RightMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(bRightHit)) {
        mySprite = sprites.create(assets.image`Cyclone5`, SpriteKind.Player)
        bRightHit = 1
    } else {
        resetLevel()
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.TopMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(bTopHit)) {
        mySprite = sprites.create(assets.image`Cyclone6`, SpriteKind.Player)
        bTopHit = 1
    } else {
        resetLevel()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(bDisabled)) {
        bArmor = 1
        if (!(bBotLeft)) {
            armorSprite = sprites.create(assets.image`myImage1`, SpriteKind.Armor)
        }
        if (!(bBotRight)) {
            armorSprite = sprites.create(assets.image`myImage`, SpriteKind.Armor)
        }
        if (!(bTopLeft)) {
            armorSprite = sprites.create(assets.image`myImage0`, SpriteKind.Armor)
        }
        if (!(bTopRight)) {
            armorSprite = sprites.create(assets.image`myImage2`, SpriteKind.Armor)
        }
    }
})
function doExplosion () {
    bDisabled = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
    sprites.destroyAllSpritesOfKind(SpriteKind.Armor)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.LeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.RightMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopRightMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotRightMarker)
    mySprite = sprites.create(assets.image`Cyclone`, SpriteKind.Player)
    if (bTopLeft) {
        mySprite2 = sprites.create(assets.image`CycloneCorner`, SpriteKind.Player)
    } else {
        mySprite2 = sprites.create(assets.image`CycloneCorners`, SpriteKind.TopLeftMarker)
        if (bArmor) {
            mySprite10 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
            mySprite10.setVelocity(-50, -50)
        }
    }
    mySprite2.setVelocity(-50, -50)
    if (bTopHit) {
        mySprite3 = sprites.create(assets.image`Cyclone6`, SpriteKind.Player)
    } else {
        mySprite3 = sprites.create(assets.image`Cyclone8`, SpriteKind.TopMarker)
    }
    mySprite3.setVelocity(0, -50)
    if (bTopRight) {
        mySprite4 = sprites.create(assets.image`CycloneCorner0`, SpriteKind.Player)
    } else {
        mySprite4 = sprites.create(assets.image`CycloneCorners0`, SpriteKind.TopRightMarker)
        if (bArmor) {
            mySprite11 = sprites.create(assets.image`myImage2`, SpriteKind.Player)
            mySprite11.setVelocity(50, -50)
        }
    }
    mySprite4.setVelocity(50, -50)
    if (bLeftHit) {
        mySprite5 = sprites.create(assets.image`Cyclone4`, SpriteKind.Player)
    } else {
        mySprite5 = sprites.create(assets.image`Cyclone10`, SpriteKind.LeftMarker)
    }
    mySprite5.setVelocity(-50, 0)
    if (bRightHit) {
        mySprite6 = sprites.create(assets.image`Cyclone5`, SpriteKind.Player)
    } else {
        mySprite6 = sprites.create(assets.image`Cyclone11`, SpriteKind.RightMarker)
    }
    mySprite6.setVelocity(50, 0)
    if (bBotLeft) {
        mySprite7 = sprites.create(assets.image`CycloneCorner1`, SpriteKind.Player)
    } else {
        mySprite7 = sprites.create(assets.image`CycloneCorners1`, SpriteKind.BotLeftMarker)
        if (bArmor) {
            mySprite12 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
            mySprite12.setVelocity(-50, 50)
        }
    }
    mySprite7.setVelocity(-50, 50)
    if (bBottomHit) {
        mySprite8 = sprites.create(assets.image`Cyclone7`, SpriteKind.Player)
    } else {
        mySprite8 = sprites.create(assets.image`Cyclone9`, SpriteKind.BotMarker)
    }
    mySprite8.setVelocity(0, 50)
    if (bBotRight) {
        mySprite9 = sprites.create(assets.image`CycloneCorner2`, SpriteKind.Player)
    } else {
        mySprite9 = sprites.create(assets.image`CycloneCorners2`, SpriteKind.BotRightMarker)
        if (bArmor) {
            mySprite13 = sprites.create(assets.image`myImage`, SpriteKind.Player)
            mySprite13.setVelocity(50, 50)
        }
    }
    mySprite9.setVelocity(50, 50)
    pause(1000)
}
sprites.onOverlap(SpriteKind.CircleEnemy, SpriteKind.HeroProjectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(100)
    killCtr += 1
    bCircleCreated = 0
    statusbar.value += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(bDisabled)) {
        if (!(controller.up.isPressed()) && (!(controller.down.isPressed()) && !(controller.right.isPressed()))) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
            mySprite3 = sprites.create(assets.image`Cyclone3`, SpriteKind.Weapon)
            mySprite2 = sprites.create(assets.image`laser1`, SpriteKind.HeroProjectile)
            mySprite2.setVelocity(-1 * laserV, 0)
            mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
            statusbar.value += statusBarPct
            music.pewPew.play()
        }
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
sprites.onOverlap(SpriteKind.Food, SpriteKind.LeftMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(bLeftHit)) {
        mySprite = sprites.create(assets.image`Cyclone4`, SpriteKind.Player)
        bLeftHit = 1
    } else {
        resetLevel()
    }
})
function displayLevel () {
    textSprite2 = textsprite.create("Level " + convertToText(levelCtr))
    textSprite2.setOutline(1, 6)
    textSprite2.setBorder(1, 6, 1)
    textSprite2.setStayInScreen(true)
    textSprite2.setPosition(135, 112)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Armor, function (sprite, otherSprite) {
    sprite.destroy()
})
function createMarkers (x: number, y: number, r: number) {
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
    mySprite = sprites.create(assets.image`Cyclone8`, SpriteKind.TopMarker)
    mySprite = sprites.create(assets.image`Cyclone9`, SpriteKind.BotMarker)
    mySprite = sprites.create(assets.image`Cyclone10`, SpriteKind.LeftMarker)
    mySprite = sprites.create(assets.image`Cyclone11`, SpriteKind.RightMarker)
}
function resetVariables () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.CircleEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.HeroProjectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Armor)
    sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
    sprites.destroyAllSpritesOfKind(SpriteKind.Marker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.LeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.RightMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.TopRightMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotLeftMarker)
    sprites.destroyAllSpritesOfKind(SpriteKind.BotRightMarker)
    statusbar.value = 100
    bDisabled = 0
    killCtr = 0
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
    createMarkers(scene.screenWidth(), scene.screenHeight(), 2)
}
function resetLevel () {
    cubicbird.destroyAllSpriteOfKind(SpriteKind.Food)
    cubicbird.destroyAllSpriteOfKind(SpriteKind.HeroProjectile)
    Lifectr += -1
    textSprite.destroy()
    textSprite2.destroy()
    displayLife()
    displayLevel()
    doExplosion()
    if (Lifectr > 0) {
        game.splash("Replay Wave! Level:", levelCtr)
    } else {
        game.splash("Good game! Try again!")
        game.over(false)
    }
    resetVariables()
}
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (!(bDisabled)) {
        statusbar.value += statusBarPct / 4
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    resetLevel()
})
sprites.onOverlap(SpriteKind.HeroProjectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(50)
    statusbar.value += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(bDisabled)) {
        if (!(controller.up.isPressed()) && (!(controller.down.isPressed()) && !(controller.left.isPressed()))) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
            mySprite3 = sprites.create(assets.image`Cyclone1`, SpriteKind.Weapon)
            mySprite2 = sprites.create(assets.image`laser1`, SpriteKind.HeroProjectile)
            mySprite2.setVelocity(laserV, 0)
            mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
            statusbar.value += statusBarPct
            music.pewPew.play()
        }
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.BotMarker, function (sprite, otherSprite) {
    sprite.destroy()
    if (!(bBottomHit)) {
        mySprite = sprites.create(assets.image`Cyclone7`, SpriteKind.Player)
        bBottomHit = 1
    } else {
        resetLevel()
    }
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
    if (!(bDisabled)) {
        if (!(controller.up.isPressed()) && (!(controller.right.isPressed()) && !(controller.left.isPressed()))) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Weapon)
            mySprite3 = sprites.create(assets.image`Cyclone2`, SpriteKind.Weapon)
            mySprite2 = sprites.create(assets.image`laser0`, SpriteKind.HeroProjectile)
            mySprite2.setVelocity(0, laserV)
            mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
            statusbar.value += statusBarPct
            music.pewPew.play()
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Armor)
    bArmor = 0
})
function goNextLevel () {
    killCtr = 0
    levelCtr += 1
    Lifectr += 1
    textSprite.destroy()
    textSprite2.destroy()
    displayLife()
    displayLevel()
    game.splash("Next Wave! Level:", levelCtr)
    levelCtr += 1
    createPct += createPct * 10
    pulsePct += pulsePct * 10
    gameTimer += -100
    if (levelCtr >= 5) {
        bCircle = 1
    }
    resetVariables()
}
function circleEnemy () {
    newSprite = sprites.create(assets.image`circleEnemy`, SpriteKind.CircleEnemy)
    quad = randint(1, 4)
    if (quad == 1) {
        circleSpriteAt2(newSprite, 80, 60, 35, 40, 0, 20)
    }
    if (quad == 2) {
        circleSpriteAt2(newSprite, 80, 60, 35, -40, 0, 20)
    }
    if (quad == 3) {
        circleSpriteAt2(newSprite, 80, 60, 35, 0, 30, 20)
    }
    if (quad == 4) {
        circleSpriteAt2(newSprite, 80, 60, 35, 0, -30, 20)
    }
    vx = 0
    vy = 0
    newSprite.setFlag(SpriteFlag.AutoDestroy, true)
}
function displayLife () {
    textSprite = textsprite.create("Lives " + convertToText(Lifectr))
    textSprite.setOutline(1, 6)
    textSprite.setBorder(1, 6, 1)
    textSprite.setStayInScreen(true)
    textSprite.setPosition(24, 8)
}
sprites.onOverlap(SpriteKind.HeroProjectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(10)
    statusbar.value += 1
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.HeroProjectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(50)
    killCtr += 1
    bCreated = 0
    bCreated2 = 0
    bCreated3 = 0
    bCreated4 = 0
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
let quad = 0
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
let textSprite2: TextSprite = null
let bCircleCreated = 0
let mySprite13: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let bBottomHit = 0
let mySprite12: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let bLeftHit = 0
let mySprite11: Sprite = null
let mySprite4: Sprite = null
let mySprite10: Sprite = null
let bTopLeft = 0
let bBotRight = 0
let armorSprite: Sprite = null
let bArmor = 0
let bTopHit = 0
let bRightHit = 0
let interval = 0
let bTopRight = 0
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let bDisabled = 0
let mySprite: Sprite = null
let bBotLeft = 0
let statusBarPct = 0
let createPct = 0
let pulsePct = 0
let killCtr = 0
let laserV = 0
let newSprite: Sprite = null
let projectile: Sprite = null
let bCircle = 0
let statusbar: StatusBarSprite = null
let levelCtr = 0
let Lifectr = 0
game.splash("CYCLON", "Invasion!")
info.setScore(0)
Lifectr = 3
levelCtr = 1
statusbar = statusbars.create(48, 4, StatusBarKind.Health)
statusbar.max = 100
statusbar.setPosition(24, 18)
displayLife()
displayLevel()
bCircle = 0
projectile = sprites.createProjectileFromSprite(assets.image`bomb`, newSprite, 0, 0)
laserV = 300
let pulseV = 150
killCtr = 0
pulsePct = 1e-20
createPct = 1e-20
let gameTimer = 10000
statusBarPct += -1
createMarkers(scene.screenWidth(), scene.screenHeight(), 2)
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
