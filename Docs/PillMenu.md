Class: PillMenu {#PillMenu}
=========================================

PillMenu is a MooTools-based class that adds a nice effect to menu.

### Implements:

Options, Events


PillMenu Method: constructor {#PillMenu:constructor}
-------------------------------------------------------------------


### Syntax:

	var myMenu = new PillMenu(element,options);

### Arguments:

1. element - (*string*) The ID of element to apply the script
2. options - (*object*) The options for the PillMenu instance.

### Options:

* vertical: (*int*, defaults to 0) Make the movement horizontal or vertical
* pillClass: (*string*, defaults to 'pill') Name of class to give to pill element
* selectedClass: (*string*, defaults to 'selected') Name of class of selected menu item
* duration: (*string*, defaults to 'short') Time of duration of transition
* transition: (*object*, defaults to 'Fx.Transitions.Linear') Transition to apply

### Events:

### onStart

* (*function*) Function to execute when the start the script

### onChange

* (*function*) Function to execute when the mouse change from an item to another

