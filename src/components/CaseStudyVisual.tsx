import {
  AnalystAiApproachVisual,
  AnalystAiBuildVisual,
  AnalystAiHeroVisual,
  AnalystAiJourneyVisual,
  AnalystAiOutcomeVisual,
  AnalystAiProblemVisual,
  AnalystAiWorkspaceVisual,
} from "@/components/case-studies/AnalystAiInfographics";
import {
  CreApproachVisual,
  CreBuildVisual,
  CreHeroVisual,
  CreInsightsVisual,
  CreJourneyVisual,
  CreOutcomeVisual,
  CreSheetVisual,
  CreWorkspaceVisual,
} from "@/components/case-studies/CreMappingInfographics";
import {
  HautonomyApproachVisual,
  HautonomyBuildVisual,
  HautonomyHeroVisual,
  HautonomyJourneyVisual,
  HautonomyOutcomeVisual,
  HautonomyProblemVisual,
  HautonomyProgramVisual,
  HautonomyReviewVisual,
} from "@/components/case-studies/HautonomyInfographics";
import {
  LpApproachVisual,
  LpBuildVisual,
  LpHeroVisual,
  LpJourneyVisual,
  LpOutcomeVisual,
  LpProblemVisual,
  LpSearchVisual,
} from "@/components/case-studies/LpIntelligenceInfographics";
import {
  OvernightApproachVisual,
  OvernightBuildVisual,
  OvernightHeroVisual,
  OvernightJourneyVisual,
  OvernightOutcomeVisual,
  OvernightProblemVisual,
  OvernightReportVisual,
} from "@/components/case-studies/OvernightMarketsInfographics";
import {
  RegulatoryApproachVisual,
  RegulatoryBuildVisual,
  RegulatoryHeroVisual,
  RegulatoryJourneyVisual,
  RegulatoryMonitorVisual,
  RegulatoryOutcomeVisual,
  RegulatoryProblemVisual,
} from "@/components/case-studies/RegulatoryInfographics";
import {
  SocidaApproachVisual,
  SocidaBuildVisual,
  SocidaDemandVisual,
  SocidaGovernanceVisual,
  SocidaJourneyVisual,
  SocidaOutcomeVisual,
  SocidaProblemVisual,
  SocidaWhatsAppMock,
} from "@/components/case-studies/SocidaInfographics";
import {
  ThirdEyeApproachVisual,
  ThirdEyeBriefVisual,
  ThirdEyeBuildVisual,
  ThirdEyeHeroVisual,
  ThirdEyeJourneyVisual,
  ThirdEyeOutcomeVisual,
  ThirdEyeProblemVisual,
} from "@/components/case-studies/ThirdEyeInfographics";
import type { ProjectVisual, ProjectVisualComponent } from "@/data/projects";
import { CaseStudyMedia } from "@/components/CaseStudyMedia";

const componentMap: Record<
  ProjectVisualComponent,
  React.ComponentType<{ caption?: string }>
> = {
  "socida-whatsapp": SocidaWhatsAppMock,
  "socida-problem": SocidaProblemVisual,
  "socida-approach": SocidaApproachVisual,
  "socida-build": SocidaBuildVisual,
  "socida-journey": SocidaJourneyVisual,
  "socida-governance": SocidaGovernanceVisual,
  "socida-demand": SocidaDemandVisual,
  "socida-outcome": SocidaOutcomeVisual,
  "hautonomy-hero": HautonomyHeroVisual,
  "hautonomy-problem": HautonomyProblemVisual,
  "hautonomy-approach": HautonomyApproachVisual,
  "hautonomy-build": HautonomyBuildVisual,
  "hautonomy-journey": HautonomyJourneyVisual,
  "hautonomy-review": HautonomyReviewVisual,
  "hautonomy-program": HautonomyProgramVisual,
  "hautonomy-outcome": HautonomyOutcomeVisual,
  "overnight-hero": OvernightHeroVisual,
  "overnight-problem": OvernightProblemVisual,
  "overnight-approach": OvernightApproachVisual,
  "overnight-build": OvernightBuildVisual,
  "overnight-journey": OvernightJourneyVisual,
  "overnight-report": OvernightReportVisual,
  "overnight-outcome": OvernightOutcomeVisual,
  "lp-hero": LpHeroVisual,
  "lp-problem": LpProblemVisual,
  "lp-approach": LpApproachVisual,
  "lp-build": LpBuildVisual,
  "lp-journey": LpJourneyVisual,
  "lp-search": LpSearchVisual,
  "lp-outcome": LpOutcomeVisual,
  "regulatory-hero": RegulatoryHeroVisual,
  "regulatory-problem": RegulatoryProblemVisual,
  "regulatory-approach": RegulatoryApproachVisual,
  "regulatory-build": RegulatoryBuildVisual,
  "regulatory-journey": RegulatoryJourneyVisual,
  "regulatory-monitor": RegulatoryMonitorVisual,
  "regulatory-outcome": RegulatoryOutcomeVisual,
  "cre-hero": CreHeroVisual,
  "cre-approach": CreApproachVisual,
  "cre-workspace": CreWorkspaceVisual,
  "cre-journey": CreJourneyVisual,
  "cre-build": CreBuildVisual,
  "cre-sheet": CreSheetVisual,
  "cre-insights": CreInsightsVisual,
  "cre-outcome": CreOutcomeVisual,
  "third-eye-hero": ThirdEyeHeroVisual,
  "third-eye-problem": ThirdEyeProblemVisual,
  "third-eye-approach": ThirdEyeApproachVisual,
  "third-eye-build": ThirdEyeBuildVisual,
  "third-eye-journey": ThirdEyeJourneyVisual,
  "third-eye-brief": ThirdEyeBriefVisual,
  "third-eye-outcome": ThirdEyeOutcomeVisual,
  "analystai-hero": AnalystAiHeroVisual,
  "analystai-problem": AnalystAiProblemVisual,
  "analystai-approach": AnalystAiApproachVisual,
  "analystai-build": AnalystAiBuildVisual,
  "analystai-journey": AnalystAiJourneyVisual,
  "analystai-workspace": AnalystAiWorkspaceVisual,
  "analystai-outcome": AnalystAiOutcomeVisual,
};

export function CaseStudyVisual({
  visual,
  priority = false,
}: {
  visual: ProjectVisual;
  priority?: boolean;
}) {
  if (visual.component) {
    const Component = componentMap[visual.component];
    return <Component caption={visual.caption} />;
  }

  if (!visual.src) return null;

  return (
    <CaseStudyMedia
      src={visual.src}
      alt={visual.alt}
      caption={visual.caption}
      layout={visual.layout}
      priority={priority}
    />
  );
}

export function CaseStudyVisualBlock({
  visuals,
  className = "",
}: {
  visuals: ProjectVisual[];
  className?: string;
}) {
  if (visuals.length === 0) return null;

  return (
    <div className={`space-y-8 ${className}`}>
      {visuals.map((visual) => (
        <div key={visual.component ?? visual.src ?? visual.alt}>
          {visual.label ? (
            <p className="eyebrow mb-4 text-burgundy">{visual.label}</p>
          ) : null}
          <CaseStudyVisual
            visual={visual}
            priority={visual.placement === "hero"}
          />
        </div>
      ))}
    </div>
  );
}
