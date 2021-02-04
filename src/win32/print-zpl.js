"use strict";

const path = require("path");
const fs = require("fs");
const execAsync = require("../execAsync");
const { fixPathForAsarUnpack } = require("../electron-util");

const print = (zpl, options = {}) => {
  if (!zpl) throw "No ZPL specified";
  if (typeof zpl !== "string") throw "Invalid ZPL name";
  if (!fs.existsSync(zpl)) throw "No such file";

  let file = path.join(__dirname, "ZPLPrinter.exe");
  file = fixPathForAsarUnpack(file);

  const { printer } = options;
  const args = [printer, zpl];

  return execAsync(file, args);
};

module.exports = print;
