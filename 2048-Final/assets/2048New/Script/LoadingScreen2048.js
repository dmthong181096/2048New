const anim = require("BTAnim")
const logic = require("BTLogic")
cc.Class({
    extends: cc.Component,

    properties: {
        // loadingBar: cc.ProgressBar,
        percentLoad: cc.Label,
        btnPlay: cc.Node,
        cloudLeft: cc.Node,
        cloudRight: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.addEventListener()
        logic.hide(this.cloudLeft,this.cloudRight)

    },
    // loadProgress(dt){
    //     this.loadingBar.progress += dt/10
    //     this.percentLoad.string = Math.round(this.loadingBar.progress*100) + "%"
    // },
    addEventListener() {
        this.btnPlay.on("click",this.clickBtnPlay,this)

    //    cc.director.loadScene("R2048L")
    },
    clickBtnPlay(){
        logic.show(this.cloudLeft,this.cloudRight)
        this.btnPlay.getComponent(cc.Button).enabled = false
        let distance = 550
        let actions = [
            cc.delayTime(0.01),
           cc.callFunc(()=> {cc.spawn(anim.moveRight(this.cloudLeft,distance),anim.moveLeft(this.cloudRight,distance) ), "log 1"}),
           cc.delayTime(2),
           cc.callFunc(()=> {cc.spawn(anim.moveRight(this.cloudRight,distance),anim.moveLeft(this.cloudLeft,distance)),"log 2"}),
           cc.callFunc((cc.director.loadScene("")))
        ]
        this.node.runAction(cc.sequence(actions))
        
    },

    update (dt) {
        // this.loadProgress(dt)
        // if (this.loadingBar.progress >= 0.9999) {
        //     cc.director.loadScene("R2048L")
        // }
    },
});
