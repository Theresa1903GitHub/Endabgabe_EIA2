"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Icecream {
        position;
        iceballs;
        color;
        strokeColor;
        velocity;
        state;
        constructor(_x, _y) {
            this.position = new Endabgabe.Vector(_x, _y);
            this.velocity = new Endabgabe.Vector(0, 0);
            this.state = "invisible";
        }
        draw(_strokeColor) {
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI, true);
            Endabgabe.crc2.fillStyle = "#e8ffff";
            Endabgabe.crc2.strokeStyle = "#d0faf9";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.restore();
            Endabgabe.iceball.draw(Endabgabe.color, Endabgabe.number, this.position.x, this.position.y);
            if (Endabgabe.cream == true) {
                Endabgabe.Whip.draw(this.position.x, this.position.y - 20);
            }
            Endabgabe.droppedSauce.draw();
            Endabgabe.Sprinkles.draw();
        }
        move(_timeslice) {
            // if (table == 1){
            //     this.velocity.set (-40, -80);
            // }
            // if (table == 2){
            //     this.velocity.set (-40, -40);
            // }
            let offset = new Endabgabe.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    Endabgabe.Icecream = Icecream;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Icecream.js.map