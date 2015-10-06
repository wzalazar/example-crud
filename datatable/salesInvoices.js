TabularTables = {};

TabularTables.SalesInvoices = new Tabular.Table({
    name: "SalesInvoices",
    collection: SalesInvoices,
    columns: [{
        data: "invoiceId",
        title: "Invoice"
    }, {
        data: "totalAmount",
        title: "Total amount"
    }, {
        data: "createdDate",
        title: "Created date"
    }, {
        data: "comments",
        title: "Comments"
    }, {
        tmpl: Meteor.isClient && Template.helperSalesInvoices
    }]
});
