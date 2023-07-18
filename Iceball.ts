namespace Endabgabe {
    export class Iceball {
        position: Vector;
        color: string;
        number: number;

        public constructor (){
            // this.position = ;
            // this.color = _color;
            // this.number = _number;
        }

        public draw(_color: string, _number: string, _positionX: number, _positionY: number): void{
                crc2.save();
                crc2.translate(_positionX, _positionY);
                crc2.lineWidth = 0.3; 
                crc2.strokeStyle = "black"
                crc2.fillStyle = _color;
    
            if (_number == "1"){
                crc2.beginPath();
                crc2.arc(0, 0, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                }
            if (_number == "2") {
                crc2.beginPath();
                crc2.arc(10, 0, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke(); 
                crc2.beginPath();
                crc2.arc(-10, 0, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();  
            }
            if(_number == "3") {
                crc2.beginPath();
                crc2.arc(10, 6, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke(); 
                crc2.beginPath();
                crc2.arc(-10, 6, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke(); 
                crc2.beginPath();
                crc2.arc(0, -11, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke(); 
            }
            if(_number == "4") {
                crc2.beginPath();
                crc2.arc(9, 9, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke(); 
                crc2.beginPath();
                crc2.arc(-9, 9, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke(); 
                crc2.beginPath();
                crc2.arc(9, -9, 10, 0, 2* Math.PI, true);
                crc2.closePath(); 
                crc2.fill();
                crc2.stroke();
                crc2.beginPath();
                crc2.arc(-9, -9, 10, 0, 2* Math.PI, true);
                crc2.closePath();
                crc2.fill();
                crc2.stroke(); 
                }
                if(_number == "5") {
                    crc2.beginPath();
                    crc2.arc(9, 9, 10, 0, 2* Math.PI, true);
                    crc2.closePath(); 
                    crc2.fill();
                    crc2.stroke();
                    crc2.beginPath();
                    crc2.arc(-9, 9, 10, 0, 2* Math.PI, true);
                    crc2.closePath();
                    crc2.fill();
                    crc2.stroke(); 
                    crc2.beginPath();
                    crc2.arc(9, -9, 10, 0, 2* Math.PI, true);
                    crc2.closePath(); 
                    crc2.fill();
                    crc2.stroke();
                    crc2.beginPath();
                    crc2.arc(-9, -9, 10, 0, 2* Math.PI, true);
                    crc2.closePath(); 
                    crc2.fill();
                    crc2.stroke();
                    crc2.beginPath();
                    crc2.arc(0, 0, 10, 0, 2* Math.PI, true);
                    crc2.closePath();
                    crc2.fill();
                    crc2.stroke(); 
                    }
            crc2.restore();
        }          
    }
}