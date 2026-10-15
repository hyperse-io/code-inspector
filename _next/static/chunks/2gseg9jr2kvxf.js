(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83593,(t,e,i)=>{t.e,e.exports=function(t,e){var i=e.prototype,n=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return n.bind(this)(t);var r=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return n.bind(this)(s)}}},346628,(t,e,i)=>{t.e,e.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,n=/\d\d/,r=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t*=1)+(t>68?1900:2e3)},c=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],d=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var i,n=a.meridiem;if(n){for(var r=1;r<=24;r+=1)if(t.indexOf(n(r,0,e))>-1){i=r>12;break}}else i=t===(e?"pm":"PM");return i},h={A:[s,function(t){this.afternoon=u(t,!1)}],a:[s,function(t){this.afternoon=u(t,!0)}],Q:[i,function(t){this.month=3*(t-1)+1}],S:[i,function(t){this.milliseconds=100*t}],SS:[n,function(t){this.milliseconds=10*t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,c("seconds")],ss:[r,c("seconds")],m:[r,c("minutes")],mm:[r,c("minutes")],H:[r,c("hours")],h:[r,c("hours")],HH:[r,c("hours")],hh:[r,c("hours")],D:[r,c("day")],DD:[n,c("day")],Do:[s,function(t){var e=a.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],w:[r,c("week")],ww:[n,c("week")],M:[r,c("month")],MM:[n,c("month")],MMM:[s,function(t){var e=d("months"),i=(d("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[s,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,c("year")],YY:[n,function(t){this.year=o(t)}],YYYY:[/\d{4}/,c("year")],Z:l,ZZ:l};return function(i,n,r){r.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(o=i.parseTwoDigitYear);var s=n.prototype,c=s.parse;s.parse=function(i){var n=i.date,s=i.utc,o=i.args;this.$u=s;var l=o[1];if("string"==typeof l){var d=!0===o[2],u=!0===o[3],f=o[2];u&&(f=o[2]),a=this.$locale(),!d&&f&&(a=r.Ls[f]),this.$d=function(i,n,r,s){try{if(["x","X"].indexOf(n)>-1)return new Date(("X"===n?1e3:1)*i);var o=(function(i){var n,r;n=i,r=a&&a.formats;for(var s=(i=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,i,n){var s=n&&n.toUpperCase();return i||r[n]||t[n]||r[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(e),o=s.length,c=0;c<o;c+=1){var l=s[c],d=h[l],u=d&&d[0],f=d&&d[1];s[c]=f?{regex:u,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,n=0;i<o;i+=1){var r=s[i];if("string"==typeof r)n+=r.length;else{var a=r.regex,c=r.parser,l=t.slice(n),d=a.exec(l)[0];c.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(n)(i),c=o.year,l=o.month,d=o.day,u=o.hours,f=o.minutes,m=o.seconds,p=o.milliseconds,y=o.zone,k=o.week,g=new Date,v=d||(c||l?1:g.getDate()),b=c||g.getFullYear(),x=0;c&&!l||(x=l>0?l-1:g.getMonth());var T,w=u||0,$=f||0,_=m||0,D=p||0;return y?new Date(Date.UTC(b,x,v,w,$,_,D+60*y.offset*1e3)):r?new Date(Date.UTC(b,x,v,w,$,_,D)):(T=new Date(b,x,v,w,$,_,D),k&&(T=s(T).week(k).toDate()),T)}catch(t){return new Date("")}}(n,l,s,r),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(d||u)&&n!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var m=l.length,p=1;p<=m;p+=1){o[1]=l[p-1];var y=r.apply(this,o);if(y.isValid()){this.$d=y.$d,this.$L=y.$L,this.init();break}p===m&&(this.$d=new Date(""))}else c.call(this,i)}}}()},205918,(t,e,i)=>{t.e,e.exports=function(){"use strict";var t,e,i=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,n=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,r={years:31536e6,months:2628e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},s=function(t){return t instanceof u},a=function(t,e,i){return new u(t,i,e.$l)},o=function(t){return e.p(t)+"s"},c=function(t){return t<0},l=function(t){return c(t)?Math.ceil(t):Math.floor(t)},d=function(t,e){return t?c(t)?{negative:!0,format:""+Math.abs(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},u=function(){function c(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return a(t*r[o(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(e){s.$d[o(e)]=t[e]}),this.calMilliseconds(),this;if("string"==typeof t){var c=t.match(i);if(c){var l=c.slice(2).map(function(t){return null!=t?Number(t):0});return this.$d.years=l[0],this.$d.months=l[1],this.$d.weeks=l[2],this.$d.days=l[3],this.$d.hours=l[4],this.$d.minutes=l[5],this.$d.seconds=l[6],this.calMilliseconds(),this}}return this}var u=c.prototype;return u.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(e,i){return e+(t.$d[i]||0)*r[i]},0)},u.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=l(t/31536e6),t%=31536e6,this.$d.months=l(t/2628e6),t%=2628e6,this.$d.days=l(t/864e5),t%=864e5,this.$d.hours=l(t/36e5),t%=36e5,this.$d.minutes=l(t/6e4),t%=6e4,this.$d.seconds=l(t/1e3),t%=1e3,this.$d.milliseconds=t},u.toISOString=function(){var t=d(this.$d.years,"Y"),e=d(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var n=d(i,"D"),r=d(this.$d.hours,"H"),s=d(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var o=d(a,"S"),c=t.negative||e.negative||n.negative||r.negative||s.negative||o.negative,l=r.format||s.format||o.format?"T":"",u=(c?"-":"")+"P"+t.format+e.format+n.format+l+r.format+s.format+o.format;return"P"===u||"-P"===u?"P0D":u},u.toJSON=function(){return this.toISOString()},u.format=function(t){var i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return(t||"YYYY-MM-DDTHH:mm:ss").replace(n,function(t,e){return e||String(i[t])})},u.as=function(t){return this.$ms/r[o(t)]},u.get=function(t){var e=this.$ms,i=o(t);return"milliseconds"===i?e%=1e3:e="weeks"===i?l(e/r[i]):this.$d[i],e||0},u.add=function(t,e,i){var n;return n=e?t*r[o(e)]:s(t)?t.$ms:a(t,this).$ms,a(this.$ms+n*(i?-1:1),this)},u.subtract=function(t,e){return this.add(t,e,!0)},u.locale=function(t){var e=this.clone();return e.$l=t,e},u.clone=function(){return a(this.$ms,this)},u.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},c}(),h=function(t,e,i){return t.add(e.years()*i,"y").add(e.months()*i,"M").add(e.days()*i,"d").add(e.hours()*i,"h").add(e.minutes()*i,"m").add(e.seconds()*i,"s").add(e.milliseconds()*i,"ms")};return function(i,n,r){t=r,e=r().$utils(),r.duration=function(t,e){return a(t,{$l:r.locale()},e)},r.isDuration=s;var o=n.prototype.add,c=n.prototype.subtract;n.prototype.add=function(t,e){return s(t)?h(this,t,1):o.bind(this)(t,e)},n.prototype.subtract=function(t,e){return s(t)?h(this,t,-1):c.bind(this)(t,e)}}}()},39754,(t,e,i)=>{t.e,e.exports=function(t,e,i){var n=function(t){return t.add(4-t.isoWeekday(),"day")},r=e.prototype;r.isoWeekYear=function(){return n(this).year()},r.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,r,s,a=n(this),o=(e=this.isoWeekYear(),s=4-(r=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(s+=7),r.add(s,"day"));return a.diff(o,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var s=r.startOf;r.startOf=function(t,e){var i=this.$utils(),n=!!i.u(e)||e;return"isoweek"===i.p(t)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(t,e)}}},669995,t=>{"use strict";var e,i,n,r=t.i(159755),s=t.i(464731),a=t.i(508324),o=t.i(419524),c=t.i(139941),l=t.i(822315),d=t.i(39754),u=t.i(346628),h=t.i(83593),f=t.i(205918);t.i(947716);var m=t.i(723685),p=t.i(897053),p=p,y=t.i(265993),y=y,k=t.i(789785),k=k,g=t.i(282803),v=t.i(611209),b=t.i(47238);let x=Math.PI/180,T=180/Math.PI,w=4/29,$=6/29,_=6/29*3*(6/29),D=6/29*(6/29)*(6/29);function M(t){if(t instanceof S)return new S(t.l,t.a,t.b,t.opacity);if(t instanceof L)return I(t);t instanceof b.D||(t=(0,b.K)(t));var e,i,n=O(t.r),r=O(t.g),s=O(t.b),a=C((.2225045*n+.7168786*r+.0606169*s)/1);return n===r&&r===s?e=i=a:(e=C((.4360747*n+.3850649*r+.1430804*s)/.96422),i=C((.0139322*n+.0971045*r+.7141733*s)/.82521)),new S(116*a-16,500*(e-a),200*(a-i),t.opacity)}function S(t,e,i,n){this.l=+t,this.a=+e,this.b=+i,this.opacity=+n}function C(t){return t>D?Math.pow(t,1/3):t/_+w}function Y(t){return t>$?t*t*t:_*(t-w)}function E(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function O(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function A(t,e,i,n){return 1==arguments.length?function(t){if(t instanceof L)return new L(t.h,t.c,t.l,t.opacity);if(t instanceof S||(t=M(t)),0===t.a&&0===t.b)return new L(0/0,0<t.l&&t.l<100?0:0/0,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*T;return new L(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new L(t,e,i,null==n?1:n)}function L(t,e,i,n){this.h=+t,this.c=+e,this.l=+i,this.opacity=+n}function I(t){if(isNaN(t.h))return new S(t.l,0,0,t.opacity);var e=t.h*x;return new S(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}(0,v.U)(S,function(t,e,i,n){return 1==arguments.length?M(t):new S(t,e,i,null==n?1:n)},(0,v.W)(b.G,{brighter(t){return new S(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker(t){return new S(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return e=.96422*Y(e),t=+Y(t),i=.82521*Y(i),new b.D(E(3.1338561*e-1.6168667*t-.4906146*i),E(-.9787684*e+1.9161415*t+.033454*i),E(.0719453*e-.2289914*t+1.4052427*i),this.opacity)}})),(0,v.U)(L,A,(0,v.W)(b.G,{brighter(t){return new L(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker(t){return new L(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb(){return I(this).rgb()}}));var F=t.i(825004);function W(t){return function(e,i){var n=t((e=A(e)).h,(i=A(i)).h),r=(0,F.U)(e.c,i.c),s=(0,F.U)(e.l,i.l),a=(0,F.U)(e.opacity,i.opacity);return function(t){return e.h=n(t),e.c=r(t),e.l=s(t),e.opacity=a(t),e+""}}}let P=W(F.f);function z(t){return t}function N(t){return"translate("+t+",0)"}function H(t){return"translate(0,"+t+")"}function B(){return!this.__axis}function R(t,e){var i=[],n=null,r=null,s=6,a=6,o=3,c="u">typeof window&&window.devicePixelRatio>1?0:.5,l=1===t||4===t?-1:1,d=4===t||2===t?"x":"y",u=1===t||3===t?N:H;function h(h){var f=null==n?e.ticks?e.ticks.apply(e,i):e.domain():n,m=null==r?e.tickFormat?e.tickFormat.apply(e,i):z:r,p=Math.max(s,0)+o,y=e.range(),k=+y[0]+c,g=+y[y.length-1]+c,v=(e.bandwidth?function(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),i=>+t(i)+e}:function(t){return e=>+t(e)})(e.copy(),c),b=h.selection?h.selection():h,x=b.selectAll(".domain").data([null]),T=b.selectAll(".tick").data(f,e).order(),w=T.exit(),$=T.enter().append("g").attr("class","tick"),_=T.select("line"),D=T.select("text");x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge($),_=_.merge($.append("line").attr("stroke","currentColor").attr(d+"2",l*s)),D=D.merge($.append("text").attr("fill","currentColor").attr(d,l*p).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),h!==b&&(x=x.transition(h),T=T.transition(h),_=_.transition(h),D=D.transition(h),w=w.transition(h).attr("opacity",1e-6).attr("transform",function(t){return isFinite(t=v(t))?u(t+c):this.getAttribute("transform")}),$.attr("opacity",1e-6).attr("transform",function(t){var e=this.parentNode.__axis;return u((e&&isFinite(e=e(t))?e:v(t))+c)})),w.remove(),x.attr("d",4===t||2===t?a?"M"+l*a+","+k+"H"+c+"V"+g+"H"+l*a:"M"+c+","+k+"V"+g:a?"M"+k+","+l*a+"V"+c+"H"+g+"V"+l*a:"M"+k+","+c+"H"+g),T.attr("opacity",1).attr("transform",function(t){return u(v(t)+c)}),_.attr(d+"2",l*s),D.attr(d,l*p).text(m),b.filter(B).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),b.each(function(){this.__axis=v})}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return i=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(i=null==t?[]:Array.from(t),h):i.slice()},h.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),h):n&&n.slice()},h.tickFormat=function(t){return arguments.length?(r=t,h):r},h.tickSize=function(t){return arguments.length?(s=a=+t,h):s},h.tickSizeInner=function(t){return arguments.length?(s=+t,h):s},h.tickSizeOuter=function(t){return arguments.length?(a=+t,h):a},h.tickPadding=function(t){return arguments.length?(o=+t,h):o},h.offset=function(t){return arguments.length?(c=+t,h):c},h}W(F.U);var j=t.i(894496),G=t.i(844338),G=G,U=t.i(66532),V=t.i(802991),Z=t.i(173337),X=t.i(718416),q=t.i(212644),Q=t.i(770853),K=function(){var t=(0,o.p)(function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],n=[1,27],r=[1,28],s=[1,29],a=[1,30],c=[1,31],l=[1,32],d=[1,33],u=[1,34],h=[1,9],f=[1,10],m=[1,11],p=[1,12],y=[1,13],k=[1,14],g=[1,15],v=[1,16],b=[1,19],x=[1,20],T=[1,21],w=[1,22],$=[1,23],_=[1,25],D=[1,35],M={trace:(0,o.p)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,o.p)(function(t,e,i,n,r,s,a){var o=s.length-1;switch(r){case 1:return s[o-1];case 2:case 6:case 7:this.$=[];break;case 3:s[o-1].push(s[o]),this.$=s[o-1];break;case 4:case 5:this.$=s[o];break;case 8:n.setWeekday("monday");break;case 9:n.setWeekday("tuesday");break;case 10:n.setWeekday("wednesday");break;case 11:n.setWeekday("thursday");break;case 12:n.setWeekday("friday");break;case 13:n.setWeekday("saturday");break;case 14:n.setWeekday("sunday");break;case 15:n.setWeekend("friday");break;case 16:n.setWeekend("saturday");break;case 17:n.setDateFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 18:n.enableInclusiveEndDates(),this.$=s[o].substr(18);break;case 19:n.TopAxis(),this.$=s[o].substr(8);break;case 20:n.setAxisFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 21:n.setTickInterval(s[o].substr(13)),this.$=s[o].substr(13);break;case 22:n.setExcludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 23:n.setIncludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 24:n.setTodayMarker(s[o].substr(12)),this.$=s[o].substr(12);break;case 27:n.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 28:this.$=s[o].trim(),n.setAccTitle(this.$);break;case 29:case 30:this.$=s[o].trim(),n.setAccDescription(this.$);break;case 31:n.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 33:n.addTask(s[o-1],s[o]),this.$="task";break;case 34:this.$=s[o-1],n.setClickEvent(s[o-1],s[o],null);break;case 35:this.$=s[o-2],n.setClickEvent(s[o-2],s[o-1],s[o]);break;case 36:this.$=s[o-2],n.setClickEvent(s[o-2],s[o-1],null),n.setLink(s[o-2],s[o]);break;case 37:this.$=s[o-3],n.setClickEvent(s[o-3],s[o-2],s[o-1]),n.setLink(s[o-3],s[o]);break;case 38:this.$=s[o-2],n.setClickEvent(s[o-2],s[o],null),n.setLink(s[o-2],s[o-1]);break;case 39:this.$=s[o-3],n.setClickEvent(s[o-3],s[o-1],s[o]),n.setLink(s[o-3],s[o-2]);break;case 40:this.$=s[o-1],n.setLink(s[o-1],s[o]);break;case 41:case 47:this.$=s[o-1]+" "+s[o];break;case 42:case 43:case 45:this.$=s[o-2]+" "+s[o-1]+" "+s[o];break;case 44:case 46:this.$=s[o-3]+" "+s[o-2]+" "+s[o-1]+" "+s[o]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:n,14:r,15:s,16:a,17:c,18:l,19:18,20:d,21:u,22:h,23:f,24:m,25:p,26:y,27:k,28:g,29:v,30:b,31:x,33:T,35:w,36:$,37:24,38:_,40:D},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:n,14:r,15:s,16:a,17:c,18:l,19:18,20:d,21:u,22:h,23:f,24:m,25:p,26:y,27:k,28:g,29:v,30:b,31:x,33:T,35:w,36:$,37:24,38:_,40:D},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,o.p)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,o.p)(function(t){var e=this,i=[0],n=[],r=[null],s=[],a=this.table,c="",l=0,d=0,u=0,h=s.slice.call(arguments,1),f=Object.create(this.lexer),m={};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(m[p]=this.yy[p]);f.setInput(t,m),m.lexer=f,m.parser=this,void 0===f.yylloc&&(f.yylloc={});var y=f.yylloc;s.push(y);var k=f.options&&f.options.ranges;function g(){var t;return"number"!=typeof(t=n.pop()||f.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof m.parseError?this.parseError=m.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.p)(function(t){i.length=i.length-2*t,r.length=r.length-t,s.length=s.length-t},"popStack"),(0,o.p)(g,"lex");for(var v,b,x,T,w,$,_,D,M,S={};;){if(x=i[i.length-1],this.defaultActions[x]?T=this.defaultActions[x]:(null==v&&(v=g()),T=a[x]&&a[x][v]),void 0===T||!T.length||!T[0]){var C="";for($ in M=[],a[x])this.terminals_[$]&&$>2&&M.push("'"+this.terminals_[$]+"'");C=f.showPosition?"Parse error on line "+(l+1)+":\n"+f.showPosition()+"\nExpecting "+M.join(", ")+", got '"+(this.terminals_[v]||v)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==v?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(C,{text:f.match,token:this.terminals_[v]||v,line:f.yylineno,loc:y,expected:M})}if(T[0]instanceof Array&&T.length>1)throw Error("Parse Error: multiple actions possible at state: "+x+", token: "+v);switch(T[0]){case 1:i.push(v),r.push(f.yytext),s.push(f.yylloc),i.push(T[1]),v=null,b?(v=b,b=null):(d=f.yyleng,c=f.yytext,l=f.yylineno,y=f.yylloc,u>0&&u--);break;case 2:if(_=this.productions_[T[1]][1],S.$=r[r.length-_],S._$={first_line:s[s.length-(_||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(_||1)].first_column,last_column:s[s.length-1].last_column},k&&(S._$.range=[s[s.length-(_||1)].range[0],s[s.length-1].range[1]]),void 0!==(w=this.performAction.apply(S,[c,d,l,m,T[1],r,s].concat(h))))return w;_&&(i=i.slice(0,-1*_*2),r=r.slice(0,-1*_),s=s.slice(0,-1*_)),i.push(this.productions_[T[1]][0]),r.push(S.$),s.push(S._$),D=a[i[i.length-2]][i[i.length-1]],i.push(D);break;case 3:return!0}}return!0},"parse")};function S(){this.yy={}}return M.lexer={EOF:1,parseError:(0,o.p)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,o.p)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,o.p)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,o.p)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,o.p)(function(){return this._more=!0,this},"more"),reject:(0,o.p)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,o.p)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,o.p)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,o.p)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,o.p)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,o.p)(function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},"test_match"),next:(0,o.p)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,o.p)(function(){var t=this.next();return t||this.lex()},"lex"),begin:(0,o.p)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,o.p)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,o.p)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,o.p)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,o.p)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,o.p)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.p)(function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}},(0,o.p)(S,"Parser"),S.prototype=M,M.Parser=S,new S}();K.parser=K,l.default.extend(d.default),l.default.extend(u.default),l.default.extend(h.default);var J={friday:5,saturday:6},tt="",te="",ti=void 0,tn="",tr=[],ts=[],ta=new Map,to=[],tc=[],tl="",td="",tu=["active","done","crit","milestone","vert"],th=[],tf="",tm=!1,tp=!1,ty="sunday",tk="saturday",tg=0,tv=(0,o.p)(function(){to=[],tc=[],tl="",th=[],t1=0,e=void 0,i=void 0,t4=[],tt="",te="",td="",ti=void 0,tn="",tr=[],ts=[],tm=!1,tp=!1,tg=0,ta=new Map,tf="",(0,s.M)(),ty="sunday",tk="saturday"},"clear"),tb=(0,o.p)(function(t){tf=t},"setDiagramId"),tx=(0,o.p)(function(t){te=t},"setAxisFormat"),tT=(0,o.p)(function(){return te},"getAxisFormat"),tw=(0,o.p)(function(t){ti=t},"setTickInterval"),t$=(0,o.p)(function(){return ti},"getTickInterval"),t_=(0,o.p)(function(t){tn=t},"setTodayMarker"),tD=(0,o.p)(function(){return tn},"getTodayMarker"),tM=(0,o.p)(function(t){tt=t},"setDateFormat"),tS=(0,o.p)(function(){tm=!0},"enableInclusiveEndDates"),tC=(0,o.p)(function(){return tm},"endDatesAreInclusive"),tY=(0,o.p)(function(){tp=!0},"enableTopAxis"),tE=(0,o.p)(function(){return tp},"topAxisEnabled"),tO=(0,o.p)(function(t){td=t},"setDisplayMode"),tA=(0,o.p)(function(){return td},"getDisplayMode"),tL=(0,o.p)(function(){return tt},"getDateFormat"),tI=(0,o.p)((t,e)=>[...new Set([...t,...e.toLowerCase().split(/[\s,]+/).filter(t=>""!==t)])],"mergeTokens"),tF=(0,o.p)(function(t){tr=tI(tr,t)},"setIncludes"),tW=(0,o.p)(function(){return tr},"getIncludes"),tP=(0,o.p)(function(t){ts=tI(ts,t)},"setExcludes"),tz=(0,o.p)(function(){return ts},"getExcludes"),tN=(0,o.p)(function(){return ta},"getLinks"),tH=(0,o.p)(function(t){tl=t,to.push(t)},"addSection"),tB=(0,o.p)(function(){return to},"getSections"),tR=(0,o.p)(function(){let t=t7(),e=0;for(;!t&&e<10;)t=t7(),e++;return tc=t4},"getTasks"),tj=(0,o.p)(function(t,e,i,n){let r=t.format(e.trim()),s=t.format("YYYY-MM-DD");return!(n.includes(r)||n.includes(s))&&(!!(i.includes("weekends")&&(t.isoWeekday()===J[tk]||t.isoWeekday()===J[tk]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(r)||i.includes(s))},"isInvalidDate"),tG=(0,o.p)(function(t){ty=t},"setWeekday"),tU=(0,o.p)(function(){return ty},"getWeekday"),tV=(0,o.p)(function(t){tk=t},"setWeekend"),tZ=(0,o.p)(function(t,e,i,n){let r;if(!i.length||t.manualEndTime)return;let[s,a]=tX(r=(r=t.startTime instanceof Date?(0,l.default)(t.startTime):(0,l.default)(t.startTime,e,!0)).add(1,"d"),t.endTime instanceof Date?(0,l.default)(t.endTime):(0,l.default)(t.endTime,e,!0),e,i,n);t.endTime=s.toDate(),t.renderEndTime=a},"checkTaskDates"),tX=(0,o.p)(function(t,e,i,n,r){let s=!1,a=null,o=e.add(1e4,"d");for(;t<=e;){if(s||(a=e.toDate()),(s=tj(t,i,n,r))&&(e=e.add(1,"d"))>o)throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,a]},"fixTaskDates"),tq=(0,o.p)(function(t,e){a.d.warn(`Gantt: the "${t}" statement references unknown task id(s): ${e.join(", ")}. Make sure the referenced tasks exist and declare an id. Milestones need both an id and a duration, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`)},"warnAboutUnknownTaskIds"),tQ=(0,o.p)(function(t,e,i){if(i=i.trim(),(0,o.p)(t=>{let e=t.trim();return"x"===e||"X"===e},"isTimestampFormat")(e)&&/^\d+$/.test(i))return new Date(Number(i));let n=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let t=null,e=[];for(let i of n.groups.ids.split(" ").filter(t=>""!==t)){let n=t9(i);if(void 0===n){e.push(i);continue}(!t||n.endTime>t.endTime)&&(t=n)}if(e.length>0&&tq("after",e),t)return t.endTime;let i=new Date;return i.setHours(0,0,0,0),i}let r=(0,l.default)(i,e.trim(),!0);if(r.isValid())return r.toDate();{a.d.debug("Invalid date:"+i),a.d.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),tK=(0,o.p)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[0/0,"ms"]},"parseDuration"),tJ=(0,o.p)(function(t,e,i,n=!1){i=i.trim();let r=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==r){let t=null,e=[];for(let i of r.groups.ids.split(" ").filter(t=>""!==t)){let n=t9(i);if(void 0===n){e.push(i);continue}(!t||n.startTime<t.startTime)&&(t=n)}if(e.length>0&&tq("until",e),t)return t.startTime;let i=new Date;return i.setHours(0,0,0,0),i}let s=(0,l.default)(i,e.trim(),!0);if(s.isValid())return n&&(s=s.add(1,"d")),s.toDate();let o=(0,l.default)(t),[c,d]=tK(i);if(Number.isNaN(c))a.d.warn(`Gantt: "${i}" is neither a valid date for the "${e.trim()}" date format nor a valid duration (e.g. "3d"), so it is ignored and the task gets a zero duration. Milestones need a duration too, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`);else{let t=o.add(c,d);t.isValid()&&(o=t)}return o.toDate()},"getEndDate"),t1=0,t0=(0,o.p)(function(t){return void 0===t?"task"+(t1+=1):t},"parseId"),t2=(0,o.p)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};eo(i,n,tu);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let r="";switch(i.length){case 1:n.id=t0(),n.startTime=t.endTime,r=i[0];break;case 2:n.id=t0(),n.startTime=tQ(void 0,tt,i[0]),r=i[1];break;case 3:n.id=t0(i[0]),n.startTime=tQ(void 0,tt,i[1]),r=i[2]}return r&&(n.endTime=tJ(n.startTime,tt,r,tm),n.manualEndTime=(0,l.default)(r,"YYYY-MM-DD",!0).isValid(),tZ(n,tt,ts,tr)),n},"compileData"),t3=(0,o.p)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};eo(i,n,tu);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:n.id=t0(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=t0(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=t0(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]}}return n},"parseData"),t4=[],t5={},t6=(0,o.p)(function(t,e){let n={section:tl,type:tl,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},r=t3(i,e);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=i,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,n.vert?n.order=-1:(n.order=tg,tg++);let s=t4.push(n);i=n.id,t5[n.id]=s-1},"addTask"),t9=(0,o.p)(function(t){return t4[t5[t]]},"findTaskById"),t8=(0,o.p)(function(t,i){let n={section:tl,type:tl,description:t,task:t,classes:[]},r=t2(e,i);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,e=n,tc.push(n)},"addTaskOrg"),t7=(0,o.p)(function(){let t=(0,o.p)(function(t){let e=t4[t],i="";switch(t4[t].raw.startTime.type){case"prevTaskEnd":{let t=t9(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=tQ(void 0,tt,t4[t].raw.startTime.startData))&&(t4[t].startTime=i)}return t4[t].startTime&&(t4[t].endTime=tJ(t4[t].startTime,tt,t4[t].raw.endTime.data,tm),t4[t].endTime&&(t4[t].processed=!0,t4[t].manualEndTime=(0,l.default)(t4[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tZ(t4[t],tt,ts,tr))),t4[t].processed},"compileTask"),e=!0;for(let[i,n]of t4.entries())t(i),e=e&&n.processed;return e},"compileTasks"),et=(0,o.p)(function(t,e){let i=e;"loose"!==(0,s.z)().securityLevel&&(i=(0,c.sanitizeUrl)(e)),t.split(",").forEach(function(t){void 0!==t9(t)&&(en(t,()=>{window.open(i,"_self")}),ta.set(t,i))}),ee(t,"clickable")},"setLink"),ee=(0,o.p)(function(t,e){t.split(",").forEach(function(t){let i=t9(t);void 0!==i&&i.classes.push(e)})},"setClass"),ei=(0,o.p)(function(t,e,i){if("loose"!==(0,s.z)().securityLevel||void 0===e)return;let n=[];if("string"==typeof i){n=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<n.length;t++){let e=n[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),n[t]=e}}0===n.length&&n.push(t),void 0!==t9(t)&&en(t,()=>{r.u.runFunc(e,...n)})},"setClickFun"),en=(0,o.p)(function(t,e){th.push(function(){let i=tf?`${tf}-${t}`:t,n=document.querySelector(`[id="${i}"]`);null!==n&&n.addEventListener("click",function(){e()})},function(){let i=tf?`${tf}-${t}`:t,n=document.querySelector(`[id="${i}-text"]`);null!==n&&n.addEventListener("click",function(){e()})})},"pushFun"),er=(0,o.p)(function(t,e,i){t.split(",").forEach(function(t){ei(t,e,i)}),ee(t,"clickable")},"setClickEvent"),es=(0,o.p)(function(t){th.forEach(function(e){e(t)})},"bindFunctions"),ea={getConfig:(0,o.p)(()=>(0,s.z)().gantt,"getConfig"),clear:tv,setDateFormat:tM,getDateFormat:tL,enableInclusiveEndDates:tS,endDatesAreInclusive:tC,enableTopAxis:tY,topAxisEnabled:tE,setAxisFormat:tx,getAxisFormat:tT,setTickInterval:tw,getTickInterval:t$,setTodayMarker:t_,getTodayMarker:tD,setAccTitle:s.b,getAccTitle:s.c,setDiagramTitle:s.a,getDiagramTitle:s.F,setDiagramId:tb,setDisplayMode:tO,getDisplayMode:tA,setAccDescription:s.B,getAccDescription:s.j,addSection:tH,getSections:tB,getTasks:tR,addTask:t6,findTaskById:t9,addTaskOrg:t8,setIncludes:tF,getIncludes:tW,setExcludes:tP,getExcludes:tz,setClickEvent:er,setLink:et,getLinks:tN,bindFunctions:es,parseDuration:tK,isInvalidDate:tj,setWeekday:tG,getWeekday:tU,setWeekend:tV};function eo(t,e,i){let n=!0;for(;n;)n=!1,i.forEach(function(i){let r=RegExp("^\\s*"+i+"\\s*$");t[0].match(r)&&(e[i]=!0,t.shift(1),n=!0)})}(0,o.p)(eo,"getTaskTags"),l.default.extend(f.default);var ec=(0,o.p)(function(){a.d.debug("Something is calling, setConf, remove the call")},"setConf"),el={monday:q.j,tuesday:q.K,wednesday:q.N,thursday:q.P,friday:q.Q,saturday:q.v,sunday:q.w},ed=(0,o.p)((t,e)=>{let i=[...t].map(()=>-1/0),n=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),r=0;for(let t of n)for(let n=0;n<i.length;n++)if(t.startTime>=i[n]){i[n]=t.endTime,t.order=n+e,n>r&&(r=n);break}return r},"getMaxIntersections"),eu=(0,o.p)(function(t,e,i,r){let c,d=(0,s.z)().gantt;r.db.setDiagramId(e);let u=(0,s.z)().securityLevel;"sandbox"===u&&(c=(0,m.f)("#i"+e));let h="sandbox"===u?(0,m.f)(c.nodes()[0].contentDocument.body):(0,m.f)("body"),f="sandbox"===u?c.nodes()[0].contentDocument:document,v=f.getElementById(e);void 0===(n=v.parentElement.offsetWidth)&&(n=1200),void 0!==d.useWidth&&(n=d.useWidth);let b=r.db.getTasks(),x=b.filter(t=>!t.vert),T=[];for(let t of x)T.push(t.type);T=I(T);let w={},$=2*d.topPadding;if("compact"===r.db.getDisplayMode()||"compact"===d.displayMode){let t={};for(let e of x)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let n=ed(t[i],e)+1;e+=n,$+=n*(d.barHeight+d.barGap),w[i]=n}}else for(let t of($+=x.length*(d.barHeight+d.barGap),T))w[t]=x.filter(e=>e.type===t).length;v.setAttribute("viewBox","0 0 "+n+" "+$);let _=h.select(`[id="${e}"]`),D=(0,p.U)().domain([(0,y.f)(b,function(t){return t.startTime}),(0,k.f)(b,function(t){return t.endTime})]).rangeRound([0,n-d.leftPadding-d.rightPadding]);function M(t,e){let i=t.startTime,n=e.startTime,r=0;return i>n?r=1:i<n&&(r=-1),r}function S(t,e,i){let n=d.barHeight,s=n+d.barGap,a=d.topPadding,o=d.leftPadding,c=(0,g.f)().domain([0,T.length]).range(["#00B9FA","#F95002"]).interpolate(P);Y(s,a,o,e,i,t,r.db.getExcludes(),r.db.getIncludes()),O(o,a,e,i),C(t,s,a,o,n,c,e),A(s,a),L(o,a,e,i)}function C(t,i,n,a,o,c,l){t.sort((t,e)=>t.vert===e.vert?0:t.vert?1:-1);let u=t.filter(t=>!t.vert),h=[...new Set(u.map(t=>t.order))].map(t=>u.find(e=>e.order===t));_.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+n-2}).attr("width",function(){return l-d.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of T.entries())if(t.type===i)return"section section"+e%d.numberSectionStyles;return"section section0"}).enter();let f=_.append("g").selectAll("rect").data(t).enter(),p=r.db.getLinks();if(f.append("rect").attr("id",function(t){return e+"-"+t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?D(t.startTime)+a+.5*(D(t.endTime)-D(t.startTime))-.5*o:D(t.startTime)+a}).attr("y",function(t,e){return(e=t.order,t.vert)?d.gridLineStartPadding:e*i+n}).attr("width",function(t){return t.milestone?o:t.vert?.08*o:D(t.renderEndTime||t.endTime)-D(t.startTime)}).attr("height",function(t){return t.vert?u.length*(d.barHeight+d.barGap)+2*d.barHeight:o}).attr("transform-origin",function(t,e){return e=t.order,(D(t.startTime)+a+.5*(D(t.endTime)-D(t.startTime))).toString()+"px "+(e*i+n+.5*o).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,n]of T.entries())t.type===n&&(i=e%d.numberSectionStyles);let n="";return t.active?t.crit?n+=" activeCrit":n=" active":t.done?n=t.crit?" doneCrit":" done":t.crit&&(n+=" crit"),0===n.length&&(n=" task"),t.milestone&&(n=" milestone "+n),t.vert&&(n=" vert "+n),n+=i,"task"+(n+=" "+e)}),f.append("text").attr("id",function(t){return e+"-"+t.id+"-text"}).text(function(t){return t.task}).attr("font-size",d.fontSize).attr("x",function(t){let e=D(t.startTime),i=D(t.renderEndTime||t.endTime);if(t.milestone&&(e+=.5*(D(t.endTime)-D(t.startTime))-.5*o,i=e+o),t.vert)return D(t.startTime)+a;let n=this.getBBox().width;return n>i-e?i+n+1.5*d.leftPadding>l?e+a-5:i+a+5:(i-e)/2+e+a}).attr("y",function(t,e){return t.vert?d.gridLineStartPadding+u.length*(d.barHeight+d.barGap)+60:t.order*i+d.barHeight/2+(d.fontSize/2-2)+n}).attr("text-height",o).attr("class",function(t){let e=D(t.startTime),i=D(t.endTime);t.milestone&&(i=e+o);let n=this.getBBox().width,r="";t.classes.length>0&&(r=t.classes.join(" "));let s=0;for(let[e,i]of T.entries())t.type===i&&(s=e%d.numberSectionStyles);let a="";return(t.active&&(a=t.crit?"activeCritText"+s:"activeText"+s),t.done?a=t.crit?a+" doneCritText"+s:a+" doneText"+s:t.crit&&(a=a+" critText"+s),t.milestone&&(a+=" milestoneText"),t.vert&&(a+=" vertText"),n>i-e)?i+n+1.5*d.leftPadding>l?r+" taskTextOutsideLeft taskTextOutside"+s+" "+a:r+" taskTextOutsideRight taskTextOutside"+s+" "+a+" width-"+n:r+" taskText taskText"+s+" "+a+" width-"+n}),"sandbox"===(0,s.z)().securityLevel){let t=(0,m.f)("#i"+e).nodes()[0].contentDocument;f.filter(function(t){return p.has(t.id)}).each(function(i){var n=t.querySelector("#"+CSS.escape(e+"-"+i.id)),r=t.querySelector("#"+CSS.escape(e+"-"+i.id+"-text"));let s=n.parentNode;var a=t.createElement("a");a.setAttribute("xlink:href",p.get(i.id)),a.setAttribute("target","_top"),s.appendChild(a),a.appendChild(n),a.appendChild(r)})}}function Y(t,i,n,s,o,c,u,h){let f,m;if(0===u.length&&0===h.length)return;for(let{startTime:t,endTime:e}of c)(void 0===f||t<f)&&(f=t),(void 0===m||e>m)&&(m=e);if(!f||!m)return;if((0,l.default)(m).diff((0,l.default)(f),"year")>5)return void a.d.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");let p=r.db.getDateFormat(),y=[],k=null,g=(0,l.default)(f);for(;g.valueOf()<=m;)r.db.isInvalidDate(g,p,u,h)?k?k.end=g:k={start:g,end:g}:k&&(y.push(k),k=null),g=g.add(1,"d");_.append("g").selectAll("rect").data(y).enter().append("rect").attr("id",t=>e+"-exclude-"+t.start.format("YYYY-MM-DD")).attr("x",t=>D(t.start.startOf("day"))+n).attr("y",d.gridLineStartPadding).attr("width",t=>D(t.end.endOf("day"))-D(t.start.startOf("day"))).attr("height",o-i-d.gridLineStartPadding).attr("transform-origin",function(e,i){return(D(e.start)+n+.5*(D(e.end)-D(e.start))).toString()+"px "+(i*t+.5*o).toString()+"px"}).attr("class","exclude-range")}function E(t,e,i,n){if(i<=0||t>e)return 1/0;let r=l.default.duration({[n??"day"]:i}).asMilliseconds();return r<=0?1/0:Math.ceil((e-t)/r)}function O(t,e,i,n){let s,o=r.db.getDateFormat(),c=r.db.getAxisFormat();s=c||("D"===o?"%d":d.axisFormat??"%Y-%m-%d");let l=R(3,D).tickSize(-n+e+d.gridLineStartPadding).tickFormat((0,j.r)(s)),u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||d.tickInterval);if(null!==u){let t=parseInt(u[1],10);if(isNaN(t)||t<=0)a.d.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let e=u[2],i=r.db.getWeekday()||d.weekday,n=D.domain(),s=E(n[0],n[1],t,e);if(s>1e4)a.d.warn(`The tick interval "${t}${e}" would generate ${s} ticks, which exceeds the maximum allowed (10000). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(e){case"millisecond":l.ticks(G.f.every(t));break;case"second":l.ticks(U.f.every(t));break;case"minute":l.ticks(V.e.every(t));break;case"hour":l.ticks(Z.U.every(t));break;case"day":l.ticks(X.X.every(t));break;case"week":l.ticks(el[i].every(t));break;case"month":l.ticks(Q.P.every(t))}}}if(_.append("g").attr("class","grid").attr("transform","translate("+t+", "+(n-50)+")").call(l).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||d.topAxis){let i=R(1,D).tickSize(-n+e+d.gridLineStartPadding).tickFormat((0,j.r)(s));if(null!==u){let t=parseInt(u[1],10);if(isNaN(t)||t<=0)a.d.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let e=u[2],n=r.db.getWeekday()||d.weekday,s=D.domain();if(1e4>=E(s[0],s[1],t,e))switch(e){case"millisecond":i.ticks(G.f.every(t));break;case"second":i.ticks(U.f.every(t));break;case"minute":i.ticks(V.e.every(t));break;case"hour":i.ticks(Z.U.every(t));break;case"day":i.ticks(X.X.every(t));break;case"week":i.ticks(el[n].every(t));break;case"month":i.ticks(Q.P.every(t))}}}_.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function A(t,e){let i=0,n=Object.keys(w).map(t=>[t,w[t]]);_.append("g").selectAll("text").data(n).enter().append(function(t){let e=t[0].split(s.E.lineBreakRegex),i=-(e.length-1)/2,n=f.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,r]of(n.setAttribute("dy",i+"em"),e.entries())){let e=f.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=r,n.appendChild(e)}return n}).attr("x",10).attr("y",function(r,s){if(!(s>0))return r[1]*t/2+e;for(let a=0;a<s;a++)return i+=n[s-1][1],r[1]*t/2+i*t+e}).attr("font-size",d.sectionFontSize).attr("class",function(t){for(let[e,i]of T.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%d.numberSectionStyles;return"sectionTitle"})}function L(t,e,i,n){let s=r.db.getTodayMarker();if("off"===s)return;let a=_.append("g").attr("class","today"),o=new Date,c=a.append("line");c.attr("x1",D(o)+t).attr("x2",D(o)+t).attr("y1",d.titleTopMargin).attr("y2",n-d.titleTopMargin).attr("class","today"),""!==s&&c.attr("style",s.replace(/,/g,";"))}function I(t){let e={},i=[];for(let n=0,r=t.length;n<r;++n)Object.prototype.hasOwnProperty.call(e,t[n])||(e[t[n]]=!0,i.push(t[n]));return i}(0,o.p)(M,"taskCompare"),b.sort(M),S(b,n,$),(0,s.m)(_,$,n,d.useMaxWidth),_.append("text").text(r.db.getDiagramTitle()).attr("x",n/2).attr("y",d.titleTopMargin).attr("class","titleText"),(0,o.p)(S,"makeGantt"),(0,o.p)(C,"drawRects"),(0,o.p)(Y,"drawExcludeDays"),(0,o.p)(E,"getEstimatedTickCount"),(0,o.p)(O,"makeGrid"),(0,o.p)(A,"vertLabels"),(0,o.p)(L,"drawToday"),(0,o.p)(I,"checkUnique")},"draw"),eh=(0,o.p)(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles");t.s(["diagram",0,{parser:K,db:ea,renderer:{setConf:ec,draw:eu},styles:eh}],669995)}]);