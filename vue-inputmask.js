/*
 * vue-inputmask
 *
 * (C) 2016 Simon Clériot
 * MIT LICENCE
 *
 */

(function(){
    var inputmaskPlugin = {
        InputMask: require('./3rd/inputmask'),
        install: function(Vue, options) {
            Vue.directive('mask', {
                bind: function(el, binding){
                    Inputmask(binding.value).mask(el);
                }
            });
        }
    };
    module.exports = inputmaskPlugin;
})()
