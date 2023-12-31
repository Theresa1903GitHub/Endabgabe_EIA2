"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Iceball {
        position;
        color;
        number;
        constructor() { }
        draw(_color, _number, _positionX, _positionY) {
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(_positionX, _positionY);
            Endabgabe.crc2.lineWidth = 0.3;
            Endabgabe.crc2.strokeStyle = "black";
            Endabgabe.crc2.fillStyle = _color;
            if (_number == "1") {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(0, 0, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
            }
            if (_number == "2") {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(10, 0, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-10, 0, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
            }
            if (_number == "3") {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(10, 6, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-10, 6, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(0, -11, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
            }
            if (_number == "4") {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(9, 9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-9, 9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(9, -9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-9, -9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
            }
            if (_number == "5") {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(9, 9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-9, 9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(9, -9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-9, -9, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(0, 0, 10, 0, 2 * Math.PI, true);
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
            }
            Endabgabe.crc2.restore();
        }
    }
    Endabgabe.Iceball = Iceball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Iceball.js.map