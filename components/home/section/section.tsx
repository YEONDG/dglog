"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Dglog } from "../projects/dglog";
import CuteChatting from "../projects/cutechatting";

export const Section = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // 스크롤 관련 모션 값 설정
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // y 위치 변환 - 스크롤에 따라 섹션이 위로 올라오는 효과
  const y = useTransform(scrollYProgress, [0, 0.5], ["30vh", "0vh"]);

  // 투명도 변환 - 스크롤에 따라 서서히 나타나는 효과
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // 배경 색상 스케일 - 스크롤에 따라 배경색이 변하는 효과
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // 섹션 내용 애니메이션 변수
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: -100,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-10 min-h-screen w-full"
      style={{
        y,
        opacity,
        scale,
      }}
    >
      <div className="container mx-auto px-4 py-24">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-4xl"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-6 px-8 text-left text-4xl font-bold"
          >
            프로젝트
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-12 px-8 text-lg text-gray-700 dark:text-gray-300"
          >
            제가 진행한 주요 프로젝트들을 소개합니다
          </motion.p>

          {/* 프로젝트 카드들 */}
          <div className="flex flex-col gap-16">
            <CuteChatting />
            <Dglog />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
