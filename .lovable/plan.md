

## 卡片点击引导提示

### 问题
卡片虽然有 `cursor-pointer` 和 hover 上浮效果，但缺少明确的文字/图标提示，用户不一定知道可以点击查看详情。

### 方案

在卡片底部（posts 数量旁边），添加一个**右箭头图标 + "Explore" 文字**，hover 时箭头右移，保持杂志风格的克制感：

```text
1,243 posts                    Explore →
```

- 文字样式：与 posts 一致的 `text-[10px]` 大写微字 + 宽字距
- 箭头：`ArrowRight` 图标，12px，hover 时 `translate-x-1` 过渡
- 默认状态透明度较低（`opacity-0`），hover 卡片时淡入（`group-hover:opacity-100`），保持静态时的干净感

### 改动范围
1. **PersonaCard.tsx**：
   - 引入 `ArrowRight` from lucide-react
   - 在底部 `mt-6 flex justify-between` 区域右侧添加 Explore + 箭头
   - 利用已有的 `group` class 实现 hover 显现动画

