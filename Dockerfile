# Imagem base do Nginx
FROM nginx:alpine

# Remover configuração padrão
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos do site para o diretório do Nginx
COPY . /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80

# Comando padrão para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
