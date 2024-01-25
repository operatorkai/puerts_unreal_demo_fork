"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domixin = void 0;
const puerts_1 = require("puerts");
const UE = require("ue");
class BP_Char_tsbs {
}
// blueprint.load(UE.Game.mixintest.BP_Char.BP_Char_C) 打开这一行则super为自己，stack overflow
Object.setPrototypeOf(BP_Char_tsbs.prototype, UE.Game.mixintest.BP_Char.BP_Char_C.prototype);
class BP_Char_ts extends BP_Char_tsbs {
    FuncToOverride() {
        super.FuncToOverride();
        console.warn(`BP_Char_ts.FuncToOverride ----`);
    }
}
let cfg = { objectTakeByNative: true, inherit: false };
function Domixin() {
    {
        console.warn(`mixin called BP_Char_ts`);
        let cls = UE.Class.Load("/Game/mixintest/BP_Char.BP_Char_C");
        let jscls = puerts_1.blueprint.tojs(cls);
        puerts_1.blueprint.mixin(jscls, BP_Char_ts);
    }
}
exports.Domixin = Domixin;
//# sourceMappingURL=mixintest.js.map