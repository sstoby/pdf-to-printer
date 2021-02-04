"use strict";

const fs = require("fs");
const execAsync = require("../execAsync");

const print = (zpl, options = {}) => {
  if (!zpl) throw "No ZPL specified";
  if (typeof zpl !== "string") throw "Invalid ZPL name";
  if (!fs.existsSync(zpl)) throw "No such file";

  const args = [zpl];

  const { printer, unix } = options;

  if (printer) {
    args.push("-d", '"' + printer + '"');
  }

  args.push("-o raw");

  if (unix) {
    if (!Array.isArray(unix)) throw "options.unix should be an array";
    unix.map((unixArg) => args.push(...unixArg.split(" ")));
  }

  return execAsync("lp", args);
};

module.exports = print;
