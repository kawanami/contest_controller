enum MyEnumX {   
    //% block="動かさない"
    NO_X = (0),
    //% block="前"
    FOWARD = (50),
    //% block="後"
    BACK = (-50),
}

enum MyEnumY {
    //% block="動かさない"
    NO_Y=(0),
    //% block="上"
    UP=(50),
    //% block="下"
    DOWN=(-50),
}

enum MyEnumZ {
    //% block="動かさない"
    NO_Z = (0),
    //% block="右"
    LIGHT = (-50),
    //% block="左"
    LEFT = (50)
}

/**
 * Custom blocks
 */
//% weight=0 color=#fc4c02 icon="\u26a1"
//% block="ドローン""


namespace Tello {

    /**
     * スピードの設定を行う、20~50の間で設定する、1につき1cm進む！
     * @param スピードの設定を行う value 20-50, eg: 10
     */
    //% block="スピードを設定する(20-50:初期値は30) %value"
    //% group="設定"
    export function Setspped(value: number): void {
        if (value > 50) {
            value=50
        }
        radio.sendString("speed=" + value)
    }

    /**
     * 送信間隔の設定を行う、「ずっと」で使う、1000ミリ秒単位で固定
     */
    //% block="【ずっと】送信間隔を設定する(1000ミリ秒)"
    //% group="設定"
    export function Setorder(): void {
        if (command_enable == 0) {
            basic.pause(1000)
            command_enable = 1
        }
    }

    /**
     * 通信グループの設定を行う．受信機と送信機のグループ設定は合わせてね
     * @param 通信グループの番号 value 0-255, eg: 1
    */
    //% block="【最初だけ】無線グループの設定を行う %value"
    //% group="設定"
    export function radiosetgroup(value: number): void {
        radio.setGroup(value)
        radio.setFrequencyBand(value % 84)
        radio.setTransmitPower(7)
    }

