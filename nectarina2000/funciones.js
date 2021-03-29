var mensajes= new Array();
    mensajes[0]="¡Tú puedes!",
    mensajes[1]= "¡Ánimo!";
    mensajes[2]= "Lo harás bien";
    mensajes[3]="Solo un poco más";
    mensajes[4]="Ya casi";
    mensajes[5]="Qué bien lo haces";
    mensajes[6]="Nadie como tú";
    mensajes[7]="Eres genial";
    mensajes[8]="Eres perfecto";
    mensajes[10]="Se ve bien";
    mensajes[11]="Luces genial";
    mensajes[12]="Un último empujón";
    mensajes[13]="Eres increíble";
    mensajes[14]="Lo haces bien";
    var actividades= new Array();
    actividades[0]="Haz 5 sentadillas";
    actividades[1]="Haz 5 saltos de tijera";
    actividades[2]="No hagas nada";
    actividades[3]="Bebe un vaso de agua";
    actividades[4]="Estira tus brazos todo lo que puedas por 30 segundos";
    actividades[5]="Extiende tus pies y toca las puntas por 15 segundos";
    actividades[6]="Gira tu torso todo lo que puedas hacia ambos lados 5 veces";
    actividades[7]="Agita tus manos estiradas hacia abajo y hacia arriba 15 veces";
    actividades[8]="Da 15 saltos tan alto como puedas";
    actividades[9]="Usa estos 5 minutos para dar puñetasos al aire";
    actividades[10]="Dibuja un paisaje";
    actividades[11]="Haz garabatos";
    actividades[12]="Come un hielo";
    actividades[13]="Haz 3 minutos de plancha";
    actividades[14]="Inhala y exhala profundamente 6 veces";
    actividades[15]="Escribe 15 palabras con la letra A, J, o D";


    var seg=0, min=0,sesion=1;
var completos=0,ejer=0;
function Fcrecer(id)
{
    document.getElementById(id).style.scale="1.25"
}
function Fdecrecer(id)
{
    document.getElementById(id).style.scale="none"
}
function Fmain()
{
    Ftiempo();
    
}
function Ftiempo()
{
    var tiempo;
    seg++;
    if(seg==30||seg==1)
    {
        Fapoyo();
    }
    if(seg==60)
    {
        seg=0;
        min++;
    }
   
    m=Fagrega0(min);
    s=Fagrega0(seg);
    tiempo=m+":"+s;
    document.getElementById('reloj').value=tiempo;
    Fdescansos(); 
    document.getElementById('completos').value=("Ciclos completos: "+completos);
    setTimeout(Ftiempo,1000);
    
}
function Fdescansos()
{
    if(min==25&&sesion%8==0)
    {
        sesion++;
        min=0;
        seg=0;
        Freproducir()
        document.getElementById("mensajes").value="A trabajar";
        document.getElementById("animacion").style.backgroundImage="url(\"animacion.gif\")";
        document.getElementById("animacion").style.backgroundSize="contain";
        Fcambio();
    }
    if(min==20&&sesion%2!=0)
    {
        completos++;
        sesion++;
        min=0;
        seg=0;
        if(sesion%8!=0)
        {
            Freproducir()
            document.getElementById("mensajes").value="Descanso (5)";
            document.getElementById("animacion").style.backgroundImage="url(\"Ejercicio.gif\")";
            document.getElementById("animacion").style.backgroundSize="contain";
            Fcambio()
        }
        else
        {
            Freproducir()
            document.getElementById("mensajes").value="Descanso (25)";
            document.getElementById("animacion").style.backgroundImage="url(\"descanso.gif\")";
            document.getElementById("animacion").style.backgroundSize="contain";
            Fcambio()
        }
        
    }
    if(min==5&&sesion%2==0&&sesion%8!=0)
    {
        sesion++;
        min=0;
        seg=0;
        Freproducir()
        document.getElementById("mensajes").value="A trabajar";
        document.getElementById("animacion").style.backgroundImage="url(\"animacion.gif\")";
            document.getElementById("animacion").style.backgroundSize="contain";
            Fcambio();
    }
    
}
function Freproducir()
{
    var activado=document.getElementById("audio")
    if(activado.checked==true)
    {
        document.getElementById("alarma").volume=.5;
        document.getElementById("alarma").play();
    }
}
function Fagrega0(numero)
{
    if(numero<10)
    {
        numero="0"+numero;
    }
    return numero;
}
function Fapoyo()
{
    var seleccion;
    seleccion=Math.floor(Math.random() * (14))
    document.getElementById('apoyo').value=mensajes[seleccion];

}
function Fcambio()
{
    if(sesion%2==0&&sesion%8!=0)
    {
        document.getElementById("ejercicio").style.display="inline";
        document.getElementById("apoyo").style.display="none";
        document.getElementById("completos").style.display="none";
        var seleccion;
        seleccion=Math.floor(Math.random() * (15))
         document.getElementById('ejercicio').value=actividades[seleccion];
       
    }
    else
    {
        document.getElementById("ejercicio").style.display="none";
        document.getElementById("completos").style.display="inline";
        document.getElementById("apoyo").style.display="inline";
      
    }

}
