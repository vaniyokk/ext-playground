Ext.define('MyApp.view.users.UsersView',{
	extend: 'Ext.panel.Panel',
	xtype: 'usersview',
	cls: 'usersview',
	controller: 'usersviewcontroller',
	viewModel: {type: 'usersviewmodel'},
	title: 'Users from RADServer',
	layout: 'fit',
	items: [
		{
			xtype: 'grid',
			store: {type: 'users'},
			//bind: {store: '{users}'},
			columns: [
				{ text: 'user', dataIndex: 'username', width: 100 },
				{ text: 'id', dataIndex: '_id', width: 300 },
				{ text: 'creator', dataIndex: 'creator', width: 300 },
				{ text: 'created', dataIndex: 'created', width: 200 },
				{ text: 'description', dataIndex: 'description', flex: 1 }
			]
		}
	]
});
