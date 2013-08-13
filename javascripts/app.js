App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// Routes
App.Router.map(function() {
  this.resource('features', {path: '/features'});
  this.resource('feature', {path:'/feature/:feature_id'}, function(){
    this.resource('scenarios', {path:'/scenario/:scenario_id'});
  });
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


// Controllers
App.FeaturesController = Ember.ArrayController.extend();

App.FeatureController = Ember.ObjectController.extend();

App.ScenariosController = Ember.ArrayController.extend();

App.ScenarioStepsController = Ember.ArrayController.extend();

// Models
App.Store = DS.Store.extend ({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Feature = DS.Model.extend({
  scenarios: DS.hasMany('App.Scenario'),
  title: DS.attr('title'),
  storyGoal: DS.attr('storyGoal'),
  storyStakeholder: DS.attr('storyStakeholder'),
  storyBehavior: DS.attr('storyBehavior')
});

App.Scenario = DS.Model.extend({
  scenarioSteps: DS.hasMany('App.ScenarioStep')
  scenarioTitle: DS.attr('scenarioTitle')
});

App.ScenarioStep = DS.Model.extend({
  stepType: DS.attr('stepType'),
  stepTitle: DS.attr('stepTitle')
});

// Fixtures
App.Feature.FIXTURES = [
    {
      id: 1,
      title: 'Fixture object 1',
      storyGoal: '',
      storyStakeholder: '',
      storyBehavior: '',
      scenarios: []
    },
    {
      id: 2,
      title: 'Edit a feature name',
      storyGoal: 'identify a feature',
      storyStakeholder: 'user',
      storyBehavior: 'edit a feature name',
      scenarios: [2]
    },
    {
      id: 3,
      title: 'Fixture object 3',
      storyGoal: 'identify a feature',
      storyStakeholder: 'user',
      storyBehavior: 'edit a feature name',
      scenarios: []
    },
    {
      id: 4,
      title: 'Fixture object 4',
      storyGoal: 'identify a feature',
      storyStakeholder: 'user',
      storyBehavior: 'edit a feature name',
      scenarios: []
    },
    {
      id: 5,
      title: 'Fixture object 5',
      storyGoal: 'identify a feature',
      storyStakeholder: 'user',
      storyBehavior: 'edit a feature name',
      scenarios: []
    }
];

App.Scenario.FIXTURES = [
    {
      id: 1,
      scenarioTitle: '',
      scenarioSteps: []
    },
    {
      id: 2,
      scenarioTitle: 'Test scenario',
      scenarioSteps: [1, 2, 3]
    },
    {
      id: 3,
      scenarioTitle: '',
      scenarioSteps: []
    },
    {
      id: 4,
      scenarioTitle: '',
      scenarioSteps: []
    }
];

App.ScenarioStep.FIXTURES = [
    {
      id: 1,
      stepType: 'given',
      stepTitle: 'Given I am on the feature builder'
    },
    {
      id: 2,
      stepType: 'when',
      stepTitle: 'When I fill out "goal" with "be more efficient"'
    },
    {
      id: 3,
      stepType: 'then',
      stepTitle: 'Then I will see "be more efficient" within "goal"'
    }
];