

## 卡片品牌维度统一为 Driver + Trust

### 方案

将 5 张卡片的 `brandRelations` 统一为两个固定维度：
- **DRIVER**（Purchase Driver）— 图标改为 `Target`（靶心，暗示购买驱动力）
- **TRUST**（Trust Anchor）— 图标保持 `Shield`（盾牌，信任感）

每张卡片的 `value` 文案保持不同（体现各 Persona 差异），只是 label 和 icon 统一。

### 图标选择建议
- `Target`（lucide-react）：精准、驱动力，比 ShoppingBag 更抽象高级，符合杂志风
- `Shield`：已在用，信任感直观

### 改动

**src/pages/Index.tsx**：
- import 改为 `Target, Shield`（移除 Heart, Star, TrendingUp）
- 5 张卡片的 `brandRelations` 统一格式：
  ```
  { label: "Driver", value: "...", icon: <Target /> }
  { label: "Trust", value: "...", icon: <Shield /> }
  ```
- 各卡片 value 示例：
  1. Mindful Explorer — Driver: "Values-aligned quality" / Trust: "Brand philosophy advocate"
  2. Social Connector — Driver: "Peer validation & trends" / Trust: "Community-endorsed"
  3. Pragmatic Optimizer — Driver: "Price-performance ratio" / Trust: "Data & reviews backed"
  4. Trend Chaser — Driver: "Novelty & exclusivity" / Trust: "KOL-validated"
  5. Silent Loyalist — Driver: "Consistency & habit" / Trust: "Deep experience-based"

仅改 Index.tsx 一个文件，PersonaCard 组件无需修改。

