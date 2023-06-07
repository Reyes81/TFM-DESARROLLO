import { SubFeature } from "./subFeature";
export class Feature{


  name:String;
  version:number[];
  subFeactures:SubFeature[] = [];

  constructor(name:String, version:number[], subFeactures:SubFeature[]){
    this.name = name;
    this.version = version;
    this.subFeactures = subFeactures;
  }
}
