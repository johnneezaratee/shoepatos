(function() {
    var adminVue = new Vue({
        el: '#adminVue',
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
            },
            gotoEdit: function() {
                window.location.href = 'edit'; 
            },
            editNote: function(note) {
                var self = this;
                axios.get('/notes/' + note.id).then(function(res) {
                    //self.notes = res.data;
                    var index = -1;
                    for(var i = 0; i < self.notes.length; ++i) {
                        if(Number(self.notes[i].id) === Number(note.id)){
                            index = i;
                            break;    
                        }
                    }
                    //self.notes.splice(index, 1);
                    notes[index].id
                })
                .catch(function(err) {
                });
            },
            deleteNote: function(note) {
                var self = this;
                axios.delete('/notes/' + note.id)
                .then(function(res) {
                    //self.notes = res.data;
                    var index = -1;
                    for(var i = 0; i < self.notes.length; ++i) {
                        if(Number(self.notes[i].id) === Number(note.id)){
                            index = i;
                            break;    
                        }
                    }
                    self.notes.splice(index, 1);
                })
                .catch(function(err) {
                });
            }
        }
    });
    console.log(adminVue);
})();