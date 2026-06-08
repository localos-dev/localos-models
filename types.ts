/**
 * TypeScript types for the LocalOS model catalog (models.json).
 * Import these when building tools that consume the catalog.
 */

export type ModelCategory = "nano" | "small" | "medium" | "large";

export interface ModelEntry {
  id:            string;
  name:          string;
  family:        string;
  vramMB:        number;
  contextTokens: number;
  category:      ModelCategory;
  tags:          string[];
  description:   string;
}

export interface ModelCatalog {
  version: string;
  updated: string;
  models:  ModelEntry[];
}

export const CATEGORY_LABELS: Record<ModelCategory, string> = {
  nano:   "Nano (under 1 GB)",
  small:  "Small (1 to 2.5 GB)",
  medium: "Medium (2.5 to 4.5 GB)",
  large:  "Large (4.5 GB and up)",
};

export function formatVram(vramMB: number): string {
  if (vramMB < 1024) return `${vramMB} MB`;
  return `${(vramMB / 1024).toFixed(1)} GB`;
}
