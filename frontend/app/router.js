import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('projects', function() {
    // causes projects.index route to be generated
    this.route('show', { path: ':project_id' });
  });
});

export default Router;
