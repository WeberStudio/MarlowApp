Ext.define('MarlowApp.controller.DashboardC', {
    extend: 'Ext.app.Controller',
   // requires: ['Ext.data.JsonP','Ext.Ajax'],
    
    config: {
        models: ['all_products', 'Shops_Model', 'Save_User_SelectionM'],         
        stores: ['all_products', 'Shops_Store', 'Save_User_SelectionS'],         
        views : ['Dashboard', 'Snap', 'Shops', 'MyItemList', 'AddNote', 'AddToList'],     
        refs: {
           
            saveNoteId:    '#saveNoteId',
            saveShopId:    '#list',         
        },
        control: {
            saveNoteId: {
                tap: 'onButtonTapNote',
            },
             saveShopId: {
                tap: 'onListTapShop',
            },
        },
        routes : {
            'dashboard'     : 'dashboardView',
            'snapit'        : 'snapView',
            'shops'         : 'shopsview',
            'myitemlist'    : 'myitemlistview',
            'addnote'       : 'addnoteview',
            'addtolist'     : 'addtolistView'
            
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
    
    snapView:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('snapitem') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'snapView'                 
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
    
    onListTapShop: function(){
        
        alert('sdfsfs');
        
    },
    
    myitemlistview:function(){ 
        // console.log(Ext.Viewport.getComponent('shopid'))

        if(Ext.Viewport.getComponent('myitemlistid') == undefined)
            {
            
                        //geting product from db 
            Ext.Ajax.request({
                url: serviceUrl+'get_mylist_record',
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
                        response    = Ext.decode(response.responseText)
                        var store   = Ext.getStore('all_productsid');
                        store.setData(response);
                        //console.log(response);                        
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
                xtype: 'myitemlistview'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    
    addnoteview:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('addnoteid') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'addnoteview'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('addnoteid'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    
    addtolistView:function(){
        if(Ext.Viewport.getComponent('addtolistid') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'addtolistView'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('addtolistid'));     
        } 
    },
    
    onButtonTapNote:function(){
        note  = Ext.getCmp('noteTextAreaId').getValue()
        price = Ext.getCmp('notePriceId').getValue()
        Ext.getStore("SaveInfoStoreId").add({ note: note, price: price });
        app.application.redirectTo('shops'); 
        //SaveInfoStoreId.add({ note: note, price: price }); 
        // console.log(Ext.getStore("SaveInfoStoreId"));       
    },
    
   
});