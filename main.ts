/**
 * Test IR Fernbedienung mit dem OSOYOO Treiber für die schwarze Fernbedienung mit dem Steuerkreuz unterhalb dem Zahlenfeld
 */
Bit_IR.onPressEvent(RemoteButton.NUM2, function () {
    basic.showNumber(2)
})
Bit_IR.onPressEvent(RemoteButton.OK, function () {
    basic.showIcon(IconNames.Heart)
})
Bit_IR.onPressEvent(RemoteButton.NUM1, function () {
    basic.showNumber(1)
})
Bit_IR.init(Pins.P16)
basic.forever(function () {
	
})
