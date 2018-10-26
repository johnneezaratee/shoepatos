(function() {
    var shippingVue = new Vue({
        el: '#shippingvue',
        created: function() {
            var self = this;
        },
        methods: {
            gotoShipping: function() {
                window.location.href = 'shipping'; 
            }
        }
    });
    console.log(shippingVue);
})();