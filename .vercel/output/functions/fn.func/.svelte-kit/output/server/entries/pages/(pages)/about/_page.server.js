import { createPool, sql } from "@vercel/postgres";
async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users1 (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      message VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;
  console.log(`Created "users1" table`);
  const users = await Promise.all([
    sql`
          INSERT INTO users1 (name, lastname, email, message)
          VALUES ('Mario', 'Mejia', 'aptlagasca@gmail.com', 'Message1')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users1 (name, lastname, email, message)
          VALUES ('Lee', 'Robinson', 'lee@gmail.com', 'Message2')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users1 (name, lastname, email, message)
          VALUES ('Stephen', 'Tey', 'stey@hotmail.com', 'Message3')
          ON CONFLICT (email) DO NOTHING;
      `
  ]);
  console.log(`Seeded ${users.length} users`);
  return {
    createTable,
    users
  };
}
async function load() {
  const db = createPool();
  const startTime = Date.now();
  try {
    const { rows: users } = await db.query("SELECT * FROM users1");
    console.log("page.server.js L49: users= ", users);
    const duration = Date.now() - startTime;
    return {
      users,
      duration
    };
  } catch (error) {
    if (error?.message === `relation "users1" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      await seed();
      const { rows: users } = await db.query("SELECT * FROM users1");
      console.log("page.server.js L63: users= ", users);
      const duration = Date.now() - startTime;
      return {
        users,
        duration
      };
    } else {
      throw error;
    }
  }
}
export {
  load
};
