"use client";

import React, { useEffect, useState } from "react";
import GoalCard from "@/components/goal/GoalCard";
import { useRouter } from "next/navigation";
import "../../../style/goal/goalCreatedPage.css";

const Page = () => {
  const [goalData, setGoalData] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const savedGoal = localStorage.getItem("goal");
    if (savedGoal) {
      setGoalData(JSON.parse(savedGoal)); // 로컬 스토리지에서 저장된 goal 데이터를 불러옴
    }
  }, []);

  const ListButtonClick = () => {
    router.push("/list");
  };

  return (
    <div className="createdGoal__container">
      {/* 제목 */}

      <h1 className="createdGoal__title">목표 카드를 생성했어요</h1>

      {/* 목표 카드 컴포넌트 */}
      {goalData ? (
        <GoalCard
          title={goalData.title}
          content={goalData.content}
          interval_weeks={goalData.interval_weeks} // interval_weeks로 전달
          interval_times={goalData.interval_times} // interval_times로 전달
          start_date={goalData.start_date} // start_date로 전달
          end_date={goalData.end_date} // end_date로 전달
        />
      ) : (
        <p>저장된 목표 정보가 없습니다.</p>
      )}

      {/* 카드 보러가기 버튼 */}
      <button className="createdGoal__button" onClick={ListButtonClick}>
        카드 보러가기
        <span className="createdGoal__arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
      </button>

      <div className="createdGoal__background">
        <svg
          width="1116"
          height="877"
          viewBox="0 0 1116 877"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M925 458.5V453C937.8 454.2 945.333 448.833 947.5 446L951.5 451.5C945.1 457.5 931.167 458.667 925 458.5Z"
            fill="#FFDFFC"
          />
          <path
            d="M806.5 318C792.5 322.8 781.666 338.667 778 346L785 348C795.8 330.4 805.833 324.333 809.5 323.5L806.5 318Z"
            fill="#FFDFFC"
          />
          <path
            d="M725.5 314C715.5 310.8 709 293.667 707 285.5L701 284.5C699 302.9 715.166 315.5 723.5 319.5L725.5 314Z"
            fill="#FFDFFC"
          />
          <path
            d="M849 370.5C852.667 365.833 862 359.3 870 370.5C866.833 376 858.2 383.7 849 370.5Z"
            fill="#FFDFFC"
          />
          <path
            d="M660 420.5C648.4 423.7 642.167 436.5 640.5 442.5L649 445C653.4 443.8 662.167 430.167 666 423.5L660 420.5Z"
            fill="#FFDFFC"
          />
          <path
            d="M578 774C570.8 776 559.333 791.5 554.5 799L546.5 796.5C556.5 779.7 570.333 771.167 576 769L578 774Z"
            fill="#FFDFFC"
          />
          <path
            d="M611 764.5L607.5 771C617.5 774.6 624 786.167 626 791.5L629.5 789C627.1 775.4 616.167 767 611 764.5Z"
            fill="#FFDFFC"
          />
          <path
            d="M604 870L590.5 864L585.5 868.5C585.9 872.1 596.667 875.667 602 877L604 870Z"
            fill="#FFDFFC"
          />
          <path
            d="M352.5 659.5V655C365.7 655 375.667 648.667 379 645.5L382 652C377.2 657.6 360.333 659.333 352.5 659.5Z"
            fill="#FFDFFC"
          />
          <path
            d="M1089.5 261.5V256C1102.3 257.2 1109.83 251.833 1112 249L1116 254.5C1109.6 260.5 1095.67 261.667 1089.5 261.5Z"
            fill="#EFEF88"
          />
          <path
            d="M971 121C957 125.8 946.166 141.667 942.5 149L949.5 151C960.3 133.4 970.333 127.333 974 126.5L971 121Z"
            fill="#EFEF88"
          />
          <path
            d="M998.5 332C988.5 328.8 982 311.667 980 303.5L974 302.5C972 320.9 988.166 333.5 996.5 337.5L998.5 332Z"
            fill="#EFEF88"
          />
          <path
            d="M1013.5 173.5C1017.17 168.833 1026.5 162.3 1034.5 173.5C1031.33 179 1022.7 186.7 1013.5 173.5Z"
            fill="#EFEF88"
          />
          <path
            d="M824.5 223.5C812.9 226.7 806.667 239.5 805 245.5L813.5 248C817.9 246.8 826.667 233.167 830.5 226.5L824.5 223.5Z"
            fill="#EFEF88"
          />
          <path
            d="M741.5 480C734.3 482 722.833 497.5 718 505L710 502.5C720 485.7 733.833 477.167 739.5 475L741.5 480Z"
            fill="#EFEF88"
          />
          <path
            d="M774.5 470.5L771 477C781 480.6 787.5 492.167 789.5 497.5L793 495C790.6 481.4 779.667 473 774.5 470.5Z"
            fill="#EFEF88"
          />
          <path
            d="M767.5 576L754 570L749 574.5C749.4 578.1 760.167 581.667 765.5 583L767.5 576Z"
            fill="#EFEF88"
          />
          <path
            d="M517 462.5V458C530.2 458 540.167 451.667 543.5 448.5L546.5 455C541.7 460.6 524.833 462.333 517 462.5Z"
            fill="#EFEF88"
          />
          <path
            d="M139.5 328.5V323C126.7 324.2 119.167 318.833 117 316L113 321.5C119.4 327.5 133.334 328.667 139.5 328.5Z"
            fill="#ABC4E5"
          />
          <path
            d="M258 188C272 192.8 282.834 208.667 286.5 216L279.5 218C268.7 200.4 258.667 194.333 255 193.5L258 188Z"
            fill="#ABC4E5"
          />
          <path
            d="M339 184C349 180.8 355.5 163.667 357.5 155.5L363.5 154.5C365.5 172.9 349.334 185.5 341 189.5L339 184Z"
            fill="#ABC4E5"
          />
          <path
            d="M215.5 240.5C211.833 235.833 202.5 229.3 194.5 240.5C197.667 246 206.3 253.7 215.5 240.5Z"
            fill="#ABC4E5"
          />
          <path
            d="M404.5 290.5C416.1 293.7 422.333 306.5 424 312.5L415.5 315C411.1 313.8 402.333 300.167 398.5 293.5L404.5 290.5Z"
            fill="#ABC4E5"
          />
          <path
            d="M153 595C160.2 597 171.667 612.5 176.5 620L184.5 617.5C174.5 600.7 160.667 592.167 155 590L153 595Z"
            fill="#ABC4E5"
          />
          <path
            d="M120 585.5L123.5 592C113.5 595.6 107 607.167 105 612.5L101.5 610C103.9 596.4 114.833 588 120 585.5Z"
            fill="#ABC4E5"
          />
          <path
            d="M127 691L140.5 685L145.5 689.5C145.1 693.1 134.333 696.667 129 698L127 691Z"
            fill="#ABC4E5"
          />
          <path
            d="M377.5 577.5V573C364.3 573 354.333 566.667 351 563.5L348 570C352.8 575.6 369.667 577.333 377.5 577.5Z"
            fill="#ABC4E5"
          />
          <path
            d="M836.5 570.5V576C849.3 574.8 856.833 580.167 859 583L863 577.5C856.6 571.5 842.667 570.333 836.5 570.5Z"
            fill="#95E757"
          />
          <path
            d="M718 711C704 706.2 693.167 690.333 689.5 683L696.5 681C707.3 698.6 717.333 704.667 721 705.5L718 711Z"
            fill="#95E757"
          />
          <path
            d="M373 750.5C363 753.7 356.5 770.833 354.5 779L348.5 780C346.5 761.6 362.666 749 371 745L373 750.5Z"
            fill="#95E757"
          />
          <path
            d="M760.5 658.5C764.167 663.167 773.5 669.7 781.5 658.5C778.333 653 769.7 645.3 760.5 658.5Z"
            fill="#95E757"
          />
          <path
            d="M307.5 644C295.9 640.8 289.667 628 288 622L296.5 619.5C300.9 620.7 309.667 634.333 313.5 641L307.5 644Z"
            fill="#95E757"
          />
          <path
            d="M32 132.5C24.8 130.5 13.3333 115 8.5 107.5L0.5 110C10.5 126.8 24.3333 135.333 30 137.5L32 132.5Z"
            fill="#95E757"
          />
          <path
            d="M65 142L61.5 135.5C71.5 131.9 78 120.333 80 115L83.5 117.5C81.1 131.1 70.1667 139.5 65 142Z"
            fill="#95E757"
          />
          <path
            d="M58 36.5L44.5 42.5L39.5 38C39.9 34.4 50.6667 30.8333 56 29.5L58 36.5Z"
            fill="#95E757"
          />
          <path
            d="M157 442V446.5C170.2 446.5 180.167 452.833 183.5 456L186.5 449.5C181.7 443.9 164.833 442.167 157 442Z"
            fill="#95E757"
          />
          <path
            d="M53.5 257V251.5C40.7 252.7 33.1667 247.333 31 244.5L27 250C33.4 256 47.3333 257.167 53.5 257Z"
            fill="#C1F0EB"
          />
          <path
            d="M172 116.5C186 121.3 196.833 137.167 200.5 144.5L193.5 146.5C182.7 128.9 172.667 122.833 169 122L172 116.5Z"
            fill="#C1F0EB"
          />
          <path
            d="M393.5 29.5C403.5 26.3 410 9.16667 412 1L418 0C420 18.4 403.833 31 395.5 35L393.5 29.5Z"
            fill="#C1F0EB"
          />
          <path
            d="M129.5 169C125.833 164.333 116.5 157.8 108.5 169C111.667 174.5 120.3 182.2 129.5 169Z"
            fill="#C1F0EB"
          />
          <path
            d="M60.5 396C72.1 399.2 78.3333 412 80 418L71.5 420.5C67.1 419.3 58.3333 405.667 54.5 399L60.5 396Z"
            fill="#C1F0EB"
          />
          <path
            d="M362 418C369.2 420 380.667 435.5 385.5 443L393.5 440.5C383.5 423.7 369.667 415.167 364 413L362 418Z"
            fill="#C1F0EB"
          />
          <path
            d="M329 408.5L332.5 415C322.5 418.6 316 430.167 314 435.5L310.5 433C312.9 419.4 323.833 411 329 408.5Z"
            fill="#C1F0EB"
          />
          <path
            d="M336 514L349.5 508L354.5 512.5C354.1 516.1 343.333 519.667 338 521L336 514Z"
            fill="#C1F0EB"
          />
          <path
            d="M890 422.5V418C876.8 418 866.833 411.667 863.5 408.5L860.5 415C865.3 420.6 882.167 422.333 890 422.5Z"
            fill="#C1F0EB"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page;
