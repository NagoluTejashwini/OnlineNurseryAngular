export class PlantDetails {
    plantHeight:number;
    plantSpread:string;
    commonName:string;
    bloomTime:string;
    medicinalOrCulinaryUse:string;
    difficultyLevel:string;
    temparature:string;
    typeOfPlant:string;
    plantDescription:string;
	plantStock:number;
	plantCost:number;

    constructor( plantHeight:number,
        plantSpread:string,
        commonName:string,
        bloomTime:string,
        medicinalOrCulinaryUse:string,
        difficultyLevel:string,
        temparature:string,
        typeOfPlant:string,
        plantDescription:string,
        plantStock:number,
        plantCost:number){

            this.plantHeight=plantHeight;
            this.plantSpread=plantSpread;
            this.commonName=commonName;
            this.bloomTime=bloomTime;
            this.medicinalOrCulinaryUse=medicinalOrCulinaryUse;
            this.difficultyLevel=difficultyLevel;
            this.temparature=temparature;
            this.typeOfPlant=typeOfPlant;
            this.plantDescription=plantDescription;
            this.plantStock=plantStock;
            this.plantCost=plantCost;

    }
}
