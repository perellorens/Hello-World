App.views.HomeIndex = Ext.extend(Ext.Panel, {
	
	html: '<h2>Hola món</h2>',
	
	styleHtmlContent: true,
	style: 'background: #d8e2ef',

	dockedItems: [
	    {
            	xtype: 'toolbar',
            	title: 'Home',
       	    },
	],
});
Ext.reg('HomeIndex', App.views.HomeIndex);