
var elements = document.querySelectorAll('input')
el = []
elements.forEach(element => {
    if (element.getAttribute('type') === 'range') {
       el.push(element)
    }
});
var facebook_cpr= 0.11
var instagram_cpr= 0.37
var twitter_cpr= 0.24
el[0].addEventListener('input',value)
el[1].addEventListener('input',value)
el[2].addEventListener('input',value)

function value (ev){
    var total = 0
    var reach = 0
    total = parseInt(el[0].value) + parseInt(el[1].value) + parseInt(el[2].value)
    reach = 
    parseInt(el[0].value)/facebook_cpr + 
    parseInt(el[1].value)/instagram_cpr +
    parseInt(el[2].value)/twitter_cpr;
    document.getElementById('total_b').innerText = total;
    document.getElementById('total_r').innerText = Math.round(reach);  
    document.getElementById('budget_id').value = total;
    document.getElementById('reach_id').value = Math.round(reach);    
   }