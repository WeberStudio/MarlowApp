Ext.define('MarlowApp.view.AddToList', {
    xtype:'addtolistView', 
    extend: 'Ext.Panel', 
    
    config: 
    {
        id                          :'addtolistid',
        fullscreen                  : true, 
        scrollable                  : true,
        items : [            
            {  
                xtype               : 'toolbar', 
                docked              : 'top',
                title               : 'This item is added to your list',
            },
            {
                xtype               : 'img',

                cls                 :'final_img',
                html                : '<img src = "resources/images/marlow-back/home_day.gif">',
                
            },
            {
                xtype               : 'container',
                cls                 :'overlap_text',
                html                : '<div style = "text-align:center;"><b>Shop Name & Shop Name<b/><br/> <b>Price<b/><br/><p style="font-weight: normal;">Saw this and thought Bob might like it? </p><div/>'
            },
            
            {   
                cls                 :'share_button',
                xtype               : 'button',
                text                :'Scan another item'
            },
            {
                cls                 :'share_button',
                xtype               :'button',
                text                :'Share this item'
            },
             
            {
                xtype               : 'toolbar',
                docked              : 'bottom',
                ui                  : 'white',
                cls                 : 'bottom-toolbar',
                layout: 
                {
                    align           : 'center',
                    pack            : 'center',
                    type            : 'hbox',
                },
                items: [
                    {
                        xtype       : 'img',
                        iconAlign   : 'center',
                        html        : '<img src = "resources/images/marlow-icons/snap-it-active.png" style = "height: 75px; margin-right: 20px;" >',
                        iconMask    : true,
                        title       : 'Snap It'
                    },
                    {
                        xtype       : 'img',
                        iconAlign   : 'center',
                        html        : '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "height: 75px; margin-right: 20px;">',
                        iconMask    : true,
                        title       : 'Shops'
                    },
                    {
                        xtype       : 'img',
                        iconAlign   : 'center',
                        html        : '<img src = "resources/images/marlow-icons/my-list-disabled.png" style = "height: 75px; margin-right: 20px;">',
                        iconMask    : true,
                        title       : 'My List'
                    },
                    {
                        xtype       : 'img',
                        iconAlign   : 'center',
                        html        : '<img src = "resources/images/marlow-icons/info-disabled.png" style = "height: 75px; margin-right: 20px;">',
                        iconMask    : true,
                        title       : 'Info'
                    }
                ]
        }

        ]      
    }   
});