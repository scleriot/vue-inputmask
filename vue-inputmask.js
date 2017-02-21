/*
 * vue-inputmask
 *
 * (C) 2016 Simon Clériot
 * MIT LICENCE
 *
 */

 (function(){
    var Inputmask = require('./3rd/inputmask');

    var inputmaskPlugin = {
        install: function(Vue, options) {
            Vue.directive('mask', {
                bind: function(el, binding){
                    Inputmask(binding.expression).mask(el);
                },
                unbind: function(el){
                    Inputmask.remove(el);
                }
            });
        }
    };
    module.exports = inputmaskPlugin;
})()
