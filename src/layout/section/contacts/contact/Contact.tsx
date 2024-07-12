import React, { ElementRef, useRef } from "react";
import { Button } from "../../../../components/button/Button";
import { S } from "../Contacts_Styles";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_921r9na", "template_vuz9bul", form.current, {
        publicKey: "JllIe-YlB11UJnlq1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <S.Form ref={form} onSubmit={sendEmail}>
      <S.Label htmlFor={"email"}>Your Email Address</S.Label>
      <S.Field
        required
        placeholder={"something@website.com"}
        type={"email"}
        id="email"
        name="from_name"
      />

      <S.Label htmlFor={"subject"}>Subject</S.Label>
      <S.Field
        required
        placeholder={"Question about your article"}
        id="subject"
        name="subject"
      />

      <S.Field
        required
        placeholder={"Your message starts with…"}
        as={"textarea"}
        id="message"
        name="message"
      />
      <Button type={"submit"}>Send</Button>
    </S.Form>
  );
};
