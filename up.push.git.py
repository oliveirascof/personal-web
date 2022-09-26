import sys
import os
from time import sleep as sl
import pyautogui as py

# Abre o cmd e inicializa o repo
os.popen("git init")

# Adiciona os arquivos modificados na lista para commit
os.popen("git add -A")

commit = py.prompt("Digite a mensagem para o commit")

# Realiza o commit
os.popen(f'git commit -m "{commit}" ')
sl(1)

py.alert("Commit feito! Agora vamos subir os arquivos para o Github")

# Realiza o push para o repositorio no Github
git_push = os.popen("git push -u origin main")

py.alert("Finalizado! Arquivos estão no git")







    
sys.exit()