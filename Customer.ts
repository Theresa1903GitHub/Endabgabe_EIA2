namespace Endabgabe {

    export class Customer {
        public position: Vector;
        public velocity: Vector
        public color: string;
        public activity: string;
        public status: string;
        public appointment: number;
        public table: number;

        public constructor (_positionY: number, _number: number){
            this.position = new Vector (400, _positionY);
            this.velocity = new Vector (0, 80);
            this.activity = "move";
            this.status = "happy";
            this.appointment = _number;
        }

        public draw(_randomSundae: number): void{
            if (this.activity == "move" || this.activity == "served" || this.activity == "sitting"){
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.arc(0, 0, 20, 0, 2* Math.PI, true)
                if (this.status == "happy"){
                    crc2.fillStyle = "#fde1b4";
                }
                else {
                    crc2.fillStyle = "red";
                }
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.lineWidth = 0.5;
                crc2.stroke();
                crc2.closePath();
                // Auge links
                crc2.beginPath();
                crc2.arc(-5, -2, 3, 0, 2*Math.PI, true);
                crc2.fillStyle = "black";
                crc2.fill();
                crc2.closePath();
                // Auge rechts
                crc2.beginPath();
                crc2.arc(5, -2, 3, 0, 2*Math.PI, true);
                crc2.fillStyle = "black";
                crc2.fill();
                crc2.closePath();
                // Mund
                crc2.beginPath();
                if (this.status == "happy"){
                    crc2.arc(0, 0, 10, 0.2 * Math.PI, 0.8 * Math.PI);
                }
                else {
                    crc2.arc(0, 15, 10, 1.2 * Math.PI, 1.8 * Math.PI);
                }
                
                crc2.strokeStyle = "black";
                crc2.lineWidth = 3;
                crc2.stroke();
        
                crc2.restore();
            }
            if (this.activity == "waiting"){
                let order : string = MenuList[this.appointment];
                // console.log(order);
                
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.arc(0, 0, 20, 0, 2* Math.PI, true )
                if (this.status == "happy"){
                    crc2.fillStyle = "#fde1b4";
                }
                else {
                    crc2.fillStyle = "red";
                }
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.lineWidth = 0.5;
                crc2.stroke();
                crc2.closePath();
                // Auge links
                crc2.beginPath();
                crc2.arc(-5, -2, 3, 0, 2*Math.PI, true);
                crc2.fillStyle = "black";
                crc2.fill();
                crc2.closePath();
                // Auge rechts
                crc2.beginPath();
                crc2.arc(5, -2, 3, 0, 2*Math.PI, true);
                crc2.fillStyle = "black";
                crc2.fill();
                crc2.closePath();
                // Mund
                crc2.beginPath();
                if (this.status == "happy"){
                    crc2.arc(0, 0, 10, 0.2 * Math.PI, 0.8 * Math.PI);
                }
                else {
                    crc2.arc(0, 15, 10, 1.2 * Math.PI, 1.8 * Math.PI);
                }
                crc2.strokeStyle = "black";
                crc2.lineWidth = 3;
                crc2.stroke();

                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.lineWidth = 2;
                crc2.font = "15px Quicksand";
                crc2.fillText(order, 30, 5);
        
                crc2.restore();  
                }
            }

        public move(_timeslice: number):void{ 
            if (this.activity == "waiting"){
                let angryLevel : number = Math.random()*5000 + 14000;
                setTimeout(() => {if (this.activity == "waiting"){
                    this.status = "angry"};
                  }, angryLevel);
            }   
            if (this.activity == "move"){
                let queueLength = queue - ((waitingCustomers.length+1)*70);
                let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                    if (this.position.y > queueLength){
                        if (this.velocity.y > 0){
                        this.activity = "waiting";
                        this.velocity.set (0,0);
                        waitingCustomers.push(this);
                        randomSundae = Math.floor(MenuList.length * Math.random());
                        }
                    }
                }        
            if (this.activity == "served"){ 
                if(this.table == 1){
                    this.velocity.set(-40, -80);
                }
                if(this.table == 2){
                    this.velocity.set(-70, -40);
                }
                if(this.table == 3){
                    this.velocity.set(40, -80);
                }
                if(this.table == 4){
                    this.velocity.set(70, -40);
                }
                let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x <= 210 || this.position.x >= 550){
                    this.activity = "sitting";
                } 
            }
            if (this.activity == "sitting"){
                setTimeout(() => {
                    this.activity = "move";
                  }, 6000);
                this.velocity.set(0,-80);
            }
           
            }
        }
    }