Template.edit.helpers({
    doc: function() {
        return SalesInvoices.findOne(Router.current().params.id);
    }
});
