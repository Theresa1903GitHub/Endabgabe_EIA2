namespace Endabgabe {
    export class Icecream {
        position: Vector;
        color: string;
        strokeColor: string;

        public constructor (_color: string){
            this.position = new Vector (330, 170);
            this.color = _color; 
        }

        public draw(_strokeColor: string): void{
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                this.strokeColor = _strokeColor;
          
                crc2.restore();
        }          
    }
}