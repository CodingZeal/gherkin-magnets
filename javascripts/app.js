App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // put your routes here
  this.resource('features');
  this.resource('feature', {path:'/feature/:feature_id'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.FeatureRoute = Ember.Route.extend({
	model: function(params) {
		return App.Feature.find(params.feature_id);
	}
});

App.FeatureController = Ember.ObjectController.extend();

App.Store = DS.Store.extend ({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Feature = DS.Model.extend({
  title: DS.attr('title')
});

App.Feature.FIXTURES = [
    {id: 1, title: 'Fixture object 1'},
    {id: 2, title: 'Fixture object 2'}
];