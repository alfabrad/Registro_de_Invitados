!function(e,r,t,o){var a=r.Registry,t=r.document,n=r.location,s=r.navigator,a=r.Registry;Registry=function(){return this instanceof Registry?Registry.fn.init():new Registry.fn.init},Registry.fn=Registry.prototype={constructor:Registry,init:function(){console.log("Hi")},validateForm:function(r,t,a){var n="object"==typeof r?r:{},s="object"==typeof t?t:{},i=typeof a==o&&"undefined"==typeof a&&"null"==typeof a?e.noop:"function"==typeof a?a:e.noop,c=e("form").validate({onfocusout:!1,onclick:!0,onkeyup:!1,onsubmit:!0,focusCleanup:!0,focusInvalid:!1,errorClass:"error",validClass:"valid",errorElement:"label",ignore:"",errorPlacement:function(e,r){e.appendTo(r.parent())},rules:n,messages:s,ignore:"textarea",highlight:function(r,t,o){e(r).parent().addClass("error_wrapper")},unhighlight:function(r,t){e(r).parent().removeClass("error_wrapper")},submitHandler:function(r){e(r).ajaxSubmit({beforeSubmit:function t(e,r,o){i()},success:function o(r,t,a,n){r=e.parseJSON(r),r&&("true"==r.success||1==r.success)},resetForm:!1,clearForm:!1,error:function(e,r,t){},cache:!1})}})},toggleValue:function(r,t){_selector="undefined"==typeof r?"*":r,_selector="object"==typeof _selector?_selector:e(_selector),_valueChange=""==t?400:t,_valueChange="string"==typeof _valueChange?parseInt(_valueChange):_valueChange,_valueChange="number"!=typeof _valueChange?parseInt(_valueChange):_valueChange;var a;a=_selector.attr("placeholder")!=o?String(_selector.attr("placeholder")).toLowerCase():String(_selector.val()).toLowerCase(),(""==a||a==_valueChange)&&_selector.css({color:"#aaa"}),_selector.on({blur:function(r){return _comment=String(e(r.currentTarget).val()).toLowerCase(),_comment==a||""==_comment?(e(r.currentTarget).val(t).css({color:"#aaa"}),!1):void 0},focus:function(r){return _comment=String(e(r.currentTarget).val()).toLowerCase(),_comment==a?(e(r.currentTarget).val("").css({color:"#666"}),!1):void 0}})},toggleClass:function(r,t){_selector="undefined"==typeof r?"*":r,_selector="object"==typeof _selector?_selector:e(_selector),_class="undefined"==typeof t?".active":t,_class="string"==typeof _class?_class:String(_class),r.exists()&&_selector.toggleClass(_class)}},Registry.fn.init.prototype=Registry.fn,Registry=Registry.fn,r.Registry=Registry,e(function(){e("#search").exists()&&Registry.toggleValue(e("#mail"),"hola@gmail.com")}),e(t).ready(function(r){if(e("#search").exists()){var t={mail:{required:!1,email:!0}},o={mail:"Por favor, introduce una dirección de correo",required:"Por favor, selecciona una opción",minlength:"Por favor, haga su respuesta más amplia.",maxlength:"Por favor, acorte su respuesta",email:"Escriba un email válido",number:"Escriba solo números",digits:"Escriba solo números"};Registry.validateForm(t,o),"novalidate"==e("form").attr("novalidate")&&e("form").removeAttr("novalidate")}})}(jQuery,window,document);