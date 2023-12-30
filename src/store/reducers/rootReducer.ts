import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { reducer as appReducer } from './app/app.slice'
import { reducer as categoriesReducer } from './categories/categories.slice'

export const reducers = {
	cart: cartReducer,
	favorites: favoritesReducer,
	app: appReducer,
	categories: categoriesReducer,
}
