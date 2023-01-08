/******************************************
 * Topic modules
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 * How can we do that
 *      1. create modules folder, and package.json in the parent folder
 *      2. create the modules "person.mjs" and "teacher.mjs". Please note that we have to create ".mjs" rather than ".js" in the current node.js version
 *      3. for person.mjs, we export the function "Person" to "teacher.mjs", and accordingly, import "Person" to "teacher.mjs"
 *      4. do the same thing for Teacher()
 *      5. NOTE: if we define more functions in say teacher.mjs, only those with "export" keyword will be exported.
 *      6. we can also use "default" keyword next to "export", which is to specify the default thing we want to export from a file.
 * 
 * Key takeaway is "export" and "import" keywords, package.json.
 */

import { Teacher } from "./modules/teacher.mjs";

const teacher = new Teacher("Yu", "master of science");
teacher.teach();
console.log(teacher.degree);
