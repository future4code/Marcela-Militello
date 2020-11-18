public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
		role: string //opcional criar ENUM
  ): Promise<void> {
    try {
      await connection()
        .insert({
          id,
          email,
          name,
          password,
					role
        })
        .into(UserDatabase.User_Arq);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }