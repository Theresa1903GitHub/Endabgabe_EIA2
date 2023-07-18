namespace Endabgabe {
    export class Icecream {
        position: Vector;
        color: string;
        strokeColor: string;
        velocity: Vector;

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
        
        public move(_timeslice: number){
        if (customeri[0].activity == "served"){ 
            if(customeri[0].table == 1){
                this.velocity.set(-40, -80);
            }
            if(customeri[0].table == 2){
                this.velocity.set(-70, -40);
            }
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // let queueLength = queue + ((waitingCustomers.length+2)*70);
            // console.log(queueLength);
        }}
    }
}