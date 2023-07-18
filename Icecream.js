"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Icecream {
        position;
        velocity;
        state;
        iceballs;
        color;
        sauce;
        sauceColor;
        whip;
        sprinkels;
        constructor(_x, _y, _number, _flavor, _sauce, _saucecolor, _creamstate, _sprinkles) {
            this.position = new Endabgabe.Vector(_x, _y);
            this.velocity = new Endabgabe.Vector(0, 0);
            this.state = "invisible";
            this.iceballs = _number;
            this.color = _flavor;
            if (Endabgabe.droppedSauce.state == true) {
                this.sauceColor = _saucecolor;
            }
            if (_creamstate == true) {
                this.whip = true;
            }
            if (_sprinkles == true) {
                this.sprinkels = true;
            }
            if (_sauce == true) {
                this.sauce = true;
                this.sauceColor = _saucecolor;
            }
        }
        draw(_strokeColor) {
            if (this.state == "visible") {
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
                let iceball = new Endabgabe.Iceball();
                iceball.draw(this.color, this.iceballs, this.position.x, this.position.y);
                let Whip = new Endabgabe.Cream(this.whip);
                Whip.draw(this.position.x, this.position.y - 20);
                let Sprinkles = new Endabgabe.Sprinkle(this.sprinkels);
                Sprinkles.draw(this.position.x, this.position.y);
                let droppedSauce = new Endabgabe.Sauce(this.sauce);
                droppedSauce.draw(this.sauceColor, this.position.x, this.position.y - 20);
            }
        }
        move(_timeslice) {
            let offset = new Endabgabe.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    Endabgabe.Icecream = Icecream;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Icecream.js.map