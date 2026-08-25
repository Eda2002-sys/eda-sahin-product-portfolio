export type ReviewFinding = {
  category: string;
  observed: string;
  whyItMatters: string;
  recommendation: string;
};

export type ProductReview = {
  id: string;
  title: string;
  label: string;
  summary: string;
  categories: string[];
  findings: ReviewFinding[];
  visualNote: string;
};

export const reviewCategories = [
  "FTUE",
  "Gameplay & Control",
  "Orientation",
  "Progression",
  "Rewards",
  "Monetization",
  "Visual UX",
  "Social",
] as const;

export const productReviews: ProductReview[] = [
  {
    id: "critical-strike",
    title: "Critical Strike",
    label: "Independent Product Review / Product Sense Case Study",
    summary:
      "A product-sense review of FTUE, combat feedback, progression readability and social invite continuity — focused on recommendations, revised flows and prioritisation rather than surface-level observations.",
    categories: [...reviewCategories],
    visualNote:
      "SCREENSHOT PLACEHOLDER: Add Critical Strike annotated frames (FTUE, combat HUD, progression, invite flow) here.",
    findings: [
      {
        category: "Gameplay & Control",
        observed: "Respawn can break combat intent after a death.",
        whyItMatters:
          "Players re-enter fights without clear continuity of aim, position or tactical purpose, which weakens the learning loop.",
        recommendation:
          "Respawn should preserve combat intent — orient players toward the next meaningful action rather than a neutral reset.",
      },
      {
        category: "Visual UX",
        observed: "Blue score loses contrast against bright sky.",
        whyItMatters:
          "Critical match information becomes hard to read in common outdoor scenes, increasing cognitive load during combat.",
        recommendation:
          "Increase score contrast and test HUD colours against bright environmental backgrounds as a default QA case.",
      },
      {
        category: "Progression",
        observed: "Progression rewards move too quickly to register.",
        whyItMatters:
          "If reward moments flash by, players do not feel progress even when the system is granting it.",
        recommendation:
          "Slow the reveal enough for recognition, and make the next milestone visually obvious before the moment ends.",
      },
      {
        category: "Progression",
        observed: "Trophy Road does not strongly focus the next milestone.",
        whyItMatters:
          "Without a clear next target, progression becomes a list instead of a goal.",
        recommendation:
          "Trophy Road should auto-focus the next milestone and keep that target persistent across sessions.",
      },
      {
        category: "FTUE",
        observed: "Mode education does not always scale with mode complexity.",
        whyItMatters:
          "Players can enter complex modes with incomplete mental models, creating early churn disguised as skill issues.",
        recommendation:
          "Mode education should scale with complexity — lighter for simple modes, deeper for systems-heavy ones.",
      },
      {
        category: "Social",
        observed: "Invite flows can stop before install, open and join are complete.",
        whyItMatters:
          "Social acquisition fails if the product handoff ends at the invite rather than the shared session.",
        recommendation:
          "Social invite flows should continue into install / open / join as one continuous product path.",
      },
      {
        category: "Visual UX",
        observed: "Positive value badges can visually read as warnings.",
        whyItMatters:
          "Players misread helpful signals as risk, which undermines trust in the interface language.",
        recommendation:
          "Separate positive value treatment from warning semantics through colour, iconography and placement.",
      },
    ],
  },
  {
    id: "polygun-arena",
    title: "Polygun Arena",
    label: "Independent Product Review / Product Sense Case Study",
    summary:
      "A product-sense review focused on spatial orientation, FTUE clarity, progression feedback and interaction concepts that help players understand the arena faster.",
    categories: [...reviewCategories],
    visualNote:
      "SCREENSHOT PLACEHOLDER: Add Polygun Arena annotated frames (orientation, minimap concept, FTUE, rewards) here.",
    findings: [
      {
        category: "Orientation",
        observed: "Polygun lacks strong spatial orientation / minimap support.",
        whyItMatters:
          "Without spatial anchors, new players spend early sessions surviving the map instead of learning the game.",
        recommendation:
          "Introduce lightweight orientation aids — minimap, landmarks or directional cues — tuned for arena readability.",
      },
      {
        category: "FTUE",
        observed: "Early sessions ask players to absorb movement, threat and objectives at once.",
        whyItMatters:
          "Overloaded first minutes hide which skills matter and which failures are temporary.",
        recommendation:
          "Sequence FTUE so orientation and core loop clarity come before full complexity.",
      },
      {
        category: "Rewards",
        observed: "Reward moments can resolve before players connect action to outcome.",
        whyItMatters:
          "Progression systems only motivate when cause and effect are readable.",
        recommendation:
          "Hold reward feedback long enough to register, and tie it visually to the action that earned it.",
      },
      {
        category: "Gameplay & Control",
        observed: "Control feedback and arena readability compete during peak action.",
        whyItMatters:
          "When players cannot parse space and input response together, skill expression feels unfair.",
        recommendation:
          "Prioritise clarity of movement response and spatial contrast before adding denser cosmetic or effect layers.",
      },
      {
        category: "Social",
        observed: "Party / invite continuity is easy to drop between platforms and launch.",
        whyItMatters:
          "Arena games depend on returning with friends; broken social continuity taxes retention.",
        recommendation:
          "Design invite → install → open → join as a single measured journey, not separate product steps.",
      },
      {
        category: "Monetization",
        observed: "Value communication can be visually ambiguous next to urgency treatments.",
        whyItMatters:
          "Players hesitate when offers look like alerts rather than clear value.",
        recommendation:
          "Keep positive value badges distinct from warning or scarcity styling.",
      },
    ],
  },
];
