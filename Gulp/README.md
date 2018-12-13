# Escrevendo JS novo em sistema legado

Todo dia estamos estudando algo novo até que chega a um ponto vamos alterar código legado, escrevemos algo legal usando novos conceitos da linguagem e quando vamos testar, o negócio funciona apenas em um navegador :'(

Será que podemos manter o sistema legado usando tudo o que temos hoje? **SIM!**

Gulp é o salvador que pode nos ajudar a escrever JS novo e fazer as coisas magicamente funcionarem em navegadores "antigos"

## Requisitos

O requisito base é ter o [Node](https://www.nodejs.org) instalado para que possamos instalar o gulp

Tendo em base que se tenha o Node já instalado, execute o seguinte comando para que possamos instalar o gulp de forma global na máquina

```bash
    npm install -g gulp-cli
```

## Iniciando um projeto

Vamos imaginar que temos um projeto que tenha a seguinte estrutura

```bash
|-- minha-pagina-html
    |-- index.html
    |-- src
        |-- old-calculator.js
        |-- old-calculator-min.js
        |-- newJS
            |-- new-calculator.js
            |-- new-calculator-min.js
```

Nessa estrutura temos o arquivo `old-calculator.js` é um arquivo antigo de funcionando perfeitamente em todos os browsers e desenvolvemos uma classe no arquivo `new-calculator.js`.

Com isso em mãos, vamos criar o arquivo `package.json` utilizando o comando:

```bash
    npm init -y
```

Agora que temos nosso package.json criado, podemos iniciar a instalação das dependências utilziando o seguinte comando:

```bash
    npm install --save-dev gulp gulp-babel @babel/core @babel/preset-env gulp-rename gulp-uglify del gulp-sourcemaps
```

Tá, mas o que cada um desses cara fazem?

 - gulp:
    - É a o nosso executor de atividades, com ele que poderemos fazer as execuções das outras dependências
 - gulp-babel, @babel/core, @babel/preset-env
    - Dependências responsáveis por pegar o nosso código ES6 e converter para ES5 que é compativel com todos os navegadores
 - gulp-rename
    - Dependência que auxiliará a criar os novos arquivos com um padrão de nome
 - gulp-uglify
    - Dependência que fará a compressão do nosso arquivo, fazendo com que ele fique sem comentários e reduzindo o tamanho do arquivo
 - del
    - Dependência que excluirá os arquivos minificados para nós, para que possamos gerar novos arquivos atualizados
 - gulp-sourcemaps
    - Dependência que fará o mapeamento do arquivo minificado para um arquivo "normal", assim caso tenha que debugar algo em produção, você pode ver o arquivo como se estivesse rodando o arquivo descompactado :)

## Exemplo funcionando

O exemplo funcionando, você pode encontrar no neste [Link](https://github.com/eduardocompiani/blogdiretoemproducao/tree/master/examples/Gulp)
