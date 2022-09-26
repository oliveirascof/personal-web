import sys
import os
from time import sleep as sl
import pyautogui as py

py.alert("Iniciar o repositorio")
init = os.popen("git init")
sl(1)
py.alert("Adicionar todos os arquivos")
git_add = os.popen("git add -A")
sl(1)
commit = py.prompt("Digite a mensagem do commit")
git_commit = os.popen(f'git commit -m "{commit}" ')
py.alert("Commit feito")
sl(1)
py.alert("Agora vamos subir os arquivos")
git_push = os.popen("git push -u origin main")
py.alert("Finalizado!")







    
sys.exit()