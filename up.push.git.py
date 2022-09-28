from sys import exit
from os import popen
from time import sleep
from pyautogui import alert
from pyautogui import prompt

# Abre o cmd e inicializa o repo
git_init = popen("git init").read()
print("Inicializando repositorio")
print(git_init)
print("OK")
sleep(1)

# Adiciona os arquivos modificados na lista para commit
git_add = popen("git add -A").read()
print("Adicionando itens na lista para o commit")
print(git_add)
print("OK")
sleep(1)

# Altera para branch main
print("Checando a branch e setando para main")
popen("git branch -M main")
branch_main = popen("git branch").read()
print(branch_main)
print("OK")
sleep(1)

commit = prompt("Digite a mensagem para o commit")

# Realiza o commit
print("Realizando o commit...")
commit = popen(f'git commit -m "{commit}"').read()
print(commit)
print("OK")
sleep(1)

alert("Commit feito! Agora vamos subir os arquivos para o Github")

# Realiza o push para o repositorio no Github
print("Fazendo o push para o github")
git_push = popen("git push -f origin main").read()
print(git_push)
print("OK")
sleep(1)

alert("Finalizado! Arquivos estão no git")
alert(f"{git_push}")
exit()