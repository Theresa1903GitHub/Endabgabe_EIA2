"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Icecream {
        position;
        color;
        strokeColor;
        velocity;
        constructor(_color) {
            this.position = new Endabgabe.Vector(330, 170);
            this.color = _color;
        }
        draw(_strokeColor) {
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            this.strokeColor = _strokeColor;
            Endabgabe.crc2.restore();
        }
        move(_timeslice) {
            if (Endabgabe.customeri[0].activity == "served") {
                if (Endabgabe.customeri[0].table == 1) {
                    this.velocity.set(-40, -80);
                }
                if (Endabgabe.customeri[0].table == 2) {
                    this.velocity.set(-70, -40);
                }
                let offset = new Endabgabe.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                // let queueLength = queue + ((waitingCustomers.length+2)*70);
                // console.log(queueLength);
            }
        }
    }
    Endabgabe.Icecream = Icecream;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Icecream.js.map