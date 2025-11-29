# 🔗 arlink
Минимальный сервис сокращения ссылок на Node.js + TypeScript с PostgreSQL. Не содержит никакой защиты от атак. Создаёт уникальные короткие коды для длинных URL, поддерживает дубликаты (возвращает существующий код).
## 🛠 Стек технологий

| Категория | Технологии |
|-----------|------------|
| **Runtime** | Node.js 20+ |
| **Язык** | TypeScript 5.x |
| **Framework** | Express.js |
| **База данных** | PostgreSQL 16+ + Knex.js |

## 🚀 Быстрый старт

### 1. Клонируй и установи

    git clone https://github.com/Anardest/arlink.git
    
    cd arlink
    
    npm install


### 2. Настрой PostgreSQL
Создай и настрой базу данных `arlink_db`:

    sudo -u postgres psql
    
    CREATE USER <имя_пользователя> WITH PASSWORD '<пароль>';

    CREATE DATABASE <имя_бд> OWNER <имя_пользователя>;

    GRANT ALL PRIVILEGES ON DATABASE <имя_бд> TO <имя_пользователя>;

Обнови `knexfile.ts` и `src/db.ts` с твоими данными БД.

### 3. Запусти миграции

    npm run migrate:latest

### 4. Запуск

    npm run build
    
    npm run start

Сервер запустится на `http://localhost:3000`

## 📖 API

| Метод | Эндпоинт | Описание |
|-------|----------|----------|
| `POST` | `/urls` | Создать короткую ссылку<br>`{"long_url": "https://example.com"}` |
| `GET` | `/l/:shortCode` | Редирект на оригинальный URL |

### Примеры
Создать

    curl -X POST http://localhost:3000/urls
    -H "Content-Type: application/json"
    -d '{"long_url": "https://google.com"}'
    → {"id": 1, "long_url": "https://google.com", "short_code": "AbC123Xy"}

Редирект

    curl -L http://localhost:3000/l/AbC123Xy
    → https://google.com

## 📁 Структура проекта
    ├── src/
    │ ├── db.ts # Knex config
    │ ├── index.ts # Express app
    │ ├── routes/url.ts # API роуты
    │ └── utils/shortCodeGenerator.ts
    ├── migrations/ # Knex миграции
    ├── knexfile.ts # Миграции config
    ├── tsconfig.json
    ├── package.json
    └── README.md

## 📄 Лицензия

MIT — используй на здоровье! 🚀
