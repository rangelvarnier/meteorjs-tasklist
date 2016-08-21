Template.novo.events({

    "submit form": function(e, template) {
        e.preventDefault();

        var tarefa = $("#tarefa");
        var nome = tarefa.val();

        Meteor.call("adiciona", {
            nome: nome,
            usuario: this.userId
        });

        tarefa.val("");
    }
});
