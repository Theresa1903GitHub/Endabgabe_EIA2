"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Customer {
        position;
        velocity;
        color;
        activity;
        status;
        appointment;
        table;
        constructor(_positionY, _number) {
            this.position = new Endabgabe.Vector(400, _positionY);
            this.velocity = new Endabgabe.Vector(0, 80);
            this.activity = "move";
            this.status = "happy";
            // this.color = _color;
            this.appointment = _number;
        }
        draw(_randomSundae) {
            if (this.activity == "move" || this.activity == "served") {
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.position.x, this.position.y);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI, true);
                if (this.status == "happy") {
                    Endabgabe.crc2.fillStyle = "#fde1b4";
                }
                else {
                    Endabgabe.crc2.fillStyle = "red";
                }
                Endabgabe.crc2.fill();
                Endabgabe.crc2.strokeStyle = "black";
                Endabgabe.crc2.lineWidth = 0.5;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.closePath();
                // Auge links
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-5, -2, 3, 0, 2 * Math.PI, true);
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                // Auge rechts
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(5, -2, 3, 0, 2 * Math.PI, true);
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                // Mund
                Endabgabe.crc2.beginPath();
                if (this.status == "happy") {
                    Endabgabe.crc2.arc(0, 0, 10, 0.2 * Math.PI, 0.8 * Math.PI);
                }
                else {
                    Endabgabe.crc2.arc(0, 15, 10, 1.2 * Math.PI, 1.8 * Math.PI);
                }
                Endabgabe.crc2.strokeStyle = "black";
                Endabgabe.crc2.lineWidth = 3;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.restore();
            }
            if (this.activity == "waiting") {
                let order = Endabgabe.MenuList[this.appointment];
                // console.log(order);
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.position.x, this.position.y);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI, true);
                if (this.status == "happy") {
                    Endabgabe.crc2.fillStyle = "#fde1b4";
                }
                else {
                    Endabgabe.crc2.fillStyle = "red";
                }
                Endabgabe.crc2.fill();
                Endabgabe.crc2.strokeStyle = "black";
                Endabgabe.crc2.lineWidth = 0.5;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.closePath();
                // Auge links
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-5, -2, 3, 0, 2 * Math.PI, true);
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                // Auge rechts
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(5, -2, 3, 0, 2 * Math.PI, true);
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                // Mund
                Endabgabe.crc2.beginPath();
                if (this.status == "happy") {
                    Endabgabe.crc2.arc(0, 0, 10, 0.2 * Math.PI, 0.8 * Math.PI);
                }
                else {
                    Endabgabe.crc2.arc(0, 15, 10, 1.2 * Math.PI, 1.8 * Math.PI);
                }
                Endabgabe.crc2.strokeStyle = "black";
                Endabgabe.crc2.lineWidth = 3;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.strokeStyle = "black";
                Endabgabe.crc2.lineWidth = 2;
                Endabgabe.crc2.font = "15px Quicksand";
                Endabgabe.crc2.fillText(order, 30, 5);
                Endabgabe.crc2.restore();
            }
            if (this.activity == "sitting") {
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.position.x, this.position.y);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(0, 0, 20, 0, 2 * Math.PI, true);
                if (this.status == "happy") {
                    Endabgabe.crc2.fillStyle = "#fde1b4";
                }
                else {
                    Endabgabe.crc2.fillStyle = "red";
                }
                Endabgabe.crc2.fill();
                Endabgabe.crc2.strokeStyle = "black";
                Endabgabe.crc2.lineWidth = 0.5;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.closePath();
                // Auge links
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(-5, -2, 3, 0, 2 * Math.PI, true);
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                // Auge rechts
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(5, -2, 3, 0, 2 * Math.PI, true);
                Endabgabe.crc2.fillStyle = "black";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                // Mund
                Endabgabe.crc2.beginPath();
                if (this.status == "happy") {
                    Endabgabe.crc2.arc(0, 0, 10, 0.2 * Math.PI, 0.8 * Math.PI);
                }
                else {
                    Endabgabe.crc2.arc(0, 15, 10, 1.2 * Math.PI, 1.8 * Math.PI);
                }
                Endabgabe.crc2.strokeStyle = "black";
                Endabgabe.crc2.lineWidth = 3;
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.restore();
            }
        }
        order(_randomSundae) {
            let order = Endabgabe.MenuList[_randomSundae];
            console.log(order);
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.ellipse(15, -10, 70, 45, 0, 0, 2 * Math.PI, true);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.strokeStyle = "black";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.strokeText(order, 0, 0);
            Endabgabe.crc2.restore();
        }
        waiting() {
            return;
        }
        move(_timeslice, _strength) {
            if (this.activity == "waiting") {
                setTimeout(() => {
                    if (this.activity == "waiting") {
                        this.status = "angry";
                    }
                    ;
                }, 13000);
                return;
            }
            if (this.activity == "move") {
                let queueLength = Endabgabe.queue - ((Endabgabe.waitingCustomers.length + 1) * 70);
                let offset = new Endabgabe.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > queueLength) {
                    if (this.velocity.y > 0) {
                        this.activity = "waiting";
                        this.velocity.set(0, 0);
                        Endabgabe.waitingCustomers.push(this);
                        Endabgabe.randomSundae = Math.floor(Endabgabe.MenuList.length * Math.random());
                    }
                }
            }
            if (this.activity == "served") {
                if (this.table == 1) {
                    this.velocity.set(-40, -80);
                }
                if (this.table == 2) {
                    this.velocity.set(-70, -40);
                }
                if (this.table == 3) {
                    this.velocity.set(40, -80);
                }
                if (this.table == 4) {
                    this.velocity.set(70, -40);
                }
                let offset = new Endabgabe.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x <= 210 || this.position.x >= 550) {
                    this.activity = "eating";
                }
            }
            if (this.activity == "eating") {
                this.activity = "sitting";
                setTimeout(() => {
                    this.activity = "move";
                }, 6000);
                this.velocity.set(0, -80);
            }
            if (this.activity == "moveout") {
                this.velocity.set(0, -80);
                let offset = new Endabgabe.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
            }
        }
    }
    Endabgabe.Customer = Customer;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Customer.js.map