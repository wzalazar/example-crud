Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('view', {
        path: '/',
    });

    this.route('create', {
        path: '/create',
    });

    this.route('edit', {
        path: '/edit/:id',
    });
});
