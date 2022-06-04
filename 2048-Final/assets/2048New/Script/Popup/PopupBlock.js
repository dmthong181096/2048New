// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const ROWS = 4
cc.Class({
    extends: cc.Component,

    properties: {
        Blocks : [cc.Node]
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        for (let index = 0; index < this.Blocks.length; index++) {
            this.Blocks[index] = null
        }
        this.data =  this.createArray2D(4,4);
        this.Blocks = this.convertArray2D( this.Blocks,4,null)
        console.log(this.getEmptyLocations());
    },
    init() {

    },
    createArray2D(rows,cols) {
        let arr = new Array()
        for (let row = 0; row < rows; row++) {
            arr[row] = new Array()
            for (let col = 0; col < cols; col++) {
                arr[row][col] = 0
            }
        }
        return arr
    },
    convertArray2D(arr,rows,value) {
        let arr2d = new Array()
        let k = 0
        for (let index = 0; index < arr.length; index++) {
           if (index % rows == 0 ) {
               arr2d[k] = new Array()
               for (let j = 0; j < rows; j++) {
                arr2d[k].push(value)
               }
               k++
           }
        }
        return arr2d
    },
    getEmptyLocations(){
        let emptyLocation = []
        for (let row = 0; row < this.Blocks.length; row++) {
            for (let col = 0; col < this.Blocks.length; col++) {
                if (this.Blocks[row][col] == null) {
                    let block = {x: row, y: col}
                    emptyLocation.push(block)
                }
            }
        }
        return emptyLocation
    },
    randomBlock(){
        let emptyLocation = this.getEmptyLocations()
    },
    // update (dt) {},
});
