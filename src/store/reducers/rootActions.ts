import { actions as cartActions } from './cart/cart.slice'
import { actions as favoritesActions } from './favorites/favorites.slice'
import { actions as appActions } from './app/app.slice'
import { actions as categoriesActions } from './categories/categories.slice'

export const allActions = {
	...cartActions,
	...favoritesActions,
	...appActions,
	...categoriesActions,
}
