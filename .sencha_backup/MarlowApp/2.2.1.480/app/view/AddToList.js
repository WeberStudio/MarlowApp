Ext.define('MarlowApp.view.AddToList', {
    require: ['Ext.Img'],
    extend: 'Ext.Panel', 
    xtype:'addtolistView', 
    
    config: {
        
        id :'addtolistid',
        fullscreen: true,
        scrollable: true,
        items: [ 
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'This item has been added to your list',
                cls: 'top-toolbar',
                layout: {
                    pack: 'justify',
                    type: 'hbox'
                }
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'white',
                cls: 'bottom-toolbar',                
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'hbox',
                },

				items: [
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/snap-it-active.png" style = "margin-right: 5%;">',
                        width: '25%',
						iconMask: true,
						id: 'snap-it-image',
						listeners: {
							tap: function() {
								
								var shopid              = Ext.getCmp("shopid");
								var snapViewId          = Ext.getCmp("snapViewId");
								var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
								var addtolistid         = Ext.getCmp("addtolistid");
								var loginId             = Ext.getCmp("loginId");  
                                Ext.getCmp('snap-it-image').destroy();
                                
								if(myitemlistviewId){
									myitemlistviewId.destroy();
								}                       
								
								if(shopid){
									shopid.destroy();
								}
								if(snapViewId){
									snapViewId.destroy();
								}
								
								if(addtolistid){
									addtolistid.destroy();
								}                                 
								app.application.redirectTo('snapit')
							
							},
							},
					},                                                
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "margin-right: 5%;">',
						iconMask: true,
                        width: '25%',
						id: 'shops-image',
						listeners: {
							tap: function() {
								
								var shopid              = Ext.getCmp("shopid");
								var snapViewId          = Ext.getCmp("snapViewId");
								var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
								var addtolistid         = Ext.getCmp("addtolistid");
								Ext.getCmp('shops-image').destroy();
                               
								if(myitemlistviewId){
									myitemlistviewId.destroy();
								}                       
								
								if(shopid){
									shopid.destroy();
								}
								if(snapViewId){
									snapViewId.destroy();
								}
								
								if(addtolistid){
									addtolistid.destroy();
								}                                  
								app.application.redirectTo('shops');
                                
							
							},
						
						},
					},
					{
						xtype: 'image',
						iconAlign: 'center',
						html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "margin-right: 5%;">',
						iconMask: true,
                        width: '25%',
						id: 'my-list-image',
						listeners: {
							tap: function() {
								
								
								if(Ext.getCmp("my-list-image")){                                 
                                    Ext.getCmp('my-list-image').destroy();                                
                                }
								if(Ext.getCmp("myitemlistviewId")){
								    Ext.getCmp("myitemlistviewId").destroy();
								}					   
								if(Ext.getCmp("shopid")){
								    Ext.getCmp("shopid").destroy();
								}
								if(Ext.getCmp("snapViewId")){
								    Ext.getCmp("snapViewId").destroy();
								}
								if( Ext.getCmp("addtolistid")){
								    Ext.getCmp("addtolistid").destroy();
								}
                                
                                if(Ext.getCmp("shops-image")){
                                    Ext.getCmp("shops-image").destroy();
                                }                               
                                                                
							    if(Ext.getCmp("snap-it-image")){
                                    Ext.getCmp("snap-it-image").destroy();
                                }                                
                                if(Ext.getCmp("my-list-image")){
                                    Ext.getCmp("my-list-image").destroy();
                                }                                
                                if(Ext.getCmp("info-image")){
                                    Ext.getCmp("info-image").destroy();
                                }                                    
                    
                                app.application.redirectTo('myitemlist')
							
							},
				        },
					},
                    {
                        xtype: 'image',
                        iconAlign: 'center',
                        width: '25%',
                        html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">',
                        iconMask: true,
                        id: 'info-image',
                        listeners: {
                            tap: function() {
                                app.application.redirectTo('info')
                        
                            },
                        },
                    } 
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                ui: 'white',
                cls: 'bottom-up-toolbar',                
                layout: {
                    pack: 'justify',
                    type: 'hbox'
                },
                
                items: [
                    {
                        xtype: 'button',
                        align: 'left',
                        text: 'Scan another item',
                        baseCls: 'custom-white-button',
                        handler:function()
                        {
                            
                                  
                                if( Ext.getCmp('my-list-image')){
                                    
                                      Ext.getCmp('my-list-image').destroy();
                                }                       
                                
                                if(Ext.getCmp("myitemlistviewId")){
                                    var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                                    myitemlistviewId.destroy();
                                }                       
                                                       
                                if(Ext.getCmp("shopid")){
                                    var shopid              = Ext.getCmp("shopid");  
                                    shopid.destroy();
                                }
                                
                                if(Ext.getCmp("snapViewId")){
                                    var snapViewId          = Ext.getCmp("snapViewId");   
                                    snapViewId.destroy();
                                }
                                
                                if(Ext.getCmp("addtolistid")){
                                    var addtolistid         = Ext.getCmp("addtolistid");
                                    addtolistid.destroy();
                                }                                 
                            app.application.redirectTo('snapit');
                        }    
                    },
                    {
                        xtype: 'button',
                        align: 'left',
                        text: 'Share this item',
                        baseCls: 'custom-white-button',
                        action: 'shareitem',
                    }
                ]
            },
            
            {
                xtype: 'panel',
                
                items: [
                    {
                        xtype: 'image',
                        id:'productViewImage',
                        id:'snapId',
                        html: '<img src = "resources/images/sample.jpg" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
                    },
                    {
                        xtype: 'panel',
                        id:    'productViewNote',
                        baseCls: 'overlapped-msg', 
                        centered: true,
                        html: '<span> Saw this and thought Bob might like it? </span>',
                                                
                        items: [
                            {
                                baseCls: 'overlapped-brand',
                                id:    'productViewBrand',
                                html: '<span> Marks and Spencer </span>',
                            },
                            {
                                baseCls: 'overlapped-price',
                                id:    'productViewPrice',      
                                html: '<span> �17.99 </span>',    
                            }
                        ]
                    }
                    
                ]    
            }
        ]    
    }
});