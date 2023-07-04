import { ChangeEvent } from "react";
import "../styles/main.scss";

type Select<value> = {
  options: {
    id: string;
    name: string;
  }[];
  value: value;
  onChange: (value: value) => void;
};

export function Select<value>({ options, value, onChange }: Select<value>) {
  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as value;
    onChange(value);
  };
  return (
    <select onChange={onChangeValue} value={value as string} className="select">
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
