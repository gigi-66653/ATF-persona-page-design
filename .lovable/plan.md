

## 卡片点击引导 — 始终可见方案

### 问题
"Explore →" 仅 hover 时才出现，用户在静态页面上完全没有视觉线索知道卡片可点击。

### 推荐方案：始终显示，hover 时增强

将 "Explore →" 改为**默认可见但低调**，hover 时**变亮 + 箭头右移**：

- 默认状态：`opacity-40`（淡灰色，低调但可读）
- Hover 状态：`opacity-100` + 箭头 `translate-x-1`（变亮，暗示交互）

这样既保持杂志排版的克制感，又让用户一眼就知道"这里有更多内容可以看"。

### 改动
**PersonaCard.tsx** 第 104 行：
- `opacity-0 group-hover:opacity-100` → `opacity-40 group-hover:opacity-100`
- 一行改动，效果立竿见影

