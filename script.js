
const targetDate=new Date('2025-07-17T00:00:00').getTime();
const countdownEl=document.getElementById('countdown');
const updateCountdown=()=>{const now=new Date().getTime();const distance=targetDate-now;
if(distance>0){const days=Math.floor(distance/(1000*60*60*24));
countdownEl.innerText=`Tournament begins in: ${days} days`;}
else{countdownEl.innerText='🎣 Tournament is LIVE!';}};
updateCountdown();setInterval(updateCountdown,60000);
