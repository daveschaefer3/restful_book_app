/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/library',
    'views/book'
], function ($, _, Backbone, JST, Library, BookView) {
    'use strict';

    var LibraryView = Backbone.View.extend({
      el: '#books',

      initialize: function( initialBooks ) {
        this.collection = new Library( initialBooks );
        this.render();
      },

      // render library by rendering each book in its collection
      render: function() {
        this.collection.each(function( item ) {
          this.renderBook( item );
        }, this );
      },

      // render a book by creating a BookView and appending the
      // element it renders to the library's element
      renderBook: function( item ) {
        var bookView = new BookView({
          model: item
        });
        this.$el.append( bookView.render().el );
      }
      // template: JST['app/scripts/templates/library.ejs']
    });

    return LibraryView;
});