    /**
     * 受信機にドローンが反時計回りを行う命令を送信する．
     * その時，角度を設定し送信を行う．
     * @param value 反時計回りを行う角度を設定する(degrees counterclockwise) value 1-360, eg: 90
     */
    //% block="反時計まわり(1-360) %value"
    //% group="基本"
    export function rotate_ccw(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("ccw=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが時計回りを行う命令を送信する．
     * その時，角度を設定し送信を行う．
     * @param value 時計回りを行う角度を設定する(degrees clockwise) value 1-360, eg: 90
     */
    //% block="時計まわり(1-360) %value"
    //% group="基本"
    export function rotate_cw(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("cw=" + value)
            flying = 1
            command_enable = 0
        }
    }


    /**
     * 受信機にドローンが下に下る命令を送信する．
     * その時，距離も設定し送信を行う．20-500cm．
     * @param value 下がる距離を設定する（cm） value 20-500, eg: 20
     */
    //% block="下にいく(20-500) %value"
    //% group="基本"
    export function down(value: number): void {
        if (flying == 1 && command_enable == 1) {
            if (value < 20) {
                value = 20
            }
            radio.sendString("down=" + value)
            flying = 1
            command_enable = 0
        }
    }


    /**
     * 受信機にドローンが上に上がる命令を送信する．
     * その時，距離も設定し送信を行う．20-500cm．
     * @param value 上がる距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="上にいく(20-500) %value"
    //% group="基本"
    export function up(value: number): void {
        if (flying == 1 && command_enable == 1) {
            if (value < 20) {
                value = 20
            }
            radio.sendString("up=" + value)
            flying = 1
            command_enable = 0
        }
    }
    
    /**
     * 受信機にドローンが左に進む命令を送信する．
     * その時，距離も設定し送信を行う．20-500cm．
     * @param value 左にすすむ距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="左にすすむ(20-500) %value"
    //% group="基本"
    export function left(value: number): void {
        if (flying == 1 && command_enable == 1) {
            if (value < 20) {
                value = 20
            }
            radio.sendString("left=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが右に進む命令を送信する．
     * その時，距離も設定し送信を行う．20-500cm．
     * @param value 右にすすむ距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="右にすすむ(20-500) %value"
    //% group="基本"
    export function right(value: number): void {
        if (flying == 1 && command_enable == 1) {
            if (value < 20) {
                value = 20
            }
            radio.sendString("right=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが後ろにすすむ命令を送信する．
     * その時，距離も設定し送信を行う．20-500cm．
     * @param value 後ろにすすむ距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="後ろにすすむ(20-500) %value"
    //% group="基本"
    export function back(value: number): void {
        if (flying == 1 && command_enable == 1) {
            if (value < 20) {
                value = 20
            }
            radio.sendString("back=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが前に進む命令を送信する．
     * その時，距離も設定し送信を行う．20-500cm．
     * @param value 前に進む距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="前にすすむ(20-500) %value"
    //% group="基本"
    export function forward(value: number): void {
        if (flying == 1 && command_enable == 1) {
            if (value < 20) {
                value = 20
            }
            radio.sendString("forward=" + value)
            flying = 1
            command_enable = 0
        }
    }


    /**
      * コントローラー内の変数を確認して離陸するか，着陸を行う．
      */
    //% block="りりく/ちゃくりく"
    //% group="基本"
    export function fly_or_land(): void {
        if (flying == 0 && command_enable == 1) {
            radio.sendString("takeoff")
            flying = 1
            command_enable = 0
        } else if (flying == 1 && command_enable == 1) {
            radio.sendString("land")
            flying = 0
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが離陸する命令を送信する．
     */
    //% block="離陸する"
    //% group="離陸と着陸"
    export function takeoff(): void {
        if (command_enable == 1) {
            radio.sendString("takeoff")
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが着陸する命令を送信する．
    */
    //% block="着陸する"
    //% group="離陸と着陸"
    export function land(): void {
        if (command_enable == 1) {
            radio.sendString("land")
            flying = 0
            command_enable = 0
        }
    }

    /**
     * ドローンの飛行状態の変数を取得する．
    */
    //% block="ドローンが飛行をしている"
    //% group="離陸と着陸"
    export function getflying(): boolean {
        if (flying == 1) {
            return true
        } else {
            return false
        }
    }

 

    /**
     * カメラを切り替える
     */
    //% block="カメラを切り替える "
    //% group="コンテスト用"
    export function swiching_camera(): void {
        if (flying == 1 && command_enable == 1) {
            if (camera == 1) {
                radio.sendString("downvision 0")
                camera = 0
                command_enable = 0
            } else {
                radio.sendString("downvision 1")
                camera = 1
                command_enable = 0
            }
        }
    }

    /**
     * ドローンが左フリップします！おしゃれ！
     */
    //% block="左フリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function left_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=l")
            command_enable = 0
        }
    }

    /**
     * ドローンが右フリップします！おしゃれ！
     */
    //% block="右フリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function right_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=r")
            command_enable = 0
        }
    }

    /**
     * ドローンが後ろフリップします！おしゃれ！
     */
    //% block="後ろフリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function back_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=b")
            command_enable = 0
        }
    }

    /**
      * ドローンが前フリップします！おしゃれ！
      */
    //% block="前フリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function forward_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=f")
            command_enable = 0
        }
    }

    /**
        * ドローンが三次元で移動します．20以下の移動は不可,speedは10以上．
        * @param x x -500-500, eg: 0
        * @param y y -500-500, eg: 0
        * @param z z -500-500, eg: 0
        * @param speed speed 10-100, eg: 0
        */
    //% block="自由飛行(距離は±20以上) | 前後（前が＋） %x 上下（上が＋） %y 左右（左が＋） %z スピード(10以上) %speed"
    //% group="応用"
    export function xyz(x: number, y: number, z: number, speed: number): void {
        if (flying == 1 && command_enable == 1) {
            let sendstring = "go=" + x + " " + z + " " + y + " " + speed
            radio.sendString(sendstring)
            command_enable = 0
        }
    }


}

let flying = 0
let command_enable = 1
let camera = 0
