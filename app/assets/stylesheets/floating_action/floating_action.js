(function(window, $) {

    var FloatingAction = function (options) {
        this.options = options;
        this.config = null;
    };

    var _this;

    FloatingAction.prototype = {
        defaults: {
            containerClass: 'floating-container-style',
            contentClass: 'floating-content-style',
            direction: 'center',
            debug: false
        },
        init: function () {
            this.config = $.extend({}, this.defaults, this.options);
            _this = this;
            $(window).resize(function() {
                var el = $('.floating-action-content:visible').closest('.floating-action-container');
                _this.setPosition(el);
            });
            $(document).on('mouseover','.floating-action-container', function(){
                _this.setPosition(this);
                _this.addStyle(this);
            });
            $(document).on('mouseout','.floating-action-container', function(){
                _this.setPosition(this);
                _this.removeStyle(this);
            });
        },
        setPosition: function(element) {
            if (element==undefined) return;
            var $element = $(element);
            var $content = $element.find('.floating-action-content');
            var $parent = $element.parent();
            var top = ($element.position().top + $element.outerHeight());
            $content.css({'left': '0px', 'top': top+'px'});
            if (_this.config.direction=='left' || $parent.width() > $('body').innerWidth()) {
                var left = $element.position().left;
            } else {
                if (_this.config.direction=='right') {
                    var left = ($parent.width() - $content.width());
                } else {
                    var left = ($parent.outerWidth(true) / 2) - ($content.outerWidth(true) / 2);
                }
            }
            $content.css({'left': left+'px'});
        },
        addStyle: function(element) {
            $(element).addClass(_this.config.containerClass);
            $(element).find('.floating-action-content').addClass(_this.config.contentClass);
        },
        removeStyle: function(element) {
            $(element).removeClass(_this.config.containerClass);
            $(element).find('.floating-action-content').removeClass(_this.config.contentClass);
        }
    }
    FloatingAction.defaults = FloatingAction.prototype.defaults;

    window.FloatingAction = FloatingAction;

})(window, jQuery);