import pyautogui as pg

pg.keyDown('alt')
pg.press('d')
pg.keyUp('alt')

pg.write('powershell')
pg.hotkey('enter')