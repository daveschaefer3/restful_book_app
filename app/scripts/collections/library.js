/*global define*/

define([
    'underscore',
    'backbone',
    'models/book'
], function (_, Backbone, Book) {
    'use strict';

    var LibraryCollection = Backbone.Collection.extend({
        model: Book
    });

    return LibraryCollection;
});