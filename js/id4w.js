*
var tag_values = image.tags.map(function (image.tag) {
 
    return image.tag.value; 
 
});

***
laravel change db year last is 1899 No_SORT БД ORDER BY уже не применить.//in other loop CORRECT without var
becouse "-"

DateTime dt1 = DateTime.FromOADate(0.1);
DateTime dt2 = DateTime.FromOADate(-0.1);
Console.WriteLine( dt1 == dt2 ); // True
dt1 = DateTime.FromOADate(-10.1);
dt2 = DateTime.FromOADate(-10.2);
Console.WriteLine( -10.1 < -10.2 ); // False
Console.WriteLine( dt1 < dt2 ); // True

Да, может даты до 1899 и не особо нужны, но иметь в виду стоит.
**

*********************************************************************************************************************************counter
var a = 0;
var displayValue = document.getElementById('Value');

var updateValue = function () {
    displayValue.innerHTML = a;
};

var add = function (valueToAdd) {
    a += valueToAdd;
    updateValue();
};

var reset = function () {
    a = 0;
    updateValue();
};

// Value $<span id="Value">0</span> 
//     <button width="500" height="500" id = add class="button button1" onclick="javascript:add(1)">Add Value</button>

//     <button width="500" height="500" id = reset class="button button1" onclick="javascript:reset()">Reset</button>


var counter = 0;
var add = function(valueToAdd){
  var a = parseInt(document.getElementById('Value').innerHTML);
  a += valueToAdd;
  document.getElementById('Value').innerHTML = a;
}
function reset(){
  document.getElementById('Value').innerHTML=0;  
  }        
    
var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset");//id reset ??
addButton.addEventListener("click", function() {
    add(1);
});
resetButton.addEventListener("click", function() {
    reset();
});
var tag_values = image.tags.map(function (image.tag) {
 
    return image.tag.value; //? value as virtual firstly it's absent 
 
});
// var map = function (array, callback) {
 
//     var new_array = [];
 
//     array.forEach(function (element, index, array) {
//        new_array.push(callback(element)); 
//     });
 
//     return new_array;
 
// };
 
// var task_names = map(image.tags, function (tag) {
 
//     return tag.value;
//  });
// (tag_values.indexOf(c_current))...
*****
(toggle=function(c){var a=(document.cookie.match(/hiddenData=([\w\|]+)/)||[,','])[1].split('|'),b=-1,d={};try{if(c)a.push((document.getElementById(c).style.display=='none')*1+c)}catch(e){return}while(a[++b]){try{document.getElementById(a[b].substr(1)).style.display=a[b].charAt(0)>0?'':'none';d[a[b].substr(1)]=a[b]}catch(e){continue}}a=[];for(key in d){a.push(d[key])}document.cookie="hiddenData="+a.join("|")+"; expires=Mon, 1 Jan 3000 00:00:00 UTC"})()

 Использование:
toggle(id элемента)

При загрузке странички скрипт проверит печеньку и скроет или покажет нужные элементы.
------------
<!-- Instagram -->
<section class="no-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="row thirty thirtyb center-block">
                    <div id="instafeed">

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
CSS code for creative.css:

/* Instagram  */
#instafeed .col-xs-4  {
    padding-bottom: 15px;
    padding-top: 15px;
}
Javascript code to replace in index.html:

<!-- Instafeed -->
<script type="text/javascript" src="js/instafeed.min.js"></script>

<script type="text/javascript">
var feed = new Instafeed({
    get: 'tagged',
    tagName: 'sponsoredbythesunx',
    clientId: '85dd843ebc84474a87f41d33cb722f0b',
    template: '<div class="col-lg-3 col-sm-3 col-xs-4"><a href="{{link}}"><img class="img-responsive" src="{{image}}" /></a><span><a href=""><i class="digits" onclick="myCounter" /></i></a></span><span><a href=""><i class="fa fa-heart" onclick="myReset" /></i></a></span></div>',
    resolution: 'low_resolution'
});
feed.run();
</script>
***************toggle2
01
    function hide(element) {
02
        // создадим элементу свойство, в которое запишем текущий дисплей
03
        element.realDisplay = element.currentStyle ? element.currentStyle["display"]
04
        : getComputedStyle(element, null)["display"];
05
        // и скроем
06
        element.style.display = "none";
07
    }
08
    function show(element) {
09
        // берём записанный в realDisplay дисплей и устанавливаем
10
        // либо, ставим по умолчанию для данного элемента (сбрасываем)
11
        element.style.display = element.realDisplay || "";
12
    }
13
    function toggle(element) {
14
        // если элемент отображается
15
        if(!(element.offsetHeight == 0 && element.offsetWidth == 0)) {
16
            // скроем
17
            hide(element);
18
        } else {
19
            // если скрыт, покажем
20
            show(element);
21
        }
22
    }
23
     
24
    toggle(document.getElementById("test"));
+++++++++++++++++++
Итак, вот итоговый код toggle.js.
01
    function getRealDisplay(elem) {
02
        if (elem.currentStyle) {
03
            return elem.currentStyle.display
04
        } else if (window.getComputedStyle) {
05
            var computedStyle = window.getComputedStyle(elem, null )
06
     
07
            return computedStyle.getPropertyValue('display')
08
        }
09
    }
10
     
11
    function hide(el) {
12
        if (!el.getAttribute('displayOld')) {
13
            el.setAttribute("displayOld", el.style.display)
14
        }
15
     
16
        el.style.display = "none"
17
    }
18
     
19
    displayCache = {}
20
     
21
    function isHidden(el) {
22
        var width = el.offsetWidth, height = el.offsetHeight,
23
            tr = el.nodeName.toLowerCase() === "tr"
24
     
25
        return width === 0 && height === 0 && !tr ?
26
            true : width > 0 && height > 0 && !tr ? false :   getRealDisplay(el)
27
    }
28
     
29
    function toggle(el) {
30
        isHidden(el) ? show(el) : hide(el)
31
    }
32
     
33
     
34
    function show(el) {
35
     
36
        if (getRealDisplay(el) != 'none') return
37
     
38
        var old = el.getAttribute("displayOld");
39
        el.style.display = old || "";
40
     
41
        if ( getRealDisplay(el) === "none" ) {
42
            var nodeName = el.nodeName, body = document.body, display
43
     
44
            if ( displayCache[nodeName] ) {
45
                display = displayCache[nodeName]
46
            } else {
47
                var testElem = document.createElement(nodeName)
48
                body.appendChild(testElem)
49
                display = getRealDisplay(testElem)
50
     
51
                if (display === "none" ) {
52
                    display = "block"
53
                }
54
     
55
                body.removeChild(testElem)
56
                displayCache[nodeName] = display
57
            }
58
     
59
            el.setAttribute('displayOld', display)
60
            el.style.display = display
61
        }
62
    }
    ***********
    function hasClass(elm, class) {
02
        var RE;
03
        try {
04
            RE = new RegExp('^(.*\\s)?' + class + '\\s.*$');
05
        } catch (e) {
06
            return -1;
07
        }
08
        if (RE && elm && elm.className) {
09
            return RE.test(elm.className);
10
        } else {
11
            return -2;
12
        }
13
    }
14
     
15
    function addClass(elm, class) {
16
        if (elm && elm.className) {
17
            elm.className += (el.className.length == 0) '' : ' ';
18
            elm.className += class;
19
        }
20
    }
21
     
22
    function removeClass(elm, class) {
23
        if (elm && elm.className) {
24
            var A = elm.className.split(' ');
25
            for (var i = 0; i < A.length; i++) {
26
                 if (A[i] == class) {
27
                     A.splice(i, 1);
28
                 }
29
            }
30
            elm.className = A.join(' ');
31
        }
32
    }
33
     
34
    function toggleClass(elm, class) {
35
        if (elm && elm.className && hasCalss(elm, class) === true) {
36
            removeClass(elm, class);
37
        } else {
38
            addClass(elm, class);
39
        }
40
    }
     ЦСС, соответственно, содержит правила, как показывать (инлайн, блок,...) и как прятать (дисплей, визибилити, позишн, опейсити,...) конкретно этот елемент. Как бонус - мы разделяем поведение (js) и вид (css).

ПС: код не проверял, пишу по старой памяти. Если есть ошибки - укажите.
ППС: Лучше навешать эти функции как методы на ДОМ-обьект, тогда можно обойтись без elm (заменить на this).

По моему, в hide не помешает тоже добавить проверку на isHidden(el), иначе если hide будет вызван 2 раза подряд, show поставит ему block вместо изначального значения...
    ***********************
************
//inArray() ???
**************************
// response of 4 api or seson = if date() is spring && c_season = c+4 instead 4insta accounts

success: function() {
        foundImages = 0;
        maxImages = 40;
    },
