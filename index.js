/*Alle Button der Klasse drum sollen, wenn Sie angeklickt oder die passende Taste gedrückt wird eine function ausführen*/

// Variable drumNum ermittelt uns in dieser Zeile wieviele Button mit dieser Klasse es überhaupt gibt
let drumNum= document.querySelectorAll('.drum').length;
//querySelectorAll liefert als Ergebniss nur [Nodelist] zurück, um auch wirklich die Anzahl zu bekommen müssen wir .length anhängen


for(let i=0; i<drumNum; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        let drumInnerHTML=this.innerHTML;// Zeichen die zwischen <button></button> stehen und für User als Text lesbar sind
        makeSound(drumInnerHTML); //Aufruf der Funktion die den Zeichen einen Sound zuordnet
        highlight(drumInnerHTML); //Aufruf der Funktion die beim drücken der Taste einen Schatten erzeugt
    });
}
//Keydown lauscht welche Tasten gedrückt werden und durch die Funktion weisen wir ein Event zu das beim drücken von bestimmten Tasten (event.key) passieren soll. Unsere Funktionen makesound und highlight, die uns key abgleichen, legen wir dafür aber außerhalb des Aufrufs des EventListeners an, sonst klappt es nicht wie gewünscht.
document.addEventListener('keydown',function(event){
        makeSound(event.key);
        highlight(event.key);
});

/*Hier also die Funktion makesound.
key ist teil des events von keydown und liefert den Wert der Taste als string zurück also 'w' oder 'shift' etc.*/

function makeSound(key){
    //mit switch sagen wir jetzt was passieren soll wenn der string, den key uns zurück liefert, einem von uns gewählten string entspricht. Passt es zu den unten gezeigten soll der passende sound abgespielt werden.
    switch (key) {
        case 'w': // wenn key 'w' zurückliefert (User hat die Taste w gedrückt)
                let crash= new Audio('./sounds/crash.mp3');
                crash.play();  //dann spiel den Sound ab den wir der variablen zugewiesen haben.
        case'a':
                let tom3=new Audio('./sounds/tom-3.mp3');
                tom3.play();
                break;
        case's':
                let snare= new Audio('./sounds/snare.mp3');
                snare.play();
                break;
        case'd':
                let kick= new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;
        case'j':
                let tom1= new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;
        case'k':
                let tom2= new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;
        case'l':
                let tom4= new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;
         default: alert('Please press one of the keys as shown on the buttons.'); // wenn der User keine von uns gewählte Taste gedrückt hat dann tritt der default wert ein.
    }
};
/*Highlight sorgt dafür, dass unser Schlagzeugbutton kurz einen Schatten bekommt, je nachdem welcher davon gedrückt wurde.
  Damit das klappt bekommt der Button hierfür die CSS-Klasse 'pressed' hinzugefügt.
  Mit der Timeout-Funktion setzen wird dann ein Zeitlimit wie lange der Schatten sichtbar bleibt und nach der von uns gewählten Zeit (die zeit wird in Millisekunden gemessen) wird die Klasse 'pressed' wieder entfernt.*/
function highlight(key){//Highlight lauscht genauso wie makesound nach dem event das zu keydown gehört - key
        
        switch (key) {
                case 'w':
                       document.querySelector('.'+key).classList.add('pressed');
                       setTimeout(function(){document.querySelector('.'+key).classList.remove('pressed');},100)//Die 100 steht für 0,1 Sekunden
                        break;
        
                case 'a':
                        document.querySelector('.'+key).classList.add('pressed');
                        setTimeout(function(){document.querySelector('.'+key).classList.remove('pressed');},100)
                        break;

                case 's':
                        document.querySelector('.'+key).classList.add('pressed');
                        setTimeout(function(){document.querySelector('.'+key).classList.remove('pressed');},100)
                         break;
                case 'd':
                         document.querySelector('.'+key).classList.add('pressed');
                         setTimeout(function(){document.querySelector('.'+key).classList.remove('pressed');},100)
                        break;
                
                case 'j':
                        document.querySelector('.'+key).classList.add('pressed');
                        setTimeout(function(){document.querySelector('.'+key).classList.remove('pressed');},100)
                       break;

                case 'k':
                        document.querySelector('.'+key).classList.add('pressed');
                        setTimeout(function(){document.querySelector('.'+key).classList.remove('pressed');},100)
                       break;

                case 'l':
                       document.querySelector('.'+key).classList.add('pressed');
                       setTimeout(function(){document.querySelector('.'+key).classList.remove('pressed');},100)
                      break;

                default: alert('Please press one of the keys as shown on the buttons.');
        }
}
//Nun funktioniert das Schlagzeug sowohl durch Mausklick als auch durch Tastendruck :)