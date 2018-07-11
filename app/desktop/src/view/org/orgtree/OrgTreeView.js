
Ext.define('MyApp.view.org.orgtree.OrgTreeView', {
  extend: 'Ext.grid.Tree',

  xtype: 'orgtreeview',
  title: 'Heterogeneous Geographical Tree',
  controller: 'orgtreeviewcontroller',

  height: 400,
  rootVisible: false,
  store: {
    type: 'geodata'
  },
  width: 600,

  listeners: {
      selectionchange: 'onSelectionChange'
  },

  columns: [{
      xtype: 'treecolumn',
      text: 'Name',
      dataIndex: 'name',
      flex: 1
  }],

  items: [{
      xtype: 'toolbar',
      docked: 'bottom',
      items: [{
          xtype: 'textfield',
          reference: 'new-name',
          listeners: {
              action: 'onFieldAction'
          }
      }, {
          reference: 'add-button',
          text: 'Add Territory',
          handler: 'addItem'
      }]
  }]
});