<!-- inicia o git  -->
git init

<!-- deixa os arquivos preparados na area do unstage para o primeiro commit -->
git add readme.md index.html

<!-- ver os status do git -->
git status

<!-- commit -->
git commit -m "first commit"

<!-- Algumas empresas não adotam o nome da branch principal como master
    chamando de main => para mudar o nome-->

git branch -M "main"

<!-- mandar para o repositorio remoto 'github' -->
git remote add origin https://github.com/emersonmarins/<nome do repositorio no github>

git push -u origin main
<!-- da segunda vez em diante não precisa do -u -->
git push origin main


<!-- Fazendo uma branch ramificação -->
git checkout -b "add css"
========= PADRONIZANDO OS COMMITS =======
<!-- Ferramenta de linha de comando que ajuda a padronizar os commits -->
npm install commitizen 
commitizen init cz-conventional-changelog --yarn --dev --exact