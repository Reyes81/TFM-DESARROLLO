
export class Hasp{

    id: number;
    clientname: String;
    clientNames: String[];
    environments: String[];

    constructor(){

        this.id=-1;
        this.clientname="";
        this.clientNames = ["CEDUC", "SEVASA", "FLC"];
        this.environments = ["Harbour", "Quarry", "Mine", "Warehouse"];
          
    }

    getClientName():String{

        var index = Math.floor(Math.random() * this.clientNames.length)
        this.clientname = this.clientNames[index];
        return this.clientname
    }

}