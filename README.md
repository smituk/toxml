## toXML

Convert object to XML easy.

## Installation

    $ npm install toxml

## Example
```javascript
var toxml = require('toxml');
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
```

## Output
```xml
<root><first>param1</first><child xmlns="http://com.example.webservice/" lang="en"><child2>children content</child2><child3>children content</child3></child></root>
```

## License

This project is licensed under the MIT license.
