// Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;
using System.Collections.Generic;

public class puerts_unreal_demoClientTarget : TargetRules
{
	public puerts_unreal_demoClientTarget( TargetInfo Target) : base(Target)
	{
		Type = TargetType.Client;

		ExtraModuleNames.AddRange( new string[] { "puerts_unreal_demo" } );
	}
}
