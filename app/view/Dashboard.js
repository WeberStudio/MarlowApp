Ext.define('MarlowApp.view.Dashboard', {
    extend: 'Ext.Container', 
	requires: ['Ext.Img', 'Ext.dataview.List'],
    xtype:'dashboardView',
	style: 'background-image: url("resources/images/marlow-back/marlow-night.gif")',
    config: {
		
		fullscreen: true,
		items: [
			{
				xtype: 'container',
				layout: 'auto',
				items: [
					{
						xtype: 'image',
						layout: 'fit',
						html: '<img src = "resources/images/marlow-back/marlow.png">',
						flex: 1,
					},
					{
						html: '<br><br>',	
					}	
				]	
			},
			{
				xtype: 'container',
				layout: 'fit',
				
				items: [
					
					{
						xtype: 'image',
						html: '<img src = "resources/images/marlow/snap-it-icon.png">',
						align: 'middle',
						style: 'padding-right: 280px;',
						flex: 1,
					},
					{
						xtype: 'button',
						text: 'SNAP IT',
						centered: true,
						//align: 'right',
						docked: 'right',
						style: 'background-image: url("resources/images/marlow-back/btn-back.png"); font-family: LeagueGothicRegular; color: white; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 70px;',
						flex: 1,
						handler:function()
						{
							app.application.redirectTo('snapit'); 
						}
					},	
					{
						html: '<br><br>',	
					}
				]
			},
			{
				xtype: 'container',
				layout: 'fit',
				
				items: [
					
					{
						xtype: 'image',
						html: '<img src = "resources/images/marlow/snap-it-icon.png">',
						align: 'middle',
						style: 'padding-right: 280px;',
						flex: 1,
					},
					{
						xtype: 'button',
						text: 'SHOPS',
						centered: true,
						//align: 'right',
						docked: 'right',
						style: 'background-image: url("resources/images/marlow-back/btn-back.png"); font-family: LeagueGothicRegular; color: white; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 40px;',
						flex: 1,
						handler:function()
						{
							app.application.redirectTo('shops')  
						}
					},
					{
						html: '<br><br>',	
					}	
				]
			},
			{
				xtype: 'container',
				layout: 'fit',
				
				items: [
					
					{
						xtype: 'image',
						html: '<img src = "resources/images/marlow/snap-it-icon.png">',
						align: 'middle',
						style: 'padding-right: 280px;',
						flex: 1,
					},
					{
						xtype: 'button',
						text: 'MY LIST',
						centered: true,
						//align: 'right',
						docked: 'right',
						style: 'background-image: url("resources/images/marlow-back/btn-back.png"); font-family: LeagueGothicRegular; color: white; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 70px;',
						flex: 1,
						handler:function()
						{
							 app.application.redirectTo('myitemlist')    
						}
					},
					{
						html: '<br><br>',	
					}	
				]
			},
		]
	}
});