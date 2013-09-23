Ext.define('MarlowApp.view.MyItemList', {
    extend: 'Ext.navigation.View', 
    xtype:'myitemlistview',
    //inline: true,
    requires: [ 'Ext.dataview.List' ],
    
    config: {
    id:'myitemlistviewId', 
    navigationBar: {hidden: true},
     fullscreen: true,
         
        items : [
                {
                        xtype: 'toolbar',
                        docked: 'top',
                        title: 'My List',
                        cls: 'top-toolbar',
                        layout: {
                            pack: 'justify',
                            type: 'hbox'
                        }, 
                         items: [
                            {
                                xtype: 'button',
                                align: 'left',
                                text: '<span style = "font-size: 22px; font-family: courier new; font-weight: bolder; padding-right: 2px;"> </span> ',
                                cls: 'custom-button',
                                itemId: 'loginButton',
                            },
                            {    
                                xtype: 'button',
                                text: '<span style = "font-size: 18px; font-weight: lighter;">Edit</span> ',
                                align: 'right',
                                cls: 'custom-button',
								handler:function()
								{
									app.application.redirectTo('addnote')
									
								}
                            }
                            
                            
                        ],

                         
                },
        
                 {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    ui: "white",
                    cls: 'bottom-toolbar',
                    layout: {
                        align: 'center',
                        pack: 'center',
                        type: 'hbox',
                    },
						items: [
							{
								xtype: 'img',
								iconAlign: 'center',
								html: '<img src = "resources/images/marlow-icons/snap-it-active.png" style = "height: 75px; margin-right: 20px;" >',
								iconMask: true,
								title: 'Snap It',
								listeners: {
									tap: function() {
                                    var shopid              = Ext.getCmp("shopid");
                                    var snapViewId          = Ext.getCmp("snapViewId");
                                    var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                                    
                                    if(myitemlistviewId){
                                    myitemlistviewId.destroy();
                                    }                       
                                   
                                    if(shopid){
                                    shopid.destroy();
                                    }
                                    if(snapViewId){
                                    snapViewId.destroy();
                                    }          
									app.application.redirectTo('snapit')
									
									},
								},
							},
							{
								xtype: 'img',
								iconAlign: 'center',
								html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "height: 75px; margin-right: 20px;">',
								iconMask: true,
								title: 'Shops',
								listeners: {
									tap: function() {
                                    var shopid              = Ext.getCmp("shopid");
                                    var snapViewId          = Ext.getCmp("snapViewId");
                                    var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                                    
                                    if(myitemlistviewId){
                                    myitemlistviewId.destroy();
                                    }                       
                                    
                                    if(shopid){
                                    shopid.destroy();
                                    }
                                    if(snapViewId){
                                    snapViewId.destroy();
                                    }          
									app.application.redirectTo('shops')
										
									},
									
								},
							},
							{
								xtype: 'img',
								iconAlign: 'center',
								html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "height: 75px; margin-right: 20px;">',
								iconMask: true,
								title: 'My List',
								listeners: {
									tap: function() {
                                    var shopid              = Ext.getCmp("shopid");
                                    var snapViewId          = Ext.getCmp("snapViewId");
                                    var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                                    
                                    if(myitemlistviewId){
                                    myitemlistviewId.destroy();
                                    }                       
                                                           
                                    if(shopid){
                                    shopid.destroy();
                                    }
                                    if(snapViewId){
                                    snapViewId.destroy();
                                    }          
									app.application.redirectTo('mylist')
									
									},
								},
							},
							{
								xtype: 'img',
								iconAlign: 'center',
								html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "height: 75px; margin-right: 20px;">',
								iconMask: true,
								title: 'Info',
								listeners: {
									tap: function() {
									app.application.redirectTo('info')
									
									},
								},
							}
						]
            },
        
            {
                    inline: true,
                    pinHeaders : true,
                    store :'all_productsid', 
                    xtype: 'list',
                    grouped: true,
                    ui:'white',
                    id:'list',
                    itemTpl: Ext.create(
                        'Ext.XTemplate',
                        '<div class="tweet-wrapper">',
                        '   <img src="resources/icons/Icon@2x.png" />',
                        '   <div class="tweet">',
                        //'<span class="posted"><input type="radio"></span>',
                        //'       <span class="posted">{[this.timeAgoInWords(values.created_at)]}</span>',
                        '       <p>{note}</p>',
                        '       <b>{price}</b>',
                        '   </div>',
                        '</div>')
                    }
        ]
        },
     

});