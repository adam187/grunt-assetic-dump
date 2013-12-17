# grunt-assetic-dump [![Build Status](https://travis-ci.org/adam187/grunt-assetic-dump.png?branch=master)](https://travis-ci.org/adam187/grunt-assetic-dump)

> Grunt task to dump assets from symfony2 assetic config.yml to physical files

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-assetic-dump --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-assetic-dump');
```

## The "assetic_dump" task

### Overview
In your project's `Gruntfile.js`, add a section named `assetic_dump` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  assetic_dump: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.banner
Type: `String`
Default value: empty string

This string will be prepended to the beginning of the output fole.

#### options.footer
Type: `String`
Default value: empty string

This string will be append to the end of the output file.

#### options.configFile
Type: `String`
Default value: `app/config/config.yml`

Your symfony config file where your assets are defined

#### options.assetsBaseDir
Type: `String`
Default value: `web/`

Base dir of your inputs assets (relative to `Gruntfile.js`)

#### options.webDir
Type: `String`
Default value: `web/`

Target dir where your output file will be saved (relative to `Gruntfile.js`)

### Usage Examples

I sugest to put your assets in bundles public directories and install them in `web/` dir via `php app/console assets:install --symlink`. Then you have to set up your assets in config file like:

```yaml
# app/config/config.yml
assetic:
    # ...
    assets:
        all_css:
            inputs:
                - 'bundles/bundle-name/normalize.css'
                - 'bundles/bundle-name/screen.css'
            output: 'css/all.css'
        all_js:
            inputs:
                - 'bundles/bundle-name/jquery.js'
                - 'bundles/bundle-name/app.js'
            output: 'js/all.js'
```

Then you can dump them to filesystem via:

```js
grunt.initConfig({
  // ...
  assets_dump: {
    prod: {}
  }
});
```

#### Custom config file

You can also put your assets config in separate file (for example `app/config/assets.yml`) and include then in your `app/config/config.yml`.

Then you can dump them to filesystem via:

```js
grunt.initConfig({
  // ...
  assets_dump: {
    prod: {
      configFile: 'app/config/assets.yml'
    }
  }
});
```
