```html
json-server                        - конфигурация тестового локального REST API с заглушками
|-- routes.js                      - конфигурация роутинга для тестового REST API (проксирование роутов к тестовым 
                                     данным)
|-- server.json                    - тестовые данные для json-server

public                             - папка для хранения шаблона и статичных файлов
|-- static                         - директория для хранения готовой статики
    |-- favicon                    - директория с фавиконками проекта
    |-- fonts                      - директория с шрифтами проекта
    |-- icons                      - директория с иконками проекта
    |-- images                     - директория с фоновыми изображениями проекта
|-- index.html                     - файл шаблона

src                                - исходные файлы для сборки проекта
|-- api                            - слой взаимодействия с REST API
    |-- endpoint.js                - словарь эндпоинтов REST API
    |-- fetcher.js                 - конфигурация Axios
    |-- methods.js                 - методы взаимодействия с REST API
|-- assets                         - файлы статики требующие обработки
    |-- scss                       - стили SCSS
        |-- blocks                 - стили блоков (создавалось на этапе верстки, постепенно разносим по компонентам)
        |-- browsers               - фиксы для IE и Firefox
        |-- form-blocks            - стили для блоков форм (в перспективе перенос в компоненты)
        |-- global                 - глобальные стили для всех страниц
        |-- grid                   - генерация сетки
        |-- resources              - переменные и миксины SCSS
|-- components                     - компоненты Vue
    |-- base                       - базовые компоненты (не содержат логики проекта)
    |-- project                    - проектные компоненты (содержат логику, присущую текущему проекту)
|-- layouts                        - шаблоны для роутинга
|-- maps                           - словари, справочники, карты для проекта
|-- mixins                         - миксины
|-- pages                          - страницы
|-- router                         - конфигурация роутинга приложения
|-- store                          - конфигурация хранилища приложения
    |-- modules                    - модули подключаемые в хранилище
|-- App.vue                        - корневой шаблон приложения Vue

styleguide                         - директория для генерируемой документации
|-- src                            - исходные файлы для генерации документации проекта
    |-- sections                   - исходные файлы для разделов документации
    |-- global.requires            - глобальный миксин Vue для генерируемой документации
    |-- styleguide.doc.css         - стили, подключаемые к генерируемой документации
|-- styleguide.config.js           - файл конфигурации Vue Styleguidist

.editorconfig                      - конфигурация IDE

.gitignore                         - список игнорируемых системой контроля версий директорий и файлов

package.json                       - файл конфигурации приложения

package-lock.json                  - файл фиксации зависимостей

vue.config.js                      - конфигурация приложения Vue
```