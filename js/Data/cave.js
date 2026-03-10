var x=false;
var caveData ={
	info:{
		layout:[
			[9,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10],
			[5,x,x,x,4,4,x,x,x,x,x,x,x,x,x,4,4,x,x,x,x,x,x,x,x,x,4,4,x,x,x,x,x,x,6],
			[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6]
			
			
		],
		src:`images/bg2.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:31, height:32, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31, height:32, startX:32, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31, height:32, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31.5, height:32, startX:96, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31, height:32, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31, height:32, startX:160, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31, height:32, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31, height:32, startX:224, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:31, height:32, startX:256, startY:0}]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 31, height: 32, startX: 288, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 31, height: 32, startX: 320, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 31, height: 32, startX: 352, startY: 0 }]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[x,3,3,3,3,3,1,1,3,3,3,3,3,1,1,3,3,1,1,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[1,3,3,3,3,3,3,3,3,x,x,x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			],
			src:`images/bg2.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[9,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10],
					[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
					[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
					[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
					[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6]
					
					
				],
				src:`images/bg2.png`,
			},
			states:caveData.states
			
			}