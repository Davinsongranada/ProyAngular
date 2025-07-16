import { UpperCasePipe } from "@angular/common"
import { Component, computed, signal } from "@angular/core"


@Component({
    templateUrl:'./Hero-page.component.html',
    imports: [UpperCasePipe]
})

export class HeroPageComponent{
        name = signal('Ironman')
    age = signal(45)

    heroDescription= computed(()=>{
        const computed = `${this.name()} - ${this.age()}`
        return computed
    })

    capitalizedName = computed(()=> this.name().toUpperCase())

    changeHero(){
        this.name.set('Spiderman')
        this.age.set(22)
    }

    resetForm(){
        this.name.set('Ironman')
        this.age.set(45)
    }
    

    changeAge(){
        this.age.set(60)
    }
}