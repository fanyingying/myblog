webpackJsonp([5],{V55x:function(e,n){},nbvM:function(e,n,t){"use strict";var i,o;Object.defineProperty(n,"__esModule",{value:!0});var a,s,r=[],u={methods:{init:function(){i.height=window.innerHeight,i.width=window.innerWidth,a={x:0,y:0},s=["#af0","#7CD14E","#1CDCFF","#FFFF00","#FF0000","#aee137","#bef202","#00b2ff","#7fff24","#13cd4b","#c0fa38","#f0a","#a0f","#0af","#000000"],i.addEventListener("mousemove",this.MouseMove,!1),i.addEventListener("mousedown",this.MouseDown,!1),i.addEventListener("mouseup",this.MouseUp,!1),window.addEventListener("resize",this.canvasResize,!1);for(var e=0;1e3>e;e++)r.push(new this.dots)},canvasResize:function(){i.height=window.innerHeight,i.width=window.innerWidth,cancelAnimationFrame(this.animate)},MouseUp:function(){this.mouseMove&&(mouseMove=!1),mouseDown&&(mouseDown=!1)},MouseDown:function(){this.mouseDown=!0},MouseMove:function(e){a.x=e.pageX-i.offsetLeft,a.y=e.pageY-i.offsetTop,o.lineTo(a.x,a.y),o.stroke()},dots:function(){var e={};return e.xPos=Math.random()*i.width,e.yPos=Math.random()*i.height,e.color=s[Math.floor(Math.random()*s.length)],e.radius=10*Math.random(),e.vx=Math.cos(e.radius),e.vy=Math.sin(e.radius),e.stepSize=Math.random()/10,e.step=0,e.friction=7,e.speedX=e.vx,e.speedY=e.vy,e},draw:function(){var e,n,t,s,u;for(o.clearRect(0,0,i.width,i.height),e=0;e<r.length;e++){var d=r[e];o.beginPath(),s=d.xPos-a.x,u=d.yPos-a.y,n=Math.sqrt(s*s+u*u),t=Math.max(Math.min(75/(n/d.radius),7),1),o.fillStyle=d.color,d.xPos+=d.vx,d.yPos+=d.vy,d.xPos<-50&&(d.xPos=i.width+50),d.yPos<-50&&(d.yPos=i.height+50),d.xPos>i.width+50&&(d.xPos=-50),d.yPos>i.height+50&&(d.yPos=-50),o.arc(d.xPos,d.yPos,d.radius/2.5*t,0,2*Math.PI,!1),o.fill(),this.mouseDown}},animate:function(){requestAnimationFrame(this.animate),this.draw()},requestAF:function(){var e,n=0,t=["ms","moz","webkit","o"];for(e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"],window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var t=(new Date).getTime(),i=Math.max(0,16-(t-n)),o=window.setTimeout(function(){e(t+i)},i);return n=t+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}},mounted:function(){var e=this;this.$nextTick(function(){i=document.getElementById("canvas"),o=i.getContext("2d"),e.init(),e.animate()})}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"quan"},[n("canvas",{attrs:{id:"canvas"}})])}]};var h=t("VU/8")(u,d,!1,function(e){t("V55x")},null,null);n.default=h.exports}});