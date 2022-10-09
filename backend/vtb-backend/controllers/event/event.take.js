const e = require('express');
const Router = e.Router();
const { check, validationResult, Result } = require('express-validator');
const { User_Event: UserEvent } = require('../../models');

const takeEvent = Router.post(
    '/event/take',
    check('userId').isUUID(),
    check('eventId').isUUID(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array()[0].msg });
            }

            const {userId, eventId} = req.body;

            await UserEvent.create({
                UserId: userId,
                EventId: eventId
            });

            res.json({ take: true });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
);

module.exports = takeEvent;