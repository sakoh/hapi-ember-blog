import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.route('edit', { path: ':user_id/edit' });
    this.route('show', { path: ':user_id' });
  });
  this.resource('posts', function() {
    this.route('new');
    this.route('edit', { path: ':post_id/edit' });
    this.route('show', { path: ':post_id' });
  });
});

export default Router;
