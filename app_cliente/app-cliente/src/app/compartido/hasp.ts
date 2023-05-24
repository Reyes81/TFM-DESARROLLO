export class Hasp{

    id: number;
    clientname: String;
    clientNames: String[];
    environments: String[];
    features: String[];
    subFeatures: String[];

    constructor(){

        this.id=-1;
        this.clientname="";
        this.clientNames = ["CEDUC", "SEVASA", "FLC","PSC"];

        this.environments = ["Harbour", "Quarry", "Mine", "Warehouse"];

        this.features = ["F_DEFAULT","F_PORTICO","F_TRASTAINER","F_REACHSTACKER","F_MOVIL","F_RORO","F_RETRO","F_TORRE","F_CONTROL","F_FORKLIFT","F_TELEHANDLER",
		                 "F_DUMPER","F_WHEELDOZER","F_BULLDOZER","F_WHEELLOADER","F_SCOOP","F_GRADER","F_EXCAVATOR","F_MOBILECRANE","F_AGROTRACTOR","F_INSTRUCTORTORRE",
		                 "F_HEAVYFORKLIFT","F_RMG","F_DRILLINGJUMBO","F_ESHOVEL","F_STRADDLE","F_ECH","F_HARVESTER","F_BRIDGECRANE","F_SPC","F_LASTFEATURE"];

        this.subFeatures = ["F_MOTIONPLATFORM","F_STEREOSCOPIC","F_MULTIDISPLAY","F_USERSDATABASE","F_EVALUATION","F_TRACKER","F_REMOTEINSTRUCTOR","F_DEBRIEFING",
                            "F_REMOTEDATABASE","F_HIDCONTROLS","F_EXERCICEEDITOR","F_COLLABORATIVE","F_SENDINFOLSYM","F_OCULUS","F_THEORY", "F_NOTIMESYNC",
                            "F_SIMOCRANE"];
    }

    getClientName():String{

        var index = Math.floor(Math.random() * this.clientNames.length)
        this.clientname = this.clientNames[index];
        return this.clientname
    }

    getFeatureName(): String{

        return "";
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
}
