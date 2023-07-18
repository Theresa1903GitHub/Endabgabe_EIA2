namespace Endabgabe {

    export class Sprinkle {
        public position: Vector;
        private color: string;
        public state: boolean;

        public constructor (_state: boolean){
            // this.position = new Vector (570, 670);
            this.color = "#442200";
            this.state = _state;
        }
    
        public draw ( _positionX: number, _positionY: number): void {
            if (this.state == true){
                crc2.save();     
                crc2.translate(_positionX, _positionY);
                crc2.beginPath();
                crc2.ellipse(0, 0, 1, 3, 0, 0, 2*Math.PI, true);
                crc2.moveTo(-3,10);
                crc2.ellipse(-3, 10, 1, 3, 25, 0, 2*Math.PI, true);
                crc2.moveTo(-13,5);
                crc2.ellipse(-13, 5, 1, 3, 80, 0, 2*Math.PI, true);
                crc2.moveTo(7,-8);
                crc2.ellipse(7, -8, 1, 3, 45, 0, 2*Math.PI, true);
                crc2.moveTo(4,11);
                crc2.ellipse(4, 11, 1, 3, 63, 0, 2*Math.PI, true);
                crc2.moveTo(-6,9);
                crc2.ellipse(-6, 9, 1, 3, 33, 0, 2*Math.PI, true);
                crc2.moveTo(10,1);
                crc2.ellipse(10, 1, 1, 3, 56, 0, 2*Math.PI, true);
                crc2.moveTo(-6,-7);
                crc2.ellipse(-6, -7, 1, 3, 14, 0, 2*Math.PI, true);
                crc2.fillStyle = this.color;
                crc2.fill();
                
                crc2.closePath();
                crc2.restore();
            }

        }
    }}