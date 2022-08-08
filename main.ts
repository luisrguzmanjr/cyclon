namespace SpriteKind {
    export const CircleEnemy = SpriteKind.create()
    export const heroProjectile = SpriteKind.create()
    export const Armor = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.heroProjectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(10)
    statusbar.value += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    armorSprite = sprites.create(assets.image`Armor`, SpriteKind.Armor)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.up.isPressed()) && (!(controller.down.isPressed()) && !(controller.right.isPressed()))) {
        mySprite.destroy()
        mySprite = sprites.create(assets.image`Cyclone3`, SpriteKind.Player)
        if (bCircle) {
            projectile.follow(mySprite)
        }
        mySprite2 = sprites.create(assets.image`laser1`, SpriteKind.heroProjectile)
        mySprite2.setVelocity(-1 * laserV, 0)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar.value += statusBarPct
        music.pewPew.play()
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
    sprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Armor, function (sprite, otherSprite) {
    sprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    statusbar.value += statusBarPct
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    killCtr = levelCtr * 5
    statusbar.value = 0
    goNextLevel()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.up.isPressed()) && (!(controller.down.isPressed()) && !(controller.left.isPressed()))) {
        mySprite.destroy()
        mySprite = sprites.create(assets.image`Cyclone1`, SpriteKind.Player)
        if (bCircle) {
            projectile.follow(mySprite)
        }
        mySprite2 = sprites.create(assets.image`laser1`, SpriteKind.heroProjectile)
        mySprite2.setVelocity(laserV, 0)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar.value += statusBarPct
        music.pewPew.play()
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (!(controller.down.isPressed()) && (!(controller.right.isPressed()) && !(controller.left.isPressed()))) {
        mySprite.destroy()
        mySprite = sprites.create(assets.image`Cyclone0`, SpriteKind.Player)
        if (bCircle) {
            projectile.follow(mySprite)
        }
        mySprite2 = sprites.create(assets.image`laser0`, SpriteKind.heroProjectile)
        mySprite2.setVelocity(0, -1 * laserV)
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.up.isPressed()) && (!(controller.right.isPressed()) && !(controller.left.isPressed()))) {
        mySprite.destroy()
        mySprite = sprites.create(assets.image`Cyclone2`, SpriteKind.Player)
        if (bCircle) {
            projectile.follow(mySprite)
        }
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
    if (killCtr >= levelCtr * 5) {
        killCtr = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.CircleEnemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        sprites.destroyAllSpritesOfKind(SpriteKind.heroProjectile)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Armor)
        mySprite = sprites.create(assets.image`Cyclone`, SpriteKind.Player)
        if (statusbar.value != 0) {
            statusbar.value = 100
            curLevel += 1
            game.splash("Next Wave! Level:", curLevel)
            levelCtr += 1
            createPct += createPct * 10
            pulsePct += pulsePct * 10
            gameTimer += -100
            info.changeLifeBy(1)
            if (curLevel >= 5) {
                bCircle = 1
            }
        } else {
            statusbar.value = 100
            game.splash("Replay Wave! Level:", curLevel)
        }
        bCreated = 0
        bCreated2 = 0
        bCreated3 = 0
        bCreated4 = 0
        bCircleCreated = 0
        bShot = 0
        bShot2 = 0
        bShot3 = 0
        bShot4 = 0
    }
}
function circleEnemy () {
    newSprite = sprites.create(assets.image`circleEnemy`, SpriteKind.CircleEnemy)
    cubicbird.circleSpriteAt(
    newSprite,
    randint(65, 95),
    randint(55, 85),
    40,
    35
    )
    vx = 0
    vy = 0
    newSprite.setFlag(SpriteFlag.AutoDestroy, true)
}
sprites.onOverlap(SpriteKind.heroProjectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(50)
    statusbar.value += 1
})
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite6: Sprite = null
let vy = 0
let vx = 0
let bShot4 = 0
let bShot3 = 0
let bShot2 = 0
let bShot = 0
let bCreated4 = 0
let bCreated3 = 0
let bCreated2 = 0
let bCreated = 0
let bCircleCreated = 0
let mySprite2: Sprite = null
let armorSprite: Sprite = null
let statusBarPct = 0
let createPct = 0
let pulsePct = 0
let curLevel = 0
let levelCtr = 0
let killCtr = 0
let laserV = 0
let newSprite: Sprite = null
let projectile: Sprite = null
let bCircle = 0
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
game.splash("CYCLONE", "Invasion!")
info.setScore(0)
statusbar = statusbars.create(60, 4, StatusBarKind.Health)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.max = 100
mySprite = sprites.create(assets.image`Cyclone`, SpriteKind.Player)
bCircle = 0
projectile = sprites.createProjectileFromSprite(assets.image`squareAmmo`, newSprite, 0, 0)
info.setLife(15)
laserV = 300
let pulseV = 150
killCtr = 0
levelCtr = 1
curLevel = 1
pulsePct = 1e-20
createPct = 1e-20
let gameTimer = 10000
statusBarPct += -1
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
})
forever(function () {
    if (levelCtr == curLevel) {
        goNextLevel()
    }
})
forever(function () {
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
})
game.onUpdateInterval(500, function () {
    if (bCircle) {
        if (Math.percentChance(10) && !(bCircleCreated)) {
            circleEnemy()
            bCircleCreated = 1
        } else {
            if (bCircleCreated) {
                if (Math.percentChance(20)) {
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
                    projectile = sprites.createProjectileFromSprite(assets.image`bomb`, newSprite, vx, vy)
                    projectile.follow(mySprite, 100)
                }
            }
        }
    }
})
