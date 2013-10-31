/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'views/library'
], function (Backbone, LibraryView) {
    var books = [
        {
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            releaseDate: '2008',
            keywords: 'JavaScript Programming'
        },
        {
            title: 'The Little Book on CoffeeScript',
            author: 'Alex McCaw',
            releaseDate: '2012',
            keywords: 'CoffeeScript Programming'
        },
        {
            title: 'Scala for the Impatient',
            author: 'Cay S. Horstmann',
            releaseDate: '2012',
            keywords: 'Scala Programming'
        },
        {
            title: 'American Psycho',
            author: 'Bret Easton Ellis',
            releaseDate: '1991',
            keywords: 'Novel Splatter'
        },
        {
            title: 'Eloquent JavaScript',
            author: 'Marijn Haverbeke',
            releaseDate: '2011',
            keywords: 'JavaScript Programming'
        }
    ];

    new LibraryView( books );
    Backbone.history.start();
});
