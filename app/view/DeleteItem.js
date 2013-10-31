Ext.define('MarlowApp.view.DeleteItem', {
	extend: 'Ext.navigation.View', 
	xtype:'deleteitemView',
	config: 
	{	
		id:'deleteitemid',  
		fullscreen: true,
        scrollable: true,
		navigationBar: {
        hidden: true
        },
        
	    items : [
	    {
            xtype: 'toolbar',
            docked: 'top',
		    title: 'Select items to delete',
		    cls: 'top-toolbar',
		    layout: {
			    pack: 'justify',
			    type: 'hbox'
		    }, 
	    },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            ui: 'white',
            cls: 'bottom-up-toolbar',
            layout: {
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
		    xtype: 'list',
		    inline: true,
		    grouped: true,
            pinHeaders: true, 
		    id:'delete_item_list',
		    store:'all_productsid',
            indexBar: true,
            mode: 'MULTI',  
		    //itemTpl: '<div class="contact">{name}</div>',
            selectedCls: 'delete-item-list',
            itemTpl:Ext.create(
                'Ext.XTemplate',
                '<div class="run">',
                '<img src ="http://geordie.testbench.co.uk/assets/media/{image}" style="width: 20%; height: 20%; margin-right: 5%;">',
                '<div class="info">',  
                ' <b> {note}</b> ',
                '</div>', 
                '<div class="location">',
                '&pound; {price}',
                ' </div>',
                '<img class="logo0" id="del-image_{product_id}" src="resources/images/c1.png" style="float: right; widht: 10%; height: 10%;">',
                ' </div>'
                
                //style="float: right; position: relative; top:-40px;"
            ),
            listeners:
            {
                // getSelectionCount:function( ){}, 
                itemtap: function(cmp, index, target, record, e, eOpts)
                {
                    //console.log(e.target.id);
                    //console.log(target._tpl.html);
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
                    //console.log(e.target.src);
                    if(e.target.src){
                        var exp = e.target.src.split("resources");
                        console.log(exp[1]); 
                        
                        if(exp[1] == '/images/c2.png' )
                        {
                            e.target.src = 'resources/images/c1.png';  
                            //Ext.getCmp('del-image_' + e.target.id).setSrc('resources/images/c1.png');  
                            
                        }
                        else 
                        {
                            e.target.src = 'resources/images/c2.png';  
                            //Ext.getCmp('del-image_' + e.target.id).setSrc('resources/images/c2.png');
                        }   
                    }
                }
            }
        }
    ]
}   
});