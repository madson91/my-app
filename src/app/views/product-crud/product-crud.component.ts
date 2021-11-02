import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(["products/create"])
    
  }

}
