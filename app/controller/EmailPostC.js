Ext.define('MarlowApp.controller.EmailPostC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
		
			popup: {  
			selector: 'formpanel #emailindivisual',  
			xtype: 'emailindivisual',  
			autoCreate: true,  
			}  
		}  
	},
       
	init: function() {  
		this.control({  
			'button[action=shareemail]': {  
				tap: 'showPopup'  
			},  
			'button[action=hide]':{  
				tap: 'hide'  
			}  
		});  
	},  
	showPopup: function(){        
        //Ext.getCmp('emailSubject').gsetValue() = 
        //Ext.getCmp('finalImage').gsetValue() = finalImage;
           
		var popup = this.getPopup();  
		Ext.Viewport.add(popup);
		popup.show();
        
        if(editProductIndex !='')
        {
            var productViewBrand            = all_productsid_store.getAt(editProductIndex).getData();
            finalImage                      = productViewBrand.image ;
            finalNote                       = productViewBrand.note  ;
            finalPrice                      = productViewBrand.price    ;
            finalBrandName                  = productViewBrand.name  ;
        }
        //Ext.getCmp('emailImage').setHtml('<img src ="data:image/jpeg;base64,'+finalImage+'" style = "width: 70px; height: 90px;">'); 
        Ext.getCmp('emailImage').setHtml('<img src ="'+imageUrl+finalImage+'" style = "width: 70px; height: 90px;">');  
        Ext.getCmp('emailMessage').setValue(finalNote);
        Ext.getCmp('emailSubject').setValue(finalBrandName);
        Ext.getCmp('emailPrice').setHtml('<span>\u00A3'+finalPrice+'</span>'); 
        
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}  
});  
