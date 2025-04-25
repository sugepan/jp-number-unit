export function formatNumberUnit(num) {
  if (typeof num === 'number') num = BigInt(num);

  const units = [
    { value: 10n ** 68n, label: '無量大数' },
    { value: 10n ** 64n, label: '不可思議' },
    { value: 10n ** 60n, label: '那由他' },
    { value: 10n ** 56n, label: '阿僧祇' },
    { value: 10n ** 52n, label: '恒河沙' },
    { value: 10n ** 48n, label: '極' },
    { value: 10n ** 44n, label: '載' },
    { value: 10n ** 40n, label: '正' },
    { value: 10n ** 36n, label: '澗' },
    { value: 10n ** 32n, label: '溝' },
    { value: 10n ** 28n, label: '穣' },
    { value: 10n ** 24n, label: '𥝱' },
    { value: 10n ** 20n, label: '垓' },
    { value: 10n ** 16n, label: '京' },
    { value: 10n ** 12n, label: '兆' },
    { value: 10n ** 8n, label: '億' },
    { value: 10n ** 4n, label: '万' },
  ];

  for (const unit of units) {
    if (num >= unit.value) {
      const intPart = num / unit.value;
      const remainder = num % unit.value;

      // 小数部：10,000倍して4桁分計算（BigIntのまま）
      const decimalPart = (remainder * 10_000n) / unit.value;
      const decimalStr = decimalPart.toString().padStart(4, '0').replace(/0+$/, '');

      // 整数部文字列
      const intStr = intPart.toString();

      // 表示を整形
      const formatted = decimalStr ? `${intStr}.${decimalStr}` : intStr;

      return `${formatted}${unit.label}`;
    }
  }

  return num.toString();
}
