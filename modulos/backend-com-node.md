# O que é node?
Permite usar javascript no backend. 

Quando falamos de backend estamos falando sobre a camada que fica a regra de negocio da aplicação, onde acessa o banco de dados, integra com serviço de terceiros (como pagamentos).

# Caracteristicas
- Arquitetura em Event-loop
- Baseada em eventos 
- OBS: Podemos pensar evento como uma função que foi disparada pelo código e o node processa através de um loop eterno.
- Call stack (pilha de eventos)

# Frameworks do node

O mais famoso é o express, porém existem diversos outros como o NextJS.

# O que é NPM(ou yarn)?

Gerenciadores de pacotes que permite que instale ferramentas de terceiros (bibliotecas de terceiros). 

Tambem eh possível fornecer bibliotecas para que os terceiros utilizem da aplicação. 

O yarn eh mais rapido que o npm, por isso algumas pessoas priorizam ele.

# Como funciona uma API
aplicação que faz a ligação entre front e back - o front recebe um tipo de interação do cliente (por exemplo o preenchimento de uma tela de login ou um formulário) poŕem nao tem "controle" sobre esses dados ⇒ o back (que é o banco de dados) recebe por meio de uma rota que é definida por meio da API. 
Exemplo de cliente: browser
Exemplo de servidor: banco de dados

# Middleware

Interceptador de requisicoes, pode interromper totalmente  ou alterar dados da requisicao. 

Eh uma funcao que sempre recebe como primeiro parametro uma requisicao, o segundo a resposta e normalmente um terceiro chamado `next` 

Ele geralmente eh utilizado quando se quer que algum trecho de codigo seja disparado de forma automatica  em uma ou mais rotas da aplicacao.