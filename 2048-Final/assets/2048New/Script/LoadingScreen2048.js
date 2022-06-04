const anim = require("BTAnim")
const logic = require("BTLogic")
cc.Class({
    extends: cc.Component,

    properties: {
        loadingBar: cc.ProgressBar,
        percentLoad: cc.Label,
        btnPlay: cc.Node,
        cloudLeft: cc.Node,
        cloudRight: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.init()
    },
    init () {
        this.addEventListener()
        this.loadingScreen = this.node.getChildByName("LoadingScreen")
        logic.hide(this.cloudLeft,this.cloudRight,this.loadingScreen)
        this.loadingBar.progress = 0
    },
    loadProgress(dt){
        this.loadingBar.progress += dt/5
        this.percentLoad.string = Math.round(this.loadingBar.progress*100) + "%"
    },
    addEventListener() {
        this.btnPlay.on("click",this.clickBtnPlay,this)
    },
    clickBtnPlay(){
        logic.show(this.cloudLeft,this.cloudRight)
        this.btnPlay.getComponent(cc.Button).enabled = false
        this.animLoading("R2048L")
    },
    animLoading(scene){
        let distance = 550
        anim.moveRight(this.cloudLeft,distance ,1, ()=> {
            logic.show(this.loadingScreen)
            anim.moveLeft(this.cloudLeft,distance);
        })
        anim.moveLeft(this.cloudRight,distance ,1, ()=>{
            anim.moveRight(this.cloudRight,distance,0, () => {
                // cc.director.loadScene(`${scene}`)
            });
        })
    },
    update (dt) {

        if (this.loadingScreen.active) {
            if (this.loadingBar.progress >= 0.9999) {
                cc.director.loadScene("R2048M")
                return
            }else {
                this.loadProgress(dt)
            }
        }
        
    },
});
