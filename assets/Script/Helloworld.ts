const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property({
        tooltip: "遮罩Mask",
        type: cc.Mask
    })
    myMask: cc.Mask;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }
    onTouchBegin(event) {
        cc.log("touch begin");
        let point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.addCirle(point);
    }

    onTouchMoved(event) {
        cc.log("touch move");
        let point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.addCirle(point);
    }

    onTouchEnd(event) {
        cc.log("touch end");
        let point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.addCirle(point);
    }

    onTouchCancel(event) {
        cc.log("touch cancel");
        let point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this.addCirle(point);
    }

    addCirle(point) {
        cc.log(point.x + "" + point.y);
        let stencil = this.myMask._clippingStencil;
        let color = cc.color(255, 255, 255, 0);
        stencil.drawPoly(this.myMask._calculateCircle(point, cc.p(50, 50), 64), color, 0, color);
        if (!CC_JSB) {
            cc.renderer.childrenOrderDirty = true;
        }
    }
}
