'use strict';

const constants = {
    myriad: {
        APPLICATIONS: ['containership', 'application', '*'],
        APPLICATION_PREFIX: ['containership', 'application'],
        CLUSTER_ID: ['containership', 'cluster', 'id'],
        CONTAINERS: ['containership', 'containers', '*'],
        CONTAINERS_PREFIX: ['containership', 'containers'],
        DELIMITER: '::',
        ENOKEY: 'ENOKEY',
        PLUGINS: ['containership', 'plugins', '*'],
        PLUGINS_PREFIX: ['containership', 'plugins'],
        VARIABLES: ['containership', 'variables', '*'],
        VARIABLES_PREFIX: ['containership', 'variables'],
        TIDE_JOBS: ['containership', 'tide-jobs']
    },

    events: {
        CLUSTER_ID: 'containership.cluster_id',
        RECONCILE: 'containership.reconcile',
        LOAD_CONTAINER: 'containership.load_container',
        UNLOAD_CONTAINER: 'containership.unload_container',
        UPDATE_HOST: 'containership.update_host',
        DELETE_HOST: 'containership.delete_host'
    }
};

for(const key in constants.myriad) {
    if(constants.myriad[key] instanceof Array) {
        constants.myriad[key] = constants.myriad[key].join(constants.myriad.DELIMITER);
    }
}

module.exports = constants;
