Ext.define('MarlowApp.view.TwitterV',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
	xtype: 'twitterpopup',
	
	config:{
		  
        id: 'twitterpopup',
		floating: true,  
		centered: true,
		modal: true,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,
		height: 340,
		width: 370,
		baseCls: 'custom-social-alert-box',
		items: [
			{
				xtype: 'toolbar',
				baseCls: 'custom-social-toolbar',
				docked: 'top',
				title: 'Twitter',
                style: 'padding-top: 5px;',     
				layout: {
					pack: 'justify',
					type: 'hbox'
				},
				
				items: [
					{
						xtype: 'button',
						align: 'left',
						text: 'Cancel',
						action: 'hide',
						cls: 'custom-button',
						style: 'color: #258dc8; margin-left: -20px;',
					},
					{
						xtype: 'image',
						html: '<img src = "resources/images/social/2-gray.png" style = "margin-left: -120px; margin-bottom: -17px;">',
						
					},
					{
						xtype: 'button',
						align: 'right',
						text: 'Post',
						//action: 'hide',
						cls: 'custom-button',
						style: 'color: #258dc8; margin-right: -20px;',
					}
				]
			},
			{
				xtype: 'container',
				layout: {
					pack: 'justify',
					type: 'hbox'
				},
				
				items: [
					{
						xtype: 'textareafield',
                        id:    'twitterdesc',
						docked: 'left',
						cls: 'custom-text-fieldarea',
						width: 250,
						height: 120,
					},
					{
						xtype: 'image',
						html: '<img src = "resources/images/guy-dummy.png" style = "height: 120px; width: 80px;">',	
						docked: 'right',
					}
				]
					
			},
			{
				xtype: 'container',
				layout: 'fit',
				
				items: [
					{
						html: '<span>118<span>',
						style: 'font-family:  HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',		
					},
				]	
			},
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 10px; border-bottom: 1px solid #C5C5C5;',
                items: [
                    {
                        html: 'Account',
                        id: 'account-to',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 22px; font-family: HelveticaLight; color: black; padding-right: 10px;'
                    },
                    {
                        html: 'example@example.com',
                        id: 'account-info',
                        width: 200,
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 18px; font-family: HelveticaLight; color: #A0A0A0; padding-top: 4px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;',
                        //style: 'font-size: 24px; font-family: HelveticaLight; color: #A0A0A0; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;'
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -6px; height: 40px; width: 40px;',
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 10px;',
                items: [
                    {
                        html: 'Location',
                        id: 'location-to',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 22px; font-family: HelveticaLight; color: black; padding-right: 10px;'
                    },
                    {
                        html: 'example@exaasdadasdsadmple.com',
                        width: 200,
                        id: 'location-info',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 18px; font-family: HelveticaLight; color: #A0A0A0; padding-top: 4px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;',
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -6px; height: 40px; width: 40px;', 
                    }
                ]
            }
		]
	}
});  