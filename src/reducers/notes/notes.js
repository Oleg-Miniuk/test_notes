import constants from '../../constants/constants';

const notes = (state = [], action) => {
  if (action.type === constants.CHANGE_NOTE_TITLE) {
    return state.map(note => {
      if (note.id === action.id) {
        return {
          id: action.id,
          title: action.title,
          description: note.description
        };
      }
      return note;
    });
  }
  if (action.type === constants.CHANGE_NOTE_DESCRIPTION) {
    return state.map(note => {
      if (note.id === action.id) {
        return {
          id: action.id,
          title: note.title,
          description: action.description
        };
      }
      return note;
    });
  }
  return state;
};

export default notes;
