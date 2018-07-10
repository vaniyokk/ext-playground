Ext.define('MyApp.view.users.OrgView',{
	extend: 'Ext.panel.Panel',
	xtype: 'orgview',
	cls: 'orgview',
	controller: 'orgviewcontroller',
	viewModel: {type: 'orgviewmodel'},
	title: 'Users from RADServer',
	layout: 'fit',
	items: [
		{
			xtype: 'orgtreeview',
		}
	]
});
