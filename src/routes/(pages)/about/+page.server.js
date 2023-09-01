// @ts-nocheck
import { createPool } from '@vercel/postgres';
import { sql } from "@vercel/postgres";
import "dotenv/config";


export async function load() {
  const startTime = Date.now();
  console.log(`+page.server load() L9: startTime= `, startTime);
	const db = createPool({
    connectionString: process.env.POSTGRES_URL
  });
  console.log(`+page.server load() L13: db= `, db);

  try {
		const { rows: users } = await db.query('SELECT * FROM users');
		const duration = Date.now() - startTime;
		return {
			users: users,
			duration: duration
		};
	} catch (error) {
		if (error?.message === `relation "users1" does not exist`) {
      console.log("L24: Table does not exist!");
    } else {
      throw error;
    }
	}
}