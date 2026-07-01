export interface Topic {
  id: number;
  label: string;
  mindmap_centre: string;
  statement: string;
  mindmap: string[];
  followup: string[];
}

export interface AnswerSet {
  seg1: string; // T
  seg2: string; // P1
  seg3: string; // P2
  seg4: string; // P3
  seg5: string; // C
  note: string; // e.g. "B2" or "B1" or "C1"
  note_b1?: string;
  note_c1?: string;
}

export interface FrameworkStep {
  num: string; // T, P1, P2, P3, C
  name: string;
  tag: string;
  purpose: string;
  phrases: string[];
  key: keyof Omit<AnswerSet, 'note' | 'note_b1' | 'note_c1'>;
  color: string;
  textColor: string;
  borderColor: string;
  badgeBg: string;
}

export interface UserNotes {
  [topicId: number]: string;
}

export interface PracticeHistory {
  [topicId: number]: {
    completed: boolean;
    lastPracticedAt?: string;
    customNotes?: string;
    scoreHistory?: number[];
  };
}
