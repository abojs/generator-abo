'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Abo') + ' experiments generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { name: this.props.name }
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('jscsrc'),
        this.destinationPath('.jscsrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copyTpl(
        this.templatePath('ung.json'),
        this.destinationPath('ung.json'),
        { name: this.props.name }
      );
      this.fs.copy(
        this.templatePath('index.bundle.js'),
        this.destinationPath('index.bundle.js')
      );
      this.fs.copy(
        this.templatePath('expts.js'),
        this.destinationPath('expts.js')
      );
      this.fs.copy(
        this.templatePath('expts.prod.js'),
        this.destinationPath('expts.prod.js')
      );
      this.fs.copy(
        this.templatePath('foo/setup.js'),
        this.destinationPath('foo/setup.js')
      );
      this.fs.copy(
        this.templatePath('foo/index.js'),
        this.destinationPath('foo/index.js')
      );
      this.fs.copy(
        this.templatePath('foo/fosofile.js'),
        this.destinationPath('foo/fosofile.js')
      );
      this.fs.copy(
        this.templatePath('foo/ac.js'),
        this.destinationPath('foo/ac.js')
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
