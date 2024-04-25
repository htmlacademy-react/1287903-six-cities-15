import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewsProcess } from '../../types/state';
import { fetchReviewsAction, submitReviewsAction } from '../api-actions';
import { RequestStatus } from '../../const';

const initialState: ReviewsProcess = {
  reviews: [],
  reviewsIsLoading: false,
  reviewsIsNotFound: false,
  reviewRequestStatus: RequestStatus.Idle,
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setReviewRequestStatusByDefault: (state) => {
      state.reviewRequestStatus = RequestStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsIsLoading = true;
        state.reviewsIsNotFound = false;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const reviewsData = action.payload;

        if (reviewsData.length > 0) {
          state.reviews = reviewsData;
        }

        state.reviewsIsLoading = false;
      })

      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.reviewsIsNotFound = true;
      })

      .addCase(submitReviewsAction.pending, (state) => {
        state.reviewRequestStatus = RequestStatus.Pending;
      })

      .addCase(submitReviewsAction.fulfilled, (state, action) => {
        state.reviewRequestStatus = RequestStatus.Success;
        const newReview = action.payload;

        state.reviews.push(newReview);
      })

      .addCase(submitReviewsAction.rejected, (state) => {
        state.reviewRequestStatus = RequestStatus.Error;
      });
  },
});
