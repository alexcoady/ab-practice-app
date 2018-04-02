// @flow
export type Activity = Item & {
  category: Category,
};

type Variation = {
  title: string,
  variations?: Variation[],
};

type Item = {
  title: string,
  variations?: Variation[],
};

type Category = {
  title: string,
  notes?: string,
  items: Item[],
};

export type Grade = {
  grade: string,
  content: Category[],
};
