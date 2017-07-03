requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'angular': 'bower_components/angular/angular.min',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'codeflask': 'bower_components/codeflask.js/src/codeflask',
        'prism': 'bower_components/prism/prism',
        'jquery-flipster': './scripts/lib/jquery.flipster.min',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'ace': 'bower_components/ace-builds/src-min-noconflict/ace',
        'ui-ace': 'bower_components/angular-ui-ace/ui-ace',
        'angular-drag-drop': 'bower_components/angular-native-dragdrop/draganddrop',
        'beautify': './scripts/lib/beautify',
        'beautify-html': './scripts/lib/beautify-html',
        'beautify-css': './scripts/lib/beautify-css',
        'edit_area': './scripts/lib/edit_area/edit_area_full',
        'app': './app',
        'routes': './scripts/routes',
        'main-ctrl': './scripts/controllers/main-ctrl',
        'editor-ctrl': './scripts/controllers/editor-ctrl',
        'component-ctrl': './scripts/controllers/component-ctrl',
        'drag-ctrl': './scripts/controllers/drag-ctrl',
        'test-ctrl': './scripts/controllers/test-ctrl',
        'FolderListService': './scripts/services/folder-list-service',
        'FolderDataService': './scripts/services/folder-data-service',
        'GenerateIdForComponent': './scripts/services/randon-id-service',
        'preview-dir': './scripts/directives/preview-dir',
        'component-dir': './scripts/directives/component-dir',
        'd3': 'polymer/px-slider/pxd3/d3',
        'final-ctrl':'./scripts/controllers/finalView-ctrl',
        'final-Dir' : './scripts/directives/final-dir'

    },
    shim: {
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular-ui-router']
        },
        'routes': {
            deps: ['app']
        },
        'codeflask': {
            deps: ['prism']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery-flipster': {
            deps: ['jquery']
        },
        'editor-dir': {
            deps: ['edit_area']
        },
        'beautify-html': {
            deps: ['beautify']
        },
        'beautify-css': {
            deps: ['beautify']
        }
    }
});

requirejs(['routes'], function() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    })
});
