import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { reducer as appReducer } from './app/app.slice'
import { reducer as categoriesReducer } from './categories/categories.slice'
import { reducer as feedbackReducer } from './feedback/feedback.slice'
import { reducer as userReducer } from './user/user.slice'

export const reducers = {
	cart: cartReducer,
	favorites: favoritesReducer,
	app: appReducer,
	categories: categoriesReducer,
	feedback: feedbackReducer,
	user: userReducer,
}
