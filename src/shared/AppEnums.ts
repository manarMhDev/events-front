import { Language } from "./api/service-proxies";
export class AppLanguageType {
    static getName(val: Language) {
        switch (val) {
            case Language.Arabic:
                return 'عربي';
                case Language.English:
                    return 'انجليزي';
            default:
               return '';
        }
    }
}

export class AppLanguageClass{
    key : string;
    value : number;
    constructor(k,v){
        this.key = k;
        this.value = v;
    }
}




