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
		height: '50%',
        width: '92%',
        maxWidth: 330,
        maxHeight: 240,
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
                    {
                        xtype: 'button',
                        text: '&nbsp;&nbsp;&nbsp;Twitter',
                        cls: 'social-popup-title ',
                        style: 'background: url("resources/images/social/2-gray.png")  no-repeat',    
                    },
					{
						xtype: 'button',
						align: 'right',
						text: 'Post',
						cls: 'social-popup-button',
						style: 'margin-left: -8%; ', 
                        handler:function() 
                        {
                            url =  'http://twitter.com/intent/tweet?text= Brand:%22'+finalBrandName+'%22 Note:'+finalNote+' Price:'+finalPrice;
                            //url =  'http://twitter.com/intent/tweet?text=&lt;h1&gt;finalBrandName&lt;/h1&gt;&lt;br/&gt;finalNote&lt;br/&gt;finalPrice&lt;br/&gt;&lt;img data-role=&quot;user-avatar&quot; src=&quot;http://talabeaman.org/wp-content/uploads/2013/09/tbm.png&quot;&gt;';
                            window.open(url,'Twitter Share', 'width=400,height=400,scrollbars=yes,toolbar=yes,location=yes');
                            return false ;
                        },
					},
                    
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
                        width: '80%',
                        maxRows: 5,
                        cls: 'custom-text-fieldarea',
                        style: 'background-color: inherit;',
					},
					/*{
						xtype: 'image',
                        id: 'twitterImage',
						html: '<img src = "resources/images/guy-dummy.png" style = "height: 80px; width: 60px;">',    
						docked: 'right',
					},*/
                    {
                        xtype: 'image',
                        id: 'twitterImage',
                        src: 'resources/images/guy-dummy.png',
                        height: '15%',
                        width: '15%',    
                        docked: 'right',
                    }
                   
                    
				]
					
			},
			{
				xtype: 'container',
				layout: 'fit',
				
				items: [
					
                    {
                        html: '<br>',     
                    },
                    {
                        html: '118', 
                        id: 'twitterPrice',
                        style: 'font-family: HelveticaLight; color: #A0A0A0; font-size: 100%',            
                    },
				]	
			},
            /* not using this code anymore from now on
            
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
            } */
		]
	}
});  
