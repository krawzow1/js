const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd')

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'js/current.json')
    request.setRequestHeader('Content-type', 'application/json; charser=utf-8')
    request.send()

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2)
        } else {
            inputUsd.value = 'Error'
        }
    })
})