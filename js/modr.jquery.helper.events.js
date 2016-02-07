(function($) {
    'use strict';

    // the modules configuration object
    var config = {
        plugin: 'helper',
        module: 'events'
    };

    // the modules methods
    modr.registerModule( config, {

        wrapEvents: function( eventName, fn, elem, thisArg, params ) {

            var scope = thisArg || this;
            var element = elem || this.$element;
            var event = $.Event( 'before.'+eventName );

            // trigger event before function is executed
            element.trigger( event, params );
            if ( event.isDefaultPrevented() ) {
                return;
            }

            // call wrapped function
            fn.apply(scope, params);

            // trigger event after function was executed
            element.trigger( 'after.'+eventName, params );

            return scope;
        }

    });

})(jQuery);