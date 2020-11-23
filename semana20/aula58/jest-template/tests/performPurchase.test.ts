import { User } from "../src/performPurchase"
import { performPurchase } from "../src/index"

describe("Testing balance greater than value", () => {
   test("Testing balance greater than value", () => {
      const user: User = {
         name: "Marcela",
         balance: 100
      }

      const result = performPurchase(user, 50)

      expect(result).toEqual({
         ...user,
         balance: 50
      })
   })

   test("Testing balance equal to value", () => {
      const user: User = {
         name: "Marcela",
         balance: 50
      }
   
      const result = performPurchase(user, 50)
      
      expect(result).toEqual({
         ...user,
         balance: 0
      })
   })

   test("Testing balance less than value", () => {
      const user: User = {
         name: "Marcela",
         balance: 30
      }
   
      const result = performPurchase(user, 50)
      
      expect(result).toEqual(undefined)
   })
})

