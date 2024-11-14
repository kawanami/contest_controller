Tello.radiosetgroup(40)

def on_forever():
    Tello.setorder()
basic.forever(on_forever)
