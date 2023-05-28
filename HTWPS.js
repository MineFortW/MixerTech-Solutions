/**

 * requestAnimationFrame

 */

window.requestAnimationFrame = (function(){

    return  window.requestAnimationFrame       ||

            window.webkitRequestAnimationFrame ||

            window.mozRequestAnimationFrame    ||

            window.oRequestAnimationFrame      ||

            window.msRequestAnimationFrame     ||

            function (callback) {

                window.setTimeout(callback, 1000 / 60);

            };

})();

/**

 * Brush

 */

var Brush = (function() {

    /**

     * @constructor

     * @public

     */

    function Brush(x, y, color, size, inkAmount) {

        this.x = x || 0;

        this.y = y || 0;

        if (color !== undefined) this.color = color;

        if (size !== undefined) this.size = size;

        if (inkAmount !== undefined) this.inkAmount = inkAmount;

        this._drops = [];

        this._resetTip();

    }

    Brush.prototype = {

        _SPLASHING_BRUSH_SPEED: 75,

        x:          0,
