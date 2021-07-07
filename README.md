## Учебный проект "Интернет магазин японской кухни"

__Этапы реализации:__

* __Commit 1__ - написана предварительная **HTML** верстка главной страницы,
верстка написана максимально семантично (соответственно уровню знаний и опыта автора) 
с применением принципов доступности, без применения **css** стилей на данный момент.
Верстка проверенна на валидность, добавленна папка с **HTML** файлами страниц для возможности проверки
валидности верстки в любой момент на https://validator.w3.org/#validate_by_uri;

* __Commit 2__ - предварительная верстка главной страницы распределенна по отдельным компонентам с сохранением валидности и
семантичности, а так же принципов доступности;

* __Commit 3__ - подготовленна и настроена основная структура файлов стилей. Стилизацию приложения буду производить
с помощью препроцессора **SCSS**;

* __Commit 4__ - добавленны файлы шрифтов, подключенны и настроенны шрифты, добавленны переменные с основными цветами 
и переменные с разрешениями экранов;

* __Commit 5__ - исправил неправильное распределение верстки по компонентам, так как при начале стилизации компонента Header
заметил неправильное расположение блока переключения категорий, добавил новый компонент с категориями в которую
перенес верстку с элементами переключенияя категорий, так же изменил тег обертки для эементов переключения категорий с **"nav"**
на **"section"** так как я допустил ошибку при первой верстке и неправильно определил функцию блока, а так же его местоположение, 
поэтому тег **"nav"** сюда не подходит семантически, так как блок не является элементом навигации, а просто переключает категории товаров;

* __Commit 6__ - прописал стили в "шапку" приложения под мобильные телефоны в компоненте _Header_;

* __Commit 7__ - прописал стили для панели выбора категорий под мобильные телефоны и планшеты в компоненте _Categories_;
* __Commit 7.1__ - добавил тень для панели категорий. Исправил баг с отступом снизу;

* __Commit 8__ - добавил дополнительный компонент в котором будет отображаться список продуктов выбранной категории;

* __Commit 9__ - прописал стили для блока фильтрации и сортировки под мобильные телефоны в компоненте _Filters_;

* __Commit 10__ - прописал стили для блока с названием выбранной категории под мобильные телефоны в компоненте _SelectedCategory_;

* __Commit 11__ - прописал стили для слайдера баннеров со скидками и акциями под мобильные телефоны в компоненте _DiscountsBunners_;