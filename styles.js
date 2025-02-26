// ANSI styles
// usage: console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.hr.double,style.reset); });
const style = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  dblUnderline: '\x1b[21m',
  dim: '\x1b[2m',
  invert: '\x1b[7m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  primaryFont: '\x1b[10m',
  strike: '\x1b[9m',
  hr: {
    double: `\n${'═'.repeat(process.env.COLUMNS - 1 || 20)}`,
    single: `\n${'─'.repeat(process.env.COLUMNS - 1 || 20)}`
  },
  color(r,g,b) {
    return g === undefined ? `\x1b[38;5;${r}m` : `\x1b[38;2;${r};${g};${b}m`;
  },
  bgColor(r,g,b) {
    return g === undefined ? `\x1b[48;5;${r}m` : `\x1b[48;2;${r};${g};${b}m`;
  },
}

export {style}

