const logic = require("BTLogic")
cc.Class({
    extends: cc.Component,

    properties: {
        btnClose :cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
 
    },

    start () {
        this.btnClose.on("click", this.hide.bind(this))
    },
    hide() {
      this.node.active = false
    }


    // update (dt) {},
});
