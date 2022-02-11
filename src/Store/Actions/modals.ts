import { ActionType, createAction } from 'typesafe-actions';
import { SHOW_MODAL, CLOSE_MODAL } from 'Store/Actions/types';

export const showModal = createAction(SHOW_MODAL)<boolean>();
export const closeModal = createAction(CLOSE_MODAL)<boolean>();

const actions = { showModal, closeModal };
export type ModalActionType = ActionType<typeof actions>;
