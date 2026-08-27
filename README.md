# UnicoreCMS-modules

<p>
  <a href="https://docs.unicorecms.ru/docs/extensions" target="_blank">Документация</a> |
  <a href="https://github.com/MCXTeam/UnicoreCMS">UnicoreCMS</a> |
  <a href="https://discord.gg/hsCvepqRMD">Discord-сервер</a>
</p>

Готовые модули для [UnicoreCMS] — каждый ставится папкой в `modules/`, править код CMS не нужно.

- Что делает модуль, какие у него права, настройки и страницы — в README внутри его папки
- Как модуль устроен изнутри и что даёт контракт `unicore-api` — в [документации]
- Модули лежат исходниками, серверную часть перед установкой нужно [собрать](#сборка)

## Модули

| Модуль | Что делает | Контракт |
| ------ | ------ | ------ |
| [Формы] | Формы на сайте: заявки в команду, разбан, жалобы, баг-репорты, обратная связь | `^1.7.0` |
| [Команда] | Страница состава проекта, собирается из служебных ролей и привилегий | `^1.4.0` |
| [Демо] | Контракт целиком: таблица, права, настройки, события, канал вебхука, слоты | `^1.7.0` |

Контракт — диапазон версий `unicore-api`, с которыми модуль работает. Он не совпадает с версией CMS
и меняется отдельно от неё. Модуль с несовместимым контрактом не загрузится, причина будет видна на
странице «Модули» в админке.

## Сборка

Контракт `unicore-api` живёт в репозитории [UnicoreCMS] и в npm не публикуется, поэтому модули
собираются рядом с ним. Нужны Node 22 и pnpm.

```bash
git clone https://github.com/MCXTeam/UnicoreCMS.git
git clone https://github.com/MCXTeam/UnicoreCMS-modules.git

cd UnicoreCMS
pnpm install
pnpm --filter unicore-common run build
pnpm --filter unicore-api run build

cd ../UnicoreCMS-modules
pnpm install
pnpm run build
```

Папки репозиториев должны лежать рядом: путь до контракта прописан в `package.json` каждого модуля
(`link:../../UnicoreCMS/workspaces/api`). Если папка CMS называется иначе — поправьте путь.

Собрать один модуль: `pnpm --filter unicore-module-forms run build`. Сборка кладёт серверную часть
в `<модуль>/server/index.js`, фронтовые слои и строки остаются исходниками — их собирает CMS.

## Установка

Руками, в корне установки CMS:

```
1. Скопируйте папку модуля в modules/       например modules/forms
2. pnpm run build:client                    если у модуля есть client/
3. pnpm run build:admin                     если у модуля есть admin/
4. Перезапустите сервер
```

Через админку: сложите папку модуля в zip и нажмите «Установить из архива» на странице «Модули».
CMS распакует архив в `modules/<id>`, поставит модуль выключенным и скажет, что осталось сделать:
включить, пересобрать фронты, перезапустить сервер.

Таблицы модуль создаёт сам при старте сервера, отдельная команда не нужна. Строки модуля лежат
в его папке `locales/` и правятся в редакторе локализации, пересобирать модуль для этого не надо.

Код модуля выполняется с правами сервера — ставьте только то, чему доверяете.

## Свой модуль

Модуль общается с ядром только через `unicore-api`: фасады ядра, события, права, настройки и точки
встраивания в интерфейс. Прямых импортов из кода сервера нет — ядро поставляется собранным.

Начните с [демо-модуля]: в нём собрано всё, что даёт контракт. Дальше — [документация]: манифест,
границы, слоты и меню, установка и удаление.

[UnicoreCMS]: https://github.com/MCXTeam/UnicoreCMS
[документации]: https://docs.unicorecms.ru/docs/extensions
[документация]: https://docs.unicorecms.ru/docs/extensions
[Формы]: https://github.com/MCXTeam/UnicoreCMS-modules/tree/main/forms
[Команда]: https://github.com/MCXTeam/UnicoreCMS-modules/tree/main/team
[Демо]: https://github.com/MCXTeam/UnicoreCMS-modules/tree/main/demo
[демо-модуля]: https://github.com/MCXTeam/UnicoreCMS-modules/tree/main/demo
