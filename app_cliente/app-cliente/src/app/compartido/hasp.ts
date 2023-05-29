
export class Hasp{

    id: number;
    clientname: String;
    clientNames: String[];
    environments: String[];
    features: String[];
    subFeatures: String[];
    featuresHasp = new Map();
    subfeaturesActives = new Map();
    subFeaturesHasp = new Map();
    versionHasp: Number[] = [0,0,0];
    

    constructor(){

        this.id=-1;
        this.clientname="";
        this.clientNames = ["CEDUC", "SEVASA", "FLC", "PSC"];

        this.environments = ["Harbour", "Quarry", "Mine", "Warehouse"];

        this.features = ["F_DEFAULT","F_PORTICO","F_TRASTAINER","F_REACHSTACKER","F_MOVIL","F_RORO","F_RETRO","F_TORRE","F_CONTROL","F_FORKLIFT","F_TELEHANDLER",
		                 "F_DUMPER","F_WHEELDOZER","F_BULLDOZER","F_WHEELLOADER","F_SCOOP","F_GRADER","F_EXCAVATOR","F_MOBILECRANE","F_AGROTRACTOR","F_INSTRUCTORTORRE",
		                 "F_HEAVYFORKLIFT","F_RMG","F_DRILLINGJUMBO","F_ESHOVEL","F_STRADDLE","F_ECH","F_HARVESTER","F_BRIDGECRANE","F_SPC","F_LASTFEATURE"];

        this.subFeatures = ["F_MOTIONPLATFORM","F_STEREOSCOPIC","F_MULTIDISPLAY","F_USERSDATABASE","F_EVALUATION","F_TRACKER","F_REMOTEINSTRUCTOR","F_DEBRIEFING",
                            "F_REMOTEDATABASE","F_HIDCONTROLS","F_EXERCICEEDITOR","F_COLLABORATIVE","F_SENDINFOLSYM","F_OCULUS","F_THEORY", "F_NOTIMESYNC",
                            "F_SIMOCRANE"];

    }

    //Simulamos la lectura aleatoria de una feature del Hasp y generamos una versión ficticia
    //Los números de versión en el Hasp van de 1 a 127
    readFeatureHasp():void{
        var featureIndex = Math.floor(Math.random() * this.features.length);
        for (let i=0;i<3;i++){
            var number = Math.floor(Math.random() * 127);
            this.versionHasp[i] = number;
        }
        this.featuresHasp.set("name",this.features[featureIndex]);
        this.featuresHasp.set("version",this.versionHasp);
    }

    //Simulamos las subfeatures activas mediante un booleano generado de manera aleatoria
    getSubfeaturesActive():void{
        const randomBoolean = Math.random() >= 0.5;
        for (let i=0;i< this.subFeatures.length; i++){
            const randomBoolean = Math.random() >= 0.5;
            this.subfeaturesActives.set(this.subFeatures[i],randomBoolean);
        }
    }

    //Consulta de una feature: Si tiene licencia devuelve la versión de la feature y en caso contrario [-1,-1,-1]
    getFeature(featureName:String): Number[]{
        
        this.readFeatureHasp();
        var versionFeature:Number[];
        var name = this.featuresHasp.get("name");
        alert(name);
        
        if(featureName == name){
            versionFeature = this.featuresHasp.get("version");
            alert("Versión: " + versionFeature[0]+"."+versionFeature[1]+"."+versionFeature[2]);
        }   
        else
        {
            alert("No tiene licencia para la feature: " + featureName);
            versionFeature = [-1,-1,-1];
        }
        
        return versionFeature;
    }

    //Consulta de una subfeature: Devuelve true si está activa o false en caso contrario
    getSubFeature(subFeatureName:String):Boolean{

        this.getSubfeaturesActive();
        var state =this.subfeaturesActives.get(subFeatureName);
        //alert(subFeatureName + ": " + state);

        return state;
    }

    getFeatureIndex(featureName:String):number{

        var index:number=-1;
        for(let i=0; i<this.subFeatures.length; i++)
        {
            if (featureName==this.subFeatures[i]){
                index = i;
                break;
            }
        }
        return index;
    }

    getClientName():String{

        var index = Math.floor(Math.random() * this.clientNames.length)
        this.clientname = this.clientNames[index];
        return this.clientname
    }
}