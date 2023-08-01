export interface QueryParam {
  page: number;
  searchTerm: string;
}

export const QUERY_PARAM_INITIAL_STATE: QueryParam = {
  page: 1,
  searchTerm: "",
};
