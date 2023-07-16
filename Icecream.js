"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Icecream {
        position;
        color;
        strokeColor;
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
    }
    Endabgabe.Icecream = Icecream;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Icecream.js.map