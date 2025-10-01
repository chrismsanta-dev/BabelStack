export interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  friends: string[];
  library: string[];
  wishlist: string[];
}
