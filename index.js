  function getObj()
    {
        var lang = window.localStorage.getItem('lang');
        if(lang == "es"){
            return es;
            }
        else
            {
            return en;
            }
    }
$(document).ready(function()
{
    lang_load();
});
function lang_load(){
       var obj = getObj();
       var i = 0;
       var key = Object.keys(obj);
       for(i=0;i< key.length;i++)
       {
           let keyname = key[i];
           $('.lang-'+keyname).html(obj[keyname])
       }
  }
  function setLanguage(id)
    {
        localStorage.removeItem('lang')
        localStorage.setItem('lang', id);
        lang_load();
    }
