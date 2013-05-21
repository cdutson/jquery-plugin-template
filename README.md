jquery-plugin-template
======================

My jQuery template for quick plugin development. Typically used for things such as carousels, accordions, and whatnot.

##Usage
This sample plugin is fairly straight-forward. To use it, you would declare it like any normal plugin:

```javascript
// Initialize plugin with all defaults
$('#target').myPlugin();

// Initialize plugin with custom settings
$('#target').myPlugin({foo: "notBar"})
```

It currently exposes 4 functions, and a namespace with two additional functions:
```javascript
// Initialize plugin with all defaults
var $declaredThing = $('#target').myPlugin();

// The destroy function will undo everything the plugin did
$declaredThing.Destroy();

// The create function will create an instance of the plugin. Generally used internally, as it makes for a messy
// Call on its own
$.myPlugin().Create.call(document.getElementById('target'));

// The update function will destroy and recreate the plugin with the new options specified
$declaredThing.Update({foo: "anotherBar"});

// Example public function
$declaredThing.PublicFunction();

// Example public namespace functions
$declaredThing.PublicHelper.tellMeSomething();
$declaredThing.PublicHelper.doSomething(true);
```

##Gotchas
Currently chaining only half works. The following will work:

```javascript
// This works
$('#target').myPlugin().css('border', '1px solid red');

// This also works
var $t = $('#target').myPlugin();
$t.css('border', '1px solid red');

$t.PublicFunction();

```

The following will not function as expected:

```javascript
// This works...
var $t = $('#target').myPlugin();
$t.css('border', '1px solid red');

// But this will not...
$t.PublicFunction();
// ...Nor this...
$t[0].PublicFunction();
// ...Nor this.
$(t[0]).PublicFunction();
```