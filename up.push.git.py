import sys
import os
from time import sleep as sl
import pyautogui as py

# Abre o cmd e inicializa o repo
git_init = os.popen("git init").read()
print(git_init)
sl(1)

# Adiciona os arquivos modificados na lista para commit
git_add = os.popen("git add -A").read()
print(git_add)
sl(1)

# Altera para branch main
branch_main = os.popen("git branch -M main").read()
print(branch_main)
sl(1)

commit = py.prompt("Digite a mensagem para o commit")

# Realiza o commit
commit = os.popen(f'git commit -m "{commit}"').read()
print(commit)
sl(1)

py.alert("Commit feito! Agora vamos subir os arquivos para o Github")

# Realiza o push para o repositorio no Github
git_push = os.popen("git push -u origin main").read()
print(git_push)
sl(1)

py.alert("Finalizado! Arquivos estão no git")







    
sys.exit()