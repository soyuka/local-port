var expect = require('chai').expect
  , assert = require('chai').assert
  , localPort = require('./')


var http = require('http'), port = 0

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("hello world\n")
})


describe('next-port', function() {

	it('should find first available port', function(cb) {
		localPort.findOpen(1000, function(err, open_port) {
			expect(err).to.be.null
			expect(open_port).to.be.at.least(1000)
			expect(open_port).to.be.below(2001)
			expect(open_port).to.be.a('number')
			assert(open_port > 1000, 'There was a problem')
			localPort.isPortTaken(open_port, function(err, taken) {
				expect(taken).to.be.false
				server.listen(open_port)
				port = open_port
				cb()
			})
		})
	})

	it('should find first closed port', function(cb) {
		localPort.findClose(1000, function(err, close_port) {
			expect(err).to.be.null
			expect(close_port).to.be.a('number')
			localPort.isPortTaken(close_port, function(err, taken) {
				expect(close_port).to.be.at.most(port)
				expect(taken).not.to.be.false
				cb()
			})
		})
	})

})