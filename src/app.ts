import * as api from './api';
import * as dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT) || 3000;
(async () => {
    await api.start(port);
})();
