Ext.define('MyApp.view.users.OrgView',{
	extend: 'Ext.panel.Panel',
	xtype: 'orgview',
	cls: 'orgview',
	controller: 'orgviewcontroller',
	viewModel: {type: 'orgviewmodel'},
	layout: 'fit',
	items: [
		{
			xtype: 'orgtreeview',
		}
	]
});
