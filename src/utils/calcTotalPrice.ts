import { CartItems } from "../store/slice/product"

export const calcTotalPrice = (items: CartItems[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
  }