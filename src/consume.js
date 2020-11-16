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
}, 3000)
