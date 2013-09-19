Ext.define('MarlowApp.view.MyItemList', {
    extend: 'Ext.navigation.View', 
    xtype:'myitemlistview',
    //inline: true,
    requires: [ 'Ext.dataview.List' ],
    
    config: {
    navigationBar: {hidden: true},
     fullscreen: true,
         
        items : [
                {
                        xtype: 'toolbar',
                        docked: 'top',
                        title: 'My List',
                        cls: 'top-toolbar',
                        layout: {
                            pack: 'justify',
                            type: 'hbox'
                        }, 
                         items: [
                            {
                                xtype: 'button',
                                align: 'left',
                                text: '<span style = "font-size: 22px; font-family: courier new; font-weight: bolder; padding-right: 2px;"> </span> ',
                                cls: 'custom-button',
                                itemId: 'loginButton',
                            },
                            {    
                                xtype: 'button',
                                text: '<span style = "font-size: 18px; font-weight: lighter;">Edit</span> ',
                                align: 'right',
                                cls: 'custom-button',
                                listeners: 
                                        {
                                        painted: function ( btn , e, eOpts ) {
                                        btn.on('tap', function () {
                                        app.application.redirectTo('deleteitems'); 
                                        });
                                        }}
                            }
                            
                            
                        ],

                         
                },
        
                 {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    ui: "white",
                    cls: 'bottom-toolbar',
                    layout: {
                        align: 'center',
                        pack: 'center',
                        type: 'hbox',
                    },
                     items: [
                        {
                            xtype: 'img',
                            iconAlign: 'center',
                            html: '<img src = "resources/images/marlow-icons/snap-it-disabled.png" style = "height: 75px; margin-right: 20px;" >',
                            iconMask: true,
                            title: 'Snap It'
                        },
                        {
                            xtype: 'img',
                            iconAlign: 'center',
                            html: '<img src = "resources/images/marlow-icons/shops-disabled.png" style = "height: 75px; margin-right: 20px;">',
                            iconMask: true,
                            title: 'Shops'
                        },
                        {
                            xtype: 'img',
                            iconAlign: 'center',
                            html: '<img src = "resources/images/marlow-icons/my-list-active.png" style = "height: 75px; margin-right: 20px;">',
                            iconMask: true,
                            title: 'My List'
                        },
                        {
                            xtype: 'img',
                            iconAlign: 'center',
                            html: '<img src = "resources/images/marlow-icons/info-disabled.png" style = "height: 75px; margin-right: 20px;">',
                            iconMask: true,
                            title: 'Info'
                        }
                    ]
            },
        
            {
                    inline: true,
                    pinHeaders : true,
                    store :'all_productsid', 
                    xtype: 'list',
                    grouped: true,
                    ui:'white',
                    id:'list',
                    itemTpl: Ext.create(
                        'Ext.XTemplate',
                        '<div class="tweet-wrapper">',
                        '   <img src="resources/icons/Icon@2x.png" />',
                        '   <div class="tweet">',
                        //'<span class="posted"><input type="radio"></span>',
                        //'       <span class="posted">{[this.timeAgoInWords(values.created_at)]}</span>',
                        '       <p>{note}</p>',
                        '       <b>{price}</b>',
                        '   </div>',
                        '</div>')
                    
                    
                    /*[
                            '<tpl for=".">',
                            '<div class="tweet" style = "float: left;">',
                            '<div style = "float: left;">', 
                            '<div style = "float: left;"><img src="resources/icons/Icon@2x.png" alt = ""  /></div>',
                            '<div style = "float: left;">',
                            '<p style = "">{note}</p><br>',
                            '<b>{price}</b>',
                            '</div>',
                            '</div>',
                            '</div>',
                            '</tpl>'
                            ] */
                    }
        ]
        },
     

});