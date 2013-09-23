Ext.define('MarlowApp.controller.DashboardC', {
    extend: 'Ext.app.Controller',
	require: ['Ext.Img'],
   // requires: ['Ext.data.JsonP','Ext.Ajax'],
    
    config: {
        models: ['all_products', 'Shops_Model', 'Save_User_SelectionM'],         
        stores: ['all_products', 'Shops_Store', 'Save_User_SelectionS'],         
        views : ['Dashboard', 'Snap', 'Shops', 'MyItemList', 'AddNote', 'AddToList' ,'DeleteItem', 'ShareIndivisual', 'ShareItem', 'ConfirmDel', 'MyList', 'EmailPost'  ],     
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
            'addtolist'     : 'addtolistView',
            'deleteitems'   : 'deleteitemView',
			'mylist' 		: 'mylistView',
            
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
    
	mylistView:function(){ 
		
		if(Ext.Viewport.getComponent('mylistid') == undefined)
		{  			   
            Ext.Viewport.setActiveItem({
			xtype: 'mylistView'
		});
		
		}
		else
		{
			Ext.Viewport.setActiveItem(Ext.getCmp('mylistid'));
		} 
		//Ext.getCmp("ssntxt").blur(); 
	},

    
    snapView:function(){
                    
        if(Ext.Viewport.getComponent('snapViewId') == undefined)
        {       
                Ext.getStore("SaveInfoStoreId").add({ image: snapSrc});  
                //console.log(Ext.getStore("SaveInfoStoreId"));     
                Ext.Viewport.setActiveItem
                ({
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
		
		/*if(Ext.Viewport.setActiveItem(Ext.getCmp('shopsView'))) {
			
			if(Ext.Viewport.getCmp('shops-id') == undefined) {
				
				this.getComponent('shops-id').setSrc('abc.png');
				
			}
		}*/
        // console.log(Ext.Viewport.getComponent('shopid'))
        var itemnote = '';
        var itemprice = '';
        if (Ext.getCmp('useritemnote')) 
        {
            itemnote  = Ext.getCmp('useritemnote').getValue();
        }
        if (Ext.getCmp('itemprice')) 
        {
            itemprice = Ext.getCmp('itemprice').getValue();
        }
        if( itemnote !='' || itemprice != '' ) 
        {
            detstoredata = Ext.getStore('SaveInfoStoreId');            
            //console.log(detstoredata.getAt(0).getData().image);
            detstoredata.getAt(0).getData().note   = itemnote;
            detstoredata.getAt(0).getData().price  = itemprice;
            //Ext.getStore("SaveInfoStoreId").add({ note: itemnote, price: itemprice});
            //console.log(detstoredata.getAt(0).getData());        
        }
        
        
        if(Ext.Viewport.getComponent('shopid') == undefined)
            {    
                  
                /* Get All Shops Listing */   
                loadMask() 
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
                            
                             hideloadingMask();   
                            store.setData(response);
							//console.log(store.setData(response));
                        }catch(err){
                            hideloadingMask();   
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
            
             loadMask()       
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
                        hideloadingMask();                          
                    }catch(err){
                        // console.log(err)
                        hideloadingMask();  
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
                if(shopSelected) 
                {                     
                    selectionInfo = Ext.getStore('SaveInfoStoreId'); 
                    selectionInfo.getAt(0).getData().brand_id  = shopSelected;                   
                    SignupInfoStore = Ext.getStore('SignupInfoStore');                 
                    selectionInfo.getAt(0).getData().user_id  = SignupInfoStore.getAt(0).getData().user_id;                
                    //console.log(selectionInfo.getAt(0).getData());
                    loadMask() 
                    Ext.Ajax.request({
                   
                    url: serviceUrl+'add_product',
                    headers: {
                        "Content-Type": "application/json",
                        'Accept': 'application/json',                    
                        "cache-control": "no-cache"
                    },
                    callbackKey: 'callback', 
                    timeout : 6000,
                    method: 'POST',               
                     jsonData: {
                            "user_id":      selectionInfo.getAt(0).getData().user_id ,
                            "brand_id":     selectionInfo.getAt(0).getData().brand_id,
                            "note":         selectionInfo.getAt(0).getData().note,
                            'price':        selectionInfo.getAt(0).getData().price,
                            'image':        selectionInfo.getAt(0).getData().image                            
                        }, 
                    withCredentials: false,
                    useDefaultXhrHeader: false,
                    success: function(response) {      
                        try{
                            
                            response = Ext.decode(response.responseText) 
                            var store = Ext.getStore('allshopsStoreId');
                            
                             hideloadingMask();
                              Ext.Msg.alert('Product saved successfully!', 'Product saved successfully!')      
                            //store.setData(response);
                            //console.log(store.setData(response));
                        }catch(err){
                            hideloadingMask();   
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
                    
                           
                }   
                Ext.Viewport.setActiveItem({
                    xtype: 'addtolistView'                 
                }); 
            }
            else
                {
                Ext.Viewport.setActiveItem(Ext.getCmp('addtolistid'));     
            } 
    },
    deleteitemView:function(){
        if(Ext.Viewport.getComponent('deleteitemid') == undefined)
            {
            
             loadMask()       
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
                        hideloadingMask();                          
                    }catch(err){
                        // console.log(err)
                        hideloadingMask();  
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
                xtype: 'deleteitemView'                 
            }); 
        }         else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('deleteitemid'));     
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
