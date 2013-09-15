Ext.define('MarlowApp.view.AddNote', {
    extend: 'Ext.form.Panel', 
    xtype:'addnoteview',
    
    config: 
    {
        id:'addnoteid',
        fullscreen: true,
        items : [                   
        {                 
                    xtype: 'textareafield',
                    label: 'Add Note',
                    id:    'noteTextAreaId',
                    maxRows: 10,
                    name: 'note',
                    placeHolder: 'Enter notes...'                         
        },        
        {
                    xtype: 'textfield',
                    label: 'Price',
                    id:    'notePriceId', 
                    name: 'price',
                    placeHolder: '\u00A3' 
        },
         {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Notes',
                items: 
                [
                    {
                        align: 'left',
                        text: '< Back'
                    },                    
                    {
                        text: 'Confrim',
                        align: 'right',
                        id:    'saveNoteId',
                        store: 'SaveInfoStoreId',                        
                        style: 'height: 50px; margin-left: 20px; margin-right: 20px;',
                        /*handler:function()
                        {                            
                            note  = Ext.getCmp('noteTextAreaId').getValue()
                            price = Ext.getCmp('notePriceId').getValue() 
                            SaveInfoStoreId.add({ note: note, price: price });   
                            //console.log(Ext.getCmp('noteTextAreaId').getValue()); 
                        } */
                    }
                ]
        
        }
        
        
        ]      
    }   
});