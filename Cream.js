"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Cream {
        position;
        color;
        size;
        state;
        constructor(_positionX, _positionY) {
            this.position = new Endabgabe.Vector(_positionX, _positionY);
            this.color = "white";
            this.size = 1.2;
            this.state = false;
        }
        draw() {
            if (this.state == true) {
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.position.x, this.position.y);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.moveTo(0, 0);
                Endabgabe.crc2.lineTo(5 * this.size, 10 * this.size);
                Endabgabe.crc2.lineTo(15 * this.size, 11 * this.size);
                Endabgabe.crc2.lineTo(8 * this.size, 18 * this.size);
                Endabgabe.crc2.lineTo(10 * this.size, 28 * this.size);
                Endabgabe.crc2.lineTo(0, 23 * this.size);
                Endabgabe.crc2.lineTo(-10 * this.size, 28 * this.size);
                Endabgabe.crc2.lineTo(-8 * this.size, 18 * this.size);
                Endabgabe.crc2.lineTo(-15 * this.size, 11 * this.size);
                Endabgabe.crc2.lineTo(-5 * this.size, 10 * this.size);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.fill();
                Endabgabe.crc2.lineWidth = 0.8;
                Endabgabe.crc2.strokeStyle = "grey";
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.restore();
            }
        }
    }
    Endabgabe.Cream = Cream;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Cream.js.map