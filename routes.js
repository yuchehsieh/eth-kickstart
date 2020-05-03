const routes = require('next-routes');

module.exports = routes()
    .add({ pattern: '/campaigns/new', name: 'new campaign', page: 'campaigns/new' })
    .add({ pattern: '/campaigns/:address/requests', name: 'show requests', page: 'campaigns/requests/index' })
    .add({ pattern: '/campaigns/:address', name: 'show campaign', page: 'campaigns/show' });
// .add('/campaigns/:address', '/campaigns/show')