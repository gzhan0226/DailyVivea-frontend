"use client";

import React, { useState } from "react";
import RecordDatePage from "./record-date";
import RecordExperiencePage from "./record-experience";
import RecordLoadingPage from "./loading";
import RecordFeedbackPage from "./feedback";

const RecordPage = () => {
    const [step, setStep] = useState(0); // ✅ 페이지 전환 상태 (0: 날짜 선택, 1: 경험 기록 2: 로딩 3: 피드백 4: 추천 목표)
    const [activeStep, setActiveStep] = useState(0); // ✅ ProgressBar 상태 관리

    return (
        <div>
            {step === 0 && (
                <RecordDatePage setStep={setStep} activeStep={activeStep} setActiveStep={setActiveStep} />
            )}
            {step === 1 && (
                <RecordExperiencePage setStep={setStep} activeStep={activeStep} setActiveStep={setActiveStep} />
            )}
            {step === 2 && (
                <RecordLoadingPage setStep={setStep} activeStep={activeStep} setActiveStep={setActiveStep}/>
            )}
            {step === 3 && (
                <RecordFeedbackPage setStep={setStep} activeStep={activeStep} setActiveStep={setActiveStep} />
            )}
        </div>
    );
};

export default RecordPage;
