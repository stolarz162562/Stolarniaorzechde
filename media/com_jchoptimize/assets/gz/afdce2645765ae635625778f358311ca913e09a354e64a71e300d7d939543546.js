try{var RSFormProReCAPTCHAv2={forms:{},loaders:[],onLoad:function(){window.setTimeout(function(){for(var i=0;i<RSFormProReCAPTCHAv2.loaders.length;i++){var func=RSFormProReCAPTCHAv2.loaders[i];if(typeof func==='function'){try{func();}catch(err){if(console&&typeof console.log==='function'){console.log(err);}}}}},500);}};RSFormProUtils.addEvent(window,'load',RSFormProReCAPTCHAv2.onLoad);function ajaxValidationRecaptchaV2(task,formId,data,componentId)
{switch(task)
{case'beforeSend':if(data.params.indexOf('g-recaptcha-response=&')>-1&&data.params.indexOf('&page=')===-1)
{RSFormPro.Ajax.Wait=true;window['RSFormProInvisibleCallback'+formId]=function(token)
{RSFormPro.Ajax.Params=RSFormPro.Ajax.Params.replace('g-recaptcha-response=&','g-recaptcha-response='+encodeURIComponent(token)+'&');RSFormPro.Ajax.Wait=false;RSFormPro.Ajax.xmlHttp.send(RSFormPro.Ajax.Params);};var foundRecaptchaEvent=false;for(var i=0;i<RSFormPro.formEvents[formId].length;i++)
{if(typeof RSFormPro.formEvents[formId][i]==='function'&&RSFormPro.formEvents[formId][i].toString().indexOf('grecaptcha.execute(id)')>-1)
{foundRecaptchaEvent=true;}}
if(!foundRecaptchaEvent)
{RSFormPro.addFormEvent(formId,function(){var id=RSFormProReCAPTCHAv2.forms[formId];grecaptcha.execute(id);})}
RSFormPro.submitForm(RSFormPro.getForm(formId));}
else
{RSFormPro.Ajax.Wait=false;}
break;}}}catch(e){console.error('Error in file:/media/plg_system_rsfprecaptchav2/js/recaptchav2.js?71dcf07b3a15724c072d93e60926dd40; Error:'+e.message);};
try{!function(){"use strict";document.addEventListener("DOMContentLoaded",function(){var o=Joomla.getOptions("system.keepalive"),n=o&&o.uri?o.uri.replace(/&amp;/g,"&"):"",t=o&&o.interval?o.interval:45e3;if(""===n){var e=Joomla.getOptions("system.paths");n=(e?e.root+"/index.php":window.location.pathname)+"?option=com_ajax&format=json"}window.setInterval(function(){Joomla.request({url:n,onSuccess:function(){},onError:function(){}})},t)})}(window,document,Joomla);}catch(e){console.error('Error in file:/media/system/js/keepalive.js?71dcf07b3a15724c072d93e60926dd40; Error:'+e.message);};
