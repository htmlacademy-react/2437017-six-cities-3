interface ButtonBookmarkProps {
handleStatusButton: (isFavorite:boolean) => void;
isFavorite?: boolean;
}

export default function ButtonBookmark ({handleStatusButton, isFavorite = false}:ButtonBookmarkProps) {
  return (
    <button
      onClick = {() => handleStatusButton(!isFavorite)}
      className={`place-card__bookmark-button button
        ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
