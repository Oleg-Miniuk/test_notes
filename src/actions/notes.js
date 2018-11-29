import { dispatch } from '../store/store';
import constants from '../constants/constants';

const changeNoteTitle = ({ id, title }) => dispatch({
    type: constants.CHANGE_NOTE_TITLE,
    id,
    title
  });

const changeNoteDescription = ({ id, description }) => dispatch({
    type: constants.CHANGE_NOTE_DESCRIPTION,
    id,
    description
  });

const addNote = () => dispatch({
    type: constants.ADD_NOTE
  });

export default {
  changeNoteTitle,
  changeNoteDescription,
  addNote
};