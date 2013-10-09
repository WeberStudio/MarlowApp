Ext.define('MarlowApp.bootstrap', {});    
loadMask = function(){
    var obj = { xtype: 'loadmask',message: 'Loading...'};
    Ext.Viewport.setMasked(obj);
}
hideloadingMask = function()
{
    Ext.Viewport.setMasked(false);    
}