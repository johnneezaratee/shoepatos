(function() {
    var adminVue = new Vue({
        el: '#adminVue',
        created: function() {
            var self = this;
        },
        methods: {
            gotoAdditem: function() {
                window.location.href = 'additem'; 
            }
        }
    });
    console.log(adminVue);
})();