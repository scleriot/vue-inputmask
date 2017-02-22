# vue-inputmask

Vue.js directive to add input mask.

It's a binding for the jquery.inputmask library by Robin Herbots [https://github.com/RobinHerbots/Inputmask](https://github.com/RobinHerbots/Inputmask)

This library is licensed under MIT Licence.

# Usage
``` js
var VueInputmask = require('vue-inputmask');

Vue.use(VueInputmask);
```

``` html
<input type="text" v-mask="'99/99/9999'" />
<input type="text" v-mask="{mask: '99/99/9999', greedy: true}" />
```
