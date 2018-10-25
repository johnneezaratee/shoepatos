(function() {
    var indexVue = new Vue({
        el: '#indexVue',
        created: function() {
            var self = this;
        },
        methods: {
            gotoUReg: function() {
                /* var self = this;
                axios.get('/userreg')
                .then(function(res) {
                    //res.render('views/userreg.pug');
                })
                .catch(function(err) {
                });
                self.push(''); */
                window.location.href = 'userreg';
            }
        }
    });
    console.log(indexVue);
})();