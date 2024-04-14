
# O-Complext Тестовое задание

&#9745; визуал по фигме 

&#9745; должен быть адаптирован под мобильные устройства и планшеты

&#9745; наполнение контентом отзывов из html обернутого в json

&#9745; наполнение контентом товары по апи

&#9745; показывать первую страницу сразу

&#9745; при нажатии на кнопку "купить", она должна меняться на кнопки + и - и поле для ввода кол-ва товара, значение поля должно быть 1, кнопки должны добавлять отбавлять товар, так же должна быть возможность вписать в поле для ввода любое кол-во.

&#9745; при изменении кол-ва какого-либо из товаров должна меняться информация в корзине (та что над полем с телефоном)

&#9745; набранные товары должен сохраняться при перезагрузки страницы

&#9745; маска в поле для телефона

&#9745; при нажатии кнопки "заказать" идет проверка того что телефон полностью введен

&#9745; если всё хорошо - отправлять запрос на сервер

&#9745; если есть ошибки - подсветить соответствующие поля красным (поле номера телефона)

&#9745; после отправки запроса и получения ответа от сервера отобразить попап что всё успешно (сделать попап в стиле самого сайта)

&#9745; отказоустойчивость. например пофиксить xss атаку через контент отзывов, учесть возможность того что название товара может быть длиннее чем в дизайне.




## Версии проекта

**Node:** v20.11.0

**npm:** 10.3.0


## Для запуска проекта локально

Клонирование репозитория:

```bash
  git clone https://github.com/GrommuL/o-complex.git
```

Установка зависимостей:

```bash
  npm install
```


Запуск проекта:

```bash
  npm run dev
```
    
