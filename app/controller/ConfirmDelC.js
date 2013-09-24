Ext.define('MarlowApp.controller.ConfirmDelC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
			popup: {  
			selector: 'formpanel #deletebox',  
			xtype: 'deletebox',  
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
            }   
		});  
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
                     Ext.Msg.alert('Record has been deleted successfully!', 'Record has been deleted successfully');
                     app.application.redirectTo('myitemlist');           
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
        var popup = this.getPopup();  
        popup.hide({type: 'slideOut', direction: 'right'});
    }    
});  