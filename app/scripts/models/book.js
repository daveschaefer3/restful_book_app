/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BookModel = Backbone.Model.extend({
        defaults: {
          coverImage: 'images/placeholder.png',
          title: 'No title',
          author: 'Unknown',
          releaseDate: 'Unknown',
          keywords: 'None'
        }
    });

    return BookModel;
});