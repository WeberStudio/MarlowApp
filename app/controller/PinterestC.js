Ext.define('MarlowApp.controller.PinterestC',{  
	extend: 'Ext.app.Controller',  
	config:{  
		refs:  
		{  
		
			popup: {  
			selector: 'formpanel #pinterestpopup',  
			xtype: 'pinterestpopup',  
			autoCreate: true,  
			}  
		}  
	},
	init: function() {  
		this.control({  
			'button[action=showpinterest]': {  
				tap: 'showPopup'  
			},  
			'button[action=hide]':{  
				tap: 'hide'  
			},
		});  
	},  
	showPopup: function(){  
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
       // Ext.getCmp('shareimage').setHtml('<img src ="data:image/jpeg;base64,'+finalImage+'" style = "width: 70px; height: 90px;">'); 
       Ext.getCmp('shareimage').setHtml('<img src ="'+imageUrl+finalImage+'" style = "width: 70px; height: 90px;">');  
        //document.getElementById("shareimage").src = imageUrl+finalImage; 
        Ext.getCmp('pinterestdesc').setValue(finalNote);
        Ext.getCmp('pinterestprice').setHtml('<span>\u00A3'+finalPrice+'</span>');    
	},  
	hide: function(){           
		var popup = this.getPopup();  
		popup.hide({type: 'slideOut', direction: 'right'});  
	}
    
   
});  
