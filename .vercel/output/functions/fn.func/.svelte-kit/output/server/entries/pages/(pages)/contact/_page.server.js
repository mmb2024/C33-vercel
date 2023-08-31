import { sql, createPool } from "@vercel/postgres";
import { object, string } from "yup";
import "dotenv/config";
const prerender = false;
async function loadUsers1() {
  const startTime = Date.now();
  console.log(`+page.server loadUsers1() L11: startTime= `, startTime);
  const db = createPool({
    connectionString: process.env.POSTGRES_URL
  });
  try {
    const { rows: users } = await db.query("SELECT * FROM users1");
    console.log(`+page.server loadUsers1() L18: users= `, users);
    const duration = Date.now() - startTime;
    return {
      users,
      duration
    };
  } catch (error) {
    console.log("Error: Table users1 does not exist.");
    throw error;
  }
}
async function storeDataVercel(pgUsers1) {
  await loadUsers1();
  const startTime = Date.now();
  console.log(`+page.server sql() L10: startTime= `, startTime);
  try {
    const sqlQuery = await Promise.all([
      sql`INSERT INTO users1 (name, lastname, email, message) 
              VALUES (
                      ${pgUsers1.name},
                      ${pgUsers1.lastname},
                      ${pgUsers1.email},
                      ${pgUsers1.message});`
    ]);
    const duration = Date.now() - startTime;
    console.log(`+page.server sql() L22: duration= `, duration);
    return "true";
  } catch (error) {
    const errors = error;
    return { errors };
  }
}
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const message = formData.get("message");
    const contactFormSchema = object({
      name: string().min(2, "too short").required("Por favor ingresar un nombre valido"),
      lastname: string().min(2, "too short").required("Por favor ingresar un apellido valido"),
      email: string().required("Email es requerido.").email(),
      message: string().required()
    });
    try {
      const validationResult = await contactFormSchema.validate(
        { name, lastname, email, message },
        { abortEarly: false }
      );
      const pgUsers1 = {
        name: `${name}`,
        lastname: `${lastname}`,
        email: `${email}`,
        message: `${message}`
      };
      const status1 = await storeDataVercel(pgUsers1);
      if (status1) {
        return {
          success: true,
          status: `Gracias ${name}. Tu Informacion fue enviada con exito`
        };
      } else {
        return {
          success: false,
          status: `${name}. Error en el envio de tu Informacion, por favor intenta mas tarde.`,
          name,
          lastname,
          email,
          message
        };
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        let errors = error;
        return {
          error,
          errors,
          name,
          lastname,
          email,
          message
        };
      } else {
        console.log(error);
      }
    }
  }
};
export {
  actions,
  prerender
};
