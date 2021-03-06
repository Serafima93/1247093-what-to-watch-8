export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Main = '/',
  UsersReview = '/films/:id/review',
  Player = '/player/:id',
  AddReview = '/films/new/review'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
