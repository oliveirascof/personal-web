from sys import exit
from os import popen
from time import sleep
from pyautogui import alert
from pyautogui import prompt
from tkinter import messagebox as mb

# Abre o cmd e inicializa o repo
git_init = popen("git init").read()

# Adiciona os arquivos modificados na lista para commit
git_add = popen("git add -A").read()

# Altera para branch main
popen("git branch -M main")
branch_main = popen("git branch").read()

commit = prompt("Mensagem para o commit")
comm = mb.askyesno('Commit', 'Proceder com o commit?')

if not comm:
    exit()
# Realiza o commit
commit = popen(f'git commit -m "{commit}"').read()

# Realiza o push para o repositorio no Github
sair = mb.askyesno('Commit feito', 'Pronto para o push?')
if not sair:
    exit()

git_push = popen("git push -f origin main").read()

alert("Finalizado!")

# abre o repositorio no navegador
popen("start brave https://github.com/oliveirascof/personal-web")

#encerra o script
exit()