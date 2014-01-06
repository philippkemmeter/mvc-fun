/**
 * Base controller for RESTful requests.
 *
 * See this as an sample controller. Derive from it to create real actions.
 *
 * @author Philipp Kemmeter
 */
var VC   = require('valuechecker'),
    http = require('http'),
    util = require('util'),
    Base = require('./../Base');

/**
 * Creates a new RESTful controller object.
 *
 * The filename to register to may either be a string or a RegExp object.
 * Please note, that a pattern as a string will NOT work for pattern matching,
 * you have to pass a valid RegExp object to make this feature work.
 *
 * @param {String|RegExp} filename        Filename to register to.
 * @constructor
 */
var REST = function(filename, req_manager, resp_manager) {
    Base.call(this, filename, req_manager, resp_manager);
};
util.inherits(REST, Base);

module.exports = REST;

/**
 * Wrapps the api result to a json that will be written using the response
 * manager.
 *
 * @param http.ServerResponse resp Response object.
 * @param Array err                Error array [CODE, MESSAGE].
 * @param object result            Result object. May be string.
 */
REST.prototype._write = function(resp, err, result) {
    if (err)
        result = null;
    else
        err = null;

    this._resp_manager.writeJson(
        resp,
        {
            err: err,
            result: result,
            sid: this._session.id
        }
    );
};

/**
 * Runs the controller.
 *
 * Writes directly to the given response object.
 *
 * @param http.ServerResponse resp Server response Object. Write your data into
 *                                 this object directly.
 */
REST.prototype.run = function(resp) {
    VC.instance_of(resp, 'resp', http.ServerResponse);

    switch (this.request.method) {
    }
};