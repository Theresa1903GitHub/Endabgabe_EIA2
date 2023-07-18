namespace Endabgabe {
    export class Icecream {
        position: Vector;
        iceballs: number;
        color: string;
        strokeColor: string;
        velocity: Vector;
        state: string

        public constructor (_x:number, _y:number){
            this.position = new Vector (_x, _y);
            this.velocity = new Vector (0, 0); 
            this.state = "invisible"
        }

        public draw(_strokeColor: string): void{
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
                iceball.draw(color, number, this.position.x, this.position.y);
                if (cream == true){
                Whip.draw(this.position.x, this.position.y-20); }
                droppedSauce.draw();
                Sprinkles.draw();
        } 
        
        public move(_timeslice: number){
            // if (table == 1){
            //     this.velocity.set (-40, -80);
            // }
            // if (table == 2){
            //     this.velocity.set (-40, -40);
            // }
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
    }
    }
}