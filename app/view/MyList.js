Ext.define('MarlowApp.view.MyList', {
    extend: 'Ext.Panel', 
    require: ['Ext.Img', 'Ext.Toolbar'],
    xtype:'mylistView', 
    
    config: {
        
        id :'mylistid',
        fullscreen: true,
        scrollable: true,
        autoDestroy: true,
        xtype: 'panel',
        
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
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
                        if(Ext.getCmp("myitemlistviewId")){
                            Ext.getCmp("myitemlistviewId").destroy();
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
                             
                            app.application.redirectTo('myitemlist');  
                           
                        }
                    },
                    {    
                        xtype: 'button',
                        text: 'Delete ',
                        align: 'right',
                        action: 'deleteitem',
                        cls: 'custom-button',
                        style: 'margin-right: 0px;' ,    
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
                        width: '25%',
                        id: 'snap-it-image',  
                        iconMask: true,
                        listeners: {
                            tap: function() {                                
                                  
                             if(Ext.os.is.Android) { 
                            document.addEventListener("deviceready",function(imagedata){
                                pictureSource=navigator.camera.PictureSourceType;
                                destinationType=navigator.camera.DestinationType;
                                
                                 navigator.camera.getPicture(function(imagedata){
                                     snapSrc = '';  
                                    snapSrc = imagedata;
                                    app.application.redirectTo('snapit');   
                                    }, onFail, { 
                                        quality: 50,
                                        destinationType: Camera.DestinationType.DATA_URL 
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
                                    snapSrc = '';  
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
                        xtype: 'image',
                        iconAlign: 'center',
                        html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "margin-right: 5%;">',
                        width: '25%',
                        id: 'shops-image',
                        iconMask: true,
                        listeners: {
                            tap: function() {
                                app.application.redirectTo('shops');
                            },
                        },
                    },
                    {
                        xtype: 'image',
                        iconAlign: 'center',
                        html: '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "margin-right: 5%;">',
                        iconMask: true,
                        id: 'my-list-image',   
                        width: '25%',
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
                                app.application.redirectTo('mylist');
                            },
                        },
                    },

                    {
                        xtype: 'image',
                        iconAlign: 'center',
                        html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">',
                        iconMask: true, 
                        id: 'info-image',
                        width: '25%',
                        listeners: {
                            tap: function() {
                                app.application.redirectTo('info');
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
                        text: 'Edit Notes',
                        baseCls: 'custom-white-button',
                        handler:function()
                        {
                           
                            app.application.redirectTo('editnote');
                        }    
                    },
                    {
                        xtype: 'button',
                        align: 'right',
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
                        //html: '<img src = "resources/images/marlow-back/home-day.gif" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">',
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
                                html: '<span> $17.99 </sapn>',    
                            },
                        ]
                    },
                    
                ]    
            }
        ]    
    }
});