/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 33357AC6463C3AB157426D9264E94557
    namespace Game.StarterContent.MixinSuperTestBase {
        class MixinSuperTestBase_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_MixinSuperTestBase(EntryPoint: number) : void;
            Foo() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MixinSuperTestBase_C;
            static Load(InName: string): MixinSuperTestBase_C;
        
            __tid_MixinSuperTestBase_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2BDEF8114014B8B86032D4A518847312
    namespace Game.StarterContent.MixinSuperTestDerived {
        class MixinSuperTestDerived_C extends UE.Game.StarterContent.MixinSuperTestBase.MixinSuperTestBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Foo() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MixinSuperTestDerived_C;
            static Load(InName: string): MixinSuperTestDerived_C;
        
            __tid_MixinSuperTestDerived_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8C3BD456442ED5244F46E2A37BF5ECB7
    namespace Game.StarterContent.MixinTest {
        class MixinTest_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_MixinTest(EntryPoint: number) : void;
            Log(P: string) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MixinTest_C;
            static Load(InName: string): MixinTest_C;
        
            __tid_MixinTest_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A5C7E431443721484614F0A5183DEBCD
    namespace Game.StarterContent.TestBlueprint {
        class TestBlueprint_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            B1: boolean;
            I1: number;
            I2: number;
            Bar(NewParam: UE.Game.StarterContent.TestStruct.TestStruct) : void;
            ExecuteUbergraph_TestBlueprint(EntryPoint: number) : void;
            Foo(P1: boolean, P2: number, P3: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TestBlueprint_C;
            static Load(InName: string): TestBlueprint_C;
        
            __tid_TestBlueprint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 59ADD20544E242E59B518787A6F8F288
    namespace Game.StarterContent.TestEnum {
        enum TestEnum { Blue, Red, Green, TestEnum_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C9B8A43E442C8D87E5B77BB284D93163
    namespace Game.StarterContent.TestStruct {
        class TestStruct {
            constructor();
            constructor(speed: number, age: number);
            speed: number;
            age: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_TestStruct_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2620B05B4D570B271A8AAF934441D4E7
    namespace Game.StarterContent.TestWidgetBlueprint {
        class TestWidgetBlueprint_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Button1: UE.Button;
            TextBox: UE.MultiLineEditableTextBox;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TestWidgetBlueprint_C;
            static Load(InName: string): TestWidgetBlueprint_C;
        
            __tid_TestWidgetBlueprint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 60F091E14A9C86179E7EEFB21C57B733
    namespace Game.mixintest.BP_CharBase {
        class BP_CharBase_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            FuncToOverride() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_CharBase_C;
            static Load(InName: string): BP_CharBase_C;
        
            __tid_BP_CharBase_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: FC192B9C4380F59E5DF93898378F7F93
    namespace Game.mixintest.BP_Char {
        class BP_Char_C extends UE.Game.mixintest.BP_CharBase.BP_CharBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            CallRPC() : void;
            ExecuteUbergraph_BP_Char(EntryPoint: number) : void;
            InpActEvt_M_K2Node_InputKeyEvent_1(Key: UE.Key) : void;
            InpActEvt_R_K2Node_InputKeyEvent_0(Key: UE.Key) : void;
            RPCClient() : void;
            RPCMulticast() : void;
            RPCServer() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Char_C;
            static Load(InName: string): BP_Char_C;
        
            __tid_BP_Char_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7909129D4793534EED066986422FEBC0
    namespace Game.mixintest.BP_GameMode {
        class BP_GameMode_C extends UE.GameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_GameMode_C;
            static Load(InName: string): BP_GameMode_C;
        
            __tid_BP_GameMode_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
