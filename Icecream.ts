namespace Endabgabe {
    export class Icecream {
        public position: Vector;
        public velocity: Vector;
        public state: string;
        private iceballs: string;
        private color: string;
        private sauce: boolean;
        private sauceColor: string;
        private whip: boolean;
        private sprinkels: boolean;
        

        public constructor (_x:number, _y:number, _number:string, _flavor: string, _sauce: boolean, _saucecolor: string, _creamstate: boolean, _sprinkles: boolean){
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
            if (_sauce == true){
                this.sauce = true;
                this.sauceColor = _saucecolor;
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
                let droppedSauce: Sauce = new Sauce (this.sauce);
                droppedSauce.draw(this.sauceColor,this.position.x, this.position.y-20);
                }
            }
  
        public move(_timeslice: number): void{
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}