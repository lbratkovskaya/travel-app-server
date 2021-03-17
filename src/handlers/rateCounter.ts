import { IReview, Reviews } from '../models/reviews';
import { Sights } from '../models/sights';

async function rateCounter(sightId: string) {
  await Reviews.find({ sightId: sightId })
    .then((reviews: Array<IReview>) => {
      if (reviews.length) {
        const totalRate = reviews.map(review => review.rate).reduce((a, b) => a + b);
        return (totalRate / reviews.length).toFixed(1);
      } else {
        return 0;
      }
    })
    .then(async newRate => {
      await Sights.findOneAndUpdate({ _id: sightId }, { rate: newRate }, {}, () => {});
    });
}

export default rateCounter;
