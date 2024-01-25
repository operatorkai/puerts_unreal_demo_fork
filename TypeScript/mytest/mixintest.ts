import { blueprint } from 'puerts';
import * as UE from 'ue'


interface BP_Char_tsbs extends UE.Game.mixintest.BP_Char.BP_Char_C{}
class BP_Char_tsbs{}

// blueprint.load(UE.Game.mixintest.BP_Char.BP_Char_C) 打开这一行则super为自己，stack overflow

Object.setPrototypeOf(BP_Char_tsbs.prototype, UE.Game.mixintest.BP_Char.BP_Char_C.prototype)

class BP_Char_ts extends BP_Char_tsbs{
    FuncToOverride(): void {
        super.FuncToOverride();
        console.warn(`BP_Char_ts.FuncToOverride ----`)
    }
}
let cfg :{ objectTakeByNative?:boolean, inherit?:boolean, generatedClass?: UE.Class, noMixinedWarning?:boolean} = 
        { objectTakeByNative:true, inherit:false};

export function Domixin(){
    {
        console.warn(`mixin called BP_Char_ts`)
        let cls = UE.Class.Load("/Game/mixintest/BP_Char.BP_Char_C")
        let jscls = blueprint.tojs(cls);

        blueprint.mixin(jscls, BP_Char_ts);
    }
}