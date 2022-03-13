import * as assert from "assert";
import * as fs from "fs";
import { CountStream } from "../ts";

const countstream = new CountStream("example");
let passed = 0;

countstream.on("total", function (count) {
  assert.equal(count, 1);
  passed++;
});

fs.createReadStream(__filename).pipe(countstream);

process.on("exit", function () {
  console.log("Assertions passed:", passed);
});
