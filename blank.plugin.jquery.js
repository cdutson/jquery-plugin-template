/**
* A blank jQuery plugin example for further use
* Version: 		1.1
* Author:		Corey Dutson
* Description: 	Shell to use for the plugins we build
* Requires: 	jQuery
*/
 
(function ($) {
    // DONT FORGET TO NAME YOUR PLUGIN
    jQuery.fn.myPlugin = function (options, i) {
        // This is used for data-attribute setting 
        var pluginName = "myPlugin";

        // This handles a multiple item selector such as $('ul li')
        if (this.length > 1) {
            var a = new Array();
            this.each(
                function (i) {
                    a.push($(this).myPlugin(options, i));
                });
            return a;
        }
        var opts = $.extend({}, $().myPlugin.defaults, options);
 
        /* PUBLIC FUNCTIONS */
 
        /**
         * This function should undo everything you did when creating this object in the first place
         * @param <bool> reInit - whether to reinitialize the plugin after destroying it
         */
        this.Destroy = function (reInit) {
            var container = this;
            var reInit = (reInit != undefined) ? reInit : false;
            // this removes the flag so we can re-initialize
            $(container)[0].removeAttribute('data-'+ pluginName); 
        };
        
        /**
         * This function should undo everything and then redo everything with this object. 
         * Generally used when you are updating options.
         * @param <object> options - object array of options you want to override
         */
        this.Update = function (options) {
            opts = null;
            opts = $.extend({}, $().ryaccordion.defaults, options);
            this.Destroy(true);
            return this.Create();
        };
 
        /**
         * This function should undo everything and then redo everything with this object. 
         * Generally used when you are updating options.
         * @param <integer> iteration - integer passed along when called as part of
         * a multi-item selector
         */
        this.Create = function (iteration) {
            // A reference to the object you're manipulating. To jQuery it, use $(container)
            var container = this; 
            
            // this stops double initialization
            if ($(container).attr('data-'+ pluginName) === true)
                return this; 
 
            // Call a function before you do anything
            if (opts.beforeCreateFunction !== null && $.isFunction(opts.beforeCreateFunction))
                opts.beforeCreateFunction(targetSection, opts);
 
            $(container).attr('data-'+ pluginName, true);
 
            /******************
            * DO STUFF HERE
            *******************/
 
            // Call a function after you've initialized your plugin
            if (opts.afterCreateFunction !== null && $.isFunction(opts.afterCreateFunction))
                opts.afterCreateFunction(targetSection, opts);
            return this;
        };
 
        // This is an example public function
        this.PublicFunction = function () {
            // do something
            myPrivatefunction();
        };
 
        /* PRIVATE FUNCTIONS */
        var myPrivatefunction = function myPrivatefunction() { };
        
        /* You really should consider creating private namespace variables
        at this point. The reason being that you will still want to break your
        code into logical sections (Events, DOM, etc.)*/
 
        // Private helper functions for this plugin
        var Helper = {
            // This will tell the user something
            firstHelper: function firstHelper () { /* do something */ },
            /*
            *This function does something
            * @param <string> someValue
            */
            secondHelper: function secondHelper (somevalue) { /* do something with the variable passed in */ }
        };
 
        // Public helper functions
        this.PublicHelper = {
            // This will tell the user something
            tellMeSomething: function tellMeSomething () { /* do something */ },
            /*
            *This function does something
            * @param <string> someValue
            */
            doSomething: function doSomething (someValue) { /* do something with the variable passed in */ }
        };
        // Finally
        return this.Create(i);
    };
 
    // DONT FORGET TO NAME YOUR DEFAULTS WITH THE SAME NAME
    jQuery.fn.myPlugin.defaults = {
        foo: 'bar',
        something: 'else',
        // Remember: the following are function _references_ not function calls
        beforeCreateFunction: null, 
        afterCreateFunction: null
    };
})(jQuery);