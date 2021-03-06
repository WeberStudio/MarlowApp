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
                text: '',
                cls: 'custom-button',
                itemId: 'loginButton',
                style: 'margin-left: 0px;',
            },
            {    
                xtype: 'button',
                text: 'Edit ',
                align: 'right',
                cls: 'custom-button',
                style: 'margin-right: 0px;' ,   
                handler:function()
                {

                    var myItemListViewId = Ext.getCmp("myitemlistviewId");
                    myItemListViewId.destroy();
                    app.application.redirectTo('deleteitems');

                }
            }


            ],


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
                html: '<img src = "resources/images/marlow-icons/snap-it-disabled.png" style = "margin-right: 5%;">',
                iconMask: true,
                title: 'Snap It',
                width: '25%',
                id: 'snap-it-image',
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
                        Ext.getCmp("shopViewBackButton").hide();
                        Ext.getCmp("shopViewConfirmButton").hide();	
                    },

                },
            },
            {
                xtype: 'img',
                iconAlign: 'center',
                html: '<img src = "resources/images/marlow-icons/my-list-active.png" style = "margin-right: 5%;">',
                iconMask: true,
                title: 'My List',
                width: '25%',
                id: 'my-list-image',
                listeners: {
                    tap: function() {
                        var shopid              = Ext.getCmp("shopid");
                        var snapViewId          = Ext.getCmp("snapViewId");
                        var myitemlistviewId    = Ext.getCmp("myitemlistviewId");

                        if(Ext.getCmp("mylistid"))
                            {
                            var mylistid    = Ext.getCmp("mylistid");
                            mylistid.destroy();    

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

                        if(Ext.getCmp("loginId")){                                   
                            var loginId              = Ext.getCmp("loginId");  
                            loginId.destroy();
                        }

                        app.application.redirectTo('myitemlist')

                    },
                },
            },
            {
                xtype: 'img',
                iconAlign: 'center',
                html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">',
                iconMask: true,
                title: 'Info',
                id: 'info-image',
                width: '25%',
                listeners: {
                    tap: function() {
                        app.application.redirectTo('info')

                    },
                },
            }
            ]
        },

        {

            inline                  : true,
            pinHeaders              : true,
            store                   : 'all_productsid', 
            xtype                   : 'list',
            grouped                 : true,
            ui                      : '#FFFFFF',
            id                      : 'list',
            //cls                     : 'item-list',
            /*itemTpl: Ext.create(
            //<div class="x-list-item" id="ext-element-20"><div class="x-list-item-label"><div class="run"><img src="https://graph.facebook.com/100004926815322/picture?type=square"><div class="info"><b>Zohaib Hassan</b> jogged <b>5 miles</b></div><div class="location">Wahdat Road, Muslim Town, Lahore, Pakistan</div><div class="time">2 days ago</div></div></div></div>
            'Ext.XTemplate',
            '<div class="tweet-wrapper">',
            //'<img src="resources/icons/Icon@2x.png"  style = "width: 8%; height: 8%" />',
            //'<img src ="data:image/jpeg;base64,{image}" style = "width: 10%; height: 10%">',  
            '<img src ="http://geordie.testbench.co.uk/assets/media/{image}" style="width: 20%; height: 20%;">',
            '<div class="tweet">',
            //'<span class="posted"><input type="radio"></span>',
            //'<span class="posted">{[this.timeAgoInWords(values.created_at)]}</span>',
            '<p class = "myitem-note">{note}</p>',
            '<b class = "myitem-price">{price}</b>',
            '</div>',
            '</div>'),*/
            itemTpl: Ext.create(
            'Ext.XTemplate',
            //'<img src="resources/icons/Icon@2x.png"  style = "width: 8%; height: 8%" />',
            //'<img src ="data:image/jpeg;base64,{image}" style = "width: 10%; height: 10%">', 
            '<div class="run">',
            '<img src ="http://geordie.testbench.co.uk/assets/media/{image}" style="width: 20%; height: 20%; margin-right: 5%;">',
            '<div class="info">',  
            ' <b> {note}</b> ',
            '</div>', 
            '<div class="location">',
            '<span style = "font-weight: bolder;"> &pound; {price} <span> ', 
            ' </div>',
            //'<img class="logo0" id="del-image_{product_id}" src="resources/images/c1.png" style="float: right; widht: 10%; height: 10%;">',
            ' </div>' ),                      
            //'<span class="posted"><input type="radio"></span>',
            //'<span class="posted">{[this.timeAgoInWords(values.created_at)]}</span>',
            //'</div>',
            //'</div>' 

            fullscreen: true,
            listeners:
            {
                itemtap: function(cmp, index, target, record, e, eOpts)
                {
                    editProductIndex = index;
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
                    if(Ext.getCmp("mylistid")){

                        Ext.getCmp("mylistid").destroy();
                    }
                    
                    
                       
                   app.application.redirectTo('mylist'); 
                }

            }    
        } 

        ]


    },


});