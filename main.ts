scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
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
