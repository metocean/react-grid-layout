webpackJsonp([5],{54:function(t,e,n){"use strict";(function(t){function e(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var a=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var u in a)void 0===n[u]&&(n[u]=a[u]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+3];n.children=f}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),f=n(0),l=e(f),s=n(1),p=e(s),c=n(5),y=e(c),h=n(3),d=e(h),g=(0,h.WidthProvider)(d.default),b=function(t){function e(){return r(this,e),o(this,t.apply(this,arguments))}return a(e,t),e.prototype.generateDOM=function(){var t=this.generateLayout();return y.default.map(y.default.range(this.props.items),function(e){return u("div",{"data-grid":t[e]},e,u("span",{className:"text"},void 0,e))})},e.prototype.generateLayout=function(){var t=this.props;return y.default.map(new Array(t.items),function(e,n){var r=y.default.result(t,"w")||Math.ceil(4*Math.random()),o=y.default.result(t,"y")||Math.ceil(4*Math.random())+1;return{x:2*n%12,y:Math.floor(n/6)*o,w:r,h:o,i:n.toString()}})},e.prototype.onLayoutChange=function(t){this.props.onLayoutChange(t)},e.prototype.render=function(){return l.default.createElement(g,i({onLayoutChange:this.onLayoutChange},this.props),this.generateDOM())},e}(l.default.PureComponent);b.propTypes={onLayoutChange:p.default.func.isRequired},b.defaultProps={isDraggable:!0,isResizable:!0,items:20,rowHeight:30,onLayoutChange:function(){},cols:12},t.exports=b,n.c[n.s]===t&&n(4)(t.exports)}).call(e,n(2)(t))}},[54]);