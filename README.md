<<<<<<< HEAD
# Teach Space

## backend

1. Установить Docker Desktop
2. Установка Docker compose (если не ставится с Docker Desktop)
3. Запуск контейнеров с сервером, postgress и pgadmin
   Запустить Docker Desktop, затем выполнить команды:

```sh
cd backend
docker-compose up --build
```

4. Swager будет доступен по адресу http://localhost:8000/docs или http://0.0.0.0:8000/docs

5. Для того, чтобы завершить работу ввести команду

```sh
docker-compose down --volumes
```

## frontend

```sh
cd frontend
yarn dev
=======
# Teach-Space Frontend

Фронтенд-приложение **Teach-Space** — образовательная платформа, построенная на React + Vite с использованием TypeScript.

## Стек технологий

- **React 19** — UI-библиотека
- **Vite** — сборщик и dev-сервер
- **Redux Toolkit** — управление состоянием
- **React Router DOM** — маршрутизация
- **Material UI (MUI)** — компоненты интерфейса
- **Tailwind CSS** — утилитарные стили
- **Sass** — CSS-препроцессор
- **TypeScript** — типизация
- **ESLint** — линтинг

## Установка и запуск

### 1. Установка зависимостей

```bash
npm install
```

### 2. Запуск dev-сервера

```bash
npm run dev
```

После запуска откройте браузер по адресу, указанному в терминале (обычно `http://localhost:5173`).

## Доступные команды

| Команда           | Описание                                   |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Запуск dev-сервера с горячей перезагрузкой |
| `npm run build`   | Сборка проекта для продакшена              |
| `npm run preview` | Предпросмотр продакшен-сборки              |
| `npm run lint`    | Проверка кода линтером ESLint              |

## Структура проекта

```
frontend/
├── public/          # Статические файлы
├── src/
│   ├── components/  # React-компоненты
│   ├── App.tsx      # Корневой компонент
│   ├── main.tsx     # Точка входа
│   └── styles.css   # Глобальные стили
├── index.html       # HTML-шаблон
└── package.json     # Зависимости и скрипты
>>>>>>> master
```
