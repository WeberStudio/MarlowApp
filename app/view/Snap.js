Ext.define('MarlowApp.view.Snap', {   
    extend: 'Ext.List',
    xtype:'snapView',     
    config: {
        
        id:'snapViewId',
        fullscreen: true,
		items : [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Photo Ok?',
				cls: 'top-toolbar',
				layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
			items: [
				{
					xtype: 'button',
					align: 'left',
					text: '<span style = "font-size: 22px; font-family: courier new; font-weight: bolder; padding-right: 2px;"> <</span><span style = "font-size: 18px; font-weight: lighter;">Back  </span> ',
					cls: 'custom-button',
                    handler:function()
                    {
                       
                        var snapViewId = Ext.getCmp("snapViewId");
                        if(!snapViewId){
                            snapViewId = Ext.create('snapViewId');
                        }
                        else
                        {                             
                            snapViewId.destroy();
                        }
                        app.application.redirectTo('dashboard')
                    }
				},
				{	
					xtype: 'button',
					text: '<span style = "font-size: 18px; font-weight: lighter;">Confirm  </span> ',
					align: 'right',
					cls: 'custom-button',
                    handler:function()
                    {
                        app.application.redirectTo('addnote')
                    },
				} 
			]
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
					id: 'snap-it-image',
					listeners: {
						tap: function() {
                        var shopid              = Ext.getCmp("shopid");
                        var snapViewId          = Ext.getCmp("snapViewId");
                        var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                        var addtolistid        = Ext.getCmp("addtolistid");
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
					id: 'shops-image',
					listeners: {
						tap: function() {
                            
                        var shopid              = Ext.getCmp("shopid");
                        var snapViewId          = Ext.getCmp("snapViewId");
                        var myitemlistviewId    = Ext.getCmp("myitemlistviewId");
                        var addtolistid         = Ext.getCmp("addtolistid");   
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
						app.application.redirectTo('shops');
                        Ext.getCmp("shopViewBackButton").hide();
                        Ext.getCmp("shopViewConfirmButton").hide();
						
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "height: 75px; margin-right: 20px;">',
					iconMask: true,
					title: 'My List',
					id: 'my-list-image',
					listeners: {
						tap: function() {
                        var shopid              = Ext.getCmp("shopid");
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
					html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "height: 75px; margin-right: 20px;">',
					iconMask: true,
					title: 'Info',
					id: 'info-image',
					listeners: {
						tap: function() {
						app.application.redirectTo('info');
						
					},
					},
				}
			]
		},
		{
		    xtype: 'img',
		    id:'snapId',
		    html: '<img src = "resources/images/marlow-back/home_day.gif" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
		    //store :'allshopsStoreId',
		    //itemTpl: '<div class="contact">{name} </div>',
		    //indexBar: true,
	
	    },
	  ]
        
	}
});