controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 8 c . . . . . . 
        . . . . c c c 8 8 c c c . . . . 
        . . c c b c 8 8 8 8 c c c c . . 
        . c b b 8 b 8 8 8 8 b 8 b b c . 
        . c b 8 8 b b 8 8 b b 8 8 b c . 
        . . f 8 8 8 b b b b 8 8 8 c . . 
        . . f f 8 8 8 8 8 8 8 8 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f e e . . . 
        . . e b c b 8 b b 8 b f b e . . 
        . . e e f 8 8 8 8 8 8 f e e . . 
        . . . . c b 8 8 8 8 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.showLongText("Πιάσαμε τον hacker και το όνομά του είναι Kevin David Mitnick", DialogLayout.Full)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 8 c . . . . . . . 
        . . . . c c 8 8 8 c c c . . . . 
        . . c c c c 8 8 8 8 c b c c . . 
        . c b b 8 b 8 8 8 8 b 8 b b c . 
        . c b 8 8 b b 8 8 b b 8 8 b c . 
        . . c 8 8 8 b b b b 8 8 8 f . . 
        . . . f 8 8 8 8 8 8 8 8 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 8 b b e b b e . . . 
        . . . . f 8 8 8 8 e b b e . . . 
        . . . . c b 8 8 8 8 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 8 c . . . . . . 
        . . . . c c c 8 8 8 c c . . . . 
        . . c c b c 8 8 8 8 c c c c . . 
        . c b b 8 b 8 8 8 8 b 8 b b c . 
        . c b 8 8 b b 8 8 b b 8 8 b c . 
        . . f 8 8 8 b b b b 8 8 8 c . . 
        . . f f 8 8 8 8 8 8 8 8 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 8 f . . . . . 
        . . . e b b e 8 8 8 8 f . . . . 
        . . . . e e 8 8 8 8 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 8 b c . . . . . . 
        . . . . c c c 8 8 c c c . . . . 
        . . c c c c 8 5 5 8 c b c c . . 
        . c b b 8 b 8 5 5 8 b 8 b b c . 
        . c b 8 8 b b 8 8 b b 8 8 b c . 
        . . c 8 8 8 b b b b 8 8 8 f . . 
        . . f f 8 8 8 8 8 8 8 8 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 8 b b 8 b c b e . . 
        . . e e f 8 8 8 8 8 8 f e f . . 
        . . . . c b 8 8 8 8 b c . f . . 
        . . . . . f f f f f f . . . . . 
        `)
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 8 b c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 8 b 5 5 f 5 b 8 b b c . 
    . c b 8 8 b b 5 5 b b 8 8 b c . 
    . . c 8 8 8 b b b b 8 8 8 f . . 
    . . f f 8 8 8 8 8 8 8 8 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 8 b b 8 b c b e . . 
    . . e e f 8 8 8 8 8 8 f e f . . 
    . . . . c b 8 8 8 8 b c . f . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.showLongText("Και οι αστυνομικές δυνάμεις κυνηγούν τον hacker σε σκοτεινά σοκάκια", DialogLayout.Full)
music.playMelody("E B C5 A B G A F ", 296)
