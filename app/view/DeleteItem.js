Ext.define('MarlowApp.view.DeleteItem', {
    extend: 'Ext.navigation.View', 
    xtype:'deleteitemView',
    //inline: true,
    requires: [ 'Ext.dataview.List', 'Ext.mixin.Selectable' ],
    
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
                                text        :'Delete selected()',
                                align       :'left',
                                baseCls     :null,
                                id          : 'count',
                                cls         :'delete_btn',

                            },
                            {
                                xtype       :'button',
                                text        :'Cancel',
                                align       :'right',
                                cls         :'cancel_btn',
								handler:function()
								{
									app.application.redirectTo('myitemlist')
									//window.location.reload();
								}

                            }
                            ]
            },  
        
            {
                    inline                  : true,
                    pinHeaders              : true,
                    store                   :'all_productsid', 
                    xtype                   : 'list',
                    grouped                 : true,
                    //ui                      :'#ffffff',
                    id                      :'delete_item_list',
                    cls                     :'items-list',
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
                        '<img class="logo0" id="{product_id}" src="resources/images/c1.png" style="float: right; position: relative; top:-40px;">'
                         ),
                         
                         
                          listeners:
                            
                            
                            
                            {
                               // getSelectionCount:function( ){}, 
                                itemtap: function(cmp, index, target, record, e, eOpts)
                                {
                                    find = addIndex.indexOf(index);
                                    if(find > -1)
                                    {
                                        addIndex.splice(find, 1);
                                        console.log(addIndex);
                                        count =  addIndex.length;
                                    }
                                    else if(find == '-1')
                                    {
                                      addIndex.push(index);
                                      count =  addIndex.length;
                                      console.log(addIndex); 
                                    }
                                    Ext.getCmp('count').setText('Delete selected('+count+')');
                                    if(e.target.src == 'http://localhost/MarlowApp/resources/images/c2.png' )
                                       {
                                          e.target.src = 'resources/images/c1.png'; 
                                       }
                                       else if(e.target.src == 'http://localhost/MarlowApp/resources/images/c1.png')
                                       {
                                           e.target.src = 'resources/images/c2.png';
                                       }
                                    }
                            }
                        
                       /* listeners:
                            {
                                getSelectionCount:function()
                                {
                                   console.log(number);  
                                }
                            selectionchange:function(list, records){
                                
                                var names = [];
                                Ext.Array.each(records, function(item){
                                    names.push('<li>' + item.data.product_id + '</li>');
                                  console.log(names);
                                });
                                 Ext.Msg.alert('You selected ' + records.length + ' item(s)', '<ul>' + names.join('') + '</ul>');
                            }
                         
                           
                        }*/ 
                        
                        
                    },
                    
                    
                    
        ]

        },
     

});