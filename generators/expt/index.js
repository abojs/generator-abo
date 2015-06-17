'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var uuid = require('node-uuid');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your experiment name'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    files: function () {
      var exptFolder = this.props.name.replace(/ /g, '-');

      this.fs.copy(
        this.templatePath('setup.js'),
        this.destinationPath(exptFolder + '/setup.js')
      );
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(exptFolder + '/index.js'),
        {
            id: uuid.v1(),
            name: this.props.name
        }
      );
      this.fs.copy(
        this.templatePath('fosofile.js'),
        this.destinationPath(exptFolder + '/fosofile.js')
      );
      this.fs.copy(
        this.templatePath('ac.js'),
        this.destinationPath(exptFolder + '/ac.js')
      );
    }
  }
});
