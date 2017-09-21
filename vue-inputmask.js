/*
 * vue-inputmask
 *
 * (C) 2016 Simon Clériot
 * MIT LICENCE
 *
 */

(function(){
    var inputmaskPlugin = {
        Inputmask: typeof require=='function'?require('inputmask'):window.Inputmask,
        install: function(Vue, options) {
            Vue.directive('mask', {
                bind: (el, binding) => {
                    this.Inputmask(binding.value).mask(el);
                }
            });
        }
    };
    if(typeof module == 'object')
        module.exports = inputmaskPlugin;
    else {
        window.VueInputmask = inputmaskPlugin
    }
})()
