Parte 1: Subindo o Servidor (Backend) 
O Backend é o "motor" da aplicação. Ele precisa estar ligado para que a interface consiga ler e gravar dados.

Abra o terminal e navegue até a pasta onde está o repositório ou pasta do backend (smartcondo-back).

Instale as dependências do projeto rodando o comando:

Bash
npm install
Sincronize o banco de dados: Gere as tipagens do Prisma para que o sistema reconheça as tabelas na nuvem rodando:

Bash
npx prisma generate
Inicie o servidor de desenvolvimento:

crie um arquivo .env a adicione as variáveis ambiente e seus valores.
PORT;
JWT_SECRET;
DATABASE_URL.

Bash
npm run dev
O que deve aparecer no terminal: Uma mensagem confirmando que a aplicação está rodando (geralmente na porta 3001, com um log do radar indicando [RADAR]).
