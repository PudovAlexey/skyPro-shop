import { ChangeEvent } from "react";
import "../styles/main.scss";

type Select<value> = {
  options: {
    id: string;
    name: string;
  }[];
  defaultValue: value;
  value: value;
  onChange: (value: value) => void;
};

export function Select<value>({ options, defaultValue, value, onChange }: Select<value>) {
  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as value;
    onChange(value);
  };
  return (
    <select
      onChange={onChangeValue}
      value={value as string}
      defaultValue={defaultValue as string}
      className="select"
    >
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
