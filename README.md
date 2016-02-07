# modr.jquery.helper
jQuery helper modules for modr framework


#### `wrapEvents` function( eventName, fn, elem, thisArg, params ) { ... }

This method wraps jQuery events around a function call. It listens to `event.preventDefault()`, 
so the execution of the given function can be prevented by the `before` event.  

- **eventName** - will be prefixed with "before." and "after."
- **fn** - the function to call between the events
- **elem** - optional, the jQuery element to bind the event to, defaults to this.$element
- **thisArg** - optional, the thisArg for fn.apply, defaults to root module
- **params** - optional, array of parameters. Will be set to both events and the given function
 

```js
// just an easy example
this.root.wrapEvents('demo.moduleName.pluginName', function() { 
  /* do something */ 
}, $someElement, thisArg, ['param1', 'param2']);

// this will trigger the following event first:
$someElement.trigger( 'before.demo.moduleName.pluginName', ['param1', 'param2'] );

// if event.preventDefault() was called inside any listener, the execution will stop here
// if not, the given function will be called 
fn.apply(thisArg, ['param1', 'param2']);

// the after event is fired at the end
$someElement.trigger( 'after.demo.moduleName.pluginName', ['param1', 'param2'] );
```