Ext.define('MarlowApp.view.Shops', {
	extend: 'Ext.navigation.View', 
	xtype:'shopsview',
	
	config: 
	{	
		id:'shopid',
		fullscreen: true,
		navigationBar: {
        hidden: true
    	},
		
        
        
        
	items : [
	{
            xtype: 'toolbar',
            docked: 'top',
			title: 'Choose Shop',
			cls: 'top-toolbar',
			layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
     		items: [
				{
					xtype: 'button',
					align: 'left',
                    id:     'shopViewBackButton',
                    text: '<span style = "font-size: 120%; font-family: HelveticaLight; font-weight: bolder; padding-right: 2%;"> <</span> Back',
					cls: 'custom-button',
                    style: 'margin-left: 0px;' ,
                    handler:function()
                    {
                        var loginView = Ext.getCmp("shopid");
                        loginView.destroy();   
                        app.application.redirectTo('addnote')
						 
                    }
				},
				{	
					xtype: 'button',
                    id:    'shopViewConfirmButton',
					text: 'Confirm', 
					align: 'right',
					cls: 'custom-button',
                    style: 'margin-right: 0px;' ,
                    handler:function()
                    {                         
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
                        app.application.redirectTo('addtolist');                       
						 
                    }
                
				} 
            ]
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
					iconMask: true,
                    width: '25%',
					title: 'Snap It',
					id: 'snap-it-image',
					listeners: {
						tap: function() {
                            
                         Ext.getCmp('snap-it-image').destroy();
                         Ext.getCmp('shops-image').destroy();
                         Ext.getCmp('my-list-image').destroy(); 
                         Ext.getCmp('info-image').destroy();
                         
                           navigator.camera.getPicture(function(imagedata){

                        snapSrc = imagedata;
                      
                        app.application.redirectTo('snapit');   
                    }, onFail, { quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL
                    }); 
                         
						 
						
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "margin-right: 5%;">',
					iconMask: true,
                    width: '25%',
					title: 'Shops',
					id:'shops-image',
					listeners: {
						tap: function() {
                        var shopid              = Ext.getCmp("shopid");
                        var snapViewId          = Ext.getCmp("snapViewId");
                        var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                        var addtolistid         = Ext.getCmp("addtolistid");
                        //var loginId        = Ext.getCmp("loginId");
                                       
                        Ext.getCmp('shops-image').destroy();                        
                        if(addtolistid){
                        addtolistid.destroy();
                        }                                 
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
						//Ext.getCmp("shopViewBackButton").hide();
                      //  Ext.getCmp("shopViewConfirmButton").hide();
                        
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "margin-right: 5%;">',
					iconMask: true,
                    width: '25%',
					title: 'My List',
					id: 'my-list-image',
					listeners: {
						tap: function() {
                        
                       var shopid               = Ext.getCmp("shopid");
                        var snapViewId          = Ext.getCmp("snapViewId");
                        var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                        var addtolistid         = Ext.getCmp("addtolistid");   
                       
                       
                        Ext.getCmp('my-list-image').destroy();
                        
                        if(addtolistid){
                        addtolistid.destroy();
                        }                                 
                        if(myitemlistviewId){
                        myitemlistviewId.destroy();
                        }                       
                        
                        if(shopid){
                        shopid.destroy();
                        }
                        if(snapViewId){
                        snapViewId.destroy();
                        }          
						app.application.redirectTo('myitemlist');
						
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">',
					iconMask: true,
					title: 'Info',
                    width: '25%',
					id: 'info-image',
					listeners: {
						tap: function() {
                        var shopid              = Ext.getCmp("shopid");
                        var snapViewId          = Ext.getCmp("snapViewId");
                        var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                        var addtolistid         = Ext.getCmp("addtolistid");   
                       
                        Ext.getCmp('info-image').destroy();
                        if(addtolistid){
                        addtolistid.destroy();
                        }                                 
                        if(myitemlistviewId){
                        myitemlistviewId.destroy();
                        }                       
                                              
                        if(shopid){
                        shopid.destroy();
                        }
                        if(snapViewId){
                        snapViewId.destroy();
                        }          
						app.application.redirectTo('info')
						
					},
					},
				}
			]
	},
	{
		xtype: 'list',
		inline: true,
		grouped: true,
		cls: 'shops-list',  
		id:'shop_list',
		store :'allshopsStoreId',
		itemTpl: '<div class="contact">{name}</div>',
		indexBar: true,
	    listeners:
                {
                    itemtap: function(cmp, index, target, record, e, eOpts)
                    {
                        //console.log(record.data);
                        shopSelectedId      = record.data.id;
                        shopSelectedName    = record.data.name;
                        
                    }
	            },
    }
]
}   
});