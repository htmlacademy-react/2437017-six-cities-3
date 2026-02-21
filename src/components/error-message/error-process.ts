import { setError } from '../../store/action.ts';
import { clearErrorAction } from '../../store/async-actions/clear-error-action.ts';
import { store } from '../../store/index.ts';

/*Обработка ошибок*/
export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

/*Принимает строку с информацией об ошибки
  выполняет два диспача.
  1) оправляет в хранилеще вид ошибки
  2) вызывает функцию исходного состояния
*/
