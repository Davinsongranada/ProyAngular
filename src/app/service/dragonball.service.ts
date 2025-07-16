import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interface/character.interface';



const loadFromLocalStorage = (): Character[] =>{
  const character = localStorage.getItem('character')
  return character ? JSON.parse(character) : []
}



@Injectable({
  providedIn: "root"
})
export class dragonballService {
     characters = signal<Character[]>(loadFromLocalStorage())



  saveToLocalStorage = effect(()=>{
    localStorage.setItem('Characters', JSON.stringify(this.characters()));
  })



//  powerClasses = computed(()=>{
//  return{
//    'text-danger': true,
//    }
//  })

addCharacter(newcharacter: Character) {
  this.characters.update((list)=>[...list, newcharacter]);
}
}