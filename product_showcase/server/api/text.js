export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);

  const { age } = await readBody(event);
  return {
    message: `Hola, ${name}! You are ${age} old.`,
  };
});
