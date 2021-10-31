import util from 'util';

enum LogLevel {
    info,
    debug,
    warning,
    error
}

const formatLogLevel = (level: LogLevel): string => {
    switch (level) {
        case LogLevel.debug:
            return 'debug';
        case LogLevel.info:
            return 'info';
        case LogLevel.warning:
            return 'warning';
        case LogLevel.error:
            return 'error';
    }
};

const getColorCode = (level: LogLevel): string => {
    switch (level) {
        case LogLevel.debug:
            return '90';
        case LogLevel.info:
            return '36';
        case LogLevel.warning:
            return '33';
        case LogLevel.error:
            return '31;1';
    }
};

const formatDate = (date: Date) => {
    return [date.getHours(), date.getMinutes(), date.getSeconds()].map((n) => n.toString().padStart(2, '0')).join(':');
};

const colorize = (text: string, colorCode: string) => {
    if (process.stdout.isTTY) {
        return '\x1B[' + colorCode + 'm' + text + '\x1B[0m';
    }

    return text;
};

const logInternal = (message: string, level: LogLevel) => {
    message = colorize(formatDate(new Date()), '30;1') + ' ' + message;

    const colorCode = getColorCode(level) || '32';

    // eslint-disable-next-line no-console
    console.log('[' + colorize(formatLogLevel(level).toUpperCase(), colorCode) + '] ' + message);
};

const debug = (...args: unknown[]) => {
    logInternal(util.format.apply(util, ...args), LogLevel.debug);
};

const info = (...args: unknown[]) => {
    logInternal(util.format.apply(util, ...args), LogLevel.info);
};

const warning = (...args: unknown[]) => {
    logInternal(util.format.apply(util, ...args), LogLevel.warning);
};

const error = (...args: unknown[]) => {
    logInternal(util.format.apply(util, ...args), LogLevel.error);
};

export { debug, info, warning, error };
