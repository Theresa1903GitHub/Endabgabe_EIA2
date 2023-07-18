namespace Endabgabe {
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

    export let customeri: Customer [] = [];
    let recipe: any [] = [];
    let icecreme: Icecream [] = [];

    export interface Sundae {
        title: string;
        flavor: string;
        iceballs: string;
        cream: boolean;
        sauce: string;
        sprinkles: boolean;
        price: string;
    }

    export interface menu {
        [name: string]: Sundae[];
    }

    let data: menu;

    export let queue: number = 600;
    export let waitingCustomers: Customer[] = [];
   
    export let color: string = "white";
    export let saucecolor: string = "red";
    export let number: string = "3";
    export let randomSundae: number;
    export let queueLength: number;
    export let table: number = 0;

    let flavor: string = "";
    export let cream : boolean = false;
    export let sprinkles : boolean = false;
    export let sauceBoolean : boolean = false;
    let sauce : string = "keine Soße";
    let price : number = 0;
    let currentPrice : string;

    export let iceball: Iceball = new Iceball();
    export let Whip: Cream = new Cream (cream);
    export let Sprinkles: Sprinkle = new Sprinkle (sprinkles);
    export let droppedSauce: Sauce = new Sauce(sauceBoolean);
  
    let background: ImageData;

    let golden: number = 0.62;
   
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    export let crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    async function handleLoad(): Promise<void> {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn");
        button.addEventListener("click", newRecipe);

        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Recipes");
        let sundae: string = await response.text();
        data = JSON.parse(sundae);

        generateNewSundae(data);

        drawBackground();
        create();
        setInterval(update, 20);
    }

    async function newRecipe(): Promise<void> {
        
        let Title: HTMLInputElement = <HTMLInputElement>document.querySelector("#recipeTitle");
        let Flavor: HTMLInputElement = <HTMLInputElement>document.querySelector("#flavor");
        let Iceballs: HTMLInputElement = <HTMLInputElement>document.querySelector("#iceballs");
        let Cream: HTMLInputElement = <HTMLInputElement>document.querySelector("#cream");
        let Sauce: HTMLInputElement = <HTMLInputElement>document.querySelector("#sauce");
        let Sprinkles: HTMLInputElement = <HTMLInputElement>document.querySelector("#sprinkles");
        let Price: HTMLInputElement = <HTMLInputElement>document.querySelector("#price");

        let newSundae: Sundae =
        {
            title: Title.value,
            flavor: Flavor.value,
            iceballs: Iceballs.value,
            cream: Cream.checked,
            sauce: Sauce.value,
            sprinkles: Sprinkles.checked,
            price: Price.value
        }

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
    };

async function generateMenu():Promise<void>{
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Recipes");
        let sundae: string = await response.text();
        data = JSON.parse(sundae);

        generateNewSundae(data);
}

async function refreshMenu():Promise<void>{
    // let menu: HTMLElement = <HTMLElement>document.getElementById("menu");
    
    // for (let j= menu.childNodes.length; j>=0; j-- ) {
    //     menu.removeChild(menu.childNodes[j]);
    // }

    // generateMenu();
} 

function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(100, 80%, 30%)");
        gradient.addColorStop(0.2*golden, "HSL(100, 80%, 30%)");
        gradient.addColorStop(0.2*golden+0.000001, "grey");
        gradient.addColorStop(1.3*golden-0.000001, "white");
        gradient.addColorStop(1.3*golden, "HSL(40, 30%, 50%)");
        gradient.addColorStop(1, "HSL(40, 30%, 50%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawIceCreamShop();

        background = crc2.getImageData (0, 0, crc2.canvas.width, crc2.canvas.height);
    };

// Eisdiele zeichnen
function drawIceCreamShop() {
    // Sahne
    drawRoundedRect(30, 617, 70, 35, 10, "#ffffff", "silver");
    // Streusel
    drawRoundedRect(30, 660, 70, 35, 10, "#442200","silver");
    // Schokosoße
    drawSauce(140, 640, "#9d6540");
    // Erdbeersoße
    drawSauce(140, 675, "#fb7969")
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
};

function drawSauce(_x:number, _y:number, _color: string){
    crc2.save();
    crc2.translate(_x, _y);
    crc2.beginPath();
    crc2.arc(0, 0, 15, 0, 2*Math.PI, true);
    crc2.fillStyle = _color;
    crc2.fill();
    crc2.closePath();
    crc2.restore();

}

function drawRoundedRect(_x: number, _y: number, _width: number, _height: number, _radius: number, _color: string, _strokeColor: string) {
  crc2.beginPath();
  crc2.moveTo(_x + _radius, _y);
  crc2.lineTo(_x + _width - _radius, _y);
  crc2.quadraticCurveTo(_x + _width, _y, _x + _width, _y + _radius);
  crc2.lineTo(_x + _width, _y + _height - _radius);
  crc2.quadraticCurveTo(_x + _width, _y + _height, _x + _width - _radius, _y + _height);
  crc2.lineTo(_x + _radius, _y + _height);
  crc2.quadraticCurveTo(_x, _y + _height, _x, _y + _height - _radius);
  crc2.lineTo(_x, _y + _radius);
  crc2.quadraticCurveTo(_x, _y, _x + _radius, _y);
  crc2.closePath();
  crc2.fillStyle = _color;
  crc2.strokeStyle = _strokeColor;
  crc2.lineWidth = 4;
  crc2.fill();
  crc2.stroke();
  crc2.restore();
}

export function drawGlass(_x:number, _y:number){
    crc2.beginPath();
    crc2.arc(_x, _y, 20, 0, 2*Math.PI, true);
    crc2.fillStyle = "#e8ffff";
    crc2.strokeStyle = "#d0faf9";
    crc2.fill();
    crc2.stroke();
    crc2.closePath();
};

function drawTable (_x:number, _y:number){
    crc2.save();
    crc2.translate(_x,_y);

    crc2.beginPath();
    crc2.arc(0, 0, 70, 0, 2*Math.PI, true);
    crc2.fillStyle = "HSL(40, 30%, 50%)";
    crc2.fill();
    crc2.closePath();

    crc2.restore();
}

function drawPrice(_x:number, _y:number){
    let priceText : string = price.toString();

    crc2.save();
    crc2.translate(_x, _y);
    crc2.beginPath;
    crc2.fillStyle = "black";
    crc2.font = "15px Quicksand black";
    crc2.fillText("Preis: " + priceText +"€", 0, 5);
    crc2.closePath();
    crc2.restore();
}

function create(): void{
    for (let index: number = 0; index < 3; index++){
        randomSundae = Math.floor(Math.random()*Menu.length);
        
        let randomY: number =  Math.random() * (-100) - (200 * index);
        let customer: Customer = new Customer(randomY, randomSundae);
        
        customeri.push(customer); 
        console.log(randomSundae);
        
        };
    }

export function update():void {
    crc2.putImageData(background, 0, 0);
    iceball.draw(color, number, 570, 670);
    Whip.draw(570, 650); 
    droppedSauce.draw(saucecolor, 570, 650);
    Sprinkles.draw(570, 670);
    drawPrice(630, 650);  
    for (let customer of customeri) {
        customer.draw(randomSundae);
        customer.move(1/100);
        }
    for (let ice of icecreme){
        ice.draw("red");
        ice.move(1/100);
        if (ice.position.x <= 170 || ice.position.x >= 590){
            ice.velocity.set(0,0);
            setTimeout(() => {
                ice.state = "invisible";
              }, 6000);
    }
        // if (table == 2){
        //     ice.velocity.set (-40, -80);
        //     ice.draw("red");
        //     ice.move(1/100);}
    // }
}}

      
function handleKeyevent(_event: { keyCode: number; }) {
    if (_event.keyCode == 49) {
        number = "1";
        }
    if (_event.keyCode == 50) {
        number = "2";
    }
    if (_event.keyCode == 51) {
        number = "3";
        }
    if (_event.keyCode == 52) {
        number = "4";
    }
    if (_event.keyCode == 53) {
        number = "5";
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

function handleClickevent(_event: MouseEvent): void {
    let hotspot: Endabgabe.Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
    if (220 >= hotspot.x && hotspot.x >= 170 && 697 >= hotspot.y && hotspot.y >= 617){
        color = "#9d6540";
        flavor = "Schokolade";  
    }
    if (285 >= hotspot.x && hotspot.x >= 235 && 697 >= hotspot.y && hotspot.y >= 617){
        color = "#fb7969";  
        flavor = "Erdbeere";
    }
    if (350 >= hotspot.x && hotspot.x >= 300 && 697 >= hotspot.y && hotspot.y >= 617){
        color = "#f9f3ef"; 
        flavor = "Vanille"; 
    }
    if (445 >= hotspot.x && hotspot.x >= 365 && 697 >= hotspot.y && hotspot.y >= 617){
        color = "#fde1b4";  
        flavor = "Melone";
    }
    if (510 >= hotspot.x && hotspot.x >= 430 && 697 >= hotspot.y && hotspot.y >= 617){
        color = "#b4fdbc"; 
        flavor = "Pistazie";  
    }
    if (190 >= hotspot.x && hotspot.x >= 50 && 255 >= hotspot.y && hotspot.y >= 115){
        waitingCustomers[0].activity = "served";
        waitingCustomers[0].table = 1;
        table = 1;
        let ice : Icecream = new Icecream (350, 530, number, color, sauceBoolean, saucecolor, cream, sprinkles);
        ice.velocity.set(-40,-80);
        ice.state = "visible";
        icecreme.push(ice);
           finishedSundae(data);
        waitingCustomers.shift();
        for (let customer of waitingCustomers){
            customer.activity = "move";
            customer.velocity.set (0,80);}
        queueLength += 75;
        waitingCustomers = []
        for (let customer of customeri) {
            customer.draw(randomSundae);
            customer.move(1/100)
        } 
    }
    if (190 >= hotspot.x && hotspot.x >= 50 && 455 >= hotspot.y && hotspot.y >= 315){
        waitingCustomers[0].activity = "served";
        waitingCustomers[0].table = 2;
        table = 2;
        let ice : Icecream = new Icecream (350, 530,  number, color, sauceBoolean, saucecolor, cream, sprinkles);
        ice.velocity.set(-70,-40);
        ice.state = "visible";
        icecreme.push(ice);
        finishedSundae(data);
        waitingCustomers.shift();
        for (let customer of waitingCustomers){
            customer.activity = "move";
            customer.velocity.set (0,80);}
        queueLength += 75;
        waitingCustomers = []
        for (let customer of customeri) {
            customer.draw(randomSundae);
            customer.move(1/100)
        } 
    }
    if (670 >= hotspot.x && hotspot.x >= 530 && 255 >= hotspot.y && hotspot.y >= 115){
        waitingCustomers[0].activity = "served";
        waitingCustomers[0].table = 3;
        let ice : Icecream = new Icecream (450, 510,  number, color, sauceBoolean, saucecolor, cream, sprinkles);
        ice.velocity.set(40,-80);
        ice.state = "visible";
        icecreme.push(ice);
        console.log(icecreme);
        
           finishedSundae(data);
        waitingCustomers.shift();
        for (let customer of waitingCustomers){
            customer.activity = "move";
            customer.velocity.set (0,80);}
        queueLength += 75;
        waitingCustomers = []
        for (let customer of customeri) {
            customer.draw(randomSundae);
            customer.move(1/100)
        } 
    }
    if (670 >= hotspot.x && hotspot.x >= 530 && 455 >= hotspot.y && hotspot.y >= 315){
        waitingCustomers[0].activity = "served";
        waitingCustomers[0].table = 4;
        let ice : Icecream = new Icecream (450, 510, number, color, sauceBoolean, saucecolor, cream, sprinkles);
        ice.velocity.set(70,-40);
        ice.state = "visible";
        icecreme.push(ice);
        finishedSundae(data);
        waitingCustomers.shift();
        for (let customer of waitingCustomers){
            customer.activity = "move";
            customer.velocity.set (0,80);}
        queueLength += 75;
        waitingCustomers = []
        for (let customer of customeri) {
            customer.draw(randomSundae);
            customer.move(1/100)
        } 
    }
    if (100 >= hotspot.x && hotspot.x >= 30 && 652 >= hotspot.y && hotspot.y >= 617){
        if (Whip.state == false){
            Whip.state = true; 
            cream = true;
            return 
        }
        if (Whip.state == true){
            Whip.state = false;
            cream = false;
            return
        }
    }
    if (100 >= hotspot.x && hotspot.x >= 30 && 695 >= hotspot.y && hotspot.y >= 660){
        if (Sprinkles.state == false){
            Sprinkles.state = true; 
            sprinkles = true;
            return 
        }
        if (Sprinkles.state == true){
            Sprinkles.state = false;
            sprinkles = false;
            return
        }
    }
    if (155 > hotspot.x && hotspot.x > 125 && 655 >= hotspot.y && hotspot.y >= 625){
        if (droppedSauce.state == true){
            droppedSauce.state = false;
            sauceBoolean = false;
            saucecolor = "";
            sauce = "keine Soße";
            return}
        if (droppedSauce.state == false){
            sauceBoolean = true;
            saucecolor = "#332200";
            droppedSauce.state = true;
            sauce = "Schokosoße";
            return}
    }
    if (155 >= hotspot.x && hotspot.x >= 125 && 677 >= hotspot.y && hotspot.y >= 662){
        if (droppedSauce.state == true){
            droppedSauce.state = false;
            sauceBoolean = false;
            saucecolor = "";
            sauce = "keine Soße";
            return}
        if (droppedSauce.state == false){
            saucecolor = "red";
            sauceBoolean = true;
            droppedSauce.state = true;
            sauce = "Erdbeersoße";
            return}
        
    }
}

function finishedSundae (_data: menu): boolean{
    let orderedNumber : number = waitingCustomers[0].appointment;
    for (let i of Menu) {
        let orderTitle : string = _data.data[i].title;
        let orderFlavor : string = _data.data[i].flavor;
        let orderIceballs : string = _data.data[i].iceballs;
        let orderCream : boolean = _data.data[i].cream;
        let orderSauce : string = _data.data[i].sauce;
        let orderSprinkles : boolean = _data.data[i].sprinkles;
        let orderPrice : string = _data.data[i].price;

        recipe.push(orderTitle, orderFlavor, orderIceballs, orderCream, orderSauce, orderSprinkles, orderPrice);
        }
        
    console.log(recipe[orderedNumber*7]);
    console.log(recipe[orderedNumber*7+1]);
    console.log(recipe[orderedNumber*7+2]);
    console.log(recipe[orderedNumber*7+3]);
    console.log(recipe[orderedNumber*7+4]);
    console.log(recipe[orderedNumber*7+5]);
    console.log(recipe[orderedNumber*7+6]);


    let mySundae: Sundae = {
        title: recipe[orderedNumber*7],
        flavor: flavor,
        iceballs: number,
        cream: cream,
        sauce: sauce,
        sprinkles: sprinkles,
        price: currentPrice
    }
    console.log(mySundae);
    

    if (mySundae.title == recipe[orderedNumber*7] && 
        mySundae.flavor == recipe[orderedNumber*7+1] &&
        mySundae.iceballs == recipe[orderedNumber*7+2] &&
        mySundae.cream == recipe[orderedNumber*7+3] &&
        mySundae.sauce == recipe[orderedNumber*7+4] &&
        mySundae.sprinkles == recipe[orderedNumber*7+5] &&
        mySundae.price == recipe[orderedNumber*7+6]){
        // console.log("passt");
        waitingCustomers[0].status = "happy";
        return true;
    }
    else{
        // console.log("passt nicht");
        waitingCustomers[0].status = "angry";
        return false;
    }

}



}