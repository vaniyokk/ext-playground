
Ext.define('MyApp.view.org.orgtree.OrgTreeView', {
  extend: 'Ext.grid.Tree',

  xtype: 'orgview',
  controller: 'orgtreeviewcontroller',

  rootVisible: false,
  store: {
    type: 'geodata'
  },

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