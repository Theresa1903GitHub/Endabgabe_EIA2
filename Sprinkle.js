"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Sprinkle {
        position;
        color;
        state;
        constructor(_state) {
            // this.position = new Vector (570, 670);
            this.color = "#442200";
            this.state = _state;
        }
        draw(_positionX, _positionY) {
            if (this.state == true) {
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(_positionX, _positionY);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.ellipse(0, 0, 1, 3, 0, 0, 2 * Math.PI, true);
                Endabgabe.crc2.moveTo(-3, 10);
                Endabgabe.crc2.ellipse(-3, 10, 1, 3, 25, 0, 2 * Math.PI, true);
                Endabgabe.crc2.moveTo(-13, 5);
                Endabgabe.crc2.ellipse(-13, 5, 1, 3, 80, 0, 2 * Math.PI, true);
                Endabgabe.crc2.moveTo(7, -8);
                Endabgabe.crc2.ellipse(7, -8, 1, 3, 45, 0, 2 * Math.PI, true);
                Endabgabe.crc2.moveTo(4, 11);
                Endabgabe.crc2.ellipse(4, 11, 1, 3, 63, 0, 2 * Math.PI, true);
                Endabgabe.crc2.moveTo(-6, 9);
                Endabgabe.crc2.ellipse(-6, 9, 1, 3, 33, 0, 2 * Math.PI, true);
                Endabgabe.crc2.moveTo(10, 1);
                Endabgabe.crc2.ellipse(10, 1, 1, 3, 56, 0, 2 * Math.PI, true);
                Endabgabe.crc2.moveTo(-6, -7);
                Endabgabe.crc2.ellipse(-6, -7, 1, 3, 14, 0, 2 * Math.PI, true);
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.restore();
            }
        }
    }
    Endabgabe.Sprinkle = Sprinkle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Sprinkle.js.map