import React from "react";
import form from "./form.module.scss";

export type FormOutput = { key: string; value: string }[];

type Form = {
  title: string;
  fields: {
    placeholder: string;
    key: string;
    type: string;
  }[];
  onSubmit: (value: FormOutput) => void;
  buttonText: string;
  children: React.ReactNode;
};

export function Form({ fields, buttonText, onSubmit, title, children }: Form) {
  const onSubmitValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & FormData;
    const elements: HTMLInputElement[] = (target as any).elements;
    const submitValues = Array.from(elements).reduce(
      (acc: FormOutput, element) => {
        if (element.nodeName === "INPUT") {
          const value: string = element.value;
          const key = element.dataset.key as string;
          acc.push({ key, value });
        }
        return acc;
      },
      []
    );

    onSubmit(submitValues);
  };
  return (
    <form className={form["form"]} onSubmit={onSubmitValue}>
      <h4 className={form["form__title"]}>{title}</h4>
      {fields.map(({ placeholder, key, type }) => {
        return (
          <input
            className={form["form__input"]}
            data-key={key}
            type={type}
            key={key}
            placeholder={placeholder}
          ></input>
        );
      })}
      {children}
      <button className={form["form__submit"]} type="submit">
        {buttonText}
      </button>
    </form>
  );
}
