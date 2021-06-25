import { ProductService } from './../product.service';
import { SeedDetails } from './../seed-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  seedDetails:SeedDetails = new SeedDetails('','','','','','','','','',0);
  createSeedDetails : SeedDetails= new SeedDetails('','','','','','','','','',0);

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.seedDetails);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    this.productService.insertSeed(this.seedDetails).subscribe(
      data=>{
        this.createSeedDetails = data;
        console.log(" Data Saved !!! "+this.createSeedDetails);
      },
      error => {
        console.log(error);
        
      }
     );
  }

}
