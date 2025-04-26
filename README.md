# jp-number-unit

`jp-number-unit` は、日本語の数値単位（万・億・兆・京・垓・…那由多・無量大数）に変換する JavaScript ライブラリです。BigInt に対応し、高精度な変換が可能です。

## 使用例

```js
import { formatNumberUnit } from "https://cdn.jsdelivr.net/npm/jp-number-unit/+esm";

formatNumberUnit(1234567890000n); // "1234.5678兆"
```

## 特徴

- 万・億・兆・京・垓・…那由多・無量大数まで対応
- BigInt 完全対応
- 小数4桁まで表示、繰り上がり防止

## デモ
https://sugepan.github.io/jp-number-unit/demo.html

## ライセンス

MIT
