import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFile(join(root, path), "utf8");
const skill = (name) => read(`skills/${name}/SKILL.md`);
const library = () => read("skills/brief/references/requirements-library.md");

test("Brief is discoverable at the new public entry point and its references resolve", async () => {
  const names = await readdir(join(root, "skills"));
  assert.ok(names.includes("brief"));
  const meta = await read("skills/brief/agents/openai.yaml");
  assert.match(meta, /Use \$brief /);
  assert.match(meta, /allow_implicit_invocation: true/);
  for (const name of ["brief", "elicitation", "analysis", "prd", "specification", "validation"]) {
    const path = `skills/${name}/SKILL.md`;
    const text = await read(path);
    assert.match(text, new RegExp(`^---\\nname: ${name}\\n`));
    for (const [, target] of text.matchAll(/\]\(([^)]+\.md)\)/g)) {
      const resolved = resolve(root, dirname(path), target);
      assert.ok(resolved.startsWith(root));
      await access(resolved);
    }
    assert.doesNotMatch(text, /`writing:brief`/);
  }
});

test("Brief preserves both reading levels and audience-independent authorship", async () => {
  const text = await skill("brief");
  assert.match(text, /active assistant authors and revises.*directly/is);
  assert.match(text, /does not automatically apply\s+`writing:impersonating`/i);
  assert.match(text, /audience's language/i);
  assert.match(text, /one short, bold lead sentence/i);
  assert.match(text, /visible gray paragraph/i);
  assert.match(text, /Every clause has.*gloss/is);
  assert.match(text, /expanded and visible/i);
  assert.match(text, /Numbers express position and order, not stable identity/i);
  assert.match(text, /existing emoji are inadequate.*image-generation capability/is);
  assert.match(text, /clickable\s+absolute file link/is);
  assert.match(text, /Preserve accepted content unless its substantive revision is authorized/i);
});

test("Requirements preserve distinct layers and many-to-many applicability", async () => {
  const text = await library();
  for (const name of ["Business", "Product", "Software", "Implementation"]) {
    assert.match(text, new RegExp(`\\| ${name} \\|`));
  }
  assert.match(text, /multiple organizations/i);
  assert.match(text, /many-to-many dependency graph/i);
  assert.match(text, /tenant-specific, separately deployed, or forked/i);
  assert.match(text, /Another tenant.*does not automatically need another brief/is);
  assert.match(text, /demonstrated reuse warrants it/i);
  assert.match(text, /separately authorized change/i);
});

test("Sources, revisions, dependency checks, and actual sign-offs remain internal", async () => {
  const text = await library();
  assert.match(text, /source registry contains references, not elicitation material/i);
  assert.match(text, /without requiring a source mapping for every\s+clause or adding visible clause citations/i);
  assert.match(text, /verified private repository/i);
  assert.match(text, /content,\s+applicability, dependency revisions.*source references.*review\s+outcomes/is);
  assert.match(text, /Do not display version numbers,\s+SemVer categories, release labels/i);
  assert.match(text, /Do not silently advance a dependency/i);
  assert.match(text, /stakeholder roster separate from tags/i);
  assert.match(text, /Clear a tag only after an evidenced response resolves/i);
  assert.match(text, /Do not introduce clause voting, calculated\s+clause-approval states, automatic requests/i);
  assert.match(text, /Filtered views are not access controls/i);
});

test("Stages compose Brief without reinstating mandatory legacy templates", async () => {
  const analysis = await skill("analysis");
  const prd = await skill("prd");
  const specification = await skill("specification");
  const validation = await skill("validation");
  const elicitation = await skill("elicitation");
  assert.match(analysis, /Do not require a parallel\s+`requirements.md`/i);
  assert.match(analysis, /user asks for\s+the standalone two-file analysis/i);
  assert.match(analysis, /one-time obligations explicitly assigned/i);
  assert.match(prd, /Use `toolchain:brief` by default/i);
  assert.match(prd, /user specifically requests the formal six-section PRD/i);
  const sections = ["Problem", "Objectives", "Business Requirements", "Scope", "Constraints and Assumptions", "Open Decisions and Sign-off"];
  assert.deepEqual([...prd.matchAll(/^\d\. \*\*([^*]+)\*\*/gm)].map((match) => match[1]), sections);
  assert.match(specification, /when product interactions, appearance, or experience need design/i);
  assert.match(specification, /do not force a separate `specification.md`/i);
  assert.match(specification, /approval already given in the current request/i);
  assert.match(validation, /do not require creating them beside every brief/i);
  assert.match(validation, /Do not require an agenda for ordinary conversational review/i);
  assert.match(elicitation, /conversational and iterative/i);
  assert.match(elicitation, /No host planning-mode toggle or external author is required/i);
});
