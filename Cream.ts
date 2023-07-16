namespace Endabgabe {

    export class Cream {
        position: Vector;
        color: string;
        size: number;
        state: boolean;

        public constructor (_positionX: number, _positionY: number){
            this.position = new Vector (_positionX, _positionY);
            this.color = "white";
            this.size = 1.2;
            this.state = false;

        }
    
        public draw (): void {
            if (this.state == true){
                crc2.save();     
                crc2.translate(this.position.x, this.position.y);
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