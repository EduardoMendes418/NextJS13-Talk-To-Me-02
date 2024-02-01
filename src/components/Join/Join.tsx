"use client";
import { useRef } from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

export function Join() {
  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input placeholder="Digite o código da reunião" type="text" ref={name} />
      <Input placeholder="Digite o código da reunião" type="text" ref={id} />
      <Button title="Entrar" type="button" />
    </>
  );
}
