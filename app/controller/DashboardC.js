Ext.define('MarlowApp.controller.DashboardC', {
    extend: 'Ext.app.Controller',
	require: ['Ext.Img'],
   // requires: ['Ext.data.JsonP','Ext.Ajax'],
    
    config: {
        models: ['all_products', 'Shops_Model', 'Save_User_SelectionM'],         
        stores: ['all_products', 'Shops_Store', 'Save_User_SelectionS'],         
        views : ['Dashboard', 'Snap', 'Shops', 'MyItemList', 'AddNote', 'AddToList' ,'DeleteItem', 'TwitterV', 'FacebookV', 'PinterestV', 'ShareItem', 'ConfirmDel', 'MyList', 'EmailPost', 'DashboardDay', 'EmailPost' ],     
        refs: {
           
            saveNoteId:    '#saveNoteId',
            sendEmailId:     '#sendEmail',
          	
        },
        control: {
            saveNoteId: {
                tap: 'onButtonTapNote',
				
            },
            
            sendEmailId: {
                tap: 'onButtonTapSendEMail',
            }
			
			
        },
        routes : {
            'dashboard'     : 'dashboardView',
			'dashboardd'	: 'dashboarddayView',
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
    
        
        //getting device height and width
        
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        //alert('w: ' + screenWidth + ' h: ' + screenHeight);
        
        /*var date = new Date;
        var minutes = date.getMinutes();
        var hours = date.getHours(); */
        
        
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
        
        //alert('Orientation: ' + Ext.Viewport.getOrientation());
        
        if(Ext.Viewport.getOrientation() == 'landscape')    {
                     
             Ext.getCmp('dashboard-night-logo').setPadding('0 15% 0 30%');     
        }
        else {
                       
            Ext.getCmp('dashboard-night-logo').setPadding('0 15% 0 15%');            
        }
       
        /*setInterval(function(){
            if((hours >= 0 && hours <= 11) && (minutes >= 1 || minutes <= 59)) {

                app.application.redirectTo('dashboardd'); 
            }
            else {

                app.application.redirectTo('dashboard');
            }
        },10000);*/
        
        /*if((hours >= 0 && hours <= 11) && (minutes >= 1 || minutes <= 59)) {

                app.application.redirectTo('dashboardd'); 
            }
            else {

                app.application.redirectTo('dashboard');
            }*/
        
        
        if(Ext.os.is.Android) {
            
            if(screenWidth == 320 && screenHeight == 426) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/320x426-night.gif") 100% 100%');        
            }
            if(screenWidth == 320 && screenHeight == 470) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/320x470-night.gif") 100% 100%'); 
            }
            if(screenWidth == 480 && screenHeight == 640) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/480x640-night.gif") 100% 100%');           
            }
            if(screenWidth == 720 && screenHeight == 960) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/720x960-night.gif") 100% 100%');            
            } 
            if(screenWidth == 320 && screenHeight == 456) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/320x470-night.gif") 100% 100%'); 
            }
        }
        else if(Ext.os.is.iOS) {
            
            //iphone 5
            if(screenWidth == 640 && screenHeight == 1136) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/home-night.gif") 100% 100%');            
            }
            
            //iphone 4
            if(screenWidth == 640 && screenHeight == 960) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/home-night.gif") 100% 100%');             
            }
            if(screenWidth == 768 && screenHeight == 928) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/home-night.gif") 100% 100%');             
            }
            
        }  
       
        //console.log() 
        //Ext.getCmp("ssntxt").blur(); 
    },
	
	dashboarddayView:function(){ 
        
        //getting device height and width
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        
        var date = new Date;
        var minutes = date.getMinutes();
        var hours = date.getHours();
        // console.log(Ext.Viewport.getCmp('sigupId'))

        
        
        if(Ext.Viewport.getComponent('dashboardId') == undefined)
            {  
            Ext.Viewport.setActiveItem({
                xtype: 'dashboarddayView'
            });
            
            
        }
        else
        {
                
            Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));
                  
        }
        
        if(Ext.Viewport.getOrientation() == 'landscape')    {
            
             Ext.getCmp('dashboard-day-logo').setPadding('0 15% 0 30%');     
        }
        else {
             
            Ext.getCmp('dashboard-day-logo').setPadding('0 15% 0 15%');            
        }
        
           /*setInterval(function(){
            if((hours >= 0 && hours <= 11) && (minutes >= 1 || minutes <= 59)) {

                app.application.redirectTo('dashboardd'); 
            }
            else {

                app.application.redirectTo('dashboard');
            } 
        },10000);*/
            
        /*if((hours >= 0 && hours <= 11) && (minutes >= 1 || minutes <= 59)) {
        
                app.application.redirectTo('dashboardd'); 
            }
            else {

                app.application.redirectTo('dashboard');
            }*/
        
        
        if(Ext.os.is.Android) {
            
            if(screenWidth == 320 && screenHeight == 426) {
                
               Ext.getCmp('dashboard-day').setStyle('background: url("resources/images/marlow-back/320x426-day.gif") 100% 100%');        
            }
            if(screenWidth == 320 && screenHeight == 470) {
                
               Ext.getCmp('dashboard-day').setStyle('background: url("resources/images/marlow-back/320x470-day.gif") 100% 100%'); 
            }
            if(screenWidth == 480 && screenHeight == 640) {
                
               Ext.getCmp('dashboard-day').setStyle('background: url("resources/images/marlow-back/480x640-day.gif") 100% 100%');           
            }
            if(screenWidth == 720 && screenHeight == 960) {
                
               Ext.getCmp('dashboard-day').setStyle('background: url("resources/images/marlow-back/720x960-day.gif") 100% 100%');            
            } 
            if(screenWidth == 320 && screenHeight == 456) {
                
               Ext.getCmp('dashboard-day').setStyle('background: url("resources/images/marlow-back/320x470-day.gif") 100% 100%'); 
            }
        }
        else if(Ext.os.is.iOS) {
            
            //iphone 5
            if(screenWidth == 640 && screenHeight == 1136) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/home-night.gif") 100% 100%');            
            }
            
            //iphone 4
            if(screenWidth == 640 && screenHeight == 960) {
                
               Ext.getCmp('dashboard-night').setStyle('background: url("resources/images/marlow-back/home-night.gif") 100% 100%');             
            }
        }  
        //Ext.getCmp("ssntxt").blur(); 
    },
    
	mylistView:function(){ 
		
		
        all_productsid_store            = Ext.getStore('all_productsid');
        var productViewBrand            = all_productsid_store.getAt(editProductIndex).getData();
        deleteProductId                 = productViewBrand.product_id;
        if(Ext.Viewport.getComponent('mylistid') == undefined)
		{  			   
              
            //console.log(productViewBrand);
            Ext.Viewport.setActiveItem({
			xtype: 'mylistView'
            
		});
		    
            //Ext.getCmp('productViewImage').setHtml('<img src = "data:image/jpeg;base64'+ productViewBrand.image +'" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">');
            Ext.getCmp('productViewBrand').setHtml('<span>' + productViewBrand.name + '</span>');           
            Ext.getCmp('productViewPrice').setHtml('<span>\u00A3' + productViewBrand.price + '</span>');
            Ext.getCmp('productViewNote').setHtml('<span>' + productViewBrand.note + '</span>');
            Ext.getStore("SaveInfoStoreId").setData(productViewBrand);
            //console.log(Ext.getStore("SaveInfoStoreId").getAt(0).getData());    
            
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
                loadMask();
                Ext.getStore("SaveInfoStoreId").add({ image: snapSrc});  
                //console.log(Ext.getStore("SaveInfoStoreId"));  
              
                Ext.Viewport.setActiveItem
                ({
                    xtype: 'snapView'                 
                }); 
				if(Ext.getCmp('snap-it-image')) {
					
					Ext.getCmp('shops-image').setHtml('<img src = "resources/images/marlow-icons/shops-disabled.png" style = "margin-right: 5%;">')
					Ext.getCmp('snap-it-image').setHtml('<img src = "resources/images/marlow-icons/snap-it-active.png" style = "margin-right: 5%;">')
					Ext.getCmp('my-list-image').setHtml('<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "margin-right: 5%;">')
					Ext.getCmp('info-image').setHtml('<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">')
				}
                hideloadingMask();
               //Ext.getCmp('snapId').setHtml('<img src ="data:image/jpeg;base64,'+snapSrc+'" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">');   
        }
        else
        {
                Ext.Viewport.setActiveItem(Ext.getCmp('dashboardId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    },
    
    shopsview:function(){ 
		
		
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
                var store = Ext.getStore('allshopsStoreId');
                if(store.getCount()== 0)
                {
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
                        
                         response = Ext.decode(response.responseText);                                                    
                         hideloadingMask();   
                         store.setData(response);
                         Ext.Viewport.setActiveItem({
                            xtype: 'shopsview'                 
                        });
                         
                         if(Ext.getCmp('shops-image')) { 

                               Ext.getCmp('shops-image').setHtml('<img src = "resources/images/marlow-icons/shops-active.png" style = "margin-right: 5%;">')
                               Ext.getCmp('snap-it-image').setHtml('<img src = "resources/images/marlow-icons/snap-it-disabled.png" style = "margin-right: 5%;">')
                               Ext.getCmp('my-list-image').setHtml('<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "margin-right: 5%;">')
                               Ext.getCmp('info-image').setHtml('<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">')
                           }
                       
                    }catch(err){
                        hideloadingMask();   
                        // console.log(err)
                        Ext.Msg.alert( 'No internet connection available')
                    }
                    },                     
                    failure: function(response) {
                    //response = Ext.decode(response.responseText)
                     hideloadingMask();   
                    Ext.Msg.alert( 'Server is not responding please try again');     
                    },  
                    callback:function(response)
                    {
                    //Ext.Msg.alert( 'Server is not responding please try again'); 
                    }
                    });
                }
                else
                {
                    
                    hideloadingMask();    
                    Ext.Viewport.setActiveItem({
                            xtype: 'shopsview'                 
                        });
                      
                    if(Ext.getCmp('shops-image')) { 

                       Ext.getCmp('shops-image').setHtml('<img src = "resources/images/marlow-icons/shops-active.png" style = "margin-right: 5%;">')
                       Ext.getCmp('snap-it-image').setHtml('<img src = "resources/images/marlow-icons/snap-it-disabled.png" style = "margin-right: 5%;">')
                       Ext.getCmp('my-list-image').setHtml('<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "margin-right: 5%;">')
                       Ext.getCmp('info-image').setHtml('<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">')
                    }                    
                }
                
                
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
            
            loadMask()
            var store   = Ext.getStore('all_productsid');
            if(store.getCount()== 0)
            {                    
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
                        response    = Ext.decode(response.responseText);                       
                        store.setData(response);
                        //console.log(response);
                        hideloadingMask(); 
                         Ext.Viewport.setActiveItem({
                            xtype: 'myitemlistview'                 
                        });
                        if(Ext.getCmp('my-list-image')) {
               
                               Ext.getCmp('shops-image').setHtml('<img src = "resources/images/marlow-icons/shops-disabled.png" style = "margin-right: 5%;">')
                               Ext.getCmp('snap-it-image').setHtml('<img src = "resources/images/marlow-icons/snap-it-disabled.png" style = "margin-right: 5%;">')
                               Ext.getCmp('my-list-image').setHtml('<img src = "resources/images/marlow-icons/my-list-active.png" style = "margin-right: 5%;">')
                               Ext.getCmp('info-image').setHtml('<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">')
                               }
                                                  
                    }catch(err){
                        // console.log(err)
                        hideloadingMask();  
                        Ext.Msg.alert( 'No internet connection available')
                    }
                },                     
                failure: function(response) {
                    //response = Ext.decode(response.responseText)
                    Ext.Msg.alert( 'Server is not responding please try again');     
                },
                callback:function(response)
                {
                    //Ext.Msg.alert( 'Server is not responding please try again'); 
                }
            });
            }
            else
            {
                hideloadingMask(); 
                Ext.Viewport.setActiveItem({
                xtype: 'myitemlistview'                 
                });
                if(Ext.getCmp('my-list-image')) {

                   Ext.getCmp('shops-image').setHtml('<img src = "resources/images/marlow-icons/shops-disabled.png" style = "margin-right: 5%;">')
                   Ext.getCmp('snap-it-image').setHtml('<img src = "resources/images/marlow-icons/snap-it-disabled.png" style = "margin-right: 5%;">')
                   Ext.getCmp('my-list-image').setHtml('<img src = "resources/images/marlow-icons/my-list-active.png" style = "margin-right: 5%;">')
                   Ext.getCmp('info-image').setHtml('<img src = "resources/images/marlow-icons/info-disabled.png" style = "margin-right: 5%;">')
                }                
            }
            
                  
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
            if(Ext.getCmp('productViewNote'))
            {
                var note  =  Ext.getCmp('productViewNote').getHtml();  
                var price =  Ext.getCmp('productViewPrice').getHtml();
                                    
            }      
            
            Ext.Viewport.setActiveItem({
                xtype: 'addnoteview'                 
            });
          Ext.getCmp('useritemnote').setValue(' ');
          Ext.getCmp('itemprice').setValue(' ');          
           if(Ext.getCmp('productViewNote'))
           {
               note = note.replace('<span>','');
               note = note.replace('</span>','');
               price = price.replace('<span>\u00A3','');
               price = price.replace('</span>','');                
               Ext.getCmp('useritemnote').setValue(note);
               Ext.getCmp('itemprice').setValue(price);
           }
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
                if(shopSelectedId) 
                {                     
                    selectionInfo = Ext.getStore('SaveInfoStoreId'); 
                    selectionInfo.getAt(0).getData().brand_id  = shopSelectedId;                   
                    SignupInfoStore = Ext.getStore('SignupInfoStore');                 
                    selectionInfo.getAt(0).getData().user_id  = SignupInfoStore.getAt(0).getData().user_id; 
                    finalProductId = deleteProductId;
                    //alert(finalProductId);
                    finalUserId    = selectionInfo.getAt(0).getData().user_id;
                    finalBrandId   = selectionInfo.getAt(0).getData().brand_id;
                    finalBrandName = shopSelectedName; 
                    finalNote      = selectionInfo.getAt(0).getData().note;
                    finalPrice     = selectionInfo.getAt(0).getData().price; 
                    finalImage     = selectionInfo.getAt(0).getData().image;                  
                    //console.log(selectionInfo.getAt(0).getData());
                    loadMask(); 
                
                    
                Ext.Ajax.request({ 
                
                url: serviceUrl+'add_product',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                        "cache-control": "no-cache"
                },
                callbackKey: 'callback',
                timeout : 60000,
                method: 'POST',
                jsonData: {"product_id": finalProductId ,"user_id": finalUserId,"brand_id":finalBrandId,"note":finalNote,"price":finalPrice,"image":finalImage},
                withCredentials: false,
                useDefaultXhrHeader: false,
                success: function(response) {      
                        try{
                            
                            response = Ext.decode(response.responseText) 
                            var store = Ext.getStore('allshopsStoreId');
                            
                             hideloadingMask();
                              Ext.Msg.alert( 'Product saved successfully!')
                             
                            //store.setData(response);
                            //console.log(store.setData(response));
                        }catch(err){
                            hideloadingMask();   
                            // console.log(err)
                            Ext.Msg.alert( 'No internet connection available')
                        }
                    },                     
                    failure: function(response) {
                        //response = Ext.decode(response.responseText)
                        Ext.Msg.alert( 'Server is not responding please try again');     
                    },
                    callback:function(response)
                    {
                        //Ext.Msg.alert( 'Server is not responding please try again'); 
                    }
                });
                   
                    deleteProductId = '';
                    var store   = Ext.getStore('all_productsid');
                    Ext.Ajax.request({
                    url: serviceUrl+'get_mylist_record',
                    headers: {
                        "Content-Type": "application/json",
                        'Accept': 'application/json',                    
                        "cache-control": "no-cache"
                    },
                    callbackKey: 'callback', 
                    timeout : 6000,
                    method: 'POST',                
                  
                    withCredentials: false,
                    useDefaultXhrHeader: false,
                    success: function(response) {      
                        try{
                            response    = Ext.decode(response.responseText);                       
                            store.setData(response);
                        }
                        catch(err){                           
                            Ext.Msg.alert( 'No internet connection available')
                        }
                    }
                });
                           
                } 
                //console.log(selectionInfo.getAt(0).getData()); return false;
                 
                Ext.Viewport.setActiveItem({
                    xtype: 'addtolistView'                 
                });
                
                
				//Ext.getCmp('productViewImage').setHtml('<img src = "data:image/jpeg;base64'+ finalImage +'" style = "width: 100%; margin: 0; padding: 0; top: 0; left: 0; right: 0; bottom: 0;">');
                Ext.getCmp('productViewNote').setHtml('<span>' + finalNote + '</span>');
                Ext.getCmp('productViewPrice').setHtml('<span>\u00A3' + finalPrice + '</span>');
                Ext.getCmp('productViewBrand').setHtml('<span>' + shopSelectedName + '</span>');                 
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
                        Ext.Msg.alert( 'No internet connection available')
                    }
                },                     
                failure: function(response) {
                    //response = Ext.decode(response.responseText)
                    Ext.Msg.alert( 'Server is not responding please try again');     
                },
                callback:function(response)
                {
                    //Ext.Msg.alert( 'Server is not responding please try again'); 
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
	
	onButtonTapSendEMail:function()
    {
        emailMessage    = Ext.getCmp('emailMessage').getValue();
        emailTo         = Ext.getCmp('emailTo').getValue();
        emailSubject    = Ext.getCmp('emailSubject').getValue();
        
                                 
        if(emailTo.length == 0)
        {
               
            Ext.Msg.alert( 'Please enter the Email.');
            return false;    
        }
        if(/[ ]/.test(emailTo))
        {
            Ext.Msg.alert( 'Empty spaces and  special characters are not allowed in Email.');
            return false;
        }
        var email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!(email_re.test(emailTo))) 
        {
            Ext.Msg.alert( 'Please Enter Valid Email.');
            return false;
        }  
        
        loadMask()       
        Ext.Ajax.request({
            url: serviceUrl+'send_share_email',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',                    
                "cache-control": "no-cache"
            },
            callbackKey: 'callback', 
            timeout : 6000,
            method: 'POST',                
            jsonData: {
                        "emailMessage":     emailMessage ,
                        "emailTo":          emailTo ,
                        "finalEmailFrom":   finalEmailFrom ,
                        "emailSubject":     emailSubject,
                        "finalProductId":   finalProductId,
                        'finalImage':       finalImage
                    },
            withCredentials: false,
            useDefaultXhrHeader: false,
            success: function(response) {      
                try{
                    response    = Ext.decode(response.responseText);
                    var popup = this.getPopup();  
                    popup.hide({type: 'slideOut', direction: 'right'}); 
                    Ext.getCmp('emailMessage').setValue() = '';
                    Ext.getCmp('emailTo').setValue() = '';
                    Ext.getCmp('emailSubject').setValue() = '';                    
                    hideloadingMask();                          
                }catch(err){
                    // console.log(err)
                    hideloadingMask();
                    
                    var popup = Ext.getCmp('emailindivisual'); 
                    popup.hide({type: 'slideOut', direction: 'right'});
                   
                    
                    Ext.getCmp('shareitem').hide({type: 'slideOut', direction: 'right'});                     
                    Ext.Msg.alert( 'No internet connection available')
                }
            }
        }); 
    }    
   
});
