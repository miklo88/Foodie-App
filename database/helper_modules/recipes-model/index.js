// const knex = require("knex")
// const config = require("../knexfile.js")
// const db = knex(config.development)
const db = require("../../dbConfig");

const router = express.Router();

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findInstructions,
  findInstructionById,
  addInstruction
};

function find(recipe) {
  return db("recipes");
}

function findById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

async function add(recipe) {
  const [id] = await db("recipes").insert(recipe);

  return findById(id);
}

function remove(id) {
  return db("recipes")
    .where({ id })
    .del();
}

async function update(id, changes) {
  await db("recipes")
    .where({ id })
    .update(changes);

  return findById(id);
}

function findInstructions(instructionId) {
  return db("instructions as m")
    .join("recipes as h", "m.instruction_id", "h.id")
    .where({ instruction_id: instructionId })
    .select([
      "m.id",
      "m.text",
      "m.sender",
      "h.id as instructionId",
      "h.recipeTile as recipe"
    ]);
}

function findInstructionById(instructionId, id) {
  return db("recipes")
    .where({ id, instruction_id: instructionId })
    .first();
}

async function addInstruction(instructionId, recipe) {
  const data = { instrucion_id: instructionId, ...recipe };
  const [id] = await db("recipes").insert(data);

  return findInstructionById(instructionId, id);
}
