[![Netlify Status](https://api.netlify.com/api/v1/badges/001b0a76-02b8-4902-813d-da34e3c8e948/deploy-status)](https://app.netlify.com/sites/lambent-biscotti-653b27/deploys)

# Описание
Приложение - аналог чата с возможностью авторизации, изменением настроек данных пользователя и обмена сообщениями.
Используется компонентный подход и шаблонизатор Handlebars, TypeScript, SCSS.
Настроена валидация полей форм, а так же вывод данных с формы в консоль в виде объекта.

## Ссылка на приложение
https://lambent-biscotti-653b27.netlify.app/

## Ссылка на PR
https://github.com/alexmkk/middle.messenger.praktikum.yandex/pull/3

Добавлено:
- авторизация
- изменение данных пользователя + аватара
- создание и удаление чатов
- добавление пользователей в чат
- поиск чатов
- поиск пользователей

## Команды для запуска
- `npm run dev` - запуск версии для разработчика
- `npm run build` - сборка проекта
- `npm run start` - запуск Express сервера для раздачи статичных файлов
- `npm run lint` - запускает проверку ts и scss файлов
- `npm run lint:fix` - автоматическое исправление ts и scss файлов

