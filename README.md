jquery-plugin-template
======================

My jQuery template for quick plugin development. Typically used for things such as carousels, accordions, and whatnot.

##Useage
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

// The update function will destry and recreate the plugin with the new options specified
$declaredThing.Update({foo: "anotherBar"});

// Example public function
$declaredThing.PublicFunction();

// Example public namespace functions
$declaredThing.PublicHelper.tellMeSomething();
$declaredThing.PublicHelper.doSomething(true);
```