"use client";
import React, { useEffect, useState } from "react";

import {
  Title,
  BlockComponent,
  BlockTitle,
  BlockMiddleTitle,
  BlockText,
  GreenButton,
  GrayButton,
} from "./style";

import CircularProgressBar from "@/components/report/CircleProgressBar";
import EmotionBar from "@/components/report/EmotionBar";

import Image from "next/image";
import goodSticker from "@/assets/goodSticker.svg";
import sosoSticker from "@/assets/sosoSticker.svg";
import badSticker from "@/assets/badSticker.svg";
import GoalListItem from "@/components/report/GoalListItem";
import DiamondProgressBar from "@/components/report/DiamondProgressBar";
import TextLinkItem from "@/components/report/TextLinkItem";
import {
  Feedback,
  GetReportDetailResponse,
  GetReportResponse,
} from "@/api/types/report";
import StickerCalendar from "@/components/Global/StickerCalendar";
import { Emotion } from "./data";
import {
  formatDateMMdDDdDay,
  formatDateYYYYbMMbDD,
} from "@/components/Global/calendar.data";
import useGetReport from "@/api/hooks/useGetReport";
import { getReport, getReportDetail } from "@/api/reportAPI";
import { ResponseType } from "@/api/axiosInstance";

const ReportPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  // API 데이터
  const [reportData, setReportData] =
    useState<ResponseType<GetReportResponse>>();
  const [reportDetailData, setReportDetailData] =
    useState<GetReportDetailResponse>();
  const [feedbackList, setFeedbackList] = useState<Feedback[]>();

  // 임시
  const userId = 2;

  const recordItemForDate = (date: Date) => {
    if (!feedbackList) return null;

    const feedbackItem = feedbackList.find((item) => {
      // Feedback(date, emotion, feedback, summary, user_id)에서
      // date(0000-00-00 형식의 string) 값을 날짜 객체로 변환
      const stickedDate = new Date(item.date); // 해당 날짜에는 이모지 스티커가 붙여져있음

      // d가 date와 같은 지를 반환
      return stickedDate.toDateString() === date.toDateString();
    });
    return feedbackItem || null;
  };

  // API 연동
  useEffect(() => {
    // 비동기 함수로 데이터를 가져와서 상태 업데이트
    const fetchReportDetail = async () => {
      const date = selectedDate ? selectedDate : currentDate;

      try {
        const reportData = await getReport({
          userId,
          date: formatDateYYYYbMMbDD(date),
        });
        const reportDetailData = await getReportDetail({
          userId,
          date: formatDateYYYYbMMbDD(date),
        });

        // 확인
        /*
        console.log("API");
        console.log(reportData);
        console.log(reportDetailData);
        console.log(reportData.feedbacks);
        */

        if (reportData) {
          setReportData(reportData);
          //setFeedbackList(reportData.result?.feedbacks);
          setFeedbackList(reportData.feedbacks); // typescript라서 apiGet 함수의 <ResponseType<T>> 때문에 빨간줄 뜨는데 동작은 잘 됨 (나중에 해결하기)
        }

        if (reportDetailData) {
          //setReportDetailData(reportDetailData.result);
          setReportDetailData(reportDetailData); // typescript라서 apiGet 함수의 <ResponseType<T>> 때문에 빨간줄 뜨는데 동작은 잘 됨 (나중에 해결하기)
        }
      } catch (error) {
        console.error("Error fetching report detail:", error);
      }
    };

    fetchReportDetail(); // 데이터를 가져오는 함수 호출
  }, [currentDate, selectedDate]);

  return (
    <div className="bg-white p-10 ">
      <Title>나의 경험을 모았어요</Title>
      <StickerCalendar
        componentName="RecordDate"
        currentDate={currentDate}
        selectedDate={selectedDate}
        hoveredDate={hoveredDate}
        setCurrentDate={setCurrentDate}
        setSelectedDate={setSelectedDate}
        setHoveredDate={setHoveredDate}
        feedbackList={feedbackList}
      />

      <div className="flex justify-between gap-4 mb-[70px] mt-[30px]">
        <BlockComponent>
          <BlockTitle>
            {!selectedDate
              ? "날짜를 선택해주세요!"
              : !recordItemForDate(selectedDate)
              ? "오늘은 감정 기록이 없어요!"
              : recordItemForDate(selectedDate)?.emotion === Emotion.happy
              ? "오늘 발표가 만족스러웠던 것 같아요!"
              : recordItemForDate(selectedDate)?.emotion === Emotion.soso
              ? "오늘 발표가 나쁘지 않았던 것 같아요!"
              : recordItemForDate(selectedDate)?.emotion === Emotion.bad
              ? "오늘 발표가 좀 어려우셨던 것 같아요!"
              : ""}
          </BlockTitle>
          <p className="text-[#B6B6B6] font-medium text-[16px] mt-3">
            {!selectedDate ? "" : formatDateMMdDDdDay(selectedDate)}
          </p>

          <div className="flex justify-between items-center">
            <BlockMiddleTitle>
              {!selectedDate
                ? "선택된 날짜가 없습니다"
                : !recordItemForDate(selectedDate)
                ? "기록된 감정이 없는 날"
                : recordItemForDate(selectedDate)?.emotion === Emotion.happy
                ? "발표가 마음에 들어 햅삐했던 날 😍"
                : recordItemForDate(selectedDate)?.emotion === Emotion.soso
                ? "발표가 그럭저럭 굴러갔던 날 🙂"
                : recordItemForDate(selectedDate)?.emotion === Emotion.bad
                ? "발표가 마음에 들지 않아 우울했던 날 😭"
                : `백엔드로부터 알 수 없는 감정 데이터를 전달받았어요: ${
                    recordItemForDate(selectedDate)?.emotion
                  }`}
            </BlockMiddleTitle>
            {!selectedDate ? (
              ""
            ) : !recordItemForDate(selectedDate) ? (
              ""
            ) : recordItemForDate(selectedDate)?.emotion === Emotion.happy ? (
              <Image
                src={goodSticker}
                alt="감정스티커"
                className="w-[213px] h-[213px]"
              />
            ) : recordItemForDate(selectedDate)?.emotion === Emotion.soso ? (
              <Image
                src={sosoSticker}
                alt="감정스티커"
                className="w-[213px] h-[213px]"
              />
            ) : recordItemForDate(selectedDate)?.emotion === Emotion.bad ? (
              <Image
                src={badSticker}
                alt="감정스티커"
                className="w-[213px] h-[213px]"
              />
            ) : (
              ""
            )}
          </div>
        </BlockComponent>

        <BlockComponent>
          <BlockTitle>피드백</BlockTitle>
          <BlockText className="mt-3">
            {!selectedDate
              ? "날짜를 선택해주세요!"
              : !recordItemForDate(selectedDate)
              ? "오늘은 피드백 기록이 없어요!"
              : `${recordItemForDate(selectedDate)?.feedback}`}
          </BlockText>
        </BlockComponent>
      </div>

      <Title>이번 주 목표 달성률이 높아요! 계속해서 도전하세요!</Title>
      <div className="flex gap-2 mb-6">
        <GreenButton>주간</GreenButton>
        <GrayButton>월간</GrayButton>
      </div>

      <div className="flex justify-between gap-4 mb-[70px]">
        <div className="flex-1">
          <BlockComponent>
            <BlockTitle className="mb-7">이번 주 목표 달성률</BlockTitle>
            <div className="flex justify-center">
              <CircularProgressBar
                size={200}
                strokeWidth={20}
                progress={75}
                description="01 . 07 . 수요일"
              />
            </div>
            <div>
              <TextLinkItem text="주 3회, 하루 30분 이상 걷기 또는 조깅하기" />
              <DiamondProgressBar />

              <TextLinkItem text="주 1회 발표 연습하기" />
              <DiamondProgressBar />

              <TextLinkItem text="Python 강의 수료 후 간단한 프로젝트 완성" />
              <DiamondProgressBar />
            </div>
          </BlockComponent>
        </div>

        <div className="flex-1">
          <BlockComponent className="mb-4">
            <BlockTitle className="mt-5 mb-4">이번 주 감정 분포</BlockTitle>
            <EmotionBar
              text="두려움"
              emotion="😨"
              barColor="bg-[#95E757]"
              barState="w-[100%] "
            />
            <EmotionBar
              text="행복함"
              emotion="😊"
              barColor="bg-[#FFDFFC]"
              barState="w-[80%] "
            />
            <EmotionBar
              text="우울함"
              emotion="😔"
              barColor="bg-[#DEFFFC]"
              barState="w-[70%]"
            />
            <EmotionBar
              text="무덤덤"
              emotion="😐"
              barColor="bg-[#FFFFAA]"
              barState="w-[70%]"
            />
            <EmotionBar
              text="분노"
              emotion="😡"
              barColor="bg-[#E6E6E6]"
              barState="w-[50%]"
            />
            <div className="mb-10" /> {/*컴포넌트크기임시조정*/}
          </BlockComponent>

          <BlockComponent>
            <BlockTitle className="mt-5 mb-5">
              이번 주의 내 또래 친구들의 목표에요
            </BlockTitle>
            <GoalListItem
              goal="일주일에 5개 단어씩 외국어 단어장에 추가 후 복습"
              name="안OO"
            ></GoalListItem>
            <GoalListItem
              goal="월 1회 지역 봉사활동 참여하기"
              name="박OO"
            ></GoalListItem>
            <GoalListItem
              goal="주 1회, 외식비 5만 원 이하로 제한하기"
              name="최OO"
            ></GoalListItem>
            <GoalListItem
              goal="매일 자기계발 서적 10페이지 읽기"
              name="김OO"
            ></GoalListItem>
            <div className="mb-7" /> {/*컴포넌트크기임시조정*/}
          </BlockComponent>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
