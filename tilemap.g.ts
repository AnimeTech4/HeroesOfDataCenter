// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010103010202020202020202020201020202020101010301020201010202010202020101020202020201010103020102020201020201030202030202010101020201010202010101020101020202020201030202010102010202030202020201010101010302010102020102020202010202020202010301020201010302020102010102010102010102020201010203010102030102020202010102020102010102010102020101010102020101020202030102020103010201030203020202020102020201020202010102010202020201020202010103020101020101030103010103010301010202010101020202010202020202020202020101020202`, img`
. . . . . 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 . . . . . 2 2 . . 2 2 . 
2 2 2 . . 2 2 2 2 2 . . . . 2 . 
2 2 2 . 2 2 . . 2 2 . 2 2 . . . 
2 2 . . 2 2 . . . 2 . . 2 2 2 2 
2 . . 2 2 . . 2 . 2 2 . 2 2 2 2 
. . . . . . 2 . . 2 2 . 2 2 2 2 
. 2 2 2 2 2 . . . 2 2 . . . 2 2 
. 2 . . 2 . . 2 . . 2 2 2 . . 2 
. . . 2 . . 2 2 2 2 . . 2 2 . 2 
. . 2 . . 2 2 . . . . 2 2 . . 2 
2 2 . . 2 2 . . . 2 . . 2 . 2 2 
2 2 . 2 2 2 . 2 2 2 . . 2 . 2 2 
2 2 . 2 2 2 . . . 2 . . 2 . . . 
. . . . . . . . . 2 2 . . . 2 2 
2 . 2 2 2 2 2 2 2 2 2 . . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorMixed,sprites.builtin.brick,sprites.dungeon.floorDark1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
