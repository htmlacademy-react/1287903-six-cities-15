import ReviewCard from '../review-card/review-card';
import { Reviews } from '../../types/reviews';

type ReviewCardListProps = {
    reviewList: Reviews;
};

function ReviewsList({ reviewList }: ReviewCardListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      {reviewList.map((review) => {
        const keyValue = review.id;
        return (
          <ReviewCard key={keyValue} reviewCard={review} />
        );
      })}

    </section>
  );
}

export default ReviewsList;
