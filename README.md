local-port [![Build Status](https://travis-ci.org/soyuka/local-port.svg)](https://travis-ci.org/soyuka/local-port)
==========

Find open or closed local port within a range

## Usage 
```
	require('local-port').findOpen(3001, function(err, port) {
		if(err)
			console.error(err);

	    console.log(port)
	})
```

## API

- `findOpen(start, [end,] callback)` => `callback(err, port)`
- `findClose(start, [end,] callback)` =>`callback(err, port)`
- `isPortTaken(port, callback)` => `callback(err, taken)`
