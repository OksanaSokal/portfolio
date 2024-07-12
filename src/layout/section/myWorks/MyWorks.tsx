import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import img1 from "../../../assets/images/social-network.png";
import img2 from "../../../assets/images/timer.png";
import { Container } from "../../../components/Container";
import { MyWork } from "./myWork/MyWork";
import React, { useState } from "react";
import { S } from "./MyWorks_Styles";
import { AnimatePresence, motion } from "framer-motion";

const worksData = [
  {
    title: "Social Network",
    src: img1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 1,
  },
  {
    title: "Timer",
    src: img2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 2,
  },
];

const tabsItems: Array<{ title: string; status: TabStatusType }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

export const MyWorks: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing");
  }

  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }

  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          wrap={"wrap"}
          justify={"space-between"}
          align={"flex-start"}
        >
          <AnimatePresence>
            {filteredWorks.map((w) => {
              return (
                <motion.div
                  layout
                  style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  key={w.id}
                >
                  <MyWork
                    title={w.title}
                    src={w.src}
                    text={w.text}
                    key={w.id}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
