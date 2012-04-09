(function() {
var hijack = {
  options: {
    linkSelector: 'a'
  },
  router: null,
  /* parses a Str representation of a 
   * url, like:
   *  $('a')[0].href
   *
   * And returns a Key-Value object
   * with a detailed analysis of the URL
   */
  parseUri: function( str ) {
		var p   =  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    		m   = p.exec(str),
    		uri = {},
    		i   = 14,
	      key = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        query = {
            name:   "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        };

	while (i--) uri[key[i]] = m[i] || "";

	uri[query.name] = {};
	uri[key[12]].replace(p, function ($0, $1, $2) {
		if ($1) uri[query.name][$1] = $2;
	});

	return uri;
  },
  attachHijacker: function(selector) {
    var that = this;
    $(document).on('click',  selector, function(evt) {
        //can't find router? continue on as normal
        if( _.isNull(that.router) ) {
            return true;
        }

        /* Attempt to set the route, this should pushState regardless of
         * whether or not the route is there
         */
        that.router.setRoute( that.parseUri(this.href).relative );

        return false; //todo: fix this


        /* If we found a route, stop the event by returing false */
        if (that.router.route_found) {
            return false;
        }
    });
  },
  init: function(router, options) {
      this.router = router;

      options = options || {};
      _.defaults(options, this.options);

      /* Attach link handler to hijack clicks on.
       * Selected element(s) should have an "href" attribute
       */
      this.attachHijacker(options.linkSelector);
  }
};

window.hijack = hijack;


})();
