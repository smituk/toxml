var toxml = require('./index');
var xml = toxml({
    'root' : {
        'first' : 'param1',
        'child' : {
            '_attr' : {
                'xmlns' : 'http://com.example.webservice/',
                'lang' : 'en'
            },
            '_val' : {
                'child2' : 'children content',
                'child3' : 'children content'
            }
        }
    }
});
console.log(xml);
