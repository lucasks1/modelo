import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.css']
})
export class CardCursosComponent {
  @Input () public text: string='';
  @Input () public servico: string='';
  @Input () public descricao: string='';
}