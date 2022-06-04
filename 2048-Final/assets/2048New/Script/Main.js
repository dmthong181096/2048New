const logic = require("BTLogic")
cc.Class({
    extends: cc.Component,

    properties: {
        btnSetting: cc.Node,
        popupSetting: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.btnSetting.on('click',this.show.bind(this))
        logic.hide(this.popupSetting)
    },
    addEventListener() {
       
    },
    show(){
        logic.show(this.popupSetting)
    },

    // update (dt) {},
});
