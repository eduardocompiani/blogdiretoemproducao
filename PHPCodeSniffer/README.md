# Como usar o PHP Code Sniffer

 - ## Baixando o PHP

    1. Acesse o [site](https://windows.php.net/download) de download do php e baixe o **Zip** de qualquer versção >= 5.6
    1. Extraia o arquivo em qualquer pasta do sistema
        1. Exemplo: ![Pasta que coloquei o php](../assets/PHPCodeSniffer/local-que-coloquei-o-php.png)

- ## Adicionando o PHP nas variáveis de ambiente

    + ## Windows 7
    
        Para adicionar o php nas variáveis de ambiente, clique com o botão direito em **Meu Computador** em seguida, clique em **Propriedades**:
        <br>![Abrindo propriedades de meu computador](../assets/PHPCodeSniffer/propriedades-meu-computador.png)
       
        Clique em **Configurações avançadas do sistema**, em seguida clique em **Variáveis de Ambiente**:
        <br>![Mostrando tela Propriedades do Sistema](../assets/PHPCodeSniffer/mostrando-propriedades-do-sistema.png)

        Procure pela variável **PATH** na tabela superior e clique em **Editar...**:
        <br>![Abrindo edição do campo da variável PATH](../assets/PHPCodeSniffer/path-do-usuario.png)

        Ao final do campo **Valor da variável**, adicione um **;** e o caminho completo para a pasta que foi extraído o php:
        <br>![Adicionando caminho para a pasta onde foi extraido o php](../assets/PHPCodeSniffer/caminho-pasta-php.png)

        Após isso, Clique em **OK** para confirmar todas as alterações.
        <br> Para confirmar que o PHP foi instalado com sucesso, abra o console e escreva **php -v** e deverá aparecer a sua versão do php instalada:
        <br>![Acessando o php pelo console](../assets/PHPCodeSniffer/php-instalado-com-sucesso.png)

    + ## Windows 10

        Add some text here

- ## Baixando o PHP Code Sniffer

    Add some text here

- ## Gerando relatório de erros

    Gerar o relatório de erros é simples a base para o comando será sempre:

        php caminho\para\phpcs.phar caminho\para\pasta\ou\arquivo
    
    Porém nosso intuito é garantir style code, mas qual é o padrão? **PSR2**!<br>
    sendo assim, nosso comando agora ficará:

        php caminho\para\phpcs.phar --standard=psr2 caminho\para\pasta\ou\arquivo

    Para listar a quantidade de erros por arquivo, podemos definir o parâmetro **report=summary**, com ele também podemos saber quantos erros o comando **PHPCBF** consegue corrigir.

        ## Exemplo de comando
        php caminho\para\phpcs.phar --standard=psr2 --report=summary caminho\para\pasta\ou\arquivo

        ## Comando rodando na include/audit
        php F:\#05-phpcs\phpcs.phar --standard=PSR2 --report=summary C:\Users\eduardo.compiani\Desktop\SoftExpertExcellenceSuiteV2\System\web\include\audit\
    
    Para listar a quantidade de erros por definição de erro, podemos definir o parâmetro **report=source**, com ele também podemos saber quantos arquivos serão afetados pelo comando **PHPCBF**.

        ## Exemplo de comando
        php caminho\para\phpcs.phar --standard=psr2 --report=source caminho\para\pasta\ou\arquivo

        ## Comando rodando na include/audit
        php F:\#05-phpcs\phpcs.phar --standard=PSR2 --report=source C:\Users\eduardo.compiani\Desktop\SoftExpertExcellenceSuiteV2\System\web\include\audit\

- ## Executando correção automática de erros

    Add some text here

- ## Integrando o PHPCS no Sublime

    Add some text here

- ## Integrando o PHPCS no VS Code

    Add some text here