Ext.define('MarlowApp.store.SearchTimelineStore', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        fields: ['from_user', 'profile_image_url', 'text', 'created_at'],

        pageSize: 25,
        autoLoad: true,

        proxy: {
            type: 'jsonp',
            url: 'https://twitter.com/khaliljunaid',

            pageParam: 'page',
            limitParam: 'rpp',

            extraParams: {
                q: 'sencha -fail -RT',
                lang: 'en'
            },

            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});