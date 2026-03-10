/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/spriteSheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:7,
			cycle:true,
			frames:
			[
					{ width: 128, height: 128, startX: 0, startY: -5 },
					{ width: 128, height: 128, startX: 128, startY: -5 },
					{ width: 128, height: 128, startX: 256, startY: -5 },
					{ width: 128, height: 128, startX: 384, startY: -5 },
					{ width: 128, height: 128, startX: 512, startY: -5 },
					{ width: 128, height: 128, startX: 640, startY: -5 },
					{ width: 128, height: 128, startX: 768, startY: -5 },
					{ width: 128, height: 128, startX: 896, startY: -5 },
					{ width: 128, height: 128, startX: 1024, startY: -5 },
					{ width: 128, height: 128, startX: 1152, startY: -5 }
				
			]
		},
		//The walwidth:128, height:128,
		walkRightStart:
			{
			fps: 10,
			cycle: true,
			repeat: false,
			frames:
				[
					{ width: 128, height: 120, startX: 0, startY: 128 }
				]
		},
		walk:
		{
			fps:5	,
			cycle: true,
			frames:
			[
				//{width:128, height:128, startX:0, startY:128},
				{width:128, height:120, startX:128, startY:128},
					{ width: 128, height: 120, startX: 256, startY: 128 },
					{ width: 128, height: 120, startX: 384, startY: 128 },
					{ width: 128, height: 120, startX: 512, startY: 128 },
					{ width: 128, height: 120, startX: 640, startY: 128 },
					{ width: 128, height: 120, startX: 768, startY: 128 },
					{ width: 128, height: 120, startX: 896, startY: 128 },
					{ width: 128, height: 120, startX: 1024, startY: 128 },
					{ width: 128, height: 120, startX: 1152, startY: 128 }
			]
		},
		walkLeftStart:
		{
			fps: 10,
			cycle: true,
			repeat: false,
			frames:
			[
					{ width: 128, height: 120, startX: 0, startY: 256 }
			]
		},
		walkLeft:
		{
			fps: 5,
			cycle: true,
			frames:
				[
					//{width:128, height:128, startX:0, startY:128},
					{ width: 128, height: 120, startX: 128, startY: 256 },
					{ width: 128, height: 120, startX: 256, startY: 256 },
					{ width: 128, height: 120, startX: 384, startY: 256 },
					{ width: 128, height: 120, startX: 512, startY: 256 },
					{ width: 128, height: 120, startX: 640, startY: 256 },
					{ width: 128, height: 120, startX: 768, startY: 256 },
					{ width: 128, height: 120, startX: 896, startY: 256 },
					{ width: 128, height: 120, startX: 1024, startY: 256 },
					{ width: 128, height: 120, startX: 1152, startY: 256 }
				]
			},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
					{ width: 128, height: 128, startX: 0, startY: 512 }
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:7,
			cycle:false,
			frames:
			[
				{width:128, height:120, startX:0, startY:384},
				{width:128, height:120, startX:128, startY:384},
				{width:128, height:120, startX:256, startY:384},
				{width:128, height:128, startX:384, startY:384},
				{width:128, height:128, startX:512, startY:384}
			]
		},
		unCrouch:
		{
			fps: 7,
			cycle: false,
			frames:
				[
					{ width: 128, height: 128, startX: 640, startY: 384 },
					{ width: 128, height: 128, startX: 768, startY: 384 },
					{ width: 128, height: 128, startX: 896, startY: 384 },
					{ width: 128, height: 128, startX: 1024, startY: 384 },
					{ width: 128, height: 128, startX: 1152, startY: 384 }
			]
		},
		lightning:
		{
			fps: 1,
			cycle: true,
			frames:
				[
					{ width: 32, height: 32, startX: 546, startY: 545 },
					{ width: 32, height: 32, startX: 578, startY: 545 },
					{ width: 32, height: 32, startX: 610, startY: 545 },
					{ width: 32, height: 32, startX: 642, startY: 545 },
					{ width: 32, height: 32, startX: 674, startY: 545 },
					{ width: 32, height: 32, startX: 706, startY: 545 },

				]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:true,
			frames:
			[
					{ width: 124, height: 128, startX: 135, startY: 505 },
					{ width: 124, height: 128, startX: 263, startY: 505 },
					{ width: 124, height: 128, startX: 391, startY: 505 }
			]
		}
	}
		
}