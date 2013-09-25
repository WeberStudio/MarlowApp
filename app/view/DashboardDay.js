Ext.define('MarlowApp.view.DashboardDay', {
    extend: 'Ext.Container', 
	requires: ['Ext.Img', 'Ext.dataview.List'],
    xtype:'dashboarddayView',
	style: 'background-image: url("resources/images/marlow-back/marlow-day.png")',
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
						html: '<img src = "resources/images/marlow-back/day-logo-layers.png">',
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
						html: '<img src = "resources/images/marlow/camera-blue-icon.png">',
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
						style: 'background-image: url("resources/images/marlow-back/btn-back-day.png"); font-family: LeagueGothicRegular; color: #004a80; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 70px;',
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
						html: '<img src = "resources/images/marlow/shops-blue-icon.png">',
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
						style: 'background-image: url("resources/images/marlow-back/btn-back-day.png"); font-family: LeagueGothicRegular; color: #004a80; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 40px;',
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
						html: '<img src = "resources/images/marlow/my-list-blue-icon.png">',
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
						style: 'background-image: url("resources/images/marlow-back/btn-back-day.png"); font-family: LeagueGothicRegular; color: #004a80; font-size: 60px; letter-spacing:5px; font-weight: lighter; border: none; margin-top: -40px; margin-left: 70px;',
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