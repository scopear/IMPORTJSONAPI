/**
 * Return data from a GQL API.
 *
 * @param {string} url The URL of the API endpoint.
 * @param {string} query The JSONPath query expression.
 * @param {string} columns A comma separated list of column path expressions.
 * @param {string} [param] An optional parameter.
 * @return A two-dimensional array containing the data.
 * @customfunction
 */
function IMPORTGQLAPI(url, query, cols) {

  var additionalArgs = Array.prototype.slice.call(arguments, 3);
  var data = IMPORTJSONAPI(url, query, cols, ...additionalArgs);

  return data;
}
