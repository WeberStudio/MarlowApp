Ext.define('MarlowApp.controller.DashboardC', {
    extend: 'Ext.app.Controller',
   // requires: ['Ext.data.JsonP','Ext.Ajax'],
    
    config: {
        models: ['all_products'],         
        stores: ['all_products'],         
        views : ['Dashboard', 'SnapIt', 'Shops', 'MyItemList'],     
        refs: {
            
        },
        control: {
           
        },
        routes : {
            'dashboard'     : 'dashboardView',
            'snapit'        : 'snapIt',
            'shops'         : 'shopsview',
            'myitemlist'    : 'myitemlistview'           
            
        }                                    
    },
    
    dashboardView:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('dashboardId') == undefined)
            {  
            Ext.Viewport.setActiveItem({
                xtype: 'dashboardView'
            });
            
        }
        else
            {
                
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));
                  
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    snapIt:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('snapitem') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'snapIt'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    
     shopsview:function(){ 
        // console.log(Ext.Viewport.getComponent('shopid'))

        if(Ext.Viewport.getComponent('shopid') == undefined)
            {    
              /* Get All Shops Listing */   
                
                Ext.Ajax.request({
                    url: serviceUrl+'get_product'+'/shops',
                    headers: {
                        "Content-Type": "application/json",
                        'Accept': 'application/json',                    
                        "cache-control": "no-cache"
                    },
                    callbackKey: 'callback', 
                    timeout : 6000,
                    method: 'GET',                
                  
                    withCredentials: false,
                    useDefaultXhrHeader: false,
                    success: function(response) {      
                        try{
                            
                            response = Ext.decode(response.responseText) 
                            var store = Ext.getStore('allshopsStoreId');
                            //console.log(store);   
                            store.setData(response);
                        }catch(err){
                            // console.log(err)
                            Ext.Msg.alert('No internet connection available', 'No internet connection available')
                        }
                    },                     
                    failure: function(response) {
                        //response = Ext.decode(response.responseText)
                        Ext.Msg.alert('Server is not responding please try again', 'Server is not responding please try again');     
                    },
                    callback:function(response)
                    {
                        //Ext.Msg.alert('', 'Server is not responding please try again'); 
                    }
                });
                
            Ext.Viewport.setActiveItem({
                xtype: 'shopsview'                 
            }); 
            
            
            
             
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    
     myitemlistview:function(){ 
        // console.log(Ext.Viewport.getComponent('shopid'))

        if(Ext.Viewport.getComponent('myitemlistid') == undefined)
            {
            
                        //geting product from db 
            Ext.Ajax.request({
                url: serviceUrl+'get_product'+'/products',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',                    
                    "cache-control": "no-cache"
                },
                callbackKey: 'callback', 
                timeout : 6000,
                method: 'GET',                
              
                withCredentials: false,
                useDefaultXhrHeader: false,
                success: function(response) {      
                    try{
                        response = Ext.decode(response.responseText)
                        
                        
                      var store = Ext.getStore('all_productsid');
                      console.log(store);   
                      store.setData(response);
          //  Ext.getStore('all_products').sync(); 
                        
                        
                        //Ext.getStore("all_products").setData(response); 
                       

                    }catch(err){
                        // console.log(err)
                        Ext.Msg.alert('No internet connection available', 'No internet connection available')
                    }
                },                     
                failure: function(response) {
                    //response = Ext.decode(response.responseText)
                    Ext.Msg.alert('Server is not responding please try again', 'Server is not responding please try again');     
                },
                callback:function(response)
                {
                    //Ext.Msg.alert('', 'Server is not responding please try again'); 
                }
            });                   
           
                
                
                
                
             console.log("hellow");
                
            Ext.Viewport.setActiveItem({
                xtype: 'myitemlistview'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    }
    
   
});