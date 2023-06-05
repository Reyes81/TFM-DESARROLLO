export class Noticia{

    id:number;
    image:String;

    titleES:String;
    titleEN:String;
    titleFR:String;
    titlePO:String;
    titleIT:String;
    textES:String;
    textEN:String;
    textFR:String;
    textPO:String;
    textIT:String;
  
    constructor(){

      this.id = -1;
      this.image = "";

      this.titleES = "";
      this.titleEN = "";
      this.titlePO = "";
      this.titleFR = "";
      this.titleIT = "";
      this.textES = "";
      this.textEN = "";
      this.textFR = "";
      this.textPO = "";
      this.textIT = "";
    }
  }