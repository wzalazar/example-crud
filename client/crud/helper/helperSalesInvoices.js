Template.helperSalesInvoices.events({
    "click .delete": function(event, template) {
        SalesInvoices.remove({
            _id: this._id
        });
    }
});
