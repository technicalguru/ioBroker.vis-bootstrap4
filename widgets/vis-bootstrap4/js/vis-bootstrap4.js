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

            // add Bootstrap JS only when not in Edit-Mode!!!!
            if (!vis.editMode) {
                $(
                    "<script type=\"text\/javascript\" src=\"widgets/vis-bootstrap4/js/bootstrap.bundle.min.js\"></script>"
                ).insertAfter("body");
            }
        }
    },

	createWidget: function (widgetId, view, data, style) {
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
	},

	checkData: function(value, name) {
		console.log('name='+name+' value="'+value+'" type='+(typeof value));
		if ((typeof value == 'undefined') || (value == 'undefined')) {
			if (vis.editMode) {
				return '<div style="border-style: dashed; border-width: 2px; border-color: #44739e; color: #ff0000; ">'+name+' is empty.</div>';
			}
			return '';
		}
		return '<div data-vis-contains="'+value+'" class="vis-widget-body vis-view-container"></div>';
	},
	
    createLayout: function (el, data) {
		var $this = $(el);
        var html = '';
		var visView;
		
		// Header
 		if (data.hasHeader) {
			visView = this.checkData(data.headerView, 'headerView');
        	html += '<div class="row">'+
        				'<div class="col">'+
							visView+
        				'</div>'+
        			'</div>';
		}

        html += '<div class="row vis-b4-content">';

		// Left column
		if (data.hasLeft) {
			visView = this.checkData(data.leftView, 'leftView');
        	html += '<div class="col-md-2 vis-b4-left">'+
						visView+
        			'</div>';
		}
		
		// Main content view
		visView = this.checkData(data.mainView, 'mainView');
        html += '<div class="col vis-widget vis-b4-main">'+
					visView+
            	'</div>';

		// Left column
		if (data.hasRight) {
			visView = this.checkData(data.rightView, 'rightView');
        	html += '<div class="col-md-2 vis-b4-right">'+
						visView+
        			'</div>';
		}
		
        html += '</div>';

		if (data.hasFooter) {
			visView = this.checkData(data.footerView, 'footerView');
	    	html += '<div class="vis-b4-responsive-footer">'+
						visView+
    				'</div>';
		}

        $this.append(html);

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
    },

    createGrid: function (el, data) {
		var $this = $(el);
        var html = '';
		var colspan = data.colspan != 'auto' ? '-'+data.colspan : '';
		
		html = '<div class="container-fluid vis-b4-grid">';
		for (let row=0; row<data.numRows; row++) {
 			html += '<div class="row">';
			var rowViews = data.attr('rowViews'+(row+1));
			var colViews = (typeof rowViews != 'undefined') && (rowViews != '') ? new String(rowViews).split(',') : [];
			for (let col=0; col<data.numCols; col++) {
				var visView = this.checkData(colViews[col], 'rowViews'+(row+1)+'['+(col+1)+']');
				html += '<div class="col-'+data.size+colspan+'">'+
							visView+
						'</div>';
			}
			html += '</div>';
		}
		html += '</div>';
				
        $this.append(html);

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