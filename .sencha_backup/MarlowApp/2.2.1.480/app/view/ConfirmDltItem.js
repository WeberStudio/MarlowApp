Ext.define('MarlowApp.view.ConfirmDltItem',{
      
    extend: 'Ext.Container',  
    xtype: 'confirmdltitem',

    config:{  
        itemId: 'confirmdltitem',  
        floating: true,  
        centered: true,  
        modal: true,  
        height: '45%',  
        width: '80%',
        maxHeight: 150,  
        maxWidth: 350,  
        showAnimation: { type: 'slide', direction: 'bottom'},  
        styleHtmlContent: true,
        baseCls: 'custom-delete-alert-box',
  
        items:[
            {
                xtype: 'container',
                layout: 'fit',
                items: [
                    {
                        html: 'Are you sure you want to delete this item from your shopping list?',
                        flex: 1,
                        style: 'text-align: center; font-famiy: HelveticaLight; font-size: 100%; color: black;',
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'justify',
                    pack: 'center',    
                },
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        text: 'Cancel',
                        width: '50%',
                        baseCls: 'alert-cancel-btn',
                        action: 'cancelItemDeletePop',
                        docked: 'left',
                        flex: 1,
                    },
                    {
                        xtype: 'button',
                        text: 'Delete',
                        width: '50%',
                        baseCls: 'alert-delete-btn',
                        action: 'confirmBulkDelete',
                        docked: 'right',
                        flex: 1,
                    }
                    
                ]    
            },    
        ] 
    }  
});  