export class SeedDetails {
    commonName:string;
    bloomTime:string;
    watering:string;
    difficultyLevel:string;
    temparature:string;
    typeOfSeeds:string;
    seedsDescription:string;
    seedsStock:string;
    seedsCost:string;
    seedsPerPacket:number;

    constructor(
        commonName:string,
    bloomTime:string,
    watering:string,
    difficultyLevel:string,
    temparature:string,
    typeOfSeeds:string,
    seedsDescription:string,
    seedsStock:string,
    seedsCost:string,
    seedsPerPacket:number,
        )
        {
            this.commonName=commonName;
            this.bloomTime=bloomTime;
            this.watering=watering;
            this.difficultyLevel=difficultyLevel;
            this.temparature=temparature;
            this.typeOfSeeds=typeOfSeeds;
            this.seedsDescription=seedsDescription;
            this.seedsStock=seedsStock;
            this.seedsCost=seedsCost;
            this.seedsPerPacket=seedsPerPacket;
        }


}
