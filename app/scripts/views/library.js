/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/library',
    'views/book',
    'models/book'
], function ($, _, Backbone, JST, Library, BookView, BookModel) {
    'use strict';

    var LibraryView = Backbone.View.extend({
      el: '#books',

      events: {
        'click #add':'addBook'
      },

      initialize: function( initialBooks ) {
        this.collection = new Library( initialBooks );
        this.render();
        this.listenTo( this.collection, 'add', this.renderBook );
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
      },

      addBook: function( e ) {
        e.preventDefault();

        var formData = {};

        $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
          if( $( el ).val() != '' ) {
            formData[ el.id ] = $( el ).val();
          }
        });

        this.collection.add( new BookModel( formData ) ); // app.Book is not defined here
      }
      // template: JST['app/scripts/templates/library.ejs']
    });

    return LibraryView;
});