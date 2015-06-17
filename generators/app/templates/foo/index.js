'use strict';
var audienceCondition = require('./ac');
var setup = require('./setup');

module.exports = {
  /* A unique ID to identify the experiment */
  id: 'eea67e60f9f743458f6bd77f52dbccae',
  
  /* A short name of the experiment */
  name: 'Foo',
  
  /* Not required. A number between 0 and 1 indicating the percentage
   * of traffic the experiment will get */
  traffic: .1,
  
  /* A function which if is true then the experiment can be assigned */
  ac: audienceCondition,
  
  /* A function that is being executed if the experiment is assigned */
  setup: setup
};
