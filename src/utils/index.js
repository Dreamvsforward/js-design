// 题目一


// 题目二
// 1.某停车场，分3层，每层100车位
// 2.每个车位都能监控到车辆的驾入和离开
// 3.车辆进入前，显示每层的空余车位数量
// 4.车辆进入时，摄像头可识别车牌号和时间
// 5.车辆出来时，出口显示器显示车牌号和停车时长

// 停车场
class Park {
    constructor (floors) {
        // 车位数
        this.floors = floors || []
        // 摄像机
        this.camere = new Camere()
        // 屏幕
        this.screen = new Screen()
        // 存储摄像头拍摄返回的车辆信息
        this.carList = {}
    }
    // 进入前，查询空白数量
    emptyNum () {
        return this.floors.map(floor => {
            return `${floor.index}层还有${floor.emptyPlaceNum()}个空闲车位`
        }).join('\n')
    }
    // 车辆进入时
    in (car) {
        // 通过摄像头获取信息
        const info = this.camere.shot(car)
        // 停到某个车位
        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        // 记录信息
        this.carList[car.num] = info
    }
    // 车辆离开时
    out (car) {
        // 获取信息
        const info = this.carList[car.num]
        // 清空信息
        const place = info.place
        place.out()
        // 显示时间
        this.screen.show(car, info.inTime)
        // 清空记录(避免造成内存泄漏)
        delete this.carList[car.num]
    }
}

// 楼层
class Floor {
    constructor (index, places) {
        this.index = index
        this.places = places
    }
    emptyPlaceNum () {
        let num = 0
        this.places.forEach(p => {
            if (p.empty) {
                num = num + 1
            }
        })
        return num
    }
}

// 车位
class Place {
    constructor () {
        this.empty = true
    }
    in () {
        this.empty = false
    }
    out () {
        this.empty = true
    }
}

// 摄像头
class Camere {
    shot (car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

// 显示器
class Screen {
    show (car, inTime) {
        console.log('车票号:', car.num)
        console.log('停车时间:', Date.now() - inTime)
    }
}

// 车
class Car {
    constructor (num) {
        this.num = num
    }
}

// 测试
// 初始化停车场
const floors = []
for (let i = 0; i < 3; i++) {
    const places = []
    for (let j = 0; j < 100; j++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i + 1, places)
}
const park = new Park(floors)

// 初始化车辆
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(3000)


console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)
console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)
console.log('第一辆车离开')
park.out(car1)
console.log('第二辆车离开')
park.out(car2)

console.log('第三辆车进入')
console.log(park.emptyNum())
park.in(car3)
console.log('第三辆车离开')
park.out(car3)