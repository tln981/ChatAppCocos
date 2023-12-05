
cc.Class({
    extends: cc.Component,

    properties: {
        timer:0
    },
    start () {
        cc.log(this.node.getComponent(cc.Sprite));
    },
    update (dt) {
        this.timer+=dt;
        this.node.getComponent(cc.Sprite).fillRange+=dt/10;
        if(dt>10){
            this.node.color=cc.Color(255,0,0,100);
        }else if(dt>8){
            this.node.color=cc.Color.RED;
        }

    },
});
