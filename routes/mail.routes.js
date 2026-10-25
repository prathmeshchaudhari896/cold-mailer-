import express from 'express';
import{getMyEmails, getEmailById, updateEmail, deleteEmail, sendMail} from '../controller/mail.controller.js';
import { generateColdEmails, } from "../services/mail.service.js";
import { authmiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/generate', authmiddleware, generateColdEmails);
router.get('/', authmiddleware, getMyEmails);
router.get('/:id', authmiddleware, getEmailById);
router.put('/:id', authmiddleware, updateEmail);
router.delete('/:id', authmiddleware, deleteEmail);
router.post('/send', authmiddleware, sendMail);


export default router;