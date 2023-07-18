"use strict";
var Endabgabe;
(function (Endabgabe) {
    /*
        Aufgabe: Endabgabe_Eisdealer
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 03.07.23
        Zusammenarbeit mit Pia Schwer
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1&2
        */
    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", handleKeyevent);
    window.addEventListener("click", handleClickevent);
    Endabgabe.customeri = [];
    let recipe = [];
    let icecreme = [];
    let data;
    Endabgabe.queue = 600;
    Endabgabe.waitingCustomers = [];
    Endabgabe.color = "white";
    Endabgabe.saucecolor = "red";
    Endabgabe.number = "3";
    Endabgabe.table = 0;
    let flavor = "";
    Endabgabe.cream = false;
    Endabgabe.sprinkles = false;
    let sauce = "keine Soße";
    let price = 0;
    let currentPrice;
    Endabgabe.iceball = new Endabgabe.Iceball();
    Endabgabe.Whip = new Endabgabe.Cream(Endabgabe.cream);
    Endabgabe.Sprinkles = new Endabgabe.Sprinkle(Endabgabe.sprinkles);
    Endabgabe.droppedSauce = new Endabgabe.Sauce();
    let background;
    let golden = 0.62;
    Endabgabe.canvas = document.querySelector("canvas");
    Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
    async function handleLoad() {
        let button = document.getElementById("btn");
        button.addEventListener("click", newRecipe);
        let response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Recipes");
        let sundae = await response.text();
        data = JSON.parse(sundae);
        Endabgabe.generateNewSundae(data);
        drawBackground();
        create();
        setInterval(update, 20);
    }
    async function newRecipe() {
        let Title = document.querySelector("#recipeTitle");
        let Flavor = document.querySelector("#flavor");
        let Iceballs = document.querySelector("#iceballs");
        let Cream = document.querySelector("#cream");
        let Sauce = document.querySelector("#sauce");
        let Sprinkles = document.querySelector("#sprinkles");
        let Price = document.querySelector("#price");
        let newSundae = {
            title: Title.value,
            flavor: Flavor.value,
            iceballs: Iceballs.value,
            cream: Cream.checked,
            sauce: Sauce.value,
            sprinkles: Sprinkles.checked,
            price: Price.value
        };
        let query = JSON.stringify(newSundae);
        await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=insert&collection=Recipes&data=" + query);
        Title.value = "New Recipe";
        Flavor.value = "Schokolade";
        Iceballs.value = "0";
        Cream.checked = false;
        Sauce.value = "keine Soße";
        Sprinkles.checked = false;
        Price.value = "0";
        // refreshMenu(); 
    }
    ;
    async function generateMenu() {
        let response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Recipes");
        let sundae = await response.text();
        data = JSON.parse(sundae);
        Endabgabe.generateNewSundae(data);
    }
    async function refreshMenu() {
        // let menu: HTMLElement = <HTMLElement>document.getElementById("menu");
        // for (let j= menu.childNodes.length; j>=0; j-- ) {
        //     menu.removeChild(menu.childNodes[j]);
        // }
        // generateMenu();
    }
    function drawBackground() {
        let gradient = Endabgabe.crc2.createLinearGradient(0, 0, 0, Endabgabe.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(100, 80%, 30%)");
        gradient.addColorStop(0.2 * golden, "HSL(100, 80%, 30%)");
        gradient.addColorStop(0.2 * golden + 0.000001, "grey");
        gradient.addColorStop(1.3 * golden - 0.000001, "white");
        gradient.addColorStop(1.3 * golden, "HSL(40, 30%, 50%)");
        gradient.addColorStop(1, "HSL(40, 30%, 50%)");
        Endabgabe.crc2.fillStyle = gradient;
        Endabgabe.crc2.fillRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
        drawIceCreamShop();
        background = Endabgabe.crc2.getImageData(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
    }
    ;
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
    Endabgabe.drawGlass = drawGlass;
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
            console.log(Endabgabe.randomSundae);
        }
        ;
    }
    function update() {
        Endabgabe.crc2.putImageData(background, 0, 0);
        Endabgabe.iceball.draw(Endabgabe.color, Endabgabe.number, 570, 670);
        Endabgabe.Whip.draw(570, 650);
        Endabgabe.droppedSauce.draw(Endabgabe.saucecolor, 570, 650);
        Endabgabe.Sprinkles.draw(570, 670);
        drawPrice(630, 650);
        for (let customer of Endabgabe.customeri) {
            customer.draw(Endabgabe.randomSundae);
            customer.move(1 / 100);
        }
        for (let ice of icecreme) {
            ice.draw("red");
            ice.move(1 / 100);
            if (ice.position.x <= 170 || ice.position.x >= 590) {
                ice.velocity.set(0, 0);
                setTimeout(() => {
                    ice.state = "invisible";
                }, 6000);
            }
            // if (table == 2){
            //     ice.velocity.set (-40, -80);
            //     ice.draw("red");
            //     ice.move(1/100);}
            // }
        }
    }
    Endabgabe.update = update;
    function handleKeyevent(_event) {
        if (_event.keyCode == 49) {
            Endabgabe.number = "1";
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
        }
        if (285 >= hotspot.x && hotspot.x >= 235 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#fb7969";
            flavor = "Erdbeere";
        }
        if (350 >= hotspot.x && hotspot.x >= 300 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#f9f3ef";
            flavor = "Vanille";
        }
        if (445 >= hotspot.x && hotspot.x >= 365 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#fde1b4";
            flavor = "Melone";
        }
        if (510 >= hotspot.x && hotspot.x >= 430 && 697 >= hotspot.y && hotspot.y >= 617) {
            Endabgabe.color = "#b4fdbc";
            flavor = "Pistazie";
        }
        if (190 >= hotspot.x && hotspot.x >= 50 && 255 >= hotspot.y && hotspot.y >= 115) {
            Endabgabe.waitingCustomers[0].activity = "served";
            Endabgabe.waitingCustomers[0].table = 1;
            Endabgabe.table = 1;
            let ice = new Endabgabe.Icecream(350, 530, Endabgabe.number, Endabgabe.color, Endabgabe.saucecolor, Endabgabe.cream, Endabgabe.sprinkles);
            ice.velocity.set(-40, -80);
            ice.state = "visible";
            icecreme.push(ice);
            finishedSundae(data);
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
            Endabgabe.table = 2;
            let ice = new Endabgabe.Icecream(350, 530, Endabgabe.number, Endabgabe.color, Endabgabe.saucecolor, Endabgabe.cream, Endabgabe.sprinkles);
            ice.velocity.set(-70, -40);
            ice.state = "visible";
            icecreme.push(ice);
            finishedSundae(data);
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
            let ice = new Endabgabe.Icecream(450, 510, Endabgabe.number, Endabgabe.color, Endabgabe.saucecolor, Endabgabe.cream, Endabgabe.sprinkles);
            ice.velocity.set(40, -80);
            ice.state = "visible";
            icecreme.push(ice);
            console.log(icecreme);
            finishedSundae(data);
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
            let ice = new Endabgabe.Icecream(450, 510, Endabgabe.number, Endabgabe.color, Endabgabe.saucecolor, Endabgabe.cream, Endabgabe.sprinkles);
            ice.velocity.set(70, -40);
            ice.state = "visible";
            icecreme.push(ice);
            finishedSundae(data);
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
            if (Endabgabe.Whip.state == false) {
                Endabgabe.Whip.state = true;
                Endabgabe.cream = true;
                return;
            }
            if (Endabgabe.Whip.state == true) {
                Endabgabe.Whip.state = false;
                Endabgabe.cream = false;
                return;
            }
        }
        if (100 >= hotspot.x && hotspot.x >= 30 && 695 >= hotspot.y && hotspot.y >= 660) {
            if (Endabgabe.Sprinkles.state == false) {
                Endabgabe.Sprinkles.state = true;
                Endabgabe.sprinkles = true;
                return;
            }
            if (Endabgabe.Sprinkles.state == true) {
                Endabgabe.Sprinkles.state = false;
                Endabgabe.sprinkles = false;
                return;
            }
        }
        if (155 > hotspot.x && hotspot.x > 125 && 655 >= hotspot.y && hotspot.y >= 625) {
            if (Endabgabe.droppedSauce.state == true) {
                Endabgabe.droppedSauce.state = false;
                Endabgabe.saucecolor = "";
                sauce = "keine Soße";
                return;
            }
            if (Endabgabe.droppedSauce.state == false) {
                Endabgabe.saucecolor = "#332200";
                Endabgabe.droppedSauce.state = true;
                sauce = "Schokosoße";
                return;
            }
        }
        if (155 >= hotspot.x && hotspot.x >= 125 && 677 >= hotspot.y && hotspot.y >= 662) {
            if (Endabgabe.droppedSauce.state == true) {
                Endabgabe.droppedSauce.state = false;
                Endabgabe.saucecolor = "";
                sauce = "keine Soße";
                return;
            }
            if (Endabgabe.droppedSauce.state == false) {
                Endabgabe.saucecolor = "red";
                Endabgabe.droppedSauce.state = true;
                sauce = "Erdbeersoße";
                return;
            }
        }
    }
    function finishedSundae(_data) {
        let orderedNumber = Endabgabe.waitingCustomers[0].appointment;
        for (let i of Endabgabe.Menu) {
            let orderTitle = _data.data[i].title;
            let orderFlavor = _data.data[i].flavor;
            let orderIceballs = _data.data[i].iceballs;
            let orderCream = _data.data[i].cream;
            let orderSauce = _data.data[i].sauce;
            let orderSprinkles = _data.data[i].sprinkles;
            let orderPrice = _data.data[i].price;
            recipe.push(orderTitle, orderFlavor, orderIceballs, orderCream, orderSauce, orderSprinkles, orderPrice);
        }
        console.log(recipe[orderedNumber * 7]);
        console.log(recipe[orderedNumber * 7 + 1]);
        console.log(recipe[orderedNumber * 7 + 2]);
        console.log(recipe[orderedNumber * 7 + 3]);
        console.log(recipe[orderedNumber * 7 + 4]);
        console.log(recipe[orderedNumber * 7 + 5]);
        console.log(recipe[orderedNumber * 7 + 6]);
        let mySundae = {
            title: recipe[orderedNumber * 7],
            flavor: flavor,
            iceballs: Endabgabe.number,
            cream: Endabgabe.cream,
            sauce: sauce,
            sprinkles: Endabgabe.sprinkles,
            price: currentPrice
        };
        console.log(mySundae);
        if (mySundae.title == recipe[orderedNumber * 7] &&
            mySundae.flavor == recipe[orderedNumber * 7 + 1] &&
            mySundae.iceballs == recipe[orderedNumber * 7 + 2] &&
            mySundae.cream == recipe[orderedNumber * 7 + 3] &&
            mySundae.sauce == recipe[orderedNumber * 7 + 4] &&
            mySundae.sprinkles == recipe[orderedNumber * 7 + 5] &&
            mySundae.price == recipe[orderedNumber * 7 + 6]) {
            // console.log("passt");
            Endabgabe.waitingCustomers[0].status = "happy";
            return true;
        }
        else {
            // console.log("passt nicht");
            Endabgabe.waitingCustomers[0].status = "angry";
            return false;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Menu.js.map