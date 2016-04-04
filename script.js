

    var dayarray=new Array("domingo","lunes","martes","miércoles","jueves","viernes","sábado")
    var montharray=new Array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre")

    function getthedate(){
    var mydate=new Date()
    var year=mydate.getYear()
    if (year < 1000)
    year+=1900
    var day=mydate.getDay()
    var month=mydate.getMonth()
    var daym=mydate.getDate()
    if (daym<10)
    daym="0"+daym
    var hours=mydate.getHours()
    var minutes=mydate.getMinutes()
    var seconds=mydate.getSeconds()
    var dn="AM"
    if (hours>=12)
    dn="PM"
    if (hours>12){
    hours=hours-12
    }
    if (hours==0)
    hours=12
    if (minutes<=9)
    minutes="0"+minutes
    if (seconds<=9)
    seconds="0"+seconds

    var cdate="<small><font color='000000' face='Arial'><b>"+dayarray[day]+","+daym+" "+montharray[month]+" "+year+", ore "+hours+":"+minutes+":"+seconds+" "+dn
    +"</b></font></small>"
    if (document.all)
    document.all.clock.innerHTML=cdate
    else
    document.write(cdate)
    }
    if (!document.all)
    getthedate()
    function goforit(){
    if (document.all)
    setInterval("getthedate()",1000)
    }

    <!--
    function show5(){
    if (!document.layers&&!document.all)
    return;

    var Digital=new Date();
    var hours=Digital.getHours();
    var minutes=Digital.getMinutes();
    var seconds=Digital.getSeconds();
    var dn="AM";
    if (hours>12){
    dn="PM";
    hours=hours-12;
    }
    if (hours==0)
    hours=12;
    if (minutes<=9)
    minutes="0"+minutes;
    if (seconds<=9)
    seconds="0"+seconds;

    myclock="<font size='5' face='Arial' ><b><font size='2'>Hora Actual: </font>"+hours+":"+minutes+":"
    +seconds+" "+dn+"</b></font>";

    if (document.layers){
    document.layers.liveclock.document.write(myclock);
    document.layers.liveclock.document.close();
    }
    else if (document.all)
    liveclock.innerHTML=myclock
    setTimeout("show5()",1000)
    }
