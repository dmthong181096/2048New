var anim = { 
    moveRight(node,distance = 0,delay, callback ){
        console.log("Move rights");
        let actions = [cc.moveBy(1,distance,0),
                        cc.delayTime(delay),
                       cc.callFunc(( ()=> {callback && callback()}))]
        node.runAction(cc.sequence(actions))
       
        
    },
    moveLeft(node,distance = 0,delay,callback) {
        console.log("Move Left");
        let actions = [cc.moveBy(1,-distance,0),
                        cc.delayTime(delay),
                        cc.callFunc(( ()=> {callback && callback()}))]
        node.runAction(cc.sequence(actions))
    }
}

module.exports =  anim

