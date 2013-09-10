Ext.define('MarlowApp.controller.SnapC', {
    extend: 'Ext.app.Controller',
   // requires: ['Ext.data.JsonP','Ext.Ajax'],
    
    config: {  
        views : ['Snap'],       
        refs: {
            
        },
        control: {
           
        },
        routes : {
            'snap' : 'snapView'
        }                                    
    },
    
    snapView:function(){ 
        // console.log(Ext.Viewport.getCmp('sigupId'))

        if(Ext.Viewport.getComponent('snapId') == undefined)
            {    
            Ext.Viewport.setActiveItem({
                xtype: 'snapView'                 
            }); 
        }
        else
            {
            Ext.Viewport.setActiveItem(Ext.getCmp('snapId'));     
        } 
        //Ext.getCmp("ssntxt").blur(); 
    }
   
});