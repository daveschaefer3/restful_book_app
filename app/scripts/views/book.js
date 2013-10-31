/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BookView = Backbone.View.extend({
      tagName: 'div',
      className: 'bookContainer',
      template: JST['app/scripts/templates/book.ejs'],

      render: function() {
        // this.el is what we defined in tegName.
        // use $el to get access to jQuery html() function.
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
      }
    });

    return BookView;
});