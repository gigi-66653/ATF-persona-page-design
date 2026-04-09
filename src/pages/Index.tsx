import PersonaCard from "@/components/PersonaCard";
import { Heart, Shield, Star, TrendingUp, Users } from "lucide-react";

const demoPersonas = [
  {
    name: "The Mindful Explorer",
    description:
      "注重生活品质与内在成长的都市年轻群体，热衷探索新事物，追求有意义的消费体验。",
    coreDimensions: ["自我驱动", "品质优先", "体验导向"] as [string, string, string],
    brandRelations: [
      { label: "Loyalty", value: "High — 核心忠诚用户", icon: <Heart className="h-3.5 w-3.5" /> },
      { label: "Trust", value: "品牌价值认同者", icon: <Shield className="h-3.5 w-3.5" /> },
    ],
    postsCount: 1243,
    expandedDetails: [
      { label: "平均互动率", value: "8.7%" },
      { label: "内容偏好", value: "深度图文" },
      { label: "活跃时段", value: "晚间 20-23时" },
      { label: "转化潜力", value: "★★★★★" },
    ],
  },
  {
    name: "The Social Connector",
    description:
      "社交活跃、乐于分享的意见传播者，善于建立社群联系，在同龄人中有较强影响力。",
    coreDimensions: ["社交驱动", "分享欲强", "圈层影响"] as [string, string, string],
    brandRelations: [
      { label: "Loyalty", value: "Medium — 偶发互动", icon: <Heart className="h-3.5 w-3.5" /> },
      { label: "Influence", value: "KOC 潜力用户", icon: <TrendingUp className="h-3.5 w-3.5" /> },
    ],
    postsCount: 3876,
    expandedDetails: [
      { label: "平均互动率", value: "12.3%" },
      { label: "内容偏好", value: "短视频/Reels" },
      { label: "活跃时段", value: "全天碎片化" },
      { label: "转化潜力", value: "★★★★☆" },
    ],
  },
  {
    name: "The Value Seeker",
    description:
      "理性消费、注重性价比的务实主义者，决策前深度研究，倾向于口碑驱动的购买行为。",
    coreDimensions: ["理性决策", "口碑依赖", "价格敏感"] as [string, string, string],
    brandRelations: [
      { label: "Loyalty", value: "Low — 价格驱动切换", icon: <Heart className="h-3.5 w-3.5" /> },
      { label: "Retention", value: "需促销激活", icon: <Star className="h-3.5 w-3.5" /> },
    ],
    postsCount: 892,
    expandedDetails: [
      { label: "平均互动率", value: "4.2%" },
      { label: "内容偏好", value: "测评/对比" },
      { label: "活跃时段", value: "午间 12-14时" },
      { label: "转化潜力", value: "★★★☆☆" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Persona Gallery
          </h1>
          <p className="mt-2 text-muted-foreground">
            点击卡片展开查看详细维度分析
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoPersonas.map((persona) => (
            <PersonaCard key={persona.name} {...persona} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
