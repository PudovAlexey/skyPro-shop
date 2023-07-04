import { useState } from "react";
import { GoodItem } from "../components/Good/Good";
import { Select } from "../components/Select";
import { goods } from "../fakeApi/mocks/goods";
import "../styles/main.scss";
import { Sort } from "../types/types";

const options = [
  {
    id: "new",
    name: "Порядок: сперва новые",
  },
  {
    id: "old",
    name: "Порядок: сперва старые",
  },
];

export function Main() {
  const [sort, setSort] = useState<Sort>("new");

  const onChangeValue = (value: Sort) => {
    setSort(value);
  };
  return (
    <div>
      <div className="select-wrapper">
        <Select<Sort>
          value={sort}
          onChange={onChangeValue}
          defaultValue={sort}
          options={options}
        />
      </div>
      <div className="card-box">
        {Object.keys(goods)
          .sort((a, b) => {
            const goodLeft = goods[+a];
            const goodRight = goods[+b];
            return sort === "new"
              ? +goodLeft.createdAt - +goodRight.createdAt
              : +goodRight.createdAt - +goodLeft.createdAt;
          })
          .map((id) => {
            const good = goods[+id];
            return <GoodItem key={good.id} {...good} />;
          })}
      </div>
    </div>
  );
}
