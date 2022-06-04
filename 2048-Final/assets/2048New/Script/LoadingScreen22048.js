

cc.Class({
    extends: cc.Component,

    properties: {
        loadingBar: cc.ProgressBar,
        percentLoad: cc.Label,
    },

    loadProgress(dt){
        this.loadingBar.progress += dt/10
        this.percentLoad.string = Math.round(this.loadingBar.progress*100) + "%"
    },
    start () {
        this.loadingBar.progress = 0
    },

    update (dt) {
        if (this.loadingBar.progress == -1) {
            return
        }
        
        if (this.loadingBar.progress >= 0.9999) {
            this.animLoading("R2048M")
            this.loadingBar.progress = -1
            return
        }else {
            this.loadProgress(dt)
        }
    },
});
