Ext.define('MyApp.model.tree.Country', {
  extend: 'MyApp.model.tree.Base',
  entityName: 'Country',
  idProperty: 'name',
  glyph: 'xf024@FontAwesome',
  fields: [{
      name: "name",
      convert: undefined
  }]
});