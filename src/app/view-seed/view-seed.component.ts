import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { SeedDetails } from '../seed-details';

@Component({
  selector: 'app-view-seed',
  templateUrl: './view-seed.component.html',
  styleUrls: ['./view-seed.component.css']
})
export class ViewSeedComponent implements OnInit {
  commonName:string;
  seed !: SeedDetails;
  constructor(private activatedRouter:ActivatedRoute, private  productService:ProductService) {
    this.commonName = this.activatedRouter.snapshot.params['commonname'];
    this.getSeedDetails(this.commonName);
   }

  ngOnInit(): void {
  }

  getSeedDetails(byName:string)
  {
    this.productService.getSeedByName(byName).subscribe(data=>{
      this.seed = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  }

}
