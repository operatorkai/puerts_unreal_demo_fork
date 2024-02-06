// Fill out your copyright notice in the Description page of Project Settings.


#include "TsGameInstance.h"

#include "Engine/Engine.h"
#include "Engine/GameEngine.h"
#include "Kismet/GameplayStatics.h"

#if WITH_EDITOR
#include "Editor.h"
#include "Editor/UnrealEdEngine.h"
#endif
void UTsGameInstance::Init()
{
    Super::Init();
}

void UTsGameInstance::OnStart()
{
    Super::OnStart();
    GameScript = MakeShared<puerts::FJsEnv>();
    //GameScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), 8080);
    //GameScript->WaitDebugger();
    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    GameScript->Start("QuickStart", Arguments);
}

void UTsGameInstance::Shutdown()
{
    Super::Shutdown();
    GameScript.Reset();
}

UGameInstance* UTsGameInstance::GetGameInstance()
{
#if WITH_EDITOR
    if (const UEditorEngine* EditorEngine = Cast<UEditorEngine>(GEngine))
    {
        return EditorEngine->PlayWorld ? EditorEngine->PlayWorld->GetGameInstance() : nullptr;
    }
#endif

    if (const UGameEngine* GameEngine = Cast<UGameEngine>(GEngine))
    {
        return GameEngine->GameInstance;
    }

    return nullptr;
}


UWorld* GetCurrWorld()
{
    UWorld* World = nullptr;

    if (const UGameInstance* GameInstance = UTsGameInstance::GetGameInstance())
    {
        World = GameInstance->GetWorld();
    }
#if WITH_EDITOR
    else if (GEditor->bIsSimulatingInEditor)
    {
        World = GEditor->GetPIEWorldContext()->World();
    }
    else
    {
        World = GEditor->GetEditorWorldContext().World();
    }
#endif
    return World;
}

APlayerController* GetLocalPlayerController()
{
    if (const UWorld* CurrWorld = GetCurrWorld())
    {
        return CurrWorld->GetFirstPlayerController();
    }
    return nullptr;
}
void UTsGameInstance::ClientTravel(const FString& url)
{
    GetLocalPlayerController()->ClientTravel(url, ETravelType::TRAVEL_Absolute);
    //UGameplayStatics::GetPlayerControllerFromID(UTsGameInstance::GetGameInstance()->GetWorld(), 0)->ClientTravel(url, ETravelType::TRAVEL_Absolute);
}
