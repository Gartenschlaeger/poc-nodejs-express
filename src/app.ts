import { processenv } from 'processenv';
import * as api from './api';

const port = <number>processenv('PORT', 3000);

(async () => {
    await api.start(port);
})();
