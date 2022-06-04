let logic = {
    hide(...nodes){
        console.log(nodes);
        nodes.forEach(node => {
            node.active = false
        });
    },
    show(...nodes){
        nodes.forEach(node => {
            node.active = true
        });
    },
    // overLay(){
    //    let overLay = new cc.Node

    // },
}
module.exports =logic