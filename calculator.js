
var buttons=document.getElementsByClassName('btn');
var display=document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;
display.innerHTML="0";

for(let i=0;i<buttons.length;i++)
    {
       buttons[i].addEventListener('click',function(){
           
           var value = this.getAttribute('value');
           this.classList.add('bg-color');
           setTimeout(()=>buttons[i].classList.remove('bg-color'),200);
           
           
           if(value=='+')
               {
                operator = '+';
                operand1 = parseFloat(display.textContent);
                display.innerHTML = "";
               }
           else if(value=='-')
               {
                operator = '-';
                operand1 = parseFloat(display.textContent);
                display.innerHTML = "";
               }
           else if (value == '%'){
               operator = '-';
                operand1 = parseFloat(display.textContent);
                display.innerHTML = "";
           }
           else if(value=='*')
               {
                operator = '*';
                operand1 = parseFloat(display.textContent);
                display.innerHTML = "";
               }
           else if(value=='/')
               {
                operator = '/';
                operand1 = parseFloat(display.textContent);
                display.innerHTML = "";
               } 
            else if(value == 'pm') {
                var temp = parseFloat(display.textContent);
                display.innerHTML = -temp;
    
            } else if(value =='=')
               {
                   operand2=parseFloat(display.textContent);
                   if(operand2==0 && operator=='/')
                   {
                       display.innerHTML="Error";
                       return;
                   }
                   var ans=eval(operand1+" "+operator+" "+operand2);
                   display.innerHTML=ans;
                   operand1=0;
                   operand2=null;
                   operator=null;
               }
           else if(value=='empty')
               {
                   display.innerHTML=" ";
                   operand1=0;
                   operand2=null;
                   operator=null;
               }
           else{
            if(display.innerHTML == 0){
                display.innerHTML = value;
    
            }else{
                display.innerHTML +=value;
    
            }
           }
           
           
           
       }) 
        
        
        
    }
