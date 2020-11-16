let productLock = false
let maxLength = 10
let arrayLength = 0

let $producer = document.querySelector(".producer")
let $consumer = document.querySelector(".consumer")
let $produceSign = document.querySelector(".produceSign")

let producer = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "produce.js", false)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement("script")
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

let consumer = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "consume.js", false)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement("script")
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

$producer.onclick = () => {
    producer()
    $produceSign.innerHTML = "生产中..."
}

$consumer.onclick = () => {
    consumer()
    $produceSign.innerHTML = "消费中..."
}
