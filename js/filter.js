 var app = angular.module('appShowHide',['ngAnimate']);


 $( document ).ready(function() {
     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'your stylesheet url') );
     }
 });
