import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.component-page.html',
    styles:`
    
    button{
        padding: 5px,
        margin: 5px 10px;
        width: 70px;
    }
    
    
    `
})
export class CounterPageComponent{
    counter = 0;
    counterSignal = signal(0)
    increaseBy(value: number){
        this.counter += value;
        this.counterSignal.update((current)=> current +value)
    }

    reset(){
        this.counter = 0
        this.counterSignal.set(0)
    }
}