namespace Endabgabe {

    export class Sauce {
        position: Vector;
        color: string;
        state: boolean;

        public constructor (_positionX: number, _positionY: number){
            this.position = new Vector (_positionX, _positionY);
            this.color = "#332200"
            this.state = false;
        }
    
        public draw (): void {
            if (this.state == true){
                crc2.save();     
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(12, 10);
                crc2.lineTo(-12, 13);
                crc2.lineTo(-12, 14);
                crc2.lineTo(19, 18);
                crc2.lineTo(19, 19);
                crc2.lineTo(-17, 22);
                crc2.lineTo(-17, 23);
                crc2.lineTo(19, 26);
                crc2.lineTo(19, 27);
                crc2.lineTo(-10, 29);
                crc2.strokeStyle = this.color;
                crc2.lineWidth = 2;
                crc2.stroke();
                crc2.restore();
            }

        }
    }}