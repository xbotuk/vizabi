define([
    'jquery',
    'base/utils',
    'base/component',
    'base/model',
    'smartpicker'
], function($, utils, Component, Model, SmartPicker) {

    var picker,
        countries;

    var FindButton = Component.extend({
        init: function(config, parent) {
            this.name = 'find-button';
            this.id = 'search';
            this.title = 'Search';

            this.template = 'components/_gapminder/buttonlist/buttons/button';
            this.template_data = this.template_data || {
                name: this.name,
                title: this.title,
                id: this.id,
            };

            this._super(config, parent);
        },

        postRender: function() {
        },

        //load list of countries
        // loadCountries: function() {
        //     var _this = this,
        //         defer = $.Deferred(),
        //         language = this.model.get("language"),
        //         state = this.model.get("state"),
        //         query = this.getQuery(),
        //         countries = new Model();

        //     //set the correct source
        //     countries.setSource(this.model._data);

        //     //load data and resolve the defer when it's done
        //     $.when(
        //         countries.load(query, language, _this.events)
        //     ).done(function() {
        //         country_list = countries.get()[0];

        //         // TODO: remove hard-coded filtering for indicators
        //         country_list = country_list.filter(function(row) {
        //             return (row["geo.category"] == "country" &&
        //                 row.time === "2000" && row.lex && row.pop && row.gdp);
        //         });

        //         country_list = country_list.map(function(country) {
        //             return {
        //                 value: country["geo"],
        //                 name: country["geo.name"]
        //             };
        //         });

        //         defer.resolve(country_list);
        //     });

        //     return defer;

        // },

        // //initialize picker with list of countries
        // initializePicker: function(country_list) {
        //     var _this = this;
        //     //instantiate a new geoMult picker
        //     picker = new SmartPicker('mult', 'geo-picker', {
        //         contentData: {
        //             text: "Select the countries",
        //             options: country_list || []
        //         },
        //         width: 320,
        //         confirmButton: "OK",
        //         //what to do after user selects a country
        //         onSet: function(selected) {
        //             //extract the value only
        //             var countries = _.map(selected.selected, function(country) {
        //                 return country.value;
        //             });
        //             //pass the selected countries to state
        //             _this.selectCountries(countries);
        //         }
        //     });
        // },

        // //pass a list of countries to the state
        // selectCountries: function(countriesArr) {
        //     var state = {
        //         show: {
        //             'geo': countriesArr,
        //             'geo.categories': ['country']
        //         },
        //     };

        //     this.setState(state);
        // },

        // show: function() {
        //     if (picker && picker.show) {
        //         picker.show();
        //     }
        // },

        update: function() {

        },

        getQuery: function() {
            var query = [{
                select: [
                    'geo',
                    'geo.name',
                ],
                where: {
                    geo: ["*"]
                }
            }];

            return query;
        }

    });

    return FindButton;
});