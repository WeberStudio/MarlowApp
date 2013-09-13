Ext.define('MarlowApp.view.AddNote', {
    extend: 'Ext.form.Panel', 
    xtype:'addnoteview',
    config: 
    {
        id:'addnoteid',
        fullscreen: true,
        items : [
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
                        align: 'right'
                    }
                ]
        
        },       
        {                 
                    xtype: 'textareafield',
                    label: 'Add Note',
                    maxRows: 10,
                    name: 'note',
                    placeHolder: 'Enter notes...'                         
        },        
        {
                    xtype: 'textfield',
                    label: 'Price',
                    name: 'price',
                    placeHolder: '\u00A3' 
        }
        
        
        ]      
    }   
});