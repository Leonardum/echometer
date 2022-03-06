export interface ReviewerGroup {
	id: string;
  responses: Response[];
};

export interface Response {
	id: string;
};

export interface Anonymizer {
	ensureAnonymity(groups: ReviewerGroup[]): ReviewerGroup[];
};
