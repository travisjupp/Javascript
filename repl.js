import repl from 'node:repl';
import util from 'node:util';
import {style} from './styles.js';
// repl.start('\x1b[38;2;255;0;255m▶ \x1b[0m');
repl.start({
    prompt: '\x1b[38;2;255;0;255m▶ \x1b[0m',
    writer: (output) => {
        // Use util.inspect to format output
        return util.inspect(output, { compact: true, breakLength: Infinity, colors: true });
    }
});

