(function() {
    var indexVue = new Vue({
        el: '#indexVue',
        data: {
            id: null,
            brand: null,
            model: null,
            description: null,
            price: null,
            instock: null,
            notes: []
          },
          created: function() {
            var self = this;
            axios.get('http://localhost:3000/notes')
              .then(function(res) {
                self.notes = res.data;
              })
              .catch(function(err) {
                self.notes = [];
              });   
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