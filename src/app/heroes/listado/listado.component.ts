import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

   heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitán America'];
   heroeBorrado: string ='';


   borrarHeroe(){
    //console.log('borrado....');
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
    
   }

}
