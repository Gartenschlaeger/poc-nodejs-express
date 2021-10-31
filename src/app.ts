import * as dotenv from 'dotenv';

import * as api from './api';

dotenv.config();

const port = parseInt(process.env.PORT) || 3000;

(async () => {
    await api.start(port);
})();
