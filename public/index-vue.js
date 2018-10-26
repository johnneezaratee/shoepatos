(function() {
    var indexVue = new Vue({
        el: '#indexVue',
        created: function() {
            var self = this;
        },
        methods: {
            gotoUReg: function() {
                window.location.href = 'userreg'; 
            },
            gotoCheckout: function() {
                window.location.href = 'checkout'; 
            }
        }
    });
    console.log(indexVue);
})();