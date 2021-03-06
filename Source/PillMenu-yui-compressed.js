/*
---
description: PillMenu
 
authors:
- Luca Scarpa aka luscarpa (http://www.luscarpa.com)
 
license:
- MIT-style license
 
requires:
core/1.2.4: '*'
 
provides:
- PillMenu
...
*/
var PillMenu=new Class({Implements:[Options,Events],options:{vertical:0,pillClass:"pill",selectedClass:"selected",duration:"short",transition:Fx.Transitions.Linear},initialize:function(b,a){this.setOptions(a);this.element=document.id(b);this.pill=this.element.getElement(".pill");if(!this.pill){this.pill=new Element("div",{"class":this.options.pillClass,style:"position:absolute; z-index:1;"});this.pill.inject(this.element,"top")}this.pillFx=new Fx.Morph(this.pill,{duration:this.options.duration,link:"cancel",transition:this.options.transition});this.start()},start:function(){this.fireEvent("start");this.element.getElements("li").each(function(b,a){if(b.hasClass(this.options.selectedClass)){this.selected=b;this.pill.setStyles({width:b.getStyle("width"),height:b.getStyle("height"),left:b.getPosition().x-this.element.getPosition().x,top:b.getPosition().y-this.element.getPosition().y})}b.addEvent("mouseenter",function(){this.fireEvent("change");if(!this.options.vertical){this.pillFx.start({left:[this.pill.getStyle("left"),b.getPosition().x-this.element.getPosition().x],width:[this.pill.getStyle("width"),b.getStyle("width")]})}else{this.pillFx.start({top:[this.pill.getStyle("top"),b.getPosition().y-this.element.getPosition().y],height:[this.pill.getStyle("height"),b.getStyle("height")]})}}.bind(this))}.bind(this));this.element.addEvent("mouseleave",function(){if(!this.options.vertical){this.pillFx.start({left:[this.pill.getStyle("left"),this.selected.getPosition().x-this.element.getPosition().x],width:[this.pill.getStyle("width"),this.selected.getStyle("width")]})}else{this.pillFx.start({top:[this.pill.getStyle("top"),this.selected.getPosition().y-this.element.getPosition().y],height:[this.pill.getStyle("height"),this.selected.getStyle("height")]})}}.bind(this))}});