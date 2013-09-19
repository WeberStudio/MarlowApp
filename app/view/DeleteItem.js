Ext.define('MarlowApp.view.DeleteItem', {
    extend: 'Ext.navigation.View', 
    xtype:'deleteitemView',
    //inline: true,
    requires: [ 'Ext.dataview.List' ],
    
     config: {
    navigationBar: {hidden: true},
     fullscreen: true,
     id:'deleteitemid',
         
        items : [
                {
                        xtype               : 'toolbar',
                        docked              : 'top',
                        title               : 'Select item to delete',
                        cls                 : 'top-toolbar',
                        layout:
                            {
                                pack        : 'justify',
                                type        : 'hbox'
                            },
                },
        
                 {
                    xtype                   : 'toolbar',
                    docked                  : 'bottom',
                    ui                      : "white",
                    cls                     : 'bottom-toolbar',
                    layout: {
                       // align: 'center',
                        pack                : 'justify',
                        type                : 'hbox',
                    },
                     items: [
                            {
                                xtype       :'button',
                                text        :'Delete selected( )',
                                align       :'left',
                                baseCls     :null,
                                cls         :'delete_btn',
                            },
                            {
                                xtype       :'button',
                                text        :'Cancel',
                                align       :'right',
                                cls         :'cancel_btn',
                            }
                            ]
            }, 
        
            {
                    inline                  : true,
                    pinHeaders              : true,
                    store                   :'all_productsid', 
                    xtype                   : 'list',
                    grouped                 : true,
                    ui                      :'white',
                    id                      :'list',
                    //allowMultiple: true,
                      mode: 'MULTI',
                    itemTpl:Ext.create(
                        'Ext.XTemplate',
                        '<div class="tweet-wrapper">',
                        '   <img src="resources/icons/Icon@2x.png" />',
                        '   <div class="tweet">',
                        //'<span class="posted"><input type="radio"></span>',
                        //'       <span class="posted">{[this.timeAgoInWords(values.created_at)]}</span>',
                        '       <p>{note}</p>',
                        '       <b>{price}</b>',
                        '   </div>',
                        '</div>',
                        
                        '<img src="resources/images/c1.png" style="float: right; position: relative; top:-40px;">'

                        ),
                        listeners:
                        {
                            selectionchange:function(list, records){
                                var names = [];
                                Ext.Array.each(records, function(item){
                                    names.push('<li>' + item.data.name + '</li>');
                                  //console.log(records.length);
                                });
                                 //Ext.Msg.alert('You selected ' + records.length + ' item(s)', '<ul>' + names.join('') + '</ul>');
                            }
                           
                        }
                        
                    },
                    
                    
                    
        ]

        },
     

});