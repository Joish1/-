var productLock = false
let maxLength = 10
let arrayLength = 0

let $producer = document.querySelector(".producer")
let $consumer = document.querySelector(".consumer")
let $produceSign = document.querySelector(".produceSign")

let producer = () => {
    setTimeout(() => {
        if (!productLock) {
            productLock = true
            if (arrayLength < maxLength) {
                arrayLength++
            } else {
                alert("仓库已满，无法生产。")
            }
            $produceSign.innerHTML =
                "生产完成，" + "目前仓库中已有产品：" + arrayLength + "个"
            productLock = false
        } else {
            alert("生产者或消费者正在工作中，请等一等...")
        }
    }, 500)
}

let consumer = () => {
    setTimeout(() => {
        if (!productLock) {
            productLock = true
            if (arrayLength) {
                arrayLength--
            } else {
                alert("仓库是空的，请等待生产者生产。")
            }
            $produceSign.innerHTML =
                "消费完成，" + "目前仓库中已有产品：" + arrayLength + "个"
            productLock = false
        } else {
            alert("生产者或消费者正在工作中，请等一等...")
        }
    }, 500)
}

$producer.onclick = () => {
    $produceSign.innerHTML = "生产中..."
    producer()
}

$consumer.onclick = () => {
    $produceSign.innerHTML = "消费中..."
    consumer()
}
