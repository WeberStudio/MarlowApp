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
				title: 'Photo OK?',
				cls: 'top-toolbar',
				layout: {
				pack: 'justify',
				type: 'hbox'
			}, 
			items: [
				{
					xtype: 'button',
					align: 'left',
					text: '<span style = "font-size: 120%; font-family: HelveticaLight; font-weight: bolder; padding-right: 2%;"> <</span> Back',
					cls: 'custom-button',
                     style: 'margin-left: 0px;',
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
                        if(Ext.getCmp("dashboard-night")){
                                
                             Ext.getCmp("dashboard-night").destroy();
                        }
                         if(Ext.getCmp("dashboard-day")){
                                
                             Ext.getCmp("dashboard-day").destroy();
                        }                                              
                        
                        app.application.redirectTo('dashboard')
                    }
				},
				{	
					xtype: 'button',
					text: 'Confirm',
					align: 'right',
					cls: 'custom-button',
                    style: 'margin-right: 0px;' ,
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
            ui: 'white',
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
					html: '<img src = "resources/images/marlow-icons/snap-it-active.png" style = "margin-right: 5%;">',
					iconMask: true,
                    width: '25%',  
					title: 'Snap It',
					id: 'snap-it-image',
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
                        
                               if(Ext.os.is.Android) { 
                            document.addEventListener("deviceready",function(imagedata){
                                pictureSource=navigator.camera.PictureSourceType;
                                destinationType=navigator.camera.DestinationType;
                                
                                 navigator.camera.getPicture(function(imagedata){
                                    snapSrc = imagedata;
                                    app.application.redirectTo('snapit');   
                                    }, onFail, { 
                                        quality: 50,
                                        destinationType: Camera.DestinationType.FILE_URI 
                                    });    
                                
                            },false);
                            
                          app.application.redirectTo('snapit'); 
                           }
                           else if(Ext.os.is.iOS) { 
                                //alert('Tapped on index: '+record.data.title); 
                            Ext.device.Camera.capture
                            ({
                                source: 'camera',
                                destination: 'data',
                                success: function(imagedata) 
                                {
                                    //console.log(imagedata)
                                    snapSrc = imagedata;
                                   // img.setSrc('data:image/jpeg;base64,' +imagedata);
                                    app.application.redirectTo('snapit');   
                                },
                                failure: function() {
                                    Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
                                    app.application.redirectTo('dashboard');
                                },
                                scope: this
                            });                                      
                            //window.location = 'SnapIt' ;
                            
                           }
                               
						
						
					},
					},
				},
				{
					xtype: 'img',
					iconAlign: 'center',
					html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "margin-right: 5%;">',
					iconMask: true,
					title: 'Shops',
                    width: '25%',  
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
					html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "margin-right: 5%;">',
					iconMask: true,
					title: 'My List',
                    width: '25%',  
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
					html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">',
					iconMask: true,
					title: 'Info',
                    width: '25%',  
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
		    html: '<img src = "resources/images/bean.jpg" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
		    //store :'allshopsStoreId',
		    //itemTpl: '<div class="contact">{name} </div>',
		    //indexBar: true,
	
	    },
	  ]
        
	}
});