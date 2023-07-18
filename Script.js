"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("keydown", handleKeyevent);
    window.addEventListener("click", handleClickevent);
    let flavor = "";
    let cream = false;
    let sprinkles = false;
    let sauce = "keine Soße";
    let price = 0;
    let currentPrice;
    let iceball = new Endabgabe.Iceball();
    let Whip = new Endabgabe.Cream(570, 650);
    let Sprinkles = new Endabgabe.Sprinkle();
    let droppedSauce = new Endabgabe.Sauce(570, 650);
    let background;
    // Eisdiele zeichnen
    function drawIceCreamShop() {
        // Sahne
        drawRoundedRect(30, 617, 70, 35, 10, "#ffffff", "silver");
        // Streusel
        drawRoundedRect(30, 660, 70, 35, 10, "#442200", "silver");
        // Schokosoße
        drawSauce(140, 640, "#9d6540");
        // Erdbeersoße
        drawSauce(140, 675, "#fb7969");
        // Eisbehälter: Schoko, Erdbeer, Vanille, Melone, Pistazie
        drawRoundedRect(170, 617, 50, 80, 10, "#9d6540", "silver");
        drawRoundedRect(235, 617, 50, 80, 10, "#fb7969", "silver");
        drawRoundedRect(300, 617, 50, 80, 10, "#f9f3ef", "silver");
        drawRoundedRect(365, 617, 50, 80, 10, "#fde1b4", "silver");
        drawRoundedRect(430, 617, 50, 80, 10, "#b4fdbc", "silver");
        // Eisbecher
        drawGlass(570, 670);
        // Tische
        drawTable(120, 185);
        drawTable(120, 385);
        drawTable(600, 185);
        drawTable(600, 385);
    }
    ;
    function drawSauce(_x, _y, _color) {
        Endabgabe.crc2.save();
        Endabgabe.crc2.translate(_x, _y);
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(0, 0, 15, 0, 2 * Math.PI, true);
        Endabgabe.crc2.fillStyle = _color;
        Endabgabe.crc2.fill();
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.restore();
    }
    function drawRoundedRect(_x, _y, _width, _height, _radius, _color, _strokeColor) {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(_x + _radius, _y);
        Endabgabe.crc2.lineTo(_x + _width - _radius, _y);
        Endabgabe.crc2.quadraticCurveTo(_x + _width, _y, _x + _width, _y + _radius);
        Endabgabe.crc2.lineTo(_x + _width, _y + _height - _radius);
        Endabgabe.crc2.quadraticCurveTo(_x + _width, _y + _height, _x + _width - _radius, _y + _height);
        Endabgabe.crc2.lineTo(_x + _radius, _y + _height);
        Endabgabe.crc2.quadraticCurveTo(_x, _y + _height, _x, _y + _height - _radius);
        Endabgabe.crc2.lineTo(_x, _y + _radius);
        Endabgabe.crc2.quadraticCurveTo(_x, _y, _x + _radius, _y);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = _color;
        Endabgabe.crc2.strokeStyle = _strokeColor;
        Endabgabe.crc2.lineWidth = 4;
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.restore();
    }
    function drawGlass(_x, _y) {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(_x, _y, 20, 0, 2 * Math.PI, true);
        Endabgabe.crc2.fillStyle = "#e8ffff";
        Endabgabe.crc2.strokeStyle = "#d0faf9";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.closePath();
    }
    ;
    function drawTable(_x, _y) {
        Endabgabe.crc2.save();
        Endabgabe.crc2.translate(_x, _y);
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(0, 0, 70, 0, 2 * Math.PI, true);
        Endabgabe.crc2.fillStyle = "HSL(40, 30%, 50%)";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.restore();
    }
    function drawPrice(_x, _y) {
        let priceText = price.toString();
        Endabgabe.crc2.save();
        Endabgabe.crc2.translate(_x, _y);
        Endabgabe.crc2.beginPath;
        Endabgabe.crc2.fillStyle = "black";
        Endabgabe.crc2.font = "15px Quicksand black";
        Endabgabe.crc2.fillText("Preis: " + priceText + "€", 0, 5);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.restore();
    }
    function create() {
        for (let index = 0; index < 3; index++) {
            Endabgabe.randomSundae = Math.floor(Math.random() * Endabgabe.Menu.length);
            let randomY = Math.random() * (-100) - (200 * index);
            let customer = new Endabgabe.Customer(randomY, Endabgabe.randomSundae);
            Endabgabe.customeri.push(customer);
        }
        ;
    }
    function update() {
        Endabgabe.crc2.putImageData(background, 0, 0);
        iceball.draw(Endabgabe.color, Endabgabe.number);
        Whip.draw();
        droppedSauce.draw();
        Sprinkles.draw();
        drawPrice(630, 650);
        for (let customer of Endabgabe.customeri) {
            customer.draw(Endabgabe.randomSundae);
            customer.move(1 / 100);
        }
    }
    Endabgabe.update = update;
    function handleKeyevent(_event) {
        if (_event.keyCode == 49) {
            Endabgabe.number = "1";
            console.log(Endabgabe.MenuList[0]);
        }
        if (_event.keyCode == 50) {
            Endabgabe.number = "2";
        }
        if (_event.keyCode == 51) {
            Endabgabe.number = "3";
        }
        if (_event.keyCode == 52) {
            Endabgabe.number = "4";
        }
        if (_event.keyCode == 53) {
            Endabgabe.number = "5";
        }
        if (_event.keyCode == 38) {
            price += 1;
            currentPrice = price.toString();
        }
        if (_event.keyCode == 40) {
            price -= 1;
            currentPrice = price.toString();
        }
    }
    function handleClickevent(_event) {
        let hotspot = new Endabgabe.Vector(_event.clientX - Endabgabe.crc2.canvas.offsetLeft, _event.clientY - Endabgabe.crc2.canvas.offsetTop);
        if (220 >= hotspot.x && hotspot.x >= 170 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#9d6540";
            flavor = "Schokolade";
            console.log(flavor);
        }
        if (285 >= hotspot.x && hotspot.x >= 235 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#fb7969";
            flavor = "Erdbeere";
            console.log(flavor);
        }
        if (350 >= hotspot.x && hotspot.x >= 300 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#f9f3ef";
            flavor = "Vanille";
            console.log(flavor);
        }
        if (445 >= hotspot.x && hotspot.x >= 365 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#fde1b4";
            flavor = "Melone";
            console.log(flavor);
        }
        if (510 >= hotspot.x && hotspot.x >= 430 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#b4fdbc";
            flavor = "Pistazie";
            console.log(flavor);
        }
        if (190 >= hotspot.x && hotspot.x >= 50 && 255 >= hotspot.y && hotspot.y >= 115) {
            Endabgabe.waitingCustomers[0].activity = "served";
            Endabgabe.waitingCustomers[0].table = 1;
            Endabgabe.finishedSundae(Endabgabe.data);
            Endabgabe.waitingCustomers.shift();
            for (let customer of Endabgabe.waitingCustomers) {
                customer.activity = "move";
                customer.velocity.set(0, 80);
            }
            Endabgabe.queueLength += 75;
            Endabgabe.waitingCustomers = [];
            for (let customer of Endabgabe.customeri) {
                customer.draw(Endabgabe.randomSundae);
                customer.move(1 / 100);
            }
        }
        if (190 >= hotspot.x && hotspot.x >= 50 && 455 >= hotspot.y && hotspot.y >= 315) {
            Endabgabe.waitingCustomers[0].activity = "served";
            Endabgabe.waitingCustomers[0].table = 2;
            Endabgabe.finishedSundae(Endabgabe.data);
            Endabgabe.waitingCustomers.shift();
            for (let customer of Endabgabe.waitingCustomers) {
                customer.activity = "move";
                customer.velocity.set(0, 80);
            }
            Endabgabe.queueLength += 75;
            Endabgabe.waitingCustomers = [];
            for (let customer of Endabgabe.customeri) {
                customer.draw(Endabgabe.randomSundae);
                customer.move(1 / 100);
            }
        }
        if (670 >= hotspot.x && hotspot.x >= 530 && 255 >= hotspot.y && hotspot.y >= 115) {
            Endabgabe.waitingCustomers[0].activity = "served";
            Endabgabe.waitingCustomers[0].table = 3;
            Endabgabe.finishedSundae(Endabgabe.data);
            Endabgabe.waitingCustomers.shift();
            for (let customer of Endabgabe.waitingCustomers) {
                customer.activity = "move";
                customer.velocity.set(0, 80);
            }
            Endabgabe.queueLength += 75;
            Endabgabe.waitingCustomers = [];
            for (let customer of Endabgabe.customeri) {
                customer.draw(Endabgabe.randomSundae);
                customer.move(1 / 100);
            }
        }
        if (670 >= hotspot.x && hotspot.x >= 530 && 455 >= hotspot.y && hotspot.y >= 315) {
            Endabgabe.waitingCustomers[0].activity = "served";
            Endabgabe.waitingCustomers[0].table = 4;
            Endabgabe.finishedSundae(Endabgabe.data);
            Endabgabe.waitingCustomers.shift();
            for (let customer of Endabgabe.waitingCustomers) {
                customer.activity = "move";
                customer.velocity.set(0, 80);
            }
            Endabgabe.queueLength += 75;
            Endabgabe.waitingCustomers = [];
            for (let customer of Endabgabe.customeri) {
                customer.draw(Endabgabe.randomSundae);
                customer.move(1 / 100);
            }
        }
        if (100 >= hotspot.x && hotspot.x >= 30 && 652 >= hotspot.y && hotspot.y >= 617) {
            if (Whip.state == false) {
                Whip.state = true;
                cream = true;
                return;
            }
            if (Whip.state == true) {
                Whip.state = false;
                cream = false;
                return;
            }
        }
        if (100 >= hotspot.x && hotspot.x >= 30 && 695 >= hotspot.y && hotspot.y >= 660) {
            if (Sprinkles.state == false) {
                Sprinkles.state = true;
                console.log(Sprinkles.state);
                sprinkles = true;
                return;
            }
            if (Sprinkles.state == true) {
                Sprinkles.state = false;
                console.log(Sprinkles.state);
                sprinkles = false;
                return;
            }
        }
        if (155 > hotspot.x && hotspot.x > 125 && 655 >= hotspot.y && hotspot.y >= 625) {
            droppedSauce.color = "#332200";
            if (droppedSauce.state == true) {
                droppedSauce.state = false;
                sauce = "keine Soße";
                return;
            }
            if (droppedSauce.state == false) {
                droppedSauce.state = true;
                sauce = "Schokosoße";
                return;
            }
        }
        if (155 >= hotspot.x && hotspot.x >= 125 && 677 >= hotspot.y && hotspot.y >= 662) {
            if (droppedSauce.state == true) {
                droppedSauce.state = false;
                sauce = "keine Soße";
                return;
            }
            if (droppedSauce.state == false) {
                droppedSauce.color = "red";
                droppedSauce.state = true;
                sauce = "Erdbeersoße";
                return;
            }
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Script.js.map