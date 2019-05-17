

function esconderMostrar(){
    var more = document.getElementById('mas');
    var button = document.getElementById ('button');
    var heading1 = document.createElement ('h1');
    heading1.innerHTML = 'El Árbol del tata Manuel';
    more.appendChild(heading1);
    var image = document.createElement ('img');
    image.src = 'bonsai.jpg';
    more.appendChild(image);
    var heading2 = document.createElement ('h2');
    heading2.innerHTML = '¿Qué es?';
    more.appendChild(heading2);
    var parragraph1 = document.createElement ('p');
    parragraph1.innerHTML = 'Árbol artesanal tipo Bonsai con base de madera, estructura de alambre y piedras semi-preciosas.';
    more.appendChild(parragraph1);
    var heading3 = document.createElement ('h2');
    heading3.innerHTML = '¿Cuál es su función?';
    more.appendChild(heading3);
    var parr2 = document.createElement ('p');
    parr2.innerHTML = 'Además de ser un hermoso adorno para su hogar, éste es un producto manufacturado con una selección de piedras semi-preciosas que buscan brindar a su hogar toda la Salud, Energía y Armonía necesarias para contrarrestar el agitado ritmo de vida que suele ser motivo de muchas enfermedades que afectan nuestra mente y organismo hoy en día.';
    more.appendChild(parr2);
    var heading4 =document.createElement('h2');
    heading4.innerHTML = '¿Cómo actuaría?';
    more.appendChild(heading4);
    var parr3 = document.createElement ('p');
    parr3.innerHTML = ' Las piedras son entidades vivas que vibran de acuerdo con distintas frecuencias y engendran campos de energía de los que podemos obtener nuevas fuerzas. El rayo luminoso carga la piedra con una energía magnética y es ésta la que, al emanar posteriormente desde la piedra, actúa sobre el aura, dotándolo de equilibrio y armonía. Cada color tiene distintas propiedades y éstas serán explicitadas al momento de adquirir el producto.';
    more.appendChild(parr3);


    if(more.style.display == 'none'){
            more.style.display = 'block';
            more.style.fontFamily = 'verdana';
            more.style.textAlign = 'center';
            more.style.color = 'darkcyan';
            button.style.display = 'none';
           
        }
    else if(more.style.display == 'block'){
        more.style.display = 'none'
    }       
  
    }

