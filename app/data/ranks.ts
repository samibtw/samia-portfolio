// Rank order from Silver 1 up. Index is used as the chart's Y value.
export const TIERS = [
  "Silver 1", "Silver 2", "Silver 3",
  "Gold 1", "Gold 2", "Gold 3",
  "Platinum 1", "Platinum 2", "Platinum 3",
  "Diamond 1", "Diamond 2", "Diamond 3",
  "Ascendant 1", "Ascendant 2", "Ascendant 3",
  "Immortal 1", "Immortal 2", "Immortal 3",
  "Radiant",
] as const;

export type Act = {
  id: string;
  rank: (typeof TIERS)[number];
  lb?: number; // leaderboard position, only where known
  rr?: number; // RR, only where known (Radiant)
};

// Peak rank per act, from my tracker. Nothing added or estimated.
export const ACTS: Act[] = [
  { id: "E3A3", rank: "Silver 1" },
  { id: "E4A1", rank: "Gold 1" },
  { id: "E4A2", rank: "Platinum 2" },
  { id: "E4A3", rank: "Diamond 1" },
  { id: "E5A1", rank: "Ascendant 1" },
  { id: "E5A2", rank: "Immortal 3", lb: 1420 },
  { id: "E5A3", rank: "Immortal 3" },
  { id: "E6A1", rank: "Immortal 2" },
  { id: "E6A2", rank: "Radiant", rr: 263, lb: 165 },
  { id: "E6A3", rank: "Immortal 3", lb: 1476 },
  { id: "E7A1", rank: "Immortal 3", lb: 845 },
  { id: "E7A2", rank: "Radiant", rr: 270, lb: 309 },
  { id: "E7A3", rank: "Immortal 1", lb: 3143 },
  { id: "E8A1", rank: "Immortal 3", lb: 790 },
  { id: "E8A2", rank: "Immortal 3", lb: 1072 },
  { id: "E8A3", rank: "Immortal 3" },
  { id: "E9A1", rank: "Immortal 1", lb: 1116 },
  { id: "E9A2", rank: "Immortal 3", lb: 847 },
  { id: "E9A3", rank: "Immortal 3", lb: 633 },
  { id: "V25A1", rank: "Immortal 1", lb: 977 },
  { id: "V25A2", rank: "Ascendant 3" },
  { id: "V25A3", rank: "Immortal 3", lb: 728 },
  { id: "V25A4", rank: "Immortal 1", lb: 1043 },
  { id: "V25A5", rank: "Immortal 1", lb: 4370 },
  { id: "V25A6", rank: "Immortal 2", lb: 1304 },
  { id: "V26A1", rank: "Immortal 2", lb: 928 },
  { id: "V26A2", rank: "Immortal 2", lb: 429 },
  { id: "V26A3", rank: "Immortal 3", lb: 479 },
  { id: "V26A4", rank: "Immortal 2", lb: 739 },
  { id: "V26A5", rank: "Ascendant 3" },
  { id: "V26A6", rank: "Ascendant 3" },
];

export function actName(id: string) {
  const m = id.match(/^(E\d+|V\d+)A(\d)$/)!;
  return `${m[1]} · Act ${m[2]}`;
}
