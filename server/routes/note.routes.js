import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

//Add a new Note
router.route('/notes').post(NoteController.addNote);
//Get all Notes
router.route('/notes').get(NoteController.getNotes);
//Delete a note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);
//Edit lane
router.route('/notes/:noteId').put(NoteController.editNote);

export default router;
