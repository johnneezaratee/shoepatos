(function() {
    var additemVue = new Vue({
        el: '#additemVue',
        data: {
            brand: null,
            model: null,
            description: null,
            price: null,
            instock: null,
          notes: []
        },
        created: function() {
            var self = this;            
            axios.get('/additem')
            .then(function(res) {
                self.notes = res.data;
            })
            .catch(function(err) {
                self.notes = [];
            });
        },
        methods: {
            SaveItem: function(){
                var self = this;
                var payload = {
                    brand: req.body.brand,
                    model: req.body.model,
                    description: req.body.description,
                    price: req.body.price,
                    instock: req.body.instock
                };
                axios.post('/saveitem', payload)
                  .then(function(res) {
                    self.notes = res.data;
                    self.clear();
                  })
                  .catch(function(err) {
                });
                //window.location.href = 'additem';
              }
        }
    });
    console.log(additemVue);
})();