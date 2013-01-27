var util = require('util');
var toxml = function(obj) {
	var xml = "";
	if(typeof obj == 'object' && obj instanceof Array) {
        
    } else if(typeof obj == 'object') {
		for(var key in obj) {
			if(key != "_attr" && key != "_val") {
				if(typeof obj[key]['_attr'] != 'undefined') {
					var attrs = [];
					for(var attr in obj[key]['_attr']) {
						attrs.push(util.format('%s="%s"', attr, obj[key]['_attr'][attr]));
					}
					attrs = " " + attrs.join(" ");
				} else {
					var attrs = "";
				}
	            if(obj[key] instanceof Array) {
                    for(var t = 0; t < obj[key].length; t++) {
                        xml+= util.format("<%s>%s</%s>", key, toxml(obj[key][t]), key);
                    }
                } else {
    				xml+= util.format("<%s%s>%s</%s>", key, attrs,
	    				toxml(typeof obj[key]["_val"] == 'undefined' ? obj[key] : obj[key]["_val"]), key);
                }
			}
		}
	} else if(typeof obj=='number' || typeof obj=='string') {
		return obj;
	}
	return xml;
};

module.exports = toxml;
