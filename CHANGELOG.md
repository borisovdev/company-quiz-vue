# Changelog

## Beta 0.2.5
### Added
- Добавлен пакет vuelidation
- Валидация CardsScreen, RadiosScreen, FreeAnswer 

## Beta 0.2.4
### Changed
- Логика хранилища вынесена в модуль. Это необходимо для корректной работы нескольких веб-компонентов на одной странице, которые используют VUEX.
- Обновлена логика обращения к хранилищу во всех компонентах, которые используют его данные.

## Beta 0.2.3
### Added
- Навигация на следующий шаг квиза с помощью клавиатуры

### Changed
- Передача данных в компонент NotifyBar
- В хранилище возвращены мутации UPDATE_USER_NAME, UPDATE_USER_PHONE, UPDATE_USER_EMAIL


## Beta 0.2.2
### Added 
- Геттер хранилища getUserData
### Changed
- Метод getUserData переименован в getNowUserData
- Изменены некоторые методы работы с хранилищем vuex


## Beta 0.2.1
### Added
- Логика добавления городов в компоненте Selects

### Changed
- Компонент InputTextAndSelect переименован в TextAndSelect
- Компонент InputSelectAndText переименован в Selects
- Система хранения и обновлния состояния в компонентах TextAndSelect и Selects

### Removed
- scss файлы стилей. Стилизация полностью перенесена в компоненты