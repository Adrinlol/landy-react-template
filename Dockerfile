# Установка базового образа
FROM node:18 as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Используем Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем сборку React в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию Nginx (опционально)
# COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80
EXPOSE 80

# Стартуем Nginx
CMD ["nginx", "-g", "daemon off;"]