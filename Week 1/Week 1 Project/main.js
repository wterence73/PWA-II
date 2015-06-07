/*
Description: Week 1- Project 1: Manipulating the DOM
Author: Terence Williams
Date: 06/06/2015
*/

$(document).ready(function(){

		/** Target 1 **/
		
		var t1=  $("#contentleft ul");
		var offset= t1.offset();
		var position= t1.position();
		
		/** Background Color Change **/
		
		$("ul").css("background-color", "orange");
		
		/** Console.Log Offset Position **/
		
		console.log("Top position using offset" + offset.top);
		console.log("Top position using .position" + position.top);
		
		/** Target 2 **/
		
		/** :eq() filter and .css() to change its left margin to 30px **/
		
		$("#contentleft li:eq(1)").css("margin-left", "30px");
		
		/** Target 3 **/
		
		/** selector and .css() to change font color to red **/
		
		$("#contentleft li:even").css("color", "red");
		
		/** Using .filter() traversing method, and console.log its width using the .width() method **/
		
		var width= $("#contentleft li").filter().width();
		
		/** Console.Log Width **/
		
		console.log("width");
		
		/** Target 4 **/
		
		/** Using traversing method, and .css() to change float to right **/
		
		$("#contentright").find("h3").css("float", "right");
		
		/** Using .addClass() to give a “listhead” class **/
		
		$("#contentright").find("h3").css("float", "right").addClass("listhead");
		
		/** Verifying that the class was added using .hasClass() **/
		
		var verify= $("h3").hasClass("listhead");
		
		/** Console.Log Response **/
		
		console.log("verify");
		
		/** Target 5 **'
		
		/** Using the .children() traversing method, and .attr() to change the href to http://www.yahoo.com **/
		
		$("#contentleft li:eq(3)").children("a").attr("href", "http://www.yahoo.com");
		
		/** Target tags in the second list, except for the first one, and change  their href’s to http://www.notgoogle.com using .attr() **/
		
		$("#contentright li:not(:first)").children().attr("href", "http://www.notgoogle.com");
		
		
		
		});
		
		
		
		
