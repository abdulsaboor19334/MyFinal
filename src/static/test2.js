var data = document.querySelectorAll('.inputs')
data.forEach(element =>{
    if(!element.getAttribute('name')){
        var estimate = element.getAttribute('estimated')
        var current = element.getAttribute('current')
        var id = element.getAttribute('id')
        var val = parseInt(current) * 100
        var val2 = Math.round(val/estimate)
        var bar = document.getElementById(`div${id}`)
        var span = document.getElementById(`percentage${id}`)
        bar.setAttribute('aria-valuenow',val2) 
        bar.style.width = `${val2}%`
        span.innerText = `${val2}%`
    }
})