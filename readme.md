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

<!-- 
    Quando se tem um problema na master se cria uma branch bugfix corrige 
    o problema e faz um merge com a master
-->
git bugfix 

git checkout -b develop
git push origin develop

git checkout -b feature/nome-do-recurso develop
git checkout develop
git merge --no-ff feature/nome-do-recurso

git push origin develop
git checkout -b release/versao-x.y.z develop

git checkout main
git merge --no-ff release/versao-x.y.z
git push origin main

git checkout develop
git merge --no-ff release/versao-x.y.z
git push origin develop



git checkout develop

git checkout -b style-fix develop

git add .
git commit -m "Corrigir estilo da página"

git push origin style-fix

git branch -d style