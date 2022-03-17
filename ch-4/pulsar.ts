import {EventEmitter} from 'events';

class Pulsar extends EventEmitter{
    constructor(private times: number, private speed: number = 1000){
        super();
    }

    public start():void{
        const intervalId = setInterval( ()=>{
            this.emit('pulse');
            this.times --;
            if(this.times == 0){
                clearInterval(intervalId);
            }
        },this.speed);
    }
}

const pulsar = new Pulsar(50);
pulsar.start();
pulsar.on('pulse',()=>{
console.log('.')
});
