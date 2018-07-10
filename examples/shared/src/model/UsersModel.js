Ext.define('MyApp.model.UsersModel', {
	extend: 'MyApp.model.Base',
	fields: [
		'username', 
		'_id', 
		{
			name: 'creator',
			mapping: '_meta.creator'
		},
		{
			name: 'created',
			mapping: '_meta.created'
		},
		'description'
	]
});
