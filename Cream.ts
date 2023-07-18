namespace Endabgabe {

    export class Cream {
        public position: Vector;
        private color: string;
        private size: number;
        public state: boolean;

        public constructor (_state:boolean){
            this.color = "white";
            this.size = 1.2;
            this.state = _state;

        }
    
        public draw ( _positionX: number, _positionY: number): void {
            if (this.state == true){
                crc2.save();     
                crc2.translate(_positionX, _positionY);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(5*this.size, 10*this.size);
                crc2.lineTo(15*this.size, 11*this.size);
                crc2.lineTo(8*this.size, 18*this.size);
                crc2.lineTo(10*this.size, 28*this.size);
                crc2.lineTo(0, 23*this.size);
                crc2.lineTo(-10*this.size, 28*this.size);
                crc2.lineTo(-8*this.size, 18*this.size);
                crc2.lineTo(-15*this.size, 11*this.size);
                crc2.lineTo(-5*this.size, 10*this.size);
                crc2.closePath();
                crc2.fillStyle = this.color;
                crc2.fill();
                crc2.lineWidth = 0.8;
                crc2.strokeStyle = "grey";
                crc2.stroke();
                crc2.restore();
            }

        }
    }}