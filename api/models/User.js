/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    adapter: 'mongo',

    attributes	: {
        provider: 'STRING',
        uid: 'INTEGER',
        name: 'STRING',
        profileUrl: 'STRING',
        email: 'STRING',
        hireable: 'STRING',
        location: 'STRING',
        position: 'STRING',
        company: 'STRING',
        followers: 'INTEGER',
        public_repos: 'INTEGER',
        bio: 'STRING',
        fistname: 'STRING',
        lastname: 'STRING',
        avatar_url: 'STRING',
    }

};


