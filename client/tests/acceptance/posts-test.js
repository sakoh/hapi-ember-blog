import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;
var originalConfirm;
var confirmCalledWith;

function defineFixturesFor(name, fixtures) {
  var modelClass = App.__container__.lookupFactory('model:' + name);
  modelClass.FIXTURES = fixtures;
}

module('Acceptance: Post', {
  setup: function() {
    App = startApp();
    defineFixturesFor('post', []);
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /posts without data', function() {
  visit('/posts');

  andThen(function() {
    equal(currentPath(), 'posts.index');
    equal(find('#blankslate').text().trim(), 'No Posts found');
  });
});

test('visiting /posts with data', function() {
  defineFixturesFor('post', [{ id: 1, title: 'MyString', body: 'MyString' }]);
  visit('/posts');

  andThen(function() {
    equal(currentPath(), 'posts.index');
    equal(find('#blankslate').length, 0);
    equal(find('table tbody tr').length, 1);
  });
});

test('create a new post', function() {
  visit('/posts');
  click('a:contains(New Post)');

  andThen(function() {
    equal(currentPath(), 'posts.new');

    fillIn('label:contains(Title) input', 'MyString');
    fillIn('label:contains(Body) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    equal(find('#blankslate').length, 0);
    equal(find('table tbody tr').length, 1);
  });
});

test('update an existing post', function() {
  defineFixturesFor('post', [{ id: 1 }]);
  visit('/posts');
  click('a:contains(Edit)');

  andThen(function() {
    equal(currentPath(), 'posts.edit');

    fillIn('label:contains(Title) input', 'MyString');
    fillIn('label:contains(Body) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    equal(find('#blankslate').length, 0);
    equal(find('table tbody tr').length, 1);
  });
});

test('show an existing post', function() {
  defineFixturesFor('post', [{ id: 1, title: 'MyString', body: 'MyString' }]);
  visit('/users');
  click('a:contains(Show)');

  andThen(function() {
    equal(currentPath(), 'posts.show');

    equal(find('p strong:contains(Title:)').next().text(), 'MyString');
    equal(find('p strong:contains(Body:)').next().text(), 'MyString');
  });
});

test('delete a post', function() {
  defineFixturesFor('post', [{ id: 1, title: 'MyString', body: 'MyString' }]);
  visit('/posts');
  click('a:contains(Remove)');

  andThen(function() {
    equal(currentPath(), 'posts.index');
    deepEqual(confirmCalledWith, ['Are you sure?']);
    equal(find('#blankslate').length, 1);
  });
});
