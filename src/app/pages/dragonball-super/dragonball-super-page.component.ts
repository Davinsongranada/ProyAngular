import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { dragonballService } from '../../service/dragonball.service';


/*interface Character{
  id: number;
  name: string;
  power: number;
}*/
@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class  DragonballSuperPageComponent {
  public dragonballService = inject(dragonballService)
}



/*  constructor(
    public dragonballService: dragonballService
  )*/

 /* characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000}
  ])

//  powerClasses = computed(()=>{
//  return{
//    'text-danger': true,
//    }
//  })

addCharacter(newcharacter: Character) {
  this.characters.update((list)=>[...list, newcharacter]);
}*/
