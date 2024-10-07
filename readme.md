
# Projeto TypeScript

Este projeto é configurado para utilizar o compilador TypeScript com as seguintes opções:

## Configuração do `tsconfig.json`

O arquivo `tsconfig.json` utilizado neste projeto contém as seguintes configurações:

```json
{
  "compilerOptions": {
    "outDir": "./dist",        
    "rootDir": "./src",        
    "target": "es6",           
    "module": "commonjs",      
    "strict": true,            
    "esModuleInterop": true,   
    "skipLibCheck": true,      
    "forceConsistentCasingInFileNames": true 
  },
  "include": ["src"]           
}
```

## Explicação das configurações
- outDir: Especifica o diretório de saída para os arquivos JavaScript compilados. Neste caso, os arquivos serão gerados no diretório ./dist.
- rootDir: Define o diretório raiz para os arquivos TypeScript. Todos os arquivos TypeScript devem estar dentro do diretório ./src.
- target: Define a versão do ECMAScript para a qual o TypeScript será compilado. Aqui, está configurado para es6.
- module: Especifica o sistema de módulos utilizado. Está configurado para commonjs, que é o padrão utilizado no Node.js.
- strict: Habilita o modo estrito, que ativa um conjunto de verificações rigorosas de digitação.
- esModuleInterop: Habilita interoperabilidade com módulos ES, facilitando o uso de imports e exports.
- skipLibCheck: Ignora a verificação de tipos em arquivos de declaração (arquivos .d.ts), acelerando o tempo de compilação.
- forceConsistentCasingInFileNames: Garante que o compilador respeite a diferenciação de maiúsculas e minúsculas em nomes de arquivos, evitando erros em sistemas de arquivos que não são sensíveis a maiúsculas/minúsculas.

## Estrutura do Projeto
```
.
├── dist/                # Diretório onde os arquivos JavaScript compilados serão gerados
├── src/                 # Diretório contendo o código-fonte TypeScript
│   ├── index.ts         # Arquivo principal do projeto
│   └── ...
├── tsconfig.json        # Arquivo de configuração do TypeScript
└── README.md            # Documentação do projeto
```

#Instruções de Uso

## Certifique-se de que você tenha o Node.js instalado. Depois, instale as dependências do projeto:

- npm install

## Para compilar os arquivos TypeScript para JavaScript, execute:

- npx tsc
- Os arquivos compilados serão gerados no diretório dist.

### Execução do Projeto, após a compilação, você pode executar o projeto com:

- node dist/index.js
    