import { RATING_STARS } from '../../../const.ts';
import { useState, ChangeEvent, Fragment } from 'react';
import { commentAction } from '../../../store/async-actions/offer-action.ts';
import { useAppDispatch } from '../../../hooks/useStore.ts';
import { useParams } from 'react-router-dom';

type ChangeHandler = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function ReviewForm () {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });

  function fieldChangeHandle (evt:ChangeHandler) {
    const { name, value, type } = evt.target;

    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    }else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>(); // получаем текущее id стр.

  const isValid = formData.comment.length >= 50 && formData.comment.length <= 300 && formData.rating > 0;

  function handleSubmit (evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const { rating, comment } = formData;

    if (!id) {
      return;
    }

    if(isValid){
      dispatch(commentAction({
        offerId: id,
        comment:{rating, comment},
      }))
        .unwrap()
        .then(() => {
          setFormData({ rating: 0, comment: '' });
        })
        .catch(() => {});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map(({value , title}) => (
          <Fragment key={value}>
            <input onChange={ fieldChangeHandle } className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}"-stars"`} type="radio" checked={formData.rating === value}/>
            <label htmlFor={`${value}"-stars"`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment >
        ))}
      </div>
      <textarea onChange={ fieldChangeHandle } className="reviews__textarea form__textarea" id="review" name='comment' value = {formData.comment} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled = {!isValid}>Submit</button>
      </div>
    </form>
  );
}
