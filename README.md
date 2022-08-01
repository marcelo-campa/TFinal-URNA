# Urna Eletrônica

Um simulador da urna eletrônica brasileira.

### [https://aqueous-tor-60129.herokuapp.com/)
![Urna Eletrônica](urna-eletronica/screenshot.jpg)



## Nesse repositório temos alguns arquivos que valem a pena serem destacados:

### - Dockerfile:

Usado para rodar a aplicação na cloud recebendo as credenciais do banco durante o build na forma de variáveis de ambiente pois as mesmas são conteúdo sensível. Além disso, precisamos sobrescrever o arquivo que mapeia portas no apache httpd server devido a um problema específico da plataforma de cloud utilizada(Para rodar localmente é preciso comentar a ultima linha do dockerfile). 

Comando para build do container: 
```docker build --build-arg host=YOUR_HOST --build-arg user=YOUR_USER --build-arg pw=YOUR_PASSWORD --build-arg db=YOUR_DATABASE_NAME -t IMAGE_NAME .```

Para rodar o container basta utilizar o seguinte comando: ```docker run -it --rm -p80:80 IMAGE_NAME```

### - json_to_sql.py: 
Script em python utilizado para gerar o sql para popular o banco de dados.

### - dump.sql:
arquivo gerado pelo script acima.

### - eleicoes_candidatos.sql:
arquivo que contem os candidatos e a estrutura do banco mysql utilizado.

### - ports.conf:
arquivo necessário para sobrescrever a porta utilizada pelo apache httpd.

## OBS:
Tanto a aplicação(frontend e backend) quanto o banco de dados mysql foram hospedados no serviço de cloud **Heroku**.
