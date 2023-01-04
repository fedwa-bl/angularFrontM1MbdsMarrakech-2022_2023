import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  nomDevoir="";
  titre='gestion assignments';
  assignments=[
    {
      nom:"devoir angular de mr Buffa",
      dateDeRendu: "2022-01-10",
      rendu:false,
    },
    {
      nom:"devoir grails de mr Galli",
      dateDeRendu: "2022-12-10",
      rendu:true,
    },
    {
      nom:"devoir swift de mr Amosse",
      dateDeRendu: "2022-12-10",
      rendu:true,
    }
  ]

}
