"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Sauce {
        position;
        color;
        state;
        constructor(_state) {
            // this.position = new Vector (_positionX, _positionY);
            // this.color = "#332200"
            this.state = _state;
        }
        draw(_color, _positionX, _positionY) {
            if (this.state == true) {
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(_positionX, _positionY);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.moveTo(12, 10);
                Endabgabe.crc2.lineTo(-12, 13);
                Endabgabe.crc2.lineTo(-12, 14);
                Endabgabe.crc2.lineTo(19, 18);
                Endabgabe.crc2.lineTo(19, 19);
                Endabgabe.crc2.lineTo(-17, 22);
                Endabgabe.crc2.lineTo(-17, 23);
                Endabgabe.crc2.lineTo(19, 26);
                Endabgabe.crc2.lineTo(19, 27);
                Endabgabe.crc2.lineTo(-10, 29);
                Endabgabe.crc2.strokeStyle = _color;
                Endabgabe.crc2.lineWidth = 2;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.restore();
            }
        }
    }
    Endabgabe.Sauce = Sauce;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Sauce.js.map