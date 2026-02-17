import { useAppSelector } from '../../../hooks/useStore.ts';
import { CommentData } from '../../../types/comment-data.ts';

export default function ListReview () {

  const comments:CommentData[] = useAppSelector((state) => state.comments || []);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">

        {comments.map((comment:CommentData) =>(
          <li className="reviews__item" key={comment?.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt={comment.user.name}/>
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${Math.round(comment.rating) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment.comment}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{comment.date}</time>
            </div>
          </li>
        )
        )}
      </ul>
    </>
  );
}
