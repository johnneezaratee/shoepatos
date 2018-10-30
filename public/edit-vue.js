(function() {
    var editVue = new Vue({
        el: '#editVue',
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
            axios.get('/notes')
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
                    id: req.body.id,
                    brand: req.body.brand,
                    model: req.body.model,
                    description: req.body.description,
                    price: req.body.price,
                    instock: req.body.instock
                };
                axios.put('/edit', payload)
                  .then(function(res) {
                    self.notes = res.data;
                    self.clear();
                  })
                  .catch(function(err) {
                });
              }
        }
    });
    console.log(editVue);
})();