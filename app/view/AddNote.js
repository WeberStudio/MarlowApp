Ext.define('MarlowApp.view.AddNote', {
    extend: 'Ext.form.Panel', 
    xtype:'addnoteview',
    config: 
    {
        id:'addnoteid',
        items : [{                 
                    xtype: 'textareafield',
                    label: 'Add Note',
                    maxRows: 10,
                    name: 'note',
                    placeHolder: 'Enter notes...'                         
        }]      
    }   
});