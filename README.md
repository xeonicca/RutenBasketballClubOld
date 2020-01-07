# RutenBasketballClub

see [here](https://ruten-basketball.surge.sh/)

## Develop
需要取得airtable的編輯權限，以及一組[api key](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-)

在根目錄新增一個`.env`檔案
內容為

```
AIRTABLE_KEY=<API KEY>
AIRTABLE_BASE=appJwIs3TdwXM3hDY
```

**本機開發**
```
gridsome develop
```

**編譯成靜態頁面**
```
gridsome build
```

**將靜態頁面上傳 (可能需要我加surge.sh的權限)**
```
yarn deploy
```

## Contribute
see [here](https://ruten-basketball.surge.sh/about)