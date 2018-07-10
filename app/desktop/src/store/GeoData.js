Ext.define('MyApp.store.GeoData', {
  extend: 'Ext.data.TreeStore',

  requires: [
      'MyApp.model.tree.Country',
      'MyApp.model.tree.City'
  ],

  model: 'MyApp.model.tree.Territory',

  proxy: {
      type: 'ajax',
      reader: {
          type: 'json',
          typeProperty: 'mtype'
      },
      url: '/MyApp/GeoData'
  },

  lazyFill: false
});