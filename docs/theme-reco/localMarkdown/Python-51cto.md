# Python RPA流程自动化（51cto）

pyautogui.click([x,y],duration = 1)      

> x:横坐标;y:纵坐标;duration:移动时间:用duration时间移动到xy处单击一下

pyautogui.moveTo([x,y],duration = 1)      

> x:横坐标;y:纵坐标;duration:移动时间:用duration时间移动到xy处

pyautogui.size()

> 返回屏幕分辨率大小

 pyautogui.position()

> 返回鼠标光标的当前 x 和 y 坐标由positon()函数返回

| 参数     | 可选值            | 简介                                             |
| -------- | ----------------- | ------------------------------------------------ |
| button   | left,right,middle | 决定由鼠标左键、右键还是滚轮来执行点击操作       |
| clicks   | 整数              | 决定鼠标点击次数                                 |
| interval | 数字              | 与clicks搭配使用，决定每次鼠标点击事件的间隔时间 |

pyautogui.mouseDown(button='左/右/中'，x,y)

> 鼠标在xy处按下左/右/中键

pyautogui.mouseUp(button='左/右/中'，x,y)

> 鼠标在xy处抬起左/右/中键

````python
pyautogui.doubleClick()
#鼠标双击
pyautogui.rightClick()
#鼠标右击
pyautogui.middleClick()
#鼠标中键单击
````

pyautogui.scroll(num)

> 鼠标滚动一定的距离

pyautogui.dragTo([],duration)

> 鼠标拖动一定的距离

pyautogui.dragRel([],duration)

> 鼠标相对拖动一定距离

pyautogui.press('el')

> 键盘输入单个字符

pyautogui.typewrire([string])

> 键盘输入string