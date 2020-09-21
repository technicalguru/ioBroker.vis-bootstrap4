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
        "mainView": {
         	"en": "Main View",
         	"de": "Main View",
         	"ru": "Main View",
         	"pt": "Main View",
         	"nl": "Main View",
         	"fr": "Main View",
         	"it": "Main View",
         	"es": "Main View",
         	"pl": "Main View",
         	"zh-cn": "Main View"
        },
        "hasHeader": {
         	"en": "Has Header View",
         	"de": "Has Header View",
         	"ru": "Has Header View",
         	"pt": "Has Header View",
         	"nl": "Has Header View",
         	"fr": "Has Header View",
         	"it": "Has Header View",
         	"es": "Has Header View",
         	"pl": "Has Header View",
         	"zh-cn": "Has Header View"
        },
        "headerView": {
         	"en": "Header View",
         	"de": "Header View",
         	"ru": "Header View",
         	"pt": "Header View",
         	"nl": "Header View",
         	"fr": "Header View",
         	"it": "Header View",
         	"es": "Header View",
         	"pl": "Header View",
         	"zh-cn": "Header View"
        },
        "hasLeft": {
         	"en": "Has Left View",
         	"de": "Has Left View",
         	"ru": "Has Left View",
         	"pt": "Has Left View",
         	"nl": "Has Left View",
         	"fr": "Has Left View",
         	"it": "Has Left View",
         	"es": "Has Left View",
         	"pl": "Has Left View",
         	"zh-cn": "Has Left View"
        },
        "leftView": {
         	"en": "Left View",
         	"de": "Left View",
         	"ru": "Left View",
         	"pt": "Left View",
         	"nl": "Left View",
         	"fr": "Left View",
         	"it": "Left View",
         	"es": "Left View",
         	"pl": "Left View",
         	"zh-cn": "Left View"
        },
        "hasRight": {
         	"en": "Has Right View",
         	"de": "Has Right View",
         	"ru": "Has Right View",
         	"pt": "Has Right View",
         	"nl": "Has Right View",
         	"fr": "Has Right View",
         	"it": "Has Right View",
         	"es": "Has Right View",
         	"pl": "Has Right View",
         	"zh-cn": "Has Right View"
        },
        "rightView": {
         	"en": "Right View",
         	"de": "Right View",
         	"ru": "Right View",
         	"pt": "Right View",
         	"nl": "Right View",
         	"fr": "Right View",
         	"it": "Right View",
         	"es": "Right View",
         	"pl": "Right View",
         	"zh-cn": "Right View"
        },
        "hasFooter": {
         	"en": "Has Footer View",
         	"de": "Has Footer View",
         	"ru": "Has Footer View",
         	"pt": "Has Footer View",
         	"nl": "Has Footer View",
         	"fr": "Has Footer View",
         	"it": "Has Footer View",
         	"es": "Has Footer View",
         	"pl": "Has Footer View",
         	"zh-cn": "Has Footer View"
        },
        "footerView": {
         	"en": "Footer View",
         	"de": "Footer View",
         	"ru": "Footer View",
         	"pt": "Footer View",
         	"nl": "Footer View",
         	"fr": "Footer View",
         	"it": "Footer View",
         	"es": "Footer View",
         	"pl": "Footer View",
         	"zh-cn": "Footer View"
        },
        "numRows": {
         	"en": "# rows",
         	"de": "Anzahl Zeilen",
         	"ru": "# rows",
         	"pt": "# rows",
         	"nl": "# rows",
         	"fr": "# rows",
         	"it": "# rows",
         	"es": "# rows",
         	"pl": "# rows",
         	"zh-cn": "# rows"
        },
        "numCols": {
         	"en": "# columns",
         	"de": "Anzahl Spalten",
         	"ru": "# columns",
         	"pt": "# columns",
         	"nl": "# columns",
         	"fr": "# columns",
         	"it": "# columns",
         	"es": "# columns",
         	"pl": "# columns",
         	"zh-cn": "# columns"
        },
        "size": {
         	"en": "Column Size",
         	"de": "Spaltengröße",
         	"ru": "Column Size",
         	"pt": "Column Size",
         	"nl": "Column Size",
         	"fr": "Column Size",
         	"it": "Column Size",
         	"es": "Column Size",
         	"pl": "Column Size",
         	"zh-cn": "Column Size"
        },
        "colspan": {
         	"en": "Column Span",
         	"de": "Spaltenbreite",
         	"ru": "Column Span",
         	"pt": "Column Span",
         	"nl": "Column Span",
         	"fr": "Column Span",
         	"it": "Column Span",
         	"es": "Column Span",
         	"pl": "Column Span",
         	"zh-cn": "Column Span"
        },
        "rowViews": {
         	"en": "Row Views",
         	"de": "Views in Zeile",
         	"ru": "Row Views",
         	"pt": "Row Views",
         	"nl": "Row Views",
         	"fr": "Row Views",
         	"it": "Row Views",
         	"es": "Row Views",
         	"pl": "Row Views",
         	"zh-cn": "Row Views"
        },
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
        	html += '<div class="vis-b4-header row">'+
        				'<div class="col vis-b4-header">'+
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
		var colspan = data.colspan != 'auto' ? parseInt(data.colspan) : 0;
		var colSize = data.size    != 'auto' ? data.size : '';
		var padding = typeof data.cellPadding != 'undefined' ? data.cellPadding : 10;
		var padDef  = ' style="padding: '+padding+'px;"';
		
		html = '<div class="container-fluid vis-b4-grid">';
		for (let row=0; row<data.numRows; row++) {
 			html += '<div class="row">';
			var rowViews = data.attr('rowViews'+(row+1));
			var colViews = (typeof rowViews != 'undefined') && (rowViews != '') ? new String(rowViews).split(';') : [];
			for (let col=0; col<data.numCols; col++) {
				var colDef    = [];
				var colSpan   = colspan;
				var cellClass = '';
				if ((typeof colViews[col] != 'undefined') && (colViews[col] != '') && (colViews[col] != 'undefined')) {
					colDef  = new String(colViews[col]).split(',');
					if ((colDef.length > 1) && (parseInt(colDef[1]) > 0)) {
						colSpan = colDef[1]*colspan;
					} else {
						colSpan   = colspan;
						colDef[1] = 1;
					}
				} else {
					colDef = [ undefined, 1, ''];
				}
				if (colDef.length > 2) cellClass = colDef[2];
				console.log('cellClass='+cellClass);
				var visView = this.checkData(colDef[0], 'rowViews'+(row+1)+'['+(col+1)+']');
				html += '<div class="col'+(colSize != '' ? '-'+colSize : '')+(colSpan > 0 ? '-'+colSpan : '')+' '+cellClass+'"'+padDef+'>'+
							visView+
						'</div>';
				// Fix the column
				col += colDef[1]-1;
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