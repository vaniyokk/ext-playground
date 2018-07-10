Ext.define('MyApp.view.people.PeopleView',{
	extend: 'Ext.panel.Panel',
	xtype: 'peopleview',
	controller: 'peopleviewcontroller',
	viewModel: {
		type: 'peopleviewmodel'
	},	
	requires: [
		'Ext.dataview.listswiper.ListSwiper',
		'Ext.dataview.plugin.ListPaging'
	],
	layout: 'fit',
	tbar: [
		'->',
		{ xtype: 'button', xui: 'plain',iconCls: 'x-fa fa-sort-amount-desc', iconAlign: 'right', tag: 'DESC', text: 'Sort', handler: 'onSort'},
	],
	items: [
		{
			xtype: 'list',
			infinite: true,
			store: Ext.create('MyApp.store.PeopleStore',{}),
			emptyText: 'No activity was found',
			striped: true,
			grouped: true,
			ui: 'listing',
			selectable: {
					disabled: true
			},
			plugins: [
				{
					type: 'listpaging',
					autoPaging: true
				}, 
				{
					type: 'listswiper',
					right: [
//						{
//							iconCls: 'x-fa fa-trash',
//							commit: 'onDeleteAction',
//							undoable: true,
//							text: 'Delete',
//							ui: 'remove'
//						}
					]
				}
			],

			itemTpl: new Ext.XTemplate(`
			<div class="testview" style="height:100px; width: 100%;border: 0px solid green;">
			
			 -  - 
			<br/>
			  - 
			<br/>
			
			<br/>
			
			</div>
			`,
			{
				//disableFormats: true,
				getFont:function(val){
					if (val.toLowerCase() == 'n' ) {
						return false
					}
					else {
						return true
					}
				}
			})
		}
	]
});
