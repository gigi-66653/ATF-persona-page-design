

## 恢复 Panel 亮度

### 原因分析
Panel 底色本身没改过（`--persona-glass: 215 30% 98% / 0.72`），但宽度从 420→540px 后，更大面积的半透明面板叠加在 `bg-black/80` 遮罩上，视觉上显得更灰暗。

### 方案：双管齐下

1. **提高 Panel 自身不透明度**：`index.css` 中 `--persona-glass` 的 alpha 从 `0.72` → `0.88`，让面板更白更实
2. **降低背景遮罩浓度**：`sheet.tsx` 中 `bg-black/80` → `bg-black/60`，背景不那么暗，面板对比度更舒适

### 改动文件
- **src/index.css**：`--persona-glass: 215 30% 98% / 0.72` → `215 30% 98% / 0.88`
- **src/components/ui/sheet.tsx**：`bg-black/80` → `bg-black/60`

