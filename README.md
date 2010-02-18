PillMenu
===========

PillMenu is a simple Mootools class that help you to add a nice effect to your menu.

![Screenshot](http://www.luscarpa.com/demo/pill-menu.png)

How to Use
----------

How you can see, this is a typical list with a div container used to apply the script and render the style. I added pillMenu class to give it a default style, but you can replace it with another class like nav or nav-wrap of wordpress.
Selected is the name of the class for the selected menu, this class name can be changed in the options of Mootools class. 

### HTML

	<div id="menu1" class="pillMenu">
		<ul>
			<li class="selected"><a href="#" title="Go to Home Page">Home</a></li>
			<li><a href="#" title="Go to About Page">About</a></li>
			<li><a href="#" title="Go to Archive Page">Archive</a></li>
			<li><a href="#" title="Go to Sitemap Page">Sitemap</a></li>
			<li><a href="#" title="Go to Contact Page">Contact</a></li>
			<li><a href="#" title="Go to Long Text Menu Page">Long Text Menu</a></li>
		</ul>
		<div class="clearfix"></div>
	</div>

This is the version of css for a horizontal movement.

### CSS
	.pillMenu{ position: relative; }
	.pillMenu ul{ margin: 0; padding: 0; position: relative; }
	.pillMenu ul li{ float: left; list-style: none; margin: 0 5px; position: relative; z-index: 10; }
	.pillMenu ul li a{ color: #000; display: block; padding: 5px 10px; text-decoration: none; }
	.pillMenu ul li.selected{ background-color: #000; border: 1px solid #000; }
	.pillMenu ul li.selected a{ color: #fff; }
	.pillMenu .pill{ border: 1px solid #666; clear: both; }
	.pillMenu .clearfix{ clear:both; display:block; height:0; font-size:0; line-height:0 }

This is the version of css for a vertical movement.

### CSS
	.pillMenu_vertical{ position: relative; width: 75px; }
	.pillMenu_vertical ul{ margin: 0; padding: 0; position: relative; }
	.pillMenu_vertical ul li{ list-style: none; margin: 5px; position: relative; z-index: 10; }
	.pillMenu_vertical ul li a{ color: #000; display: block; padding: 5px 10px; text-decoration: none; }
	.pillMenu_vertical ul li.selected{ background-color: #000; border: 1px solid #000; }
	.pillMenu_vertical ul li.selected a{ color: #fff; }
	.pillMenu_vertical .pill{ border: 1px solid #666; clear: both;}

### Javascript
	var myMenu1 = new PillMenu('menu1');

For more info about usage and options, please read the documentation at [http://www.luscarpa.com/development/pillmenu-simple-pill-mootools-menu/](http://www.luscarpa.com/development/pillmenu-simple-pill-mootools-menu/)