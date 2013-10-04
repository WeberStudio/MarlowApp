Ext.define('MarlowApp.controller.ConfirmDelC',{  
    extend: 'Ext.app.Controller',  
    config:{  
        refs:  
        {  
            popup: {  
            selector: 'formpanel #deletebox',  
            xtype: 'deletebox',  
            autoCreate: true,  
            },
            bulkdpopup: { 
            selector: '#confirmdltitem',  
            xtype: 'confirmdltitem',  
            autoCreate: true,
              
            }  
        }  
    },
    init: function() {  
        this.control({  
            'button[action=deleteitem]': {  
                tap: 'showPopup'  
            },  
            'button[action=hide]':{  
                tap: 'hide'  
            },
            'button[action=confdelete]':{  
                tap: 'confdelete'  
            },
            'button[action=deleteBulk]':{  
                tap: 'itemdeletpopup'  
            },
            'button[action=cancelItemDeletePop]':{  
                tap: 'hideitemdeletpop'  
            },
            'button[action=confirmBulkDelete]':{  
                tap: 'deletebulknow'  
            }
               
        });  
    },
    itemdeletpopup: function(){
     
        var popup = this.getBulkdpopup();  
        popup.show();  
    },
    hideitemdeletpop: function(){           
        var popup = this.getBulkdpopup();  
        popup.hide({type: 'slideOut', direction: 'left'});  
    },
    deletebulknow: function(){           
        //alert(deleteUserId);
        getindex = deleteBulkIds.length
        if(getindex > 1)
        {
            var covertarray=deleteBulkIds;
            var covertedids = '';
            for (var i = 0; i < covertarray.length; i++) 
            {
                covertedids+=covertarray[i]+".";
            }
           
        }
        else{ 
            var covertedids = deleteBulkIds; 

        }
        loadMask() 
        Ext.Ajax.request({
           
            url: serviceUrl+'delete_bulk_item/'+covertedids+'/'+deleteUserId,
            //: serviceUrl+'delete_bulk_item/'+deleteBulkIds+'/'+deleteUserId,
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
                     hideloadingMask();
                     response = Ext.decode(response.responseText);   
                     Ext.Msg.alert(response.MESSAGE);
                     var deleteItemId              = Ext.getCmp("deleteitemid");
                     deleteItemId.destroy();
                     addIndex            = [];
                     //
                     app.application.redirectTo('deleteitems');
                      var addIndex = array();            
                    //console.log(response);
                }catch(err){
                    hideloadingMask();   
                    // console.log(err)
                    Ext.Msg.alert('', 'No internet connection available')
                }
            },                     
            failure: function(response) {
                //response = Ext.decode(response.responseText)
                Ext.Msg.alert('', 'Server is not responding please try again');     
            },
            callback:function(response)
            {
                //Ext.Msg.alert('', 'Server is not responding please try again'); 
            }
        });
        
        var popup = this.getBulkdpopup();  
        popup.hide({type: 'slideOut', direction: 'left'});
    },
      
    showPopup: function(){  
        var popup = this.getPopup();  
        Ext.Viewport.add(popup);  
        popup.show();  
    },  
    hide: function(){           
        var popup = this.getPopup();  
        popup.hide({type: 'slideOut', direction: 'right'});  
    },
    confdelete: function(){           
        //alert(deleteProductId);
        loadMask() 
        Ext.Ajax.request({
           
            url: serviceUrl+'delete_list_item'+'/'+deleteProductId,
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
                     
                     hideloadingMask();   
                     Ext.Msg.alert('', 'Record has been deleted successfully');
                     app.application.redirectTo('myitemlist');           
                    //console.log(store.setData(response));
                }catch(err){
                    hideloadingMask();   
                    // console.log(err)
                    Ext.Msg.alert('', 'No internet connection available')
                }
            },                     
            failure: function(response) {
                //response = Ext.decode(response.responseText)
                Ext.Msg.alert('', 'Server is not responding please try again');     
            },
            callback:function(response)
            {
                //Ext.Msg.alert('', 'Server is not responding please try again'); 
            }
        });
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
                            Ext.Msg.alert('', 'No internet connection available')
                        }
                    }
                });
        var popup = this.getPopup();  
        popup.hide({type: 'slideOut', direction: 'right'});
    }    
});  
