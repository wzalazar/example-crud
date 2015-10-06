var Schema = {};
Schema.SalesInvoices = new SimpleSchema({
    invoiceId: {
        type: String
    },
    totalAmount: {
        type: Number
    },
    createdDate: {
        type: Date,
        label: 'createdAt',
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
                };
            } else {
                this.unset();
            }
        }
    },
    dueByDate: {
        type: Date
    },
    comments: {
        type: [String],
        optional: false
    }
});

SalesInvoices = new Mongo.Collection("salesInvoices");
SalesInvoices.attachSchema(Schema.SalesInvoices);
