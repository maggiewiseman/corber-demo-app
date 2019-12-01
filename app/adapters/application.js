import DS from "ember-data";

export default DS.RESTAdapter.extend({
  host: "https://corber-demo-app.herokuapp.com/", // Address of our rails app, link to the rails app
  buildURL: function(record, suffix) {
    // hack to mount the url correctly to our case
    var s = this._super(record, suffix);
    return s + ".json";
  }
});
