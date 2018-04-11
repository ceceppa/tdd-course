var expect = require('chai').expect;
var sinon = require('sinon');
var jsdom = require('jsdom-global')();
var getTodos = require('../ajax');

before(function() {
  global.$ = global.jQuery = require('jquery');
});

describe('Test stub', () => {
  after(() => {
    jQuery.ajax.restore();
  });

  it('makes a GET request for todo items', () => {
    sinon.stub(jQuery, 'ajax');
    getTodos(42, sinon.spy());

    expect(jQuery.ajax.calledWithMatch({ url: '/todo/42/items' })).to.be.true;
  });
});

describe('Test Fake XMLHttpRequest', function() {
  var xhr, requests;

  before(function() {
    xhr = window.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
    requests = [];

    xhr.onCreate = function(req) {
      requests.push(req);
    };
  });

  after(function() {
    xhr.restore();
  });

  it('makes a GET request for todo items', function() {
    getTodos(42, sinon.spy());

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.equals('/todo/42/items');
  });
});
