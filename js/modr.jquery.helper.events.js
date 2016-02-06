(function($) {
    'use strict';

    // the modules configuration object
    var config = {
        plugin: 'helper',
        module: 'events'
    };

    // the modules constructor
    function Module() {}

    // the modules methods
    var methods = {

        wrapEvents: function( eventName, fn, $elem, thisArg, params ) {

            var scope = thisArg;
            var $element = $elem;
            var event = $.Event( 'before.'+eventName );

            // trigger event before function is executed
            $element.trigger( event, params );
            if ( event.isDefaultPrevented() ) {
                return;
            }

            // call wrapped function
            fn.apply(scope, params);

            // trigger event after function was executed
            $element.trigger( 'after.'+eventName, params );

            return scope;
        }

    };

    // extend plugins prototype
    $.extend( Module.prototype, methods );

    // store module for modr
    modr.registerModule( config, Module );

})(jQuery);