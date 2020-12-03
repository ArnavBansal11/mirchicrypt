import connect from '../../../utils/dbConnect';
import Log from '../../../models/log';
import User from '../../../models/user';
import Level from '../../../models/level';
import { getSession } from 'next-auth/client';

const handler = (req, res) => {
    if (req.method != 'POST') {
        return res.json({success: false, message: "Method not defined for this route"})
    }

    
}

export default connect(handler)