//window.setTimeout(function() {???
c = ;
cc = ;
filter: function(image){//( c == i.toString && image.tags.php_get_key_indexOf(i.toString))


if ((c[0] || cc[0]) == '-'){
c_current = 0 . Del(c[0]);
c_forecast = 0 . Del(cc[0]);
//*************************************86400 86400 +  time() 86400*7 + time()date()*************code here
// 59.00
    // 59.25
    // 59.50
    // 59.75
// 59.00 ← повтор
    // 59.25
    // 59.50
    // 59.75
// 00.00 ← инкремент
    // 00.25
word = '';//menu
arr_tags_word = ['id4wTrash','id4wEaster','id4wReNew', 'id4wReNewExtra','id4wConsCucu','id4wConsCherry','id4wSnow','id4wRain'];//ifid4wsnow rain from other api // if i have menu of tags word
var i = arr_tags_word.lenth;
while (i =< arr_tags_word.lenth) {
arr_tags = ['025','024','023','022','021','020','019','018','017','016','015','014','013','012','011','010','09','08','07','06','05','04','03','02','01','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
//arr_tags_day = ['1'-'31'];arr_tags_month = ['0'-'11'];

//current
var day = new Date();
var today = day.time();//
arr_tags_time_current = [today];
arr_tags_trash = ['id4wTrash'];

var theTimeOfConsVegi = new Date(); //??m d 
var setTheTimeOfConsCucu = theTimeOfConsVegi.(strtoTime(getUTCYear())  (strtoTime(setUTCMonth(7))  strtoTime(setUTCDate(15))));//add each year
arr_tags_cons_cucu = ['id4wConsCucu'];

var theTimeOfSalary = new Date();
var setTheTimeOfReNew = theTimeOfSalary.setUTCDate(15);
*****
//перевести локальное время G.. в UTC tоже корректировал пояс Date Ajax no +0200
//При отправке объекта Date через Ajax первый автоматически приводится к общемировому времени. Затем срабатывал обработчик коллеги, который тоже корректировал пояс. Получается, что мы дважды вычитали локальное время на клиенте
*****//cek year month get//?//utc togeather format php +0200 w-summer 4 - 59 59 for use but not for save //save as int UNIX_TIMESTAMP() и FROM_UNIXTIME(). Double
//У даблов есть проблема сравнения на равенство, надеюсь вы в курсе :)

//     bRUtality
//     5 июля 2011 в 19:59

****// +1 В даблах будем только хранить, а оперировать DataTime. 
//arr_tags_time_re_new  = [setTheTimeOfSalary];
arr_tags_re_new = ['id4wReNew'];

//forecast
var theTimeOfHollyday = new Date();
var setTheTimeOfEaster = theTimeOfHollyday.;//???????
arr_tags_easter = ['id4wEaster'];

var day = new Date();
var tomorrow = day.time() + 1;//strtoTime(today.getUTCDate());
arr_tags_time_forecast = [tomorrow];
arr_tags_re_new_extra = ['id4wReNewExtra'];

var theTimeOfConsBerr = new Date(); //??m d 
var setTheTimeOfConsCucu = theTimeOfConsBerr.(strtoTime(getUTCYear())  (strtoTime(setUTCMonth(7))  strtoTime(setUTCDate(15))));//add each year
arr_tags_cons_cherry = ['id4wConsCherry'];

isSnow =  ...;
isRain = ...;

*****************************************id="Value"********************************************************counter
var task_names = tasks.map((task) => image.tags. );

for (var i in image.tags)
    //alert(image.tags[i]);
var counter = 0;
var add = function(valueToAdd){
  var a = parseInt(document.getElementById("").innerHTML);
  a += valueToAdd;
  document.getElementById("").innerHTML = a;
}
function reset(){
  document.getElementById("").innerHTML=0;  
  }        
    
var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset");
addButton.addEventListener("click", function() {
    add(1)
});
resetButton.addEventListener("click", function() {
    reset()
});
// image.tags["value"] = value;//
// for (var i in array)
//     alert("Ключ = " + i + "; Значение = " + array[i]);

//toggleCurrentToForecast = here if c show() else c_forecast

if(!c_current.hide()) : (c_forecast.show()) ?

if(  ( ( ((arr_tags.indexOf(c_current)) && (( isSnow == '1') || ( isRain == '1'))) &&
    !! (((arr_tags_time_current.indexOf(today) & arr_tags_word[i++].indexOf('id4wTrash')) || (arr_tags_time_current.indexOf(setTheTimeOfConsCucu) & arr_tags_word[i++].indexOf('id4wConsCucu'))) || (arr_tags_time_current.indexOf(setTheTimeOfReNew) & arr_tags_word[i++].indexOf('id4wReNew'))) )   &&  
    
    !!   ( ( ((image.tags.indexOf(c_current)) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain'))) &&
        !! (arr_tags_time_current.indexOf(today) & ((image.tags.indexOf('id4wTrash') || image.tags.indexOf('id4wConsCucu')) || image.tags.indexOf('id4wReNew'))) ) >= 0) && foundImages < maxImage s  ) )( { 
    foundImages = foundImages + 1;
            return true;
}elseif(){}
 :
 if(  ( ( ((arr_tags.indexOf(c_forecast)) && (( isSnow == '1') || ( isRain == '1'))) &&
    !! (((arr_tags_time_forecast.indexOf(tomorrow) & arr_tags_word[i++].indexOf('id4wEaster')) || ((arr_tags_time_forecast.indexOf(setTheTimeOfConsCherry) & arr_tags_word[i++].indexOf('id4wConsCherry'))) || ((arr_tags_time_forecast.indexOf(tomorrow) & arr_tags_word[i++].indexOf('id4wReNewExtra'))) )   &&  
    
    !!   ( ( ((image.tags.indexOf(c_forecast)) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain'))) &&
        !! (arr_tags_time_forecast.indexOf(tomorrow) & ((image.tags.indexOf('id4wEaster') || image.tags.indexOf('id4wConsCherry')) || image.tags.indexOf('id4wReNewExtra'))) ) >= 0) && foundImages < maxImage s  ) )( { 
    foundImages = foundImages + 1;
            return true;
}elseif(){}

}//endwhile
}//endif api '-'' to '0'
}//filter
**************(  (   f == '84'  ) && (  image.tags.indexOf('84') >= 0 && foundImages < maxImages  )  )*********DateTime.Compare(DateTime t1, DateTime t2) to js to php



                      
// 02
//         function (arr, val) {
// 03
//             //return arr.indexOf(val) != -1//
//             var i = arr.lenth//>arr.lenth
// 07
//             while (i--) {
// 08
//                 if (arr[i] === var) != -1 return true//-1
// 09
//             }
// 10
//             return false//if -104

//         } :
// 05
//         function (arr, val) {
// 06
//             var i = arr.lenth//>arr.lenth
// 07
//             while (i--) {
// 08
//                 if (arr[i] === var) return true//-1
// 09
//             }
// 10
//             return false//if -1
// 11
//         }

for client-server

var d = new Date();
Tue Dec 12 2017 18:40:48 GMT+0300 (MSK)

JSON.stringify({foo: 42, bar: d})
"{"foo":42,"bar":"2017-12-12T15:40:48.573Z"}"

moment.utc("2017-12-12T14:20:05").local().format()//С сервера приходит его локальное время.

or
Приклеим зону к строке и распарсим:

moment("2017-12-12T14:20:05" + "-05:00").format()
"2017-12-12T22:20:05+03:00"

"2017-12-12T17:20:05+03:00"

for server-server
    Храните даты на сервере либо с временной зоной UTC, либо без нее, но подразумевая это.

Клиент и сервер должны пересылать даты только в UTC с нулевой зоной Z.

Локальное время выводится на клиенте из UTC относительно локального смещения пользователя.

При кодировании дат в JSON последний сам позаботится часовом поясе. Вы не должны что-то прибавлять или вычитать.

Маленький бонус: рассмотрим как быть, если формировать локальное время нужно не на клиенте, а на сервере. До сих пор я вел разговор в том ключе, что у нас Single page application и все рендериться на клиенте. Однако, чисто серверные приложения никуда не делись, и такая задача тоже может возникнуть.

Представим, что даты хранятся в UTC, но вот пришел HTTP-запрос от какого-то пользователя, и нужно показать даты в его локальном формате. Как быть?

Пока у нас нет никаких данных о пользователе, можно, используя его IP, через сторонний сервис или библиотеку с локальной базой адресов на борту хотя бы примерно определить его страну или даже город. По этом данным станет легко вывести временной пояс.

Но стана вовсе не означает время. Так, пользователь Воронежа может сидеть через прокси или Тор с выходной нодой где-то в Индии, но при это его локальное время не имеет отношения к этой стране.

Узнать локальное смещение можно через специальный метод объекта Date:

(new Date()).getTimezoneOffset()
-180

Оно выражено в минутах и имеет знак противоположный часовому поясу. Если у меня зона +3, то смещение будет -180 минут.

С помощью скрипта это значение можно положить в куки на стороне клиента, и тогда все последующие запросы к серверу будут сообщать о настоящем часовом поясе пользователя.

Чтобы привести время UTC в локальное на сервере, достаточно вычесть из первого смещение в минутах. При этом нужно держать в уме знак: вычитание отрицательных минут означает их прибавление, что нам и нужно.

Рассмотрим код на Питоне:

from datetime import datetime, timedelta

utc = datetime.utcnow()
loc = utc - timedelta(minutes=-180)

utc # datetime.datetime(2017, 12, 13, 13, 57, 18, 108606)
loc # datetime.datetime(2017, 12, 13, 16, 57, 18, 108606)

Локальное время на 3 часа больше, теперь эту дату можно показывать пользователю.

Это был пример явной манипуляции с часовыми поясами. Выше я писал, что этого следует избегать. Однако, здесь явно присутствует понимание того, что мы делаем. Простой вычет будет эффективней и проще использования навороченной библиотеки с часовыми поясами.

Ну вот и все, думаю, это было не сложно. Я не люблю просить о репостах и никогда не делал этого, но на этот раз сделаю исключение. Прошу показать эту статью тем, кто связан с веб-разработкой, особенно фронтендом. Возможно, хоть где-то удастся избежать ошибок вроде тех, что я описал в самом начале. Может, хоть немного облегчатся чьи-то будни.

Награда для тех,
**************************************************************Date method for client .getTimezoneOffset()*********without timezone js moment.utc()
if ((c[0] || cc[0]) == '-'){
c_current = 0 . Del(c[0]);
c_forecast = 0 . Del(cc[0]);
**************************************************code here
}
word = '';//menu
arr_tags_word = ['id4wTrash','id4wEaster','id4wReNew', 'id4wReNewExtra','id4wConsCucu','id4wConsCherry','id4wSnow','id4wRain'];//ifid4wsnow rain from other api // if i have menu of tags word
arr_tags = ['025','024','023','022','021','020','019','018','017','016','015','014','013','012','011','010','09','08','07','06','05','04','03','02','01','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
//arr_tags_day = ['1'-'31'];arr_tags_month = ['0'-'11'];

//current
var day = new Date();
var today = day.time();
arr_tags_time_current = [today];
arr_tags_trash = ['id4wTrash'];

var theTimeOfConsVegi = new Date(); //??m d 
var setTheTimeOfConsCucu = theTimeOfConsVegi.(strtoTime(getUTCYear())  (strtoTime(setUTCMonth(7))  strtoTime(setUTCDate(15))));//add each year
arr_tags_cons_cucu = ['id4wConsCucu'];

var theTimeOfSalary = new Date();
var setTheTimeOfReNew = theTimeOfSalary.setUTCDate(15);//moment.utc()"2017-12-12T14:12:23.502Z" moment("2017-12-12T14:20:05.849Z").format()
//"2017-12-12T17:20:05+03:00"
//cek year month get//?
//arr_tags_time_re_new  = [setTheTimeOfSalary];
arr_tags_re_new = ['id4wReNew'];

//forecast
var theTimeOfHollyday = new Date();
var setTheTimeOfEaster = theTimeOfHollyday.;//???????
arr_tags_easter = ['id4wEaster'];

var day = new Date();
var tomorrow = day.time() + 1;//strtoTime(today.getUTCDate());
arr_tags_time_forecast = [tomorrow];
arr_tags_re_new_extra = ['id4wReNewExtra'];

var theTimeOfConsBerr = new Date(); //??m d 
var setTheTimeOfConsCucu = theTimeOfConsBerr.(strtoTime(getUTCYear())  (strtoTime(setUTCMonth(7))  strtoTime(setUTCDate(15))));//add each year
arr_tags_cons_cherry = ['id4wConsCherry'];

isSnow =  ...;
isRain = ...;

c_current = ;
c_forecast = ;
//toggleCurrentToForecast = here if c show() else c_forecast
if(c.show() && !setTimeOfEaster && setTimeOfConsCucu && !setTimeOfReNewExxtra) : (c.hide() && !setTimeOfTrash && setTimeOfConsCherry && !setTimeOfReNew) ?
if(  ( ( ((arr_tags.indexOf(c_current)) && (( isSnow == '1') || ( isRain == '1'))) &&
    !! (((arr_tags_time_current.indexOf(today) & arr_tags_trash.indexOf('id4wTrash')) || (arr_tags_time_current.indexOf(setTheTimeOfConsCucu) & arr_tags_cons_cucu.indexOf('id4wConsCucu'))) || (arr_tags_time_current.indexOf(setTheTimeOfReNew) & arr_tags_re_new.indexOf('id4wReNew'))) )   &&  
    
    !!   ( ( ((image.tags.indexOf(c_current)) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain'))) &&
        !! (arr_tags_time_current.indexOf(today) & ((image.tags.indexOf('id4wTrash') || image.tags.indexOf('id4wConsCucu')) || image.tags.indexOf('id4wReNew'))) ) >= 0) && foundImages < maxImages  ) ) { 
    foundImages = foundImages + 1;
            return true;
}elseif(){}
 :
 if(  ( ( ((arr_tags.indexOf(c_forecast)) && (( isSnow == '1') || ( isRain == '1'))) &&
    !! (((arr_tags_time_forecast.indexOf(tomorrow) & arr_tags_easter.indexOf('id4wEaster')) || ((arr_tags_time_forecast.indexOf(setTheTimeOfConsCherry) & arr_tags_cons_cherry.indexOf('id4wConsCherry'))) || ((arr_tags_time_forecast.indexOf(tomorrow) & arr_tags_re_new_extra.indexOf('id4wReNewExtra'))) )   &&  
    
    !!   ( ( ((image.tags.indexOf(c_forecast)) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain'))) &&
        !! (arr_tags_time_forecast.indexOf(tomorrow) & ((image.tags.indexOf('id4wEaster') || image.tags.indexOf('id4wConsCherry')) || image.tags.indexOf('id4wReNewExtra'))) ) >= 0) && foundImages < maxImages  ) ) { 
    foundImages = foundImages + 1;
            return true;
}elseif(){}

if(c.show){
    if(
        ( ( arr_tags.indexOf(c_current)  && (( isSnow == '1') || ( isRain == '1')) ) && dateNow() )&&//left
     ( //right 
        ( (image.tags.indexOf(c_current) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain'))) //
        |//or

         (// 
            (image.tags.indexOf(c_current) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain')) 
             & ( image.tags.indexOf('id4wEaster') & arr_tags_time_current.indexOf(today))
           )//

            

           ) //or


         ) >= 0 && foundImages < maxImages  ) //right   
        ) {//if
                            foundImages = foundImages + 1;
                            return true;
                        }
}elseif(cc.show){
    if(
        ( ( arr_tags.indexOf(c_forecast)  && (( isSnow == '1') || ( isRain == '1'))  )&& dateNow()+1 ) &&//left
     ( //right 
        ( (image.tags.indexOf(c_forecast) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain'))) //
        |//or 

            ( //
                (image.tags.indexOf(c_forecast) && (image.tags.indexOf('id4wSnow') || image.tags.indexOf('id4wRain')))//r 
                 & ( image.tags.indexOf('id4wEaster') & arr_tags_time_forecast.indexOf(tomorrow)) 
             )//

             

            ) //or


            ) >= 0 && foundImages < maxImages  )//right   
             ) {//if
                            foundImages = foundImages + 1;
                            return true;
                        }
} 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DATE
var day = new Date();
var today = day.dateTime(); or time or others?????????????//
//compare(arr1,arr2)multiple  date & tags
//date
//while(image.tags.lenth > )[i++]
var tomorrow =;//api time
var easter =;//api calendar

arr_tags_time_calendar_holydays = [calendar_holidays];//= [ester,];//calendar Api

var c;
var cc;

var isSnow =  ...;
var isRain = ...;
//already api
*var isHoliday[chose by me filter] = 1;

var c_current;
var c_forecast;
//TRAITEASTER
//universal func//api is today holiday//date & calendar & tag
*function todayEasterRightSide(){if(compare(isHoliday[easter,i++],today)){return true;} }//arr-calendar  var-timeApi or func dependof calendardates
*function tomorrowEasterRightSide(){if(compare(isHoliday[easter,i++],tomorrow)){return true;} }//arr-calendar  var-timeApi or func dependof calendardates
function easterRightSide(){if(image.tags.indexOf('id4wEaster')){return true;} }
function easterToday(){if( easterRightSide() & todayEasterRightSide() ){return true;} }
function easterTomorrow(){if( easterRightSide() & tomorrowEasterRightSide() ){return true;} }
//weather left side
function isLeftSideCCurrent(){ if(arr_tags.indexOf(c_current)){return true;} }
function isLeftSideCForecast(){ if(arr_tags.indexOf(c_forecast)){return true;} }
function isSnowLeftSide(){ if(isSnow == '1'){return true;} }
function isRainLeftSide(){ if(isRain == '1'){return true;} }
function isSnowOrRainLeftSide(){if(isSnowLeftSide() || isRainLeftSide()){return true;} }
function isLeftSideCurrentEnd(){if(  isLeftSideCCurrent()  &&  isSnowOrRainLeftSide() ){return true;} }//
function isLeftSideForecastEnd(){if(  isLeftSideCForecast()  &&  isSnowOrRainLeftSide() ){return true;} }//
//weather right side
function isRightSideCCurrent(){ if(image.tags.indexOf(c_current)){return true;} }
function isRightSideCForecast(){ if(image.tags.indexOf(c_forecast)){return true;} }
function isSnowRightSide(){ if(image.tags.indexOf('id4wSnow')){return true;} }
function isRainRightSide(){ if(image.tags.indexOf('id4wRain')){return true;} }
function isSnowOrRainRightSide(){if(isSnowRightSide() || isRainRightSide()){return true;} }
function isRightSideCurrentEnd(){if(isRightSideCCurrent() && isSnowOrRainRightSide()){return true;} }//
function isRightSideForecastEnd(){if(isRightSideCForecast() && isSnowOrRainRightSide()){return true;} }//
//weather+Easter
function isRightSideCCurrentWithEaster(){ if( isRightSideCurrentEnd() & easterToday() ){return true;} }
function isRightSideCForecastWithEaster(){ if( isRightSideForecastEnd()  & easterTomorrow() ){return true;} }
function isRightSideCurrentEndWithEaster(){if( isRightSideCurrentEnd() | isRightSideCCurrentWithEaster() ){return true;}}
function isRightSideForecastEndWithEaster(){if( isRightSideForecastEnd() | isRightSideCForecastWithEaster() ){return true;}}
//photoLookWeather
function id4wWouldRightSide(){if(image.tags.indexOf('id4wWould')){return true;} }
function id4wReNewRightSide(){if(image.tags.indexOf('id4wReNew')){return true;} }
function id4wTrashRightSide(){if(image.tags.indexOf('id4wTrash')){return true;} }
function id4wPhotoLooks(){if((id4wWouldRightSide() && id4wReNewRightSide()) && id4wTrashRightSide()){return true;} }
//module weather clother left-right side
function clotherModuleLeftSideCurrent(){if(isLeftSideCurrentEnd()){return true;} }// && today()){return true;} }
function clotherModuleLeftSideForecast(){if(isLeftSideForecastEnd()){return true;} }// && tomorrow()){return true;} }
//-
function clotherModuleRightSideCurrent(){if(isRightSideCurrentEndWithEaster() && id4wPhotoLooks()){return true;} }
function clotherModuleRightSideForecast(){if(isRightSidForecastEndWithEaster() && id4wPhotoLooks()){return true;} }
if ((c[0] || cc[0]) == '-'){
c_current = 0 + Del(c[0]);
c_forecast = 0 + Del(cc[0]);
arr_tags = ['025','024','023','022','021','020','019','018','017','016','015','014','013','012','011','010','09','08','07','06','05','04','03','02','01','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
//1.weather=arr_tags 2.date=arr_dates  3.always_tag=menuOfphotolooks[] 
if(switch_food.show){                                                  
}
if (   ()|( (('.thing_fdcta').show()&&fdctaModuleLeftSideForecast()) && (fdctaModuleRightSideCurrent() >= 0 && foundImages < maxImages) )  )|( (('.thing_f').show()&&foodModuleLeftSideCurrent()) && (foodModuleRightSideCurrent() >= 0 && foundImages < maxImages) )|( (('.date_c').show()&&clotherModuleLeftSideCurrent()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )|( (('.date_f').show()&&clotherModuleLeftSideForecast()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )   )
//elseif (   ()|( (('.thing_f').show()&&clotherModuleLeftSideCurrent()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )|( (('.thing_fdcta').show()&&clotherModuleLeftSideForecast()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )   )

return false;//or 
}//if concatination

     
 }  //filter
                                  //   }, 10000);

});

//module food left-right side 

!!!!!!!!!!!!!!!!!!!!!!!!!!!filter by tag

!!!bigPERIOD.... small

function id4fWouldRightSide(){if(image.tags.indexOf('id4fWould')){return true;} }
function id4fReNewRightSide(){if(image.tags.indexOf('id4fReNew')){return true;} }
function id4fTrashRightSide(){if(image.tags.indexOf('id4fTrash')){return true;} }
function id4fPhotoLooks(){if((id4fWouldRightSide() && id4fReNewRightSide()) && id4fTrashRightSide()){return true;} }

function isRightSideCurrentEndFood(){if(image.tags.indexOf('id4f')){return true;}}
function isRightSideCCurrentWithEasterFood(){ if( isRightSideCurrentEndFood() & easterToday() ){return true;} }
function isRightSideCurrentEndWithEasterFood(){if( isRightSideCurrentEndFood() | isRightSideCCurrentWithEasterFood() ){return true;}}
//module weather clother left-right side
function foodModuleLeftSideCurrent(){if(today() | (today() && isEaster)){return true;} }
function foodModuleRightSideCurrent(){if(isRightSideCurrentEndWithEasterFood() && id4fPhotoLooks()){return true;} }

if (   (foodModuleLeftSideCurrent()) && (  ( foodModuleRightSideCurrent() ) >= 0 && foundImages < maxImages  )     ) {
                            foundImages = foundImages + 1;
                            return true;
                        }
            return false;
     
 }  //filter
                                  //   }, 10000);

});            
//module as food - DSTA DRAGS CLEAN TOOLS ACTIONS
function id4fWouldRightSide(){if(image.tags.indexOf('id4fdctaWould')){return true;} }
function id4fdctaReNewRightSide(){if(image.tags.indexOf('id4fdctaReNew')){return true;} }
function id4fdctaTrashRightSide(){if(image.tags.indexOf('id4fdctaTrash')){return true;} }
function id4fdctaPhotoLooks(){if((id4fdctaWouldRightSide() && id4fdctaReNewRightSide()) && id4fdctaTrashRightSide()){return true;} }

function isRightSideCurrentEndFdcta(){if(image.tags.indexOf('id4fdcta')){return true;}}
function isRightSideCCurrentWithEasterFdcta(){ if( isRightSideCurrentEndFdcta() & easterToday() ){return true;} }
function isRightSideCurrentEndWithEasterFdcta(){if( isRightSideCurrentEndFdcta() | isRightSideCCurrentWithEasterFdcta() ){return true;}}
//module weather clother left-right side
function fdctaModuleLeftSideCurrent(){if(today() | (today() && isEaster)){return true;} }
function fdctaModuleRightSideCurrent(){if(isRightSideCurrentEndWithEasterFdcta() && id4fdctaPhotoLooks()){return true;} }

if (   (fdctaModuleLeftSideCurrent()) && (  ( fdctaModuleRightSideCurrent() ) >= 0 && foundImages < maxImages  )     ) {
                            foundImages = foundImages + 1;
                            return true;
                        }
                        *****************************************************************************************************************final

!!!!DATE
var day = new Date();
var today = day.dateTime(); or time or others?????????????//
//compare(arr1,arr2)multiple  date & tags
//date
//while(image.tags.lenth > )[i++]
var tomorrow =;//api time
var easter =;//api calendar

arr_tags_time_calendar_holydays = [calendar_holidays];//= [ester,];//calendar Api

var c;
var cc;

var isSnow =  ...;
var isRain = ...;
//already api
*var isHoliday[chose by me filter] = 1;

var c_current;
var c_forecast;
//TRAITEASTER
//universal func//api is today holiday//date & calendar & tag
*function todayEasterRightSide(){if(compare(isHoliday[easter,i++],today)){return true;} }//arr-calendar  var-timeApi or func dependof calendardates
*function tomorrowEasterRightSide(){if(compare(isHoliday[easter,i++],tomorrow)){return true;} }//arr-calendar  var-timeApi or func dependof calendardates
function easterRightSide(){if(image.tags.indexOf('id4wEaster')){return true;} }
function easterToday(){if( easterRightSide() & todayEasterRightSide() ){return true;} }
function easterTomorrow(){if( easterRightSide() & tomorrowEasterRightSide() ){return true;} }
//weather left side
function isLeftSideCCurrent(){ if(arr_tags.indexOf(c_current)){return true;} }
function isLeftSideCForecast(){ if(arr_tags.indexOf(c_forecast)){return true;} }
function isSnowLeftSide(){ if(isSnow == '1'){return true;} }
function isRainLeftSide(){ if(isRain == '1'){return true;} }
function isSnowOrRainLeftSide(){if(isSnowLeftSide() || isRainLeftSide()){return true;} }
function isLeftSideCurrentEnd(){if(  isLeftSideCCurrent()  &&  isSnowOrRainLeftSide() ){return true;} }//
function isLeftSideForecastEnd(){if(  isLeftSideCForecast()  &&  isSnowOrRainLeftSide() ){return true;} }//
//weather right side
function isRightSideCCurrent(){ if(image.tags.indexOf(c_current)){return true;} }
function isRightSideCForecast(){ if(image.tags.indexOf(c_forecast)){return true;} }
function isSnowRightSide(){ if(image.tags.indexOf('id4wSnow')){return true;} }
function isRainRightSide(){ if(image.tags.indexOf('id4wRain')){return true;} }
function isSnowOrRainRightSide(){if(isSnowRightSide() || isRainRightSide()){return true;} }
function isRightSideCurrentEnd(){if(isRightSideCCurrent() && isSnowOrRainRightSide()){return true;} }//
function isRightSideForecastEnd(){if(isRightSideCForecast() && isSnowOrRainRightSide()){return true;} }//
//weather+Easter
function isRightSideCCurrentWithEaster(){ if( isRightSideCurrentEnd() & easterToday() ){return true;} }
function isRightSideCForecastWithEaster(){ if( isRightSideForecastEnd()  & easterTomorrow() ){return true;} }
function isRightSideCurrentEndWithEaster(){if( isRightSideCurrentEnd() | isRightSideCCurrentWithEaster() ){return true;}}
function isRightSideForecastEndWithEaster(){if( isRightSideForecastEnd() | isRightSideCForecastWithEaster() ){return true;}}
//photoLookWeather
function id4wWouldRightSide(){if(image.tags.indexOf('id4wWould')){return true;} }
function id4wReNewRightSide(){if(image.tags.indexOf('id4wReNew')){return true;} }
function id4wTrashRightSide(){if(image.tags.indexOf('id4wTrash')){return true;} }
function id4wPhotoLooks(){if((id4wWouldRightSide() && id4wReNewRightSide()) && id4wTrashRightSide()){return true;} }
//module weather clother left-right side
function clotherModuleLeftSideCurrent(){if(isLeftSideCurrentEnd()){return true;} }// && today()){return true;} }
function clotherModuleLeftSideForecast(){if(isLeftSideForecastEnd()){return true;} }// && tomorrow()){return true;} }
//-
function clotherModuleRightSideCurrent(){if(isRightSideCurrentEndWithEaster() && id4wPhotoLooks()){return true;} }
function clotherModuleRightSideForecast(){if(isRightSidForecastEndWithEaster() && id4wPhotoLooks()){return true;} }



function id4fWouldRightSide(){if(image.tags.indexOf('id4fWould')){return true;} }
function id4fReNewRightSide(){if(image.tags.indexOf('id4fReNew')){return true;} }
function id4fTrashRightSide(){if(image.tags.indexOf('id4fTrash')){return true;} }
function id4fPhotoLooks(){if((id4fWouldRightSide() && id4fReNewRightSide()) && id4fTrashRightSide()){return true;} }

function isRightSideCurrentEndFood(){if(image.tags.indexOf('id4f')){return true;}}
function isRightSideCCurrentWithEasterFood(){ if( isRightSideCurrentEndFood() & easterToday() ){return true;} }
function isRightSideCurrentEndWithEasterFood(){if( isRightSideCurrentEndFood() | isRightSideCCurrentWithEasterFood() ){return true;}}
//module weather clother left-right side
function foodModuleLeftSideCurrent(){if(today() | (today() && isEaster)){return true;} }/////////////////
function foodModuleRightSideCurrent(){if(isRightSideCurrentEndWithEasterFood() && id4fPhotoLooks()){return true;} }


//module as food - DSTA DRAGS CLEAN TOOLS ACTIONS
function id4fWouldRightSide(){if(image.tags.indexOf('id4fdctaWould')){return true;} }
function id4fdctaReNewRightSide(){if(image.tags.indexOf('id4fdctaReNew')){return true;} }
function id4fdctaTrashRightSide(){if(image.tags.indexOf('id4fdctaTrash')){return true;} }
function id4fdctaPhotoLooks(){if((id4fdctaWouldRightSide() && id4fdctaReNewRightSide()) && id4fdctaTrashRightSide()){return true;} }

function isRightSideCurrentEndFdcta(){if(image.tags.indexOf('id4fdcta')){return true;}}
function isRightSideCCurrentWithEasterFdcta(){ if( isRightSideCurrentEndFdcta() & easterToday() ){return true;} }
function isRightSideCurrentEndWithEasterFdcta(){if( isRightSideCurrentEndFdcta() | isRightSideCCurrentWithEasterFdcta() ){return true;}}
//module weather clother left-right side
function fdctaModuleLeftSideCurrent(){if(today() | (today() && isEaster)){return true;} }////////////////////////////other isNOEASTER
function fdctaModuleRightSideCurrent(){if(isRightSideCurrentEndWithEasterFdcta() && id4fdctaPhotoLooks()){return true;} }                        
//module comfort
//toggle
//togglelogic today tomorrow
//hourly link or api
if ((c[0] || cc[0]) == '-'){
c_current = 0 + Del(c[0]);
c_forecast = 0 + Del(cc[0]);
arr_tags = ['025','024','023','022','021','020','019','018','017','016','015','014','013','012','011','010','09','08','07','06','05','04','03','02','01','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
//1.weather=arr_tags 2.date=arr_dates  3.always_tag=menuOfphotolooks[] 
if (   ()|( (('.thing_fdcta').show()&&fdctaModuleLeftSideForecast()) && (fdctaModuleRightSideCurrent() >= 0 && foundImages < maxImages) )  )|( (('.thing_f').show()&&foodModuleLeftSideCurrent()) && (foodModuleRightSideCurrent() >= 0 && foundImages < maxImages) )|( (('.date_c').show()&&clotherModuleLeftSideCurrent()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )|( (('.date_f').show()&&clotherModuleLeftSideForecast()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )   )
//elseif (   ()|( (('.thing_f').show()&&clotherModuleLeftSideCurrent()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )|( (('.thing_fdcta').show()&&clotherModuleLeftSideForecast()) && (clotherModuleRightSideCurrent() >= 0 && foundImages < maxImages) )   )

return false;
     
 }  //filter
                                  //   }, 10000);

});
$('.date_c, .date_f').on('click', 'a', function(event) {  // | clotherModuleLeftSideForecast()  ...... | clotherModuleRightSideForecast()
        event.preventDefault();
        if(event.target.className === 'cel') {
          $('.date_f').hide();
          $('.date_c').show();
        } else {
          $('.date_c').hide();
          $('.date_f').show();
        }



                $('.date_c').html(date_c + '<a class="cel"> C</a>');
                $('.date_f').html(date_f + '<a class="fah"> F</a>');

                <p class="date_c" style='cursor: pointer;' title="Click to forecast ºC"></p>
                <p class="date_f" style='cursor: pointer;' title="Click to current   ºC"></p>

$('.thing_f, .thing_fdcta').on('click', 'a', function(event) {  // | clotherModuleLeftSideForecast()  ...... | clotherModuleRightSideForecast()
        event.preventDefault();
        if(event.target.className === 'cel') {
          $('.thing_fdcta').hide();
          $('.thing_f').show();
        } else {
          $('.thing_f').hide();
          $('.thing_fdcta').show();
        }



                $('.thing_f').html(thing_f + '<a class="cel"> C</a>');
                $('.thing_fdcta').html(thing_fdcta + '<a class="fah"> F</a>');

                <p class="thing_f" style='cursor: pointer;' title="Click to forecast ºC"></p>
                <p class="thing_fdcta" style='cursor: pointer;' title="Click to current   ºC"></p>                
                                                
!!!!!!!!!!!!!!!!!!!!!!!!! change ESMA6 to let!!
let task_names = image.tags.map((tag) => tag);
//add new property 
let task_names = ["value"];
***
    
let difficult_tasks = [];
 
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});

С filter:
    
let difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});
 ********************************
 var counter = 0;
var add = function(valueToAdd){
  var a = parseInt(document.getElementById("value").innerHTML);
  a += valueToAdd;
  document.getElementById("value").innerHTML = a;
}
function reset(){
  document.getElementById("value").innerHTML=0;  
  }        
    
var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset");
addButton.addEventListener("click", function() {
    add(1)
});
resetButton.addEventListener("click", function() {
    reset()
}); 
reduce() 
// Using ES6
let difficult_tasks = tasks.filter((task) => task.duration >= 120 );




!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!abstact or polimorph today forecast 3days week api 21dayRed month 3 month 6month 12mont 5 year!!!!!!!!!!!!!!!!!
     
moment.utc() в JS и тд.

Клиент и сервер должны обмениваться друг с другом только датами в UTC. Универсальное время переводится в локальное на стороне клиента исходя из локального смещения относительно нулевого меридиана. Эту величину можно определить методом .getTimezoneOffset() объекта Date на клиенте.

При передаче дат клиенту вы кодируете их в ISO-формат с зоной. Если зона UTC, она обозначается буквой Z. Таким образом, в текстовом представлении время, отправляемое клиенту будет выглядеть так:

"2017-12-12T14:12:23.502Z"

Слева направо: год, месяц, день, разделитель, часы, минуты, секунды, микросекунды, индикатор нулевой зоны UTC.

При кодировании даты без зоны некоторые библиотеки могут не добавить Z на конце, что может запутать клиента. Обязательно учтите это: добавьте в модуль функцию, которая будет добавлять Z к результирующей строке и пользуйтесь только этой функцией (см. выше о единой кодовой базе для работы со временем).

На этом этапе нельзя не заметить, насколько убог формат JSON: он не может передавать даты и не расширяется.

В обратную сторону с клиента на сервер даты передаются в таком же формате: ISO-строка в UTC с Z на конце в качестве зоны.

Рассмотрим, что делать клиенту с полученной строкой. Легче всего восстановить ее в объект библиотекой moment.js:

moment("2017-12-12T14:20:05.849Z").format()
"2017-12-12T17:20:05+03:00"

*********************************



//api date auto  or menu filters butt #id4wEaster + oop func_s + c == int('35') if c=0, c=<35,c++//elseif c>-25 ??? to 1 diapazon or 2 for

1. indexOf(cc!var?)?
2. function name?()?
3. //for 24 hour ? table
4. Date.now() - Date.salary()//January 1, 1970, 00:00:00 UTC - January 15, 1970, 00:00:00 UTC
5.  01-01-1970 до 19-01-2038 00:00:00//jsas php5wind

*******************************-------------------
<?php 
namespace App;

trait Owned
//::select('author', app('Author')->pluck...
{
public function owned($query){
return $query->where('created_by', \Auth::user()->id)->get();
}
 
}
----------
namespace App;
//for book magaz
trait ToggleStatusVisibleId//?controller?
 
    {
        public function toggleStatusVisibleId($query)
        {  
            $isPausedDiscontId = false;//0  
            if(($query->where('status_discont_id' == 0)->get())//!= null default i nullable is the same?
            {
               return $isPausedDiscontId  = true;//1
            }    
        }
    }

namespace App;
//?for purchase user?
trait ToggleStatusVisibleId//?controller?
 
    {
        public function toggleStatusVisibleId($query)
        {//help! PURCHASE::PURCHASEABLE()->ID???  setter for virtual field??   
        if($query->where('status_discont_id', \Purchase::purchaseable()->status_discont_id)//status_discont_idASvirtual//!= null default i nullable is the same?
        {
            return $query->wheremakeVisibleDiscontId();
        }

        return $query->wheremakeUnVisibleDiscontId();
        }
    }  

 //??????   
<?php
trait ezcReflectionReturnInfo {*******************************???
    function getReturnType() { /*1*/ }
    function getReturnDescription() { /*2*/ }
}

class ezcReflectionMethod extends ReflectionMethod {
    use ezcReflectionReturnInfo;******************************???/
    /* ... */
}

class ezcReflectionFunction extends ReflectionFunction {
    use ezcReflectionReturnInfo;
    /* ... */
}
?>
  
**************************----------------------
Как правильно загрузить пользовательский пакет в Laravel?
Как загрузить класс Facebook или любой другой пакет без Laravel в моих контроллерах в Laravel 5. Я установил Facebok SDK - в моем composer.json:
**
Как правильно загрузить пользовательский пакет в Laravel?
Как загрузить класс Facebook или любой другой пакет без Laravel в моих контроллерах в Laravel 5. Я установил Facebok SDK - в моем composer.json:

"facebook/php-sdk-v4" : "~5.0"
В моем контроллере:

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;


use Facebook;

class MyController extends Controller
{

    public function index()
    {

      // this fails
      $fb = new Facebook\Facebook();

    }
}
***********************************************-------------------   
// проверка наличия на складе
Изменения количества позиции в заказе. Проверяет наличие на складе. Не проверяет баланс пользователя.
@param string|array $condition
//   * @param int          $quantity
//   *
//   * @throws Exception
//   *

/**
//   * Позиции заказа.
//   *
//   * @param array $columns
//   * @param bool  $lock
//   *
//   * @return Collection
//   */
****************************************************bind goods inside json field + timest+to kesh??? 
// class Cart {

//  /**
//   * @var Session
//   */
//  private $session;

//  /**
//   * @var Guard
//   */
//  private $auth;

//  /**
//   * @var CartItem
//   */
//  private $model;

//  /**
//   * @var string
//   */
//  private $code;
**
//  function __construct(Request $request, Guard $auth, CartItem $model)
//**********************createNewCart();
//      $this->session = $request->session();
//      $this->auth = $auth;
//      $this->model = $model;

//      $this->code = $this->session->get('cart.code');
//      if (is_null($this->code)) {
//          $this->createNewCart();
**
public function code()
return $this->code;
**
public function clear()

//      $this->session->remove('cart');
//      $this->model->whereCode($this->code)->delete();
//      $this->createNewCart();
**
/**
//   * Сумма стоимостей всех позиций в корзине.
//   * Итоговая сумма на чеке.
//   *
//   * @return float
//   */
public function total()**********************whereCode query,set(
***********************$this->session->set('cart.total', $total);
/** @var Collection $items */********$items = $this->model->with([ 'product' => function ($query) { $query->select([ 'id', 'price' ]); } ])
                               ->whereCode($this->code)
                               ->get([ 'product_id', 'quantity' ]);


**
//  /**
//   * Суммарное количество единиц товара в заказе.
//   *
//   * @return int
//   */
    public function count()
    *******************$this->session->set('cart.count', $count);

**
//  /**
//   * Позиции заказа.
//   *
//   * @param array $columns
//   * @param bool  $lock
//   *
//   * @return Collection
//   */

public function items($columns = [ '*' ], $lock = false)*******$query->lockForUpdate();
//  {
    **
//  /**
//   * Изменения количества позиции в заказе. Проверяет наличие на складе. Не проверяет баланс пользователя.
***********************************before order check qty () the samefunc????
//   *********
//   * @param string|array $condition
//   * @param int          $quantity as purchase
//   *
//   * @throws Exception
//   */
//  public function setQuantity($condition??, $quantity)
//  {*******
    ****************************************
          $condition = [ 'product_id'?? =>?? $condition ];
    *
// проверка наличия на складе
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!need product like sklad!!!!!!!add to my homecontroller action buy and change qty
//      $item = $this->model->with('product')->whereCode($this->code)->where($condition)->first();
*******user hasOne * user_id cartItem*********product hasOne * product_id "Cart"item belTo

//if ($quantity > $item->product->quantity) {
//          throw new Exception(setting('message.not_enough_in_stock') ?: 'Количество на складе ограничено.');
//      }

//      $item->update(compact('quantity'));

//      $this->clearCounters();
**
//  /**
//   * @param Product $product
//   * @param int     $quantity//setQty()
//   *
//   * @return CartItem
//   * @throws Exception
//   */
//  public function addItem($product, $quantity = 1)
//  {
//      if ($this->auth->guest()) {
//          abort(401);
//      }

//      if (!$this->auth->user()->is_admin) {

//          // перед добавлением товара в корзину надо проверить баланс пользователя
//          // если баллов не хватает, контроллеру возвращается false для того
//          // чтобы тот мог уведомить пользователя надлежащим способом




$possible_total = $this->total() +?? $product->price;

//          if ($possible_total > $this->auth->user()->balance) {

//              throw new Exception(
//                  setting(
//                      'message.not_enough_points'
//                  ) ?: 'На вашем балансе недостаточно баллов для выполнения этого действия.'
//              );

**if
// если товар уже есть в корзине - только увеличим его количество
add to my purchase 
***********getKey() obj all methods if its devide like js?
//      /** @var CartItem $item */
//      $item = $this->model->whereCode($this->code)->whereProductId($product->getKey())->first();
//          // проверка наличия на складе

//          if ($item->quantity + $quantity > $product->quantity) {
//              throw new Exception(setting('message.not_enough_in_stock') ?: 'Количество на складе ограничено.');
//          }
!!!!!!!!!!!!!!qty of purchase remake like getter - $item->quantity + $quantity > $product->quantity

****************************c();
**********************$item->increment('quantity', $quantity);//save value after endFunc

**
else
    // проверка наличия на складе если товар NO в корзине

//      if ($quantity > $product->quantity) {
//          throw new Exception(setting('message.not_enough_in_stock') ?: 'Количество на складе ограничено.');
//      }
*$newItem = $this->modelCartItem->create('')
// добавление нового товара в корзину

/** @var CartItem $newItem */
//      $newItem = $this->model->create(
//          [
//              'code' => $this->code,
//              'user_id' => $this->auth->user()->getAuthIdentifier(),
//              'product_id' => $product->getKey(),
//              'quantity' => $quantity,
//          ]
//      );
****************************getAuthIdentifier()
******************************'product_id' => $product->getKey(),
***********************'quantity' => $quantity, isvirtual setfunc??
**
deleteItem($condition)
**
createNewCart()

!!!!!!$this->code = str_random();
********      $this->session->set('??cartInem???cart.code', $this->code);
//      $this->clearCounters();
private function clearCounters()
//  {
//      $this->session->remove('cart.count');
//      $this->session->remove('cart.total');
//  }


********************************************cartItemmodel


// class CartItem extends Model {


$casts

$fillable

belongsTo('App\User');

belongsTo('App\Product');

***********************************************app/Product.php sklad
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereId($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereCode($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereUserId($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereProductId($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereQuantity($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereCreatedAt($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereUpdatedAt($value)
****************static ??????
---App\Events\CatalogWasChanged;

 * @var array
//   */
//  protected $casts = [
//      'published' => 'boolean',
//      'archived' => 'boolean',
//      'properties' => 'object',
//         'sort_order' => 'integer',
//  ];

 * @var array
//   */
//  protected $fillable = [
//  

   * @var array
//   */
//  protected $hidden = [ 'updated_ip' ];

  public static function boot()
//  {
//      parent::boot();
-----      static::created(function () { event(new CatalogWasChanged); });
//      static::saved(function () { event(new CatalogWasChanged); });
//  }

  public function categories()
//  {
//      return $this->belongsToMany('App\ProductCategory');
//  }


  public function editor()
//  {
//      return $this->belongsTo('App\User', 'updated_by');
//  }


  public function likes()
//  {
//      return $this->belongsToMany('App\User', 'product_user_likes');
//  }

*****************************  public function scopeAvailable($query)
//  {
//      return $query->wherePublished(true)->whereArchived(false)->where('quantity', '>', 0);
//  }
****************to my book 'archived',
      'sort_order', ????????int
      ******'product_user_likes'????????

************add to my book @property integer $top_position 


************???
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\ProductCategory[] $categories
  * @property-read \App\User $editor relatives
  * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $likes







*************************************************js
$(function() {

    // code for loader
    $(document).ajaxStart(function() {
        //show loader animation and hide border
        $('.border').hide();
        $("#loader").show();
    });

    $(document).ajaxComplete(function() {
        setTimeout(function() {
            // hide loader animation and show border with fadeIn effect
            $("#loader").hide();
            $('.border').show().addClass('animated fadeIn');
        }, 400);
    });

    // send ajax request to fetch location data


   $.ajax({
        async: true,
        crossDomain: true,
        url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCB7eXQgDDLJM1Ih386aUUlfMRt9n_oV0w",
        dataType: 'json',
        method: "POST",
        headers: {
            "cache-control": "no-cache",
            "postman-token": "1c393233-0c8c-8ef1-3efe-3173b8928077"
        },
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>',
        after: function() {
            var images = $("#instafeed").find('a');
            $.each(images, function(index, image) {
                var delay = (index * 75) + 'ms';
                $(image).css('-webkit-animation-delay', delay);
                $(image).css('-moz-animation-delay', delay);
                $(image).css('-ms-animation-delay', delay);
                $(image).css('-o-animation-delay', delay);
                $(image).css('animation-delay', delay);
                $(image).addClass('animated flipInX');
            });
        },
        success: function(response) {//instead responseObj location??? and others
            var location = response.location;
            var latitude = location.lat;
            var longitude = location.lng;
            var currentApixu = 'https://api.apixu.com/v1/current.json?key=c696097710604a5c8a4154155170607&q=';
            var forecastApixu = 'https://api.apixu.com/v1/forecast.json?key=c696097710604a5c8a4154155170607&q=';
            var days = '&days=1';
            var hours = '&hours=24';
            //var weatherUrl = '';
            //var locationUrl = 'location';//if will become more location variants as = '';
            var weatherUrl_current = currentApixu + latitude + ',' + longitude;            
            var weatherUrl_ForecastDays = forecastApixu + latitude + ',' + longitude + days;
            var weatherUrl_ForecastHours = forecastApixu + latitude + ',' + longitude + hours;


            getWeatherInfo(weatherUrl_current); 
            //code
            getWeatherInfo(weatherUrl_ForecastDays);
            //code
            getWeatherInfo(weatherUrl_ForecastHours);
            //code
             //this function sends ajax request to weather API
            /*getForecastrInfo(latitude,longitude);*/
   
           //  function createNeweather(weatherUrl){//0000//???if this response contain *3 in this place of code list
           //          var weatherObj = {};
           //          //00
           //          weatherObj.weatherUrl = weatherUrl;//0000
           //          weatherObj.getWeatherInfo = function(){
           //          return this.weatherUrl;
           //          }
           //          return weatherObj;
           //      }
           //      //constr
           //  function Weather(weatherUrl){
           //      this.weatherUrl = weatherUrl;
           //      this.getWeatherInfo = function(){
           //          return this.weatherUrl;
           //      }
           //  }//oblastvidimosti obj???????????????????????????????????????????????????????????????????????????????????????
            
           //      //call constr
           //      var weatherUrl_current_obj1 = new Weather(weatherUrl_current);//{return this.responseBasik = weatherUrl_current});
           //      var weatherUrl_forecastDays_obj2 = new Weather(weatherUrl_forecastDays);//{return this.responseBasik = weatherUrl_forecastDays});
           //      var weatherUrl_forecastHours_obj3 = new Weather(weatherUrl_forecastHours);//{return this.responseBasik = weatherUrl_forecastHours});

           //              //weatherUrl_current_obj1.getWeatherInfo(weatherUrl_current_obj1.weatherUrl);
           //  getWeatherInfo(weatherUrl_current_obj1.weatherUrl);
           //  getWeatherInfo(weatherUrl_forecastDays_obj2.weatherUrl);
           //  getWeatherInfo(weatherUrl_forecastHours_obj3.weatherUrl);
           // /**
           // * @param weatherUrl_current_obj1
           // * @param weatherUrl_forecastDays_obj2
           // * @param weatherUrl_forecastHours_obj3
           // * @returns weatherUrl_obj
           // */
           // function merge_options(weatherUrl_current_obj1, weatherUrl_forecastDays_obj2, weatherUrl_forecastHours_obj3){
           //      var weatherUrl_obj = {};
           //      for (var weatherUrl in weatherUrl_current_obj1) {weatherUrl_obj[weatherUrl] = weatherUrl_current_obj1[weatherUrl];}
           //      for (var weatherUrl in weatherUrl_forecastDays_obj2) {weatherUrl_obj[weatherUrl] = weatherUrl_forecastDays_obj2[weatherUrl];}
           //      for (var weatherUrl in weatherUrl_forecastHours_obj3) {weatherUrl_obj[weatherUrl] = weatherUrl_forecastHours_obj3[weatherUrl];}
           //          return weatherUrl_obj;
           // } 
           //  getWeatherInfo(weatherUrl_obj);    

        }
    }).fail(function() {
        $('.border').append('<p>Error: Could not load weather data!</p>');
    });

    // code for ajax request to weather API
    function getWeatherInfo(url) {

        $.ajax({
            url: url,
            dataType: 'json',
            success: function(response) {//0000//instead responseObj location //or mergered response?
               // var location = response.location;
                ///////////////var responseBasik = '';              
               //  var current_response = 'currentApixu';
               //  var forecastDay_response = 'forecastday.day';
               //  var forecastHour_response = 'forecastday.hour';
               // ///////////// var response =  response. + responseBasik;
               //  //detect response//if response became as property ofmy obj? 
               //  function createNewResponse(response){//0000
               //      var responseObj = {};
               //      //00
               //      responseObj.response = response;//0000
               //      return responseObj;
               //  }
               //  function Response(response){//00
               //  return this.response = response;//0000
                
               //  }

               //  var responseCurrent_obj = new Response(function(response){return this.response = response. + current_response});
               //  var responseForecastDay_obj = new Response(function(response){return this.response = response. + forecastDay_response});
               //  var responseForecastHour_obj = new Response(function(response){return this.response = response. + forecastHour_response});

                //  $('.location').text(location.name + ', ' + location.country);
                // //newFeed() toggle with current   
                // $('.avgtemp_c').html(Math.round(responseForecastDay.avgtemp_c)  + '<a class="fan"> ºC</a>');
                // $('.temp_c').html(Math.round(responseCurrent.temp_c) + '<a class="cel"> ºC</a>');
                // //$('.temp_f').html(Math.round(responseCurrent.temp_f) + '<a class="fah"> ºF</a>');
                // $('.feelslike_c').html(Math.round(responseCurrent.feelslike_c) + '<a class="cel"> ºC</a>');
                // $('.feelslike_f').html(Math.round(responseCurrent.feelslike_f) + '<a class="fah"> ºF</a>');

                // /*('.wind_dir' + '.wind_kph' + '.wind_mph').html(current.wind_dir + Math.round((current.wind_kph)* 0.27777777777778)  + '<a class="cel"> mitres/h</a>' + Math.round(current.wind_mph)  + '<a class="fah"> miles/h</a>');
                //  */
                // $('.wind_dir').html(responseCurrent.wind_dir);//-
                // //toggle
                // $('.avgvis_km').html(Math.round(responseForecastDay.avgvis_km * 0.27777777777778) + '<a class="fan"> m/s</a>');
                // $('.wind_kph').html(Math.round(responseCurrent.wind_kph * 0.27777777777778) + '<a class="cel"> m/s</a>');
                // //$('.wind_mph').html(Math.round(responseCurrent.wind_mph) + '<a class="fah"> mph</a>');

                // $('.text').text(responseCurrent.condition.text);


                // $('.day_icon').attr('src', responseForecastDay.condition.icon  + '<a class="fan"> m/s</a>');
                // $('.icon').attr('src', responseCurrent.condition.icon  + '<a class="cel"> m/s</a>');

                // //newFeed() toggle with current   
                //         // $('.avgtemp_c').html(Math.round(responseForecastDay.avgtemp_c)  + '<a class="cel"> ºC</a>');
                //         // $('.avgtemp_f').html(Math.round(responseForecastDay.avgtemp_f)  + '<a class="fah"> ºF</a>');

                //        //for 24 hour ?
                //         $('.hour_temp_c').html(Math.round(responseForecastHour.temp_c)  + '<a class="cel"> ºC</a>');
                //         $('.hour_temp_f').html(Math.round(responseForecastHour.temp_f)  + '<a class="fah"> ºF</a>');


                //         $('.hour_will_it_snow').html(responseForecastHour.will_it_snow  + '<a class=""> </a>');
                //         $('.hour_will_it_rain').html(responseForecastHour.will_it_rain  + '<a class=""> </a>'); 

                var location = response.location;
                var current = response.currentApixu;
                var forecastDay = response.forecastday.day;
                var forecastHour = response.forecastday.hour; 

                $('.location').text(location.name + ', ' + location.country);
                //newFeed() toggle with current   
                $('.temp_c').html(Math.round(current.temp_c) + '<a class="cel"> ºC</a>');
                $('.temp_f').html(Math.round(current.temp_f) + '<a class="fah"> ºF</a>');
                $('.feelslike_c').html(Math.round(current.feelslike_c) + '<a class="cel"> ºC</a>');
                //$('.feelslike_f').html(Math.round(current.feelslike_f) + '<a class="fah"> ºF</a>');
                $('.avgtemp_c').html(Math.round(forecastDay.avgtemp_c)  + '<a class="fan"> ºC</a>');

                /*('.wind_dir' + '.wind_kph' + '.wind_mph').html(current.wind_dir + Math.round((current.wind_kph)* 0.27777777777778)  + '<a class="cel"> mitres/h</a>' + Math.round(current.wind_mph)  + '<a class="fah"> miles/h</a>');
                 */
                $('.wind_dir').html(current.wind_dir);//-
                //toggle
                $('.avgvis_km').html(Math.round(forecastDay.avgvis_km * 0.27777777777778) + '<a class="fan"> m/s</a>');
                $('.wind_kph').html(Math.round(current.wind_kph * 0.27777777777778) + '<a class="cel"> m/s</a>');
                //$('.wind_mph').html(Math.round(current.wind_mph) + '<a class="fah"> mph</a>');

                $('.text').text(current.condition.text);


                $('.day_icon').attr('src', forecastDay.condition.icon  + '<a class="fan"> m/s</a>');
                $('.icon').attr('src', current.condition.icon  + '<a class="cel"> m/s</a>');

                //newFeed() toggle with current   
                        // $('.avgtemp_c').html(Math.round(forecastDay.avgtemp_c)  + '<a class="cel"> ºC</a>');
                        // $('.avgtemp_f').html(Math.round(forecastDay.avgtemp_f)  + '<a class="fah"> ºF</a>');

                       //for 24 hour ?
                        $('.hour_temp_c').html(Math.round(forecastHour.temp_c)  + '<a class="cel"> ºC</a>');
                        $('.hour_temp_f').html(Math.round(forecastHour.temp_f)  + '<a class="fah"> ºF</a>');


                        $('.hour_will_it_snow').html(forecastHour.will_it_snow  + '<a class=""> </a>');
                        $('.hour_will_it_rain').html(forecastHour.will_it_rain  + '<a class=""> </a>'); 


                //   function K2F(k){
                //     return Math.round(k*(9/5)-459.67);
                // }

                // function K2C(k){
                //     return Math.round(k - 273.15);
                // }   
                var theConservationTime = new Date();  
                theConservationTime.setUTCMonth(7) + ':' + setUTCDate(15);//???????????????????????????????
                var today = new Date();
                var tomorrowConservation = today.getUTCMonth() + ':' + today.getUTCDate() + 1;//if tommorrow is 15 august

                var theSalaryDayTomorrow = new Date();
                theSalaryDayTomorrow.setUTCDate(15);
                var today = new Date();
                var tomorrow = today.getUTCDate() + 1;//if tommorrow is 15
    
                var theSalaryDay = new Date();
                theSalaryDay.setUTCDate(15);
                var today = new Date();
                var day = today.getUTCDate(); //if 15

                var isSnow = forecastHour.will_it_snow;         
                var isRain = forecastHour.will_it_rain; 

                var f = Math.round(current.temp_f);
                var c = Math.round(current.feelslike_c);
                var cc = Math.round(forecastDay.avgtemp_c);//toggle????
                var nextButton = document.getElementById('next-button');

                var userFeed = new Instafeed({ // http://instagram.pixelunion.net/  ORhttps://api.instagram.com/v1/users/self/media/liked?access_token=ACCESS-TOKEN  
                    get: 'user',
                    userId: '6909994807',
                    accessToken: '6909994807.1677ed0.128066a7b9984d5392b0143cbde87360',
                    //resolution:"low_resolution",  
                    template: '<a class="fancybox" rel="instagram" href="{{link}}"target="_blank"><img src="{{image}}" /></a>',
                    limit: 60,
                    // every time we load more, run this function
                    after: function() {
                        // disable button if no more results to load
                        if (!this.hasNext()) {
                            nextButton.setAttribute('disabled', 'disabled');
                        }
                    },
                    success: function() {
                        foundImages = 0;
                        maxImages = 60;
                    },
                    //window.setTimeout(function() {
                    filter: function(image) {


                        if ((f == '86') && (image.tags.indexOf('86') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((today == theSalaryDay) && (image.tags.indexOf('id4wReNew') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((today == theConservationTime) && (image.tags.indexOf('id4wConsCucu') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if(( isSnow == '1') && (image.tags.indexOf('id4wSnow') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if(( isRain == '1') && (image.tags.indexOf('id4wRain') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if(( tomorrow == theSalaryDayTomorrow ) && (image.tags.indexOf('id4wReNew') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '85') && (image.tags.indexOf('85') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '84') && (image.tags.indexOf('84') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '83') && (image.tags.indexOf('83') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '82') && (image.tags.indexOf('82') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '81') && (image.tags.indexOf('81') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '80') && (image.tags.indexOf('80') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '79') && (image.tags.indexOf('79') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '78') && (image.tags.indexOf('78') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '77') && (image.tags.indexOf('77') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '6') && (image.tags.indexOf('76') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '75') && (image.tags.indexOf('75') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '74') && (image.tags.indexOf('74') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '73') && (image.tags.indexOf('73') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '72') && (image.tags.indexOf('72') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '71') && (image.tags.indexOf('71') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '70') && (image.tags.indexOf('70') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '69') && (image.tags.indexOf('69') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '68') && (image.tags.indexOf('68') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '67') && (image.tags.indexOf('67') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '66') && (image.tags.indexOf('66') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '65') && (image.tags.indexOf('65') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '64') && (image.tags.indexOf('64') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '63') && (image.tags.indexOf('63') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '62') && (image.tags.indexOf('62') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '61') && (image.tags.indexOf('61') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '60') && (image.tags.indexOf('60') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '59') && (image.tags.indexOf('59') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '58') && (image.tags.indexOf('58') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '57') && (image.tags.indexOf('57') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '56') && (image.tags.indexOf('56') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '55') && (image.tags.indexOf('55') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '54') && (image.tags.indexOf('54') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '53') && (image.tags.indexOf('53') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '52') && (image.tags.indexOf('52') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '51') && (image.tags.indexOf('51') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '50') && (image.tags.indexOf('50') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '49') && (image.tags.indexOf('49') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '48') && (image.tags.indexOf('48') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '47') && (image.tags.indexOf('47') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '46') && (image.tags.indexOf('46') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '45') && (image.tags.indexOf('45') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '44') && (image.tags.indexOf('44') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '43') && (image.tags.indexOf('43') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '42') && (image.tags.indexOf('42') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '41') && (image.tags.indexOf('41') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '40' || cc == '40' || f == '40') && (image.tags.indexOf('40') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '39' || cc == '39' || f == '39') && (image.tags.indexOf('39') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '38' || cc == '38' || f == '38') && (image.tags.indexOf('38') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '37' || cc == '37' || f == '27') && (image.tags.indexOf('37') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '36' || cc == '36' || f == '36') && (image.tags.indexOf('36') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '35' || cc == '35' || f == '35') && (image.tags.indexOf('35') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '34' || cc == '34' || f == '34') && (image.tags.indexOf('34') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '33' || cc == '33' || f == '33') && (image.tags.indexOf('33') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '32' || cc == '32' || f == '32') && (image.tags.indexOf('32') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '31' || cc == '31' || f == '31') && (image.tags.indexOf('31') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '30' || cc == '30' || f == '30') && (image.tags.indexOf('30') >= 0 && foundImages < maxImages)) { //++++
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '29' || cc == '29' || f == '29') && (image.tags.indexOf('29') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '28' || cc == '28' || f == '28') && (image.tags.indexOf('28') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '27' || cc == '27' || f == '27') && (image.tags.indexOf('27') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '26' || cc == '26' || f == '26') && (image.tags.indexOf('26') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '25' || cc == '25' || f == '25') && (image.tags.indexOf('25') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '24' || cc == '24' || f == '24') && (image.tags.indexOf('24') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '23' || cc == '23' || f == '23') && (image.tags.indexOf('23') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '22' || cc == '22' || f == '22') && (image.tags.indexOf('22') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '21' || cc == '21' || f == '21') && (image.tags.indexOf('21') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '20' || cc == '20' || f == '20') && (image.tags.indexOf('20') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '19' || cc == '19' || f == '19') && (image.tags.indexOf('19') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '18' || cc == '18' || f == '18') && (image.tags.indexOf('18') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '17' || cc == '17' || f == '17') && (image.tags.indexOf('17') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '16' || cc == '16' || f == '16') && (image.tags.indexOf('16') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '15' || cc == '15' || f == '15') && (image.tags.indexOf('15') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '14' || cc == '14' || f == '14') && (image.tags.indexOf('14') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '13' || cc == '13' || f == '13') && (image.tags.indexOf('13') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '12' || cc == '12' || f == '12') && (image.tags.indexOf('12') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '11' || cc == '11' || f == '11') && (image.tags.indexOf('11') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '10' || cc == '10' || f == '10') && (image.tags.indexOf('10') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '9' || cc == '9' || f == '9') && (image.tags.indexOf('9') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '8' || cc == '8' || f == '8') && (image.tags.indexOf('8') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '7' || cc == '7' || f == '7') && (image.tags.indexOf('7') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '6' || cc == '6' || f == '6') && (image.tags.indexOf('6') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '5' || cc == '5' || f == '5') && (image.tags.indexOf('5') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '4' || cc == '4' || f == '4') && (image.tags.indexOf('4') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '3' || cc == '3' || f == '3') && (image.tags.indexOf('3') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '2' || cc == '2' || f == '2') && (image.tags.indexOf('2') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '1' || cc == '1' || f == '1') && (image.tags.indexOf('1') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '0' || cc == '0' || f == '0') && (image.tags.indexOf('0') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-1' ||cc == '-1' ||  f == '-1') && (image.tags.indexOf('01') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-2' ||cc == '-2' ||  f == '-2') && (image.tags.indexOf('02') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-3' || cc == '-3' || f == '-3') && (image.tags.indexOf('03') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-4' || cc == '-4' || f == '-4') && (image.tags.indexOf('04') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-5' || cc == '-5' || f == '-5') && (image.tags.indexOf('05') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-6' || cc == '-6' || f == '-6') && (image.tags.indexOf('06') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-7' || cc == '-7' || f == '-7') && (image.tags.indexOf('07') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-8' || cc == '-8' || f == '-8') && (image.tags.indexOf('08') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-9' || cc == '-9' || f == '-9') && (image.tags.indexOf('09') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-10' ||cc == '-10' ||  f == '-10') && (image.tags.indexOf('010') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-11' ||cc == '-11' ||  f == '-11') && (image.tags.indexOf('011') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-12' ||cc == '-12' ||  f == '-12') && (image.tags.indexOf('012') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-13' ||cc == '-13' ||  f == '-13') && (image.tags.indexOf('013') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-14' ||cc == '-14' ||  f == '-14') && (image.tags.indexOf('014') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-15' || cc == '-15' || f == '-15') && (image.tags.indexOf('015') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-16' || cc == '-16' || f == '-16') && (image.tags.indexOf('016') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-17' || cc == '-17' || f == '-17') && (image.tags.indexOf('017') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-18' || cc == '-18' || f == '-18') && (image.tags.indexOf('018') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-19' || cc == '-19' || f == '-19') && (image.tags.indexOf('019') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-20' || cc == '-20' || f == '-20') && (image.tags.indexOf('020') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-21' || cc == '-21' || f == '-21') && (image.tags.indexOf('021') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-22' || cc == '-22' || f == '-22') && (image.tags.indexOf('022') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-23' || cc == '-23' || f == '-23') && (image.tags.indexOf('023') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-24' || cc == '-24' || f == '-24') && (image.tags.indexOf('024') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-25' || cc == '-25' || f == '-25') && (image.tags.indexOf('025') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-26' || cc == '-26' || f == '-26') && (image.tags.indexOf('026') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-27' || cc == '-27' || f == '-27') && (image.tags.indexOf('027') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-28' || cc == '-28' || f == '-28') && (image.tags.indexOf('028') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-29' || cc == '-29' || f == '-29') && (image.tags.indexOf('029') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                         }

                        return false;

                    } //filter
                    //cc == '40' ||    }, 10000);

                });

                // code for ajax request to weather API
  function getWeatherInfo(url) {

    $.ajax({
      url: url,
      dataType: 'json',
      success: function(response) {
        var location = response.location;
    var forecastDay = response.forecastday.day;
    var forecastHour = response.forecastday.hour; 
        $('.location').text(location.name + ', ' + location.country);
          
            //newFeed() toggle with current   
        $('.avgtemp_c').html(Math.round(forecastDay.avgtemp_c)  + '<a class="cel"> ºC</a>');
         $('.avgtemp_f').html(Math.round(forecastDay.avgtemp_f)  + '<a class="fah"> ºF</a>');
          
         $('.day_icon').attr('src', forecastDay.condition.icon);
//        //for 24 hour ?
//         $('.hour_temp_c').html(Math.round(forecastHour.temp_c)  + '<a class="cel"> ºC</a>');
//         $('.hour_temp_f').html(Math.round(forecastHour.temp_f)  + '<a class="fah"> ºF</a>');
          
    
//         $('.hour_will_it_snow').html(forecastHour.will_it_snow  + '<a class=""> </a>');
//         $('.hour_will_it_rain').html(forecastHour.will_it_rain  + '<a class=""> </a>'); 
// var theConservationMonth = new Date();
// theConservationMonth.setUTCMonth(7);
// var today = new Date();
// var tomorrow = today.getUTCMonth();
      
// var theConservationDate = new Date();
// theConservationDate.setUTCDate(15);
// var today = new Date();
// var tomorrow = today.getUTCDate() + 1;//if tommorrow is 15 august  

var theConservationTime = new Date();  
theConservationTime.setUTCMonth(7) + ':' + setUTCDate(15);//???????????????????????????????
var today = new Date();
var tomorrowConservation = today.getUTCMonth() + ':' + today.getUTCDate() + 1;//if tommorrow is 15 august

var theSalaryDay = new Date();
theSalaryDay.setUTCDate(15);
var today = new Date();
var tomorrow = today.getUTCDate() + 1;//if tommorrow is 15

var isSnow = forecastHour.will_it_snow;         
var isRain = forecastHour.will_it_rain;         
var f = '';//Math.round(forecastDay.avgtemp_f);
var c = Math.round(forecastDay.avgtemp_c);          
var nextButtonForecast = document.getElementById('next-button-forecast'); //toggle butt next-button   
          
var userFeedForecast = new Instafeed({// http://instagram.pixelunion.net/  ORhttps://api.instagram.com/v1/users/self/media/liked?access_token=ACCESS-TOKEN  
get: 'user',
userId: '6909994807',
accessToken: '6909994807.1677ed0.128066a7b9984d5392b0143cbde87360',
//resolution:"low_resolution",  
   template: '<a class="fancybox" rel="instagram" href="{{link}}"target="_blank"><img src="{{image}}" /></a>',
   limit: 60,
                  // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                nextButtonForecast.setAttribute('disabled', 'disabled');
            }

        },
        success: function() {
        foundImages = 0;
        maxImages = 60;
    },
          //window.setTimeout(function() {
    filter: function(image) {

      
      if(( f == '86') && (image.tags.indexOf('86') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
         else if ((today == theConservationTime) && (image.tags.indexOf('id4wConsCucu') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
          }
         else if(( isSnow == '1') && (image.tags.indexOf('id4wSnow') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
     else if(( isRain == '1') && (image.tags.indexOf('id4wRain') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
         
     else if(( tomorrow == theSalaryDay ) && (image.tags.indexOf('id4wReNew') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
       
         else if(( f == '85') && (image.tags.indexOf('85') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '84') && (image.tags.indexOf('84') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '83') && (image.tags.indexOf('83') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '82') && (image.tags.indexOf('82') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '81') && (image.tags.indexOf('81') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((f == '80') && (image.tags.indexOf('80') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '79') && (image.tags.indexOf('79') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '78') && (image.tags.indexOf('78') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '77') && (image.tags.indexOf('77') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '6') && (image.tags.indexOf('76') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '75') && (image.tags.indexOf('75') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '74') && (image.tags.indexOf('74') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '73') && (image.tags.indexOf('73') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '72') && (image.tags.indexOf('72') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '71') && (image.tags.indexOf('71') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '70') && (image.tags.indexOf('70') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '69') && (image.tags.indexOf('69') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '68') && (image.tags.indexOf('68') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '67') && (image.tags.indexOf('67') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '66') && (image.tags.indexOf('66') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '65') && (image.tags.indexOf('65') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '64') && (image.tags.indexOf('64') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '63') && (image.tags.indexOf('63') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '62') && (image.tags.indexOf('62') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '61') && (image.tags.indexOf('61') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '60') && (image.tags.indexOf('60') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '59') && (image.tags.indexOf('59') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '58') && (image.tags.indexOf('58') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '57') && (image.tags.indexOf('57') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '56') && (image.tags.indexOf('56') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '55') && (image.tags.indexOf('55') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '54') && (image.tags.indexOf('54') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '53') && (image.tags.indexOf('53') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '52') && (image.tags.indexOf('52') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '51') && (image.tags.indexOf('51') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '50') && (image.tags.indexOf('50') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '49') && (image.tags.indexOf('49') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '48') && (image.tags.indexOf('48') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '47') && (image.tags.indexOf('47') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '46') && (image.tags.indexOf('46') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '45') && (image.tags.indexOf('45') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '44') && (image.tags.indexOf('44') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '43') && (image.tags.indexOf('43') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '42') && (image.tags.indexOf('42') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '41') && (image.tags.indexOf('41') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '40'|| f == '40') && (image.tags.indexOf('40') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '39'|| f == '39') && (image.tags.indexOf('39') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '38'|| f == '38') && (image.tags.indexOf('38') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '37'|| f == '27') && (image.tags.indexOf('37') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '36'|| f == '36') && (image.tags.indexOf('36') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '35'|| f == '35') && (image.tags.indexOf('35') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '34'|| f == '34') && (image.tags.indexOf('34') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '33'|| f == '33') && (image.tags.indexOf('33') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '32'|| f == '32') && (image.tags.indexOf('32') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
          else if((c == '31'|| f == '31') && (image.tags.indexOf('31') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if ((c == '30'|| f == '30') && (image.tags.indexOf('30') >= 0 && foundImages < maxImages)) {//++++
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '29'|| f == '29') && (image.tags.indexOf('29') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '28'|| f == '28') && (image.tags.indexOf('28') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '27'|| f == '27') && (image.tags.indexOf('27') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '26'|| f == '26') && (image.tags.indexOf('26') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '25'|| f == '25') && (image.tags.indexOf('25') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '24'|| f == '24') && (image.tags.indexOf('24') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '23'|| f == '23') && (image.tags.indexOf('23') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '22'|| f == '22') && (image.tags.indexOf('22') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '21'|| f == '21') && (image.tags.indexOf('21') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '20'|| f == '20') && (image.tags.indexOf('20') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '19'|| f == '19') && (image.tags.indexOf('19') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '18'|| f == '18') && (image.tags.indexOf('18') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '17'|| f == '17') && (image.tags.indexOf('17') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '16'|| f == '16') && (image.tags.indexOf('16') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '15'|| f == '15') && (image.tags.indexOf('15') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '14'|| f == '14') && (image.tags.indexOf('14') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '13'|| f == '13') && (image.tags.indexOf('13') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '12'|| f == '12') && (image.tags.indexOf('12') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '11'|| f == '11') && (image.tags.indexOf('11') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '10'|| f == '10') && (image.tags.indexOf('10') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '9'|| f == '9') && (image.tags.indexOf('9') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '8'|| f == '8') && (image.tags.indexOf('8') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '7'|| f == '7') && (image.tags.indexOf('7') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '6'|| f == '6') && (image.tags.indexOf('6') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '5'|| f == '5') && (image.tags.indexOf('5') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '4'|| f == '4') && (image.tags.indexOf('4') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '3'|| f == '3') && (image.tags.indexOf('3') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '2'|| f == '2') && (image.tags.indexOf('2') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '1'|| f == '1') && (image.tags.indexOf('1') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '0'|| f == '0') && (image.tags.indexOf('0') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-1'|| f == '-1') && (image.tags.indexOf('01') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-2'|| f == '-2') && (image.tags.indexOf('02') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-3'|| f == '-3') && (image.tags.indexOf('03') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-4'|| f == '-4') && (image.tags.indexOf('04') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-5'|| f == '-5') && (image.tags.indexOf('05') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-6'|| f == '-6') && (image.tags.indexOf('06') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-7'|| f == '-7') && (image.tags.indexOf('07') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-8'|| f == '-8') && (image.tags.indexOf('08') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-9'|| f == '-9') && (image.tags.indexOf('09') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-10'|| f == '-10') && (image.tags.indexOf('010') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-11'|| f == '-11') && (image.tags.indexOf('011') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-12'|| f == '-12') && (image.tags.indexOf('012') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-13'|| f == '-13') && (image.tags.indexOf('013') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-14'|| f == '-14') && (image.tags.indexOf('014') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-15'|| f == '-15') && (image.tags.indexOf('015') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-16'|| f == '-16') && (image.tags.indexOf('016') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-17'|| f == '-17') && (image.tags.indexOf('017') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-18'|| f == '-18') && (image.tags.indexOf('018') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-19'|| f == '-19') && (image.tags.indexOf('019') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-20'|| f == '-20') && (image.tags.indexOf('020') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-21'|| f == '-21') && (image.tags.indexOf('021') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-22'|| f == '-22') && (image.tags.indexOf('022') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-23'|| f == '-23') && (image.tags.indexOf('023') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-24'|| f == '-24') && (image.tags.indexOf('024') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-25'|| f == '-25') && (image.tags.indexOf('025') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-26'|| f == '-26') && (image.tags.indexOf('026') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-27'|| f == '-27') && (image.tags.indexOf('027') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-28'|| f == '-28') && (image.tags.indexOf('028') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-29'|| f == '-29') && (image.tags.indexOf('029') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      
        return false;
     
 }  //filter
                                  //   }, 10000);

}); 
            // bind the load more button
        nextButtonForecast.addEventListener('click', function(event) {
                event.preventDefault();
                feed.next();
        });
        userFeedForecast.run();           
          


              
                // bind the load more button
                nextButton.addEventListener('click', function(event) {
                    event.preventDefault();
                    feed.next();
                });
                userFeed.run();



            }
        }).fail(function() {
            $('.border').append('<p>Error: Could not load weather data!</p>');
        });
    }
next-button-forecast
    // Initially, temp. is shown in celsius
    $('.next-button-forecast').hide();
    $('.temp_f').hide();
    $('.day_icon').hide();
    $('.avgvis_km').hide();
    //$('.wind_mph').hide();
    $('.avgtemp_c').hide();
    $('.hour_temp_f').hide();

    $('.next-button, .next-button-forecast').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.next-button').hide();
            $('.next-button-forecast').show();
        } else {
            $('.next-button-forecast').hide();
            $('.next-button').show();
        }
    });
    $('.icon, .day_icon').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.icon').hide();
            $('.day_icon').show();
        } else {
            $('.day_icon').hide();
            $('.icon').show();
        }
    });

    // code for toggling temp. (celsius/fahrenheit)
    // $('.temp_c, .temp_f').on('click', 'a', function(event) {
    //     event.preventDefault();
    //     if (event.target.className === 'cel') {
    //         $('.temp_c').hide();
    //         $('.temp_f').show();
    //     } else {
    //         $('.temp_f').hide();
    //         $('.temp_c').show();
    //     }
    // });
    $('.feelslike_c, .avgtemp_c').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.feelslike_c').hide();
            $('.avgtemp_c').show();
        } else {
            $('.avgtemp_c').hide();
            $('.feelslike_c').show();
        }
    });

    // $('.wind_kph, .wind_mph').on('click', 'a', function(event) {
    //     event.preventDefault();
    //     if (event.target.className === 'cel') {
    //         $('.wind_kph').hide();
    //         $('.wind_mph').show();
    //     } else {
    //         $('.wind_mph').hide();
    //         $('.wind_kph').show();
    //     }
    // });
    $('.wind_kph, .avgvis_km').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.wind_kph').hide();
            $('.avgvis_km').show();
        } else {
            $('.avgvis_km').hide();
            $('.wind_kph').show();
        }
    });
    //code for toggling temp. (celsius/fahrenheit)
      $('.hour_temp_c, .hour_temp_f').on('click', 'a', function(event) {
        event.preventDefault();
        if(event.target.className === 'cel') {
          $('.hour_temp_c').hide();
          $('.hour_temp_f').show();
        } else {
          $('.hour_temp_f').hide();
          $('.hour_temp_c').show();
        }
      });
     // code for toggling temp. (celsius/fahrenheit)
      // $('.avgtemp_c, .avgtemp_f').on('click', 'a', function(event) {
      //   event.preventDefault();
      //   if(event.target.className === 'cel') {
      //     $('.avgtemp_c').hide();
      //     $('.avgtemp_f').show();
      //   } else {
      //     $('.avgtemp_f').hide();
      //     $('.avgtemp_c').show();
      //   }
      // });

//toggle curr_or_forecastday 
      // code for toggling temp. (celsius/fahrenheit)
      $('.temp_c, .temp_f').on('click', 'a', function(event) {
        event.preventDefault();
        if(event.target.className === 'cel') {
          $('.temp_f').hide();
          $('.temp_c').show();
        } else {
          $('.temp_c').hide();
          $('.temp_f').show();
        }
      });
});
  <!--script>
        var galleryFeed = new Instafeed({
  get: "user",
  userId: 6715816580,//6909994807,
  accessToken: '6715816580.1677ed0.2e945d7bd1ae403cbdcca139dbc1b450',//"6909994807.1677ed0.128066a7b9984d5392b0143cbde87360",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 6,
  //template: '<div class="col-xs-12 col-sm-6 col-md-4">$<span id="Value">0</span><button width="500" height="500" id = add class="button button1" onclick="javascript:add(1)">Add Value</button><button width="500" height="500" id = reset class="button button1" onclick="javascript:reset()">Reset</button><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
    template: '<div class="col-xs-12 col-sm-6 col-md-4"><div class="like-area ml-auto mr-0"><a href="#" id="like-link" class="like-link">Like</a><span id="like-counter" class="like-counter">0</span></div><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  //template: '<div class="col-xs-12 col-sm-6 col-md-4"><p><a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span></a><a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span> Love it</a></p><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  //template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
  
    success: function(){
    foundImg = 0;
  maxImg = 1000;      
    },
    filter: function(image){
      if(image.tags.indexOf('f') > = 1 && foundImg < maxImg){
          foundImg = foundImg + 1;
        return true;
      }return false;
    }
});
galleryFeed.run();
var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});
        </script--> 
