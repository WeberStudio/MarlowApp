Ext.define('MarlowApp.view.DeleteItem', {
    extend: 'Ext.navigation.View', 
    xtype:'deleteitemView',
    //inline: true,
    requires: [ 'Ext.dataview.List', 'Ext.mixin.Selectable' ],
    
     config: {
     navigationBar: {hidden: true},
     fullscreen: true,
     id:'deleteitemid',
     cls: 'delete-items-list',

      
         
        items : [
                {
                        xtype               : 'toolbar',
                        docked              : 'top',
                        title               : 'Select items to delete',
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
                    ui                      : 'white',
                    cls                     : 'bottom-up-toolbar',
                    layout: {
                       // align: 'center',
                        pack                : 'justify',
                        type                : 'hbox',
                    },
                     items: [
                            {
                                xtype       : 'button',
                                text        : 'Delete selected()',
                                align       : 'left',
                                action      : 'deleteBulk',
                                id          : 'count',
                                cls         :'delete-item-button',

                            },
                            {
                                xtype       :'button',
                                text        :'Cancel',
                                align       :'right',
                                cls         :'share-item-button',  
                                handler:function()
                                {
                                    var deleteItemId              = Ext.getCmp("deleteitemid");
                                    deleteItemId.destroy(); 
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
                    id                      :'delete_item_list',
                    cls                     :'delete-item',
                    //allowMultiple: true,
                    mode: 'MULTI',
                    itemTpl:Ext.create(
                        'Ext.XTemplate',
                        '<div class="tweet-wrapper">',
                       '<img src ="http://geordie.testbench.co.uk/assets/media/{image}" style = "width: 10%; height: 10%">',
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
                                    
                                     console.log(target._tpl.html);
                                     /*var expnew = target._tpl.html.split("src");
                                       console.log(expnew[2]);
                                         var modi = expnew[2].split("/");
                                         console.log(modi[2]);
                                         var popoo =  modi[2].split('"');
                                         console.log(popoo[0]);
                                         if(popoo[0] == 'c1.png')
                                         {
                                           //Ext.getCmp('delete_item_list').setHtml('<div class="tweet-wrapper"> <img src="resources/icons/Icon@2x.png" /><div class="tweet"><p>{note}</p> <b>{price}</b></div></div><img class="logo0" id="{product_id}" src="resources/images/c2.png" style="float: right; position: relative; top:-40px;">');  
                                         }*/
                                    //this is the user id for delete items
                                    deleteUserId = record.data.user_id;
                                    console.log(deleteUserId);
                                    //this is for  set the delete ids
                                    deleteIdIndex = deleteBulkIds.indexOf(record.data.product_id);
                                    if(deleteIdIndex > -1)
                                    {
                                        deleteBulkIds.splice(deleteIdIndex, 1);
                                        //console.log(deleteBulkIds);
                                        
                                    }
                                    else if(deleteIdIndex == '-1')
                                    {
                                      deleteBulkIds.push(record.data.product_id);
                                      //console.log(deleteBulkIds);
                                      
                                    }
                                    // this is for counter
                                    find = addIndex.indexOf(index);
                                    if(find > -1)
                                    {
                                        addIndex.splice(find, 1);
                                        count =  addIndex.length;
                                    }
                                    else if(find == '-1')
                                    {
                                      addIndex.push(index);
                                      count =  addIndex.length;
                                    }
                                    Ext.getCmp('count').setText('Delete selected('+count+')');
                                    if(e.target.src){
                                    var exp = e.target.src.split("/");
                                    if(exp[6] == 'c2.png' )
                                       {
                                          e.target.src = 'resources/images/c1.png'; 
                                       }
                                       else if(exp[6] == 'c1.png')
                                       {
                                           e.target.src = 'resources/images/c2.png';
                                       }
                                    }
                                    }
                            }
                    },
                    
                    
                    
        ]

        },
     

});