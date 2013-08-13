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

App.FeaturesRoute = Ember.Route.extend({
  model: function() {
    return App.Feature.find();
  }
});

App.FeatureRoute = Ember.Route.extend({
	model: function(params) {
		return App.Feature.find(params.feature_id);
	}
});

App.FeaturesController = Ember.ArrayController.extend();
App.FeatureController = Ember.ObjectController.extend();

App.Store = DS.Store.extend ({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Feature = DS.Model.extend({
  title: DS.attr('title'),
  storyGoal: DS.attr('storyGoal'),
  storyStakeholder: DS.attr('storyStakeholder'),
  storyBehavior: DS.attr('storyBehavior')
});

App.Feature.FIXTURES = [
    {id: 1, title: 'Fixture object 1', storyGoal: '', storyStakeholder: '', storyBehavior: ''},
    {id: 2, title: 'Edit a feature name', storyGoal: 'identify a feature', storyStakeholder: 'user', storyBehavior: 'edit a feature name'}
];