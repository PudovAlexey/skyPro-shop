type Good = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  img: string;
  createdAt: Date;
};

type CartGood = Good & {
  count: number;
};

type Goods = Record<number, Good>;
type CartGoods = Record<number, CartGood>;

type Sort = "old" | "new";

type CartAction =
  | {
      type: "addItem";
      payload: {
        id: number;
        item: Good;
      };
    }
  | {
      type: "changeCount";
      payload: {
        id: number;
        count: number;
      };
    }
  | {
      type: "removeItem";
      payload: {
        id: number;
      };
    }
  | {
      type: "clearCart";
      payload?: undefined;
    }
  | {
      type: "init";
      payload: {
        items: CartGood;
      };
    };

export type { Good, Goods, Sort, CartGood, CartGoods, CartAction };
