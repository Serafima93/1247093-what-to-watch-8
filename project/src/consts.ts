export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmsCountForView {
  Min = 0,
  Max = 4,
  Step = 2,
}

// как прописать без any?
export const ButtonCondition: any = {
  Blocked: false,
  Unblocked: true,
};

export enum TabsSections {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
