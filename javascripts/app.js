App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// Routes
App.Router.map(function() {
  this.resource('features', {path: '/features'});
  this.resource('feature', {path:'/feature/:feature_id'}, function(){
    this.resource('scenarios', {path:'/scenario/:scenario_id'}, function(){
      this.resource('steps', {path: '/steps/:step_id'});
    });
  });
});

App.ApplicationRoute = Ember.Route.extend({
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

App.ScenariosRoute = Ember.Route.extend({
  model: function() {
    return App.Scenario.find();
  }
});

App.ScenarioRoute = Ember.Route.extend({
  model: function(params) {
    return App.Scenario.find(params.scenario_id);
  }
});

App.StepsRoute = Ember.Route.extend({
  model: function() {
    return App.Step.find();
  }
});

App.StepRoute = Ember.Route.extend({
  model: function(params) {
    return App.Step.find(params.step_id);
  }
});

// Controllers
App.FeaturesController = Ember.ArrayController.extend();

App.ScenariosController = Ember.ArrayController.extend();

App.StepsController = Ember.ArrayController.extend();

// Models
App.Store = DS.Store.extend ({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Feature = DS.Model.extend({
  scenarios: DS.hasMany('App.Scenario'),
  title: DS.attr('title'),
  goal: DS.attr('goal'),
  stakeholder: DS.attr('stakeholder'),
  behavior: DS.attr('behavior')
});

App.Scenario = DS.Model.extend({
  steps: DS.hasMany('App.Step'),
  title: DS.attr('title')
});

App.Step = DS.Model.extend({
  type: DS.attr('type'),
  title: DS.attr('title')
});

// Fixtures
App.Feature.FIXTURES = [
    {
      id: 1,
      title: 'Fixture object 1',
      goal: '',
      stakeholder: '',
      behavior: '',
      scenarios: [2]
    },
    {
      id: 2,
      title: 'Edit a feature name',
      goal: 'identify a feature',
      stakeholder: 'user',
      behavior: 'edit a feature name',
      scenarios: [1, 2]
    },
    {
      id: 3,
      title: 'Fixture object 3',
      goal: 'identify a feature',
      stakeholder: 'user',
      behavior: 'edit a feature name',
      scenarios: [2]
    },
    {
      id: 4,
      title: 'Fixture object 4',
      goal: 'identify a feature',
      stakeholder: 'user',
      behavior: 'edit a feature name',
      scenarios: [2]
    },
    {
      id: 5,
      title: 'Fixture object 5',
      goal: 'identify a feature',
      stakeholder: 'user',
      behavior: 'edit a feature name',
      scenarios: [2]
    }
];

App.Scenario.FIXTURES = [
    {
      id: 1,
      title: '',
      steps: []
    },
    {
      id: 2,
      title: 'Test scenario',
      steps: [1, 2, 3]
    },
    {
      id: 3,
      title: '',
      steps: []
    },
    {
      id: 4,
      title: '',
      steps: []
    }
];

App.Step.FIXTURES = [
    {
      id: 1,
      type: 'given',
      title: 'Given I am on the feature builder'
    },
    {
      id: 2,
      type: 'when',
      title: 'When I fill out "goal" with "be more efficient"'
    },
    {
      id: 3,
      type: 'then',
      title: 'Then I will see "be more efficient" within "goal"'
    }
];