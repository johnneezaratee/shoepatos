(function() {
    var adminVue = new Vue({
        el: '#adminVue',
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
            gotoAdditem: function() {
                window.location.href = 'additem'; 
            }
        }
    });
    console.log(adminVue);
})();