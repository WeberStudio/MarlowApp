Ext.define('MarlowApp.view.FacebookV',{
	extend: 'Ext.Container',  
	requires: ['Ext.List', 'Ext.Button', 'Ext.Img', 'Ext.form.Panel', 'Ext.field.TextArea'],
	xtype: 'facebookpopup',
	
	config:{
		
		id: 'facebookpopup',  
		floating: true,  
		centered: true,
		modal: true,  
		showAnimation: { type: 'slide', direction: 'bottom'},  
		styleHtmlContent: true,
		height: '70%',
        width: '92%',
        maxWidth: 330,
        maxHeight: 320,
        baseCls: 'custom-social-alert-box',
		items: [
			{
				xtype: 'toolbar',
                baseCls: 'custom-social-toolbar',
                docked: 'top',
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
                        cls: 'social-popup-button',
                        style: 'margin-right: -8%; ',
					},
                    /*{
                        xtype: 'image',
                        html: '<img src = "resources/images/social/3-gray.png" style = "margin-right: -80px; height: 22px; width: 22px;">',
                        
                    },*/
                    {
                        xtype: 'button',
                        text: '&nbsp;&nbsp;&nbsp;Facebook',
                        cls: 'social-popup-title ',
                        style: 'background: url("resources/images/social/3-gray.png")  no-repeat',    
                    },
					/*{
						xtype: 'image',
						html: '<img src = "resources/images/social/3-gray.png" style = "margin-left: -0.2%; margin-bottom: -1%px;">',
						
					},*/
					{
					    xtype: 'button',
                        align: 'right',
                        text: 'Post',
                        cls: 'social-popup-button',
                        style: 'margin-left: -8%; ', 
                        handler:function() 
                        {
                            url =  'https://www.facebook.com/sharer/sharer.php?s=100&p[title]='+finalBrandName+'&p[url]=http://talabeaman.org/&p[summary]='+finalNote+' Price:'+finalPrice+'&p[images][0]=http://talabeaman.org/wp-content/uploads/2013/09/tbm.png';                            
                            window.open(url,'Facebook Share', 'width=400,height=400,scrollbars=yes,toolbar=yes,location=yes');
                            return false ;
                        },
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
                        id: 'facebookdesc',
						docked: 'left',
                        width: '80%',
                        cls: 'custom-text-fieldarea',
                        style: 'background-color: inherit;',
					},
					{
						xtype: 'image',
						html: '<img src = "resources/images/guy-dummy.png" style = "height: 80px; width: 60px;">',	
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
						id: 'facebookPrice',
                        style: 'font-family: HelveticaLight; color: #A0A0A0; border-bottom: 1px solid #C5C5C5;',        	
                        id: 'facebookPrice',	
					},
				]	
			},
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'padding-top: 2%; border-bottom: 1px solid #C5C5C5;', 
                items: [
                    {
                        html: 'Account',
                        docked: 'left',
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: black; padding-right: 5%;'
                    },
                    {
                        html: 'example@example.com',
                        width: '60%',
                        docked: 'left',
                        flex: 1,     
                        style: 'font-size: 100%; font-family: HelveticaLight; color: #A0A0A0; padding-top: 1%; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;',
                    },
                    {
                        xtype: 'image',
                        docked: 'right',
                        flex: 1,
                        html: '<img src = "resources/images/marlow/arrow copy.png">',
                        style: 'margin-top: -1%; height: 40px; width: 40px;',
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
                        docked: 'left',
                    
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: black; padding-right: 5%;'
                        
                    },
                    {
                        html: 'example@exaasdadasdsadmple.com',
                        width: '60%',
                        docked: 'left',
                        
                        flex: 1,
                        style: 'font-size: 100%; font-family: HelveticaLight; color: #A0A0A0; padding-top: 1%; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;',
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
