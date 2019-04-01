require.config({
    // urlArgs: "v=" + requirejs.s.contexts._.config.config.site.version,
    urlArgs: "v=" + (new Date()).getTime(),
    packages: [{
        name: 'moment',
        location: './plugins/moment',
        main: 'moment'
    }
    ],
    //在打包压缩时将会把include中的模块合并到主文件中
    include: ['css', 'layer', 'toastr','content','jquery','bootstrap'],
    paths: {
        'hplus': 'hplus',
        'contabs':'contabs',
        'content':'content',
         // 以下的包从plugins目录加载
        'jquery': 'plugins/jquery/dist/jquery.min',
        'bootstrap': 'plugins/bootstrap/dist/js/bootstrap.min',
        'metisMenu': 'plugins/metisMenu/jquery.metisMenu',
        'slimscroll': 'plugins/slimscroll/jquery.slimscroll.min',
        'toastr': 'plugins/toastr/toastr.min',
        'layer': 'plugins/layer/layer.min',
        'pace':'plugins/pace/pace.min',
        'jqueryUi':'plugins/jquery-ui/jquery-ui.min',
        'flot':'plugins/flot/jquery.flot',
        'tooltip':'plugins/flot/jquery.flot.tooltip.min',
        'spline':'plugins/flot/jquery.flot.spline',
        'resize':'plugins/flot/jquery.flot.resize',
        'pie':'plugins/flot/jquery.flot.pie',
        'easypiechart':'plugins/easypiechart/jquery.easypiechart',
        'gritter':'plugins/gritter/jquery.gritter.min',
        'peity':'plugins/peity/jquery.peity.min',
        'sparkline':'plugins/sparkline/jquery.sparkline.min'
    },
    // shim依赖配置
    shim: {
        'bootstrap': ['jquery'],
        'metisMenu': ['jquery'],
        'slimscroll': ['jquery'],
        'hplus': ['jquery','metisMenu','slimscroll'],
        'contabs':['jquery','metisMenu','slimscroll'],
        'pace':['jquery'],
        'content':['jquery','bootstrap'],
        'tooltip':['flot'],
        'spline':['flot'],
        'resize':['flot'],
        'pie':['flot']
    },
    baseUrl: requirejs.s.contexts._.config.config.site.cdnurl + '/assets/js/', //资源基础路径
    map: {
        '*': {}
    },
    waitSeconds: 30,
    charset: 'utf-8' // 文件编码
});

require(['jquery','bootstrap'], function ($,undefined) {
    //初始配置
    var Config = requirejs.s.contexts._.config.config;
    //将Config渲染到全局
    window.Config = Config;
    var paths = {};
    // 避免目录冲突
    paths['backend/'] = 'backend/';
    require.config({paths: paths});
    // 初始化
    $(function () {
        require(['content'], function (Content) {
            //加载相应模块
            if (Config.jsname) {
                require([Config.jsname], function (Controller) {
                    Controller[Config.actionname] != undefined && Controller[Config.actionname]();
                }, function (e) {
                    console.error(e);
                    // 这里可捕获模块加载的错误
                });
            }
        });
    });
});
