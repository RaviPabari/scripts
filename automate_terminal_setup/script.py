#!/usr/bin/env python3
import pyautogui as pg
import time

def launch_terminator():
    pg.hotkey('win')
    time.sleep(0.5)
    pg.write('terminator')
    pg.hotkey('enter')
    time.sleep(0.5)
    
    with pg.hold('win'):
        pg.press(['up','up'])
    time.sleep(0.25)
    
    # Configure your directories here
    pg.write('cd ori/')
    pg.hotkey('enter')
    time.sleep(0.2)
    
    with pg.hold('alt'):
        pg.press('2')
        pg.press('1')
        pg.press('1')
        time.sleep(0.2)

    # Configure your directories here
    pg.write('cd test/')
    pg.hotkey('enter')
    time.sleep(0.1)

    with pg.hold('alt'):
        pg.press('up')
    pg.sleep(0.1)
    
    # Configure your directories here
    pg.write('cd ocs_2/BrainService/brand-files/actions/')
    pg.hotkey('enter')
    pg.sleep(0.1)

    with pg.hold('alt'):
        pg.press('up')
    time.sleep(0.1)

    # Configure your directories here
    pg.write('cd chatbot-3.0/')
    pg.hotkey('enter')
    time.sleep(0.1)

    # pg.write('nodemon')
    # pg.hotkey('enter')
    # time.sleep(0.1)
    
    with pg.hold('alt'):
        pg.press('left')
    time.sleep(0.1)

    # Configure your directories here
    pg.write('cd ocs_2')
    pg.hotkey('enter')
    time.sleep(0.1)
    
    pg.write('code .')
    pg.hotkey('enter')
    time.sleep(0.1)

    # pg.write('nodemon')
    # pg.hotkey('enter')

launch_terminator()
