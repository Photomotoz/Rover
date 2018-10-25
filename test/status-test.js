var chai = require('chai');
chai.use(require('chai-json-schema'));

var assert = chai.assert;

var Status = require('./../src/status');

var statusSchema = {
    title: 'Status Schema',
    type: 'object',
    required: ['facing', 'position'],
    properties: {
        position: {
            type: 'array',
            minItems: 2,
            uniqueItems: true,
            items: {
                type: 'integer'
            }
        },
        facing: {
            type: 'string',
            minLength: 1,
            maxLength: 1
        },
    }
};


describe('StatusCheck', function () {
    it('Return the current position (x,y) of the rover and it\'s facing (N,S,E,W)', function () {
        var status = new Status();

        var testData = JSON.parse(status.getStatus());

        assert.jsonSchema(testData, statusSchema);
    })
});