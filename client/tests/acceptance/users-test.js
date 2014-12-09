import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;
var originalConfirm;
var confirmCalledWith;

function defineFixturesFor(name, fixtures) {
  var modelClass = App.__container__.lookupFactory('model:' + name);
  modelClass.FIXTURES = fixtures;
}

module('Acceptance: User', {
  setup: function() {
    App = startApp();
    defineFixturesFor('user', []);
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

test('visiting /users without data', function() {
  visit('/users');

  andThen(function() {
    equal(currentPath(), 'users.index');
    equal(find('#blankslate').text().trim(), 'No Users found');
  });
});

test('visiting /users with data', function() {
  defineFixturesFor('user', [{ id: 1, firstName: 'MyString', lastName: 'MyString', email: 'MyString', street: 'MyString', city: 'MyString', state: 'MyString', zipCode: 'MyString' }]);
  visit('/users');

  andThen(function() {
    equal(currentPath(), 'users.index');
    equal(find('#blankslate').length, 0);
    equal(find('table tbody tr').length, 1);
  });
});

test('create a new user', function() {
  visit('/users');
  click('a:contains(New User)');

  andThen(function() {
    equal(currentPath(), 'users.new');

    fillIn('label:contains(Firstname) input', 'MyString');
    fillIn('label:contains(Lastname) input', 'MyString');
    fillIn('label:contains(Email) input', 'MyString');
    fillIn('label:contains(Street) input', 'MyString');
    fillIn('label:contains(City) input', 'MyString');
    fillIn('label:contains(State) input', 'MyString');
    fillIn('label:contains(Zipcode) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    equal(find('#blankslate').length, 0);
    equal(find('table tbody tr').length, 1);
  });
});

test('update an existing user', function() {
  defineFixturesFor('user', [{ id: 1 }]);
  visit('/users');
  click('a:contains(Edit)');

  andThen(function() {
    equal(currentPath(), 'users.edit');

    fillIn('label:contains(Firstname) input', 'MyString');
    fillIn('label:contains(Lastname) input', 'MyString');
    fillIn('label:contains(Email) input', 'MyString');
    fillIn('label:contains(Street) input', 'MyString');
    fillIn('label:contains(City) input', 'MyString');
    fillIn('label:contains(State) input', 'MyString');
    fillIn('label:contains(Zipcode) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    equal(find('#blankslate').length, 0);
    equal(find('table tbody tr').length, 1);
  });
});

test('show an existing user', function() {
  defineFixturesFor('user', [{ id: 1, firstName: 'MyString', lastName: 'MyString', email: 'MyString', street: 'MyString', city: 'MyString', state: 'MyString', zipCode: 'MyString' }]);
  visit('/users');
  click('a:contains(Show)');

  andThen(function() {
    equal(currentPath(), 'users.show');

    equal(find('p strong:contains(Firstname:)').next().text(), 'MyString');
    equal(find('p strong:contains(Lastname:)').next().text(), 'MyString');
    equal(find('p strong:contains(Email:)').next().text(), 'MyString');
    equal(find('p strong:contains(Street:)').next().text(), 'MyString');
    equal(find('p strong:contains(City:)').next().text(), 'MyString');
    equal(find('p strong:contains(State:)').next().text(), 'MyString');
    equal(find('p strong:contains(Zipcode:)').next().text(), 'MyString');
  });
});

test('delete a user', function() {
  defineFixturesFor('user', [{ id: 1, firstName: 'MyString', lastName: 'MyString', email: 'MyString', street: 'MyString', city: 'MyString', state: 'MyString', zipCode: 'MyString' }]);
  visit('/users');
  click('a:contains(Remove)');

  andThen(function() {
    equal(currentPath(), 'users.index');
    deepEqual(confirmCalledWith, ['Are you sure?']);
    equal(find('#blankslate').length, 1);
  });
});
