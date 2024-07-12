import React from "react";
import { S } from "../HeaderMenu_Styles";

const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "My skills",
    href: "skills",
  },
  {
    title: "Latest Works",
    href: "works",
  },
  {
    title: "Testimonials",
    href: "testimonials",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item: { title: string; href: string }, index: number) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLink
              activeClass="active"
              spy={true}
              to={item.href}
              smooth={true}
            >
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
