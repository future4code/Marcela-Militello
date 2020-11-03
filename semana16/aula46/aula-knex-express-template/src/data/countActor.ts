// import { connection } from "../index";

// const countActors = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);

//     const count = result[0][0].count;
//     return count;
// };

// export default countActors;