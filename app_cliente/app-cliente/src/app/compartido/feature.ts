import { SubFeature } from "./subFeature";
export class Feature{


  name:string = "";
  environment:string = "";
 

  constructor(name:string, environment:string){
    this.name = name;
    this.environment = environment;
  }
}
