# Git Profile App

Это приложение для отображения профиля пользователя с GitHub, использующее GitHub OAuth для аутентификации и получения данных профиля.

## Стек технологий

- **Frontend**: React, Ant Design, Axios, React Router.
- **Backend**: Express.js.
- **State management**: Redux Toolkit.

## Зависимости

### Внешние зависимости:

1. `axios` — для запросов к API.
2. `react` — библиотека для создания пользовательского интерфейса.
3. `react-router-dom` — для маршрутизации.
4. `redux-toolkit` — для управления состоянием.
5. `express` — для создания бэкенда.

### Для разработки:

1. `eslint` — для статического анализа кода.
2. `prettier` — для форматирования кода.

## Установка и запуск

### 1. Клонирование репозитория

Для начала, клонируйте репозиторий на вашу машину:

```bash
git clone https://github.com/Eldiyar888/git-profile-app.git
```

### 2. Установка зависимостей

Перейдите в директорию проекта и установите все зависимости:

```bash
cd git-profile-app
npm install
```
или, если используете yarn:

```bash
yarn install
```

### 3. Настройка переменных окружения

Создайте файл .env в корне проекта и добавьте следующие переменные:

```bash
VITE_CLIENT_ID=ваш_клиент_id_от_GitHub
CLIENT_SECRET=ваш_секретный_ключ_от_GitHub
VITE_REDIRECT_URI=http://localhost:5173/callback
```