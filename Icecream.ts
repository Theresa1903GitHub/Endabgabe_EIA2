namespace Endabgabe {
    export class Icecream {
        position: Vector;
        velocity: Vector;
        state: string;
        iceballs: string;
        color: string;
        sauceColor: string;
        whip: boolean;
        sprinkels: boolean;
        

        public constructor (_x:number, _y:number, _number:string, _flavor: string, _saucecolor: string, _creamstate: boolean, _sprinkles: boolean){
            this.position = new Vector (_x, _y);
            this.velocity = new Vector (0, 0); 
            this.state = "invisible";
            this.iceballs = _number;
            this.color = _flavor;
            if (droppedSauce.state == true){
            this.sauceColor = _saucecolor}
            if (_creamstate == true){
                this.whip = true;
            }
            if (_sprinkles == true){
                this.sprinkels = true;
            }
        }

        public draw(_strokeColor: string): void{

        if (this.state == "visible"){
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
        	    crc2.arc(0, 0, 20, 0, 2*Math.PI, true);
                crc2.fillStyle = "#e8ffff";
                crc2.strokeStyle = "#d0faf9";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                crc2.restore();

                let iceball: Iceball = new Iceball();
                iceball.draw(this.color, this.iceballs, this.position.x, this.position.y);
                let Whip: Cream = new Cream (this.whip);
                Whip.draw(this.position.x, this.position.y-20); 
                let Sprinkles: Sprinkle = new Sprinkle (this.sprinkels);
                Sprinkles.draw(this.position.x, this.position.y);
                // droppedSauce.draw(this.sauceColor, this.position.x, this.position.y);


            }
        else{ console.log("");
        }
            }
    

                
        
        
        public move(_timeslice: number){
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
             

    }
    }
}