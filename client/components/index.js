/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as SingleClothingItem} from './clothing-item'
export {default as UserHome} from './user-home'
export {default as HomePage} from './HomePage'
export {Login, Signup} from './auth-form'
export {AllClothes} from './all-clothes'
export {Cart} from './cart'
export {default as UserProfile} from './userProfile'
