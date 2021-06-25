import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeedDetails } from './seed-details';
import { PlanterDetails } from './planter-details';
import { PlantDetails } from './plant-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
 
  private address = 'http://localhost:9093';
  private insertSeed_endpoint = this.address+'/onlinenursery/seed/add';
  private getAllSeed_endpoint = this.address+'/onlinenursery/seed/seeds';
  private getAllSeedByName_endpoint = this.address+'/onlinenursery/seed/commonName/';
  private getAllPlanter_endpoint = this.address+'/onlinenursery/planter/planters';
  private getAllPlant_endpoint = this.address+'/onlinenursery/plant/plants';

  constructor(private http:HttpClient) { }

  getAllSeedList():Observable<SeedDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<SeedDetails[]>(`${this.getAllSeed_endpoint}`);
  }

  getSeedByName(byName: string):Observable<SeedDetails>{
    return this.http.get<SeedDetails>(`${this.getAllSeedByName_endpoint}/${byName}`);
  }

  insertSeed(seed:SeedDetails):Observable<SeedDetails>{
    console.log('Instructor Service - Create Seed called ');
    return this.http.post<SeedDetails>(`${this.insertSeed_endpoint}`, seed);  
  }
  
  getAllPlanterList():Observable<PlanterDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<PlanterDetails[]>(`${this.getAllPlanter_endpoint}`);
  }

  getAllPlantList():Observable<PlantDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<PlantDetails[]>(`${this.getAllPlant_endpoint}`);
  }


}
