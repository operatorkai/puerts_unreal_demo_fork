"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domixin = void 0;
const puerts_1 = require("puerts");
const UE = require("ue");
function GetNetRoleStr(r) {
    return UE.ENetRole[r];
}
let cfg = { objectTakeByNative: true, inherit: false };
class Logic {
    v;
    Tick() { console.log(this.v); }
}
// let clsbase = UE.Class.Load("/Game/mixintest/BP_CharBase.BP_CharBase_C")
// const BP_CharBase = blueprint.tojs<typeof UE.Game.mixintest.BP_CharBase.BP_CharBase_C>(clsbase);
// interface BP_CharBaseTS extends UE.Game.mixintest.BP_CharBase.BP_CharBase_C{}
// class BP_CharBaseTS{}
// Object.setPrototypeOf(BP_CharBaseTS.prototype, BP_CharBase.prototype)
////// mixin 派生类类 ///////////////////////////////////////////////////////////
// let cls = UE.Class.Load("/Game/mixintest/BP_Char.BP_Char_C")
// const BP_Char = blueprint.tojs<typeof UE.Game.mixintest.BP_Char.BP_Char_C>(cls);
// interface BP_Char_ts extends UE.Game.mixintest.BP_Char.BP_Char_C{}
// class BP_Char_ts{
//     logic:Logic;
//     Construct(){
//         this.logic = new Logic();
//         this.logic.v = this.GetName()
//     }
//     ReceiveBeginPlay(): void {
//         console.warn(`BP_Char_ts ReceiveBeginPlay ${this.GetName()}`)
//         this.Construct();
//     }
//     ReceiveEndPlay(){
//         this.logic.Tick()
//         this.logic = null
//         console.warn(`BP_Char_ts ReceiveEndPlay ${this.GetName()}`)
//     }
//     ReceiveTick(DeltaSeconds: number): void {
//         this.logic.Tick()
//     }
// }
// console.warn(`mixin blueprint.mixin(BP_Char, BP_Char_ts);`)
// let mixcls = blueprint.mixin(BP_Char, BP_Char_ts, cfg);
////// mixin 基类 ///////////////////////////////////////////////////////////
let cls = UE.Class.Load("/Game/mixintest/BP_CharBase.BP_CharBase_C");
const BP_CharBase = puerts_1.blueprint.tojs(cls);
class BP_CharBase_ts {
    logic;
    Construct() {
        this.logic = new Logic();
        this.logic.v = this.GetName();
    }
    ReceiveBeginPlay() {
        console.warn(`BP_CharBase_ts ReceiveBeginPlay ${this.GetName()}`);
        this.Construct();
    }
    ReceiveEndPlay() {
        this.logic.Tick();
        this.logic = null;
        console.warn(`BP_CharBase_ts ReceiveEndPlay ${this.GetName()}`);
    }
    ReceiveTick(DeltaSeconds) {
        this.logic.Tick();
    }
}
console.warn(`mixin blueprint.mixin(BP_CharBase, BP_CharBase_ts);`);
let mixcls = puerts_1.blueprint.mixin(BP_CharBase, BP_CharBase_ts, cfg);
function Domixin(gameInstance) {
}
exports.Domixin = Domixin;
//# sourceMappingURL=mixintest.js.map