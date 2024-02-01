"use client";
import { useRef } from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

export function Create() {
  const name = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input placeholder="Seu nome" type="text" ref={name} />
      <Button title="Entrar" type="button" />
    </>
  );
}
