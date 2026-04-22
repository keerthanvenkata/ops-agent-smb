export type Section =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "numbered"; items: string[] }
  | { kind: "table"; header: string[]; rows: string[][]; caption?: string }
  | { kind: "code"; lang?: string; text: string }
  | { kind: "callout"; tone: "info" | "warn" | "good"; title?: string; text: string }
  | { kind: "quote"; text: string };

export interface Slide {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  objective: string;
  content: Section[];
  visual: string;
  speakerNotes: string;
  questions: string[];
  capture: string[];
  privateNotes?: string[];
}
