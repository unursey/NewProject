(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let s=0;s=setInterval((()=>{let t=(()=>{let t=(new Date("25 february 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();e.textContent=t.hours,n.textContent=t.minutes,o.textContent=t.seconds,t.timeRemaining<0&&(clearInterval(s),o.textContent="00",n.textContent="00",e.textContent="00"),t.seconds>=0&&t.seconds<10&&(o.textContent="0"+o.textContent),t.minutes>=0&&t.minutes<10&&(n.textContent="0"+n.textContent),t.hours>=0&&t.hours<10&&(e.textContent="0"+e.textContentt),console.log("Ура-Ура")}),1e3)})()})();