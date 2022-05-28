var anim = { 
    moveRight(node,distance = 0){
        console.log("Move rights");
        let actions = [cc.moveBy(1,distance,0),cc.callFunc( () => {})]
        node.runAction(cc.sequence(actions))
    },
    moveLeft(node,distance = 0) {
        console.log("Move Left");
        let actions = [cc.moveBy(1,-distance,0),cc.callFunc( () => {})]
        node.runAction(cc.sequence(actions))
    }
}

module.exports =  anim

