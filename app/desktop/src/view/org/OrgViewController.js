Ext.define('MyApp.view.org.OrgViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.orgviewcontroller',

	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	}
});
