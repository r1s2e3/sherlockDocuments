**Для начала работы необходима установка:**

- Node.js >= 10.0.0
- NPM >= 6.0.0

**Установка зависимостей:**
```shell script
npm install
```

**Запуск приложения в режиме разработчика c hot-reload на локальной машине (localhost:8080):**
```shell script
npm run serve
```
или
```shell script
npm run start
```

**Сборка билда для DEV-окружения (билдит проект и документацию):**
```shell script
npm run build-dev
```

**Сборка билда для PROD-окружения:**
```shell script
npm run build
```

**Запуск json-server для создания заглушек REST API:**
```shell script
npm run server
```

**Запуск документации в режиме разработки с hot-reload (localhost:6060):**
```shell script
npm run styleguide
```

**Сборка документации (результат - директория public/docs):**
```shell script
npm run styleguide-build
```

**Запуск статического анализатора кода (ESLint) для проверки code style:**
```shell script
npm run lint
```
