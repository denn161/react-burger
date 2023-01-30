import { TUserActions } from "./user/actions";
import { TIngredientsActions } from "./ingredients";
import { TOrderAndIngredientActions } from "./orderandIngredient";
import { TConstructorActions } from "./constructor";
import { TWsFeedActions } from "./wsActions/feedActions/types";
import { TWsOrderActions } from "./wsActions/oredersActions/types";



export type TApplicationActions = TUserActions

    | TIngredientsActions | TOrderAndIngredientActions |

    TConstructorActions | TWsFeedActions | TWsOrderActions