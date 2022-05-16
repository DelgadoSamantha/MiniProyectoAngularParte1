import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';

@Component({
  selector: 'app-unheroe',
  templateUrl: './unheroe.component.html',
  styleUrls: ['./unheroe.component.css']
})
export class UnheroeComponent implements OnInit {

  @Input() heroe!:Heroe;
  constructor( public heroeService:HeroeService, public activtedRoute:ActivatedRoute) {
    this.activtedRoute.params.subscribe(params=>{
      this.heroe = heroeService.getUnHeroe(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
