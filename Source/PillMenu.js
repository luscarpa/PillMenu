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
var PillMenu = new Class({

	//implements
	Implements: [Options,Events],

	//options
	options: {
		vertical: 0,
		pillClass: 'pill',
		selectedClass: 'selected',
		duration: 'short',
		transition: Fx.Transitions.Linear
	},
	
	//initialization
	initialize: function(element,options) {
		//set options
		this.setOptions(options);
		//set element
		this.element = document.id(element);
		//set pill element
		this.pill = this.element.getElement('.pill');
		
		if(!this.pill){
		    //build pill element
		    this.pill = new Element('div',{
		    	'class': this.options.pillClass,
		    	'style': 'position:absolute; z-index:1;'
		    });
		    //inject pill into element
		    this.pill.inject(this.element,'top');
		}
		//make effect
		this.pillFx = new Fx.Morph(this.pill, {'duration': this.options.duration, 'link': 'cancel', 'transition': this.options.transition});
		
		this.start();
	},

	start: function() {
		//fire event start
		this.fireEvent('start');
		
        this.element.getElements('li').each(function(el,i){
			//detect selected menu
			if(el.hasClass(this.options.selectedClass)){
				//save selected menu
				this.selected = el;
				//set pill dimensions 
				this.pill.setStyles({
				    width: el.getStyle('width'),
				    height: el.getStyle('height'),
				    left: el.getPosition().x - this.element.getPosition().x,
				    top: el.getPosition().y - this.element.getPosition().y
				});
				
			}						
			
			//add event to element
			el.addEvent('mouseenter', function(){
				//fire event start
				this.fireEvent('change');
				//set effect for horizontal and vertical style
				if(!this.options.vertical){
					this.pillFx.start({
					    'left': [this.pill.getStyle('left'), el.getPosition().x - this.element.getPosition().x],
					    'width': [this.pill.getStyle('width'), el.getStyle('width')] 
					});
				} else {
					this.pillFx.start({
					    'top': [this.pill.getStyle('top'), el.getPosition().y - this.element.getPosition().y],
					    'height': [this.pill.getStyle('height'), el.getStyle('height')]
					});
				}
			
			}.bind(this));
			
		}.bind(this));
        
        //add event to reset all
        this.element.addEvent('mouseleave', function(){
        	//set effect for horizontal and vertical style
        	if(!this.options.vertical){
        		this.pillFx.start({ 
				    'left': [this.pill.getStyle('left'), this.selected.getPosition().x - this.element.getPosition().x],
				    'width': [this.pill.getStyle('width'), this.selected.getStyle('width')]
				});	
			} else {
				this.pillFx.start({ 
				    'top': [this.pill.getStyle('top'), this.selected.getPosition().y - this.element.getPosition().y],
				    'height': [this.pill.getStyle('height'), this.selected.getStyle('height')]
				});	
			}			
			
		}.bind(this));

	}

});