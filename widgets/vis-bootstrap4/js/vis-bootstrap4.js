/*
    ioBroker.vis vis-bootstrap4 Widget-Set

    version: "0.0.1"

    Copyright 2020 technicalguru github@ralph-schuster.eu
*/
"use strict";

// add translations for edit mode
$.extend(
    true,
    systemDictionary,
    {
        // Add your translations here, e.g.:
        // "size": {
        // 	"en": "Size",
        // 	"de": "Größe",
        // 	"ru": "Размер",
        // 	"pt": "Tamanho",
        // 	"nl": "Grootte",
        // 	"fr": "Taille",
        // 	"it": "Dimensione",
        // 	"es": "Talla",
        // 	"pl": "Rozmiar",
        // 	"zh-cn": "尺寸"
        // }
    }
);

// this code can be placed directly in vis-bootstrap4.html
vis.binds["vis-bootstrap4"] = {
    version: "0.0.1",
    showVersion: function () {
        if (vis.binds["vis-bootstrap4"].version) {
            console.log('Version vis-bootstrap4: ' + vis.binds["vis-bootstrap4"].version);
            vis.binds["vis-bootstrap4"].version = null;
        }
    },
    createWidget: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["vis-bootstrap4"].createWidget(widgetID, view, data, style);
            }, 100);
        }

        var text = '';
        text += 'OID: ' + data.oid + '</div><br>';
        text += 'OID value: <span class="vis-bootstrap4-value">' + vis.states[data.oid + '.val'] + '</span><br>';
        text += 'Color: <span style="color: ' + data.myColor + '">' + data.myColor + '</span><br>';
        text += 'extraAttr: ' + data.extraAttr + '<br>';
        text += 'Browser instance: ' + vis.instance + '<br>';
        text += 'htmlText: <textarea readonly style="width:100%">' + (data.htmlText || '') + '</textarea><br>';

        $('#' + widgetID).html(text);

        // subscribe on updates of value
        function onChange(e, newVal, oldVal) {
            $div.find('.template-value').html(newVal);
        }
        if (data.oid) {
            vis.states.bind(data.oid + '.val', onChange);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oid + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChange);
        }
    }
};

vis.binds["vis-bootstrap4"].showVersion();