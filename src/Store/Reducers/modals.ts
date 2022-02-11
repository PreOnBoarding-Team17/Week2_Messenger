import { createReducer } from 'typesafe-actions';
import { SHOW_MODAL, CLOSE_MODAL } from 'Store/Actions/types';
import type { ModalActionType } from 'Store/Actions/modals';

export interface ModalStateType {
  showModal: boolean;
}

const INITIAL_STATE: ModalStateType = {
  showModal: true,
};

const modals = createReducer<ModalStateType, ModalActionType>(INITIAL_STATE, {
  [SHOW_MODAL]: (state: ModalStateType) => ({ showModal: !state }),
  [CLOSE_MODAL]: (state: ModalStateType) => ({ showModal: !state }),
});

export default modals;
