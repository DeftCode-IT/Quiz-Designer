export const OPEN_QUIZ_PREVIEW = 'OPEN_QUIZ_PREVIEW';
export const CLOSE_QUIZ_PREVIEW = 'CLOSE_QUIZ_PREVIEW';

export const openQuizPreview = quiz => ({ type: OPEN_QUIZ_PREVIEW, quiz });
export const closeQuizPreview = () => ({ type: CLOSE_QUIZ_PREVIEW });
