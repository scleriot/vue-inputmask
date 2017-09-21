/*
 * vue-inputmask
 *
 * (C) 2016 Simon Clériot
 * MIT LICENCE
 *
 */
(function(){
    var inputmaskPlugin = {
        install: function(Vue, options) {
            Vue.directive('mask', {
                bind: function(el, binding) {
                    window.Inputmask(binding.value).mask(el);
                }
            });
        }
    };
    
    window.VueInputmask = inputmaskPlugin
})()