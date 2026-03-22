import clsx from "clsx";
import svgPaths from "./svg-3tkvp9vgpz";
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("absolute size-[32px] top-[178px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("absolute size-[36px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("size-[30px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute size-[10px] top-[927px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        {children}
      </svg>
    </div>
  );
}

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={additionalClassNames}>
      <div className="flex-none rotate-[-32.85deg] skew-x-[-5.55deg]">{children}</div>
    </div>
  );
}
type List4Props = {
  text: string;
  text1: string;
  text2: string;
};

function List4({ text, text1, text2 }: List4Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-['Poppins:Medium',sans-serif] font-semibold ml-0 mt-0 not-italic relative row-1 text-[#273240] text-[0px] text-[18px] tracking-[0.3429px] w-[127.859px] whitespace-pre-wrap">
        <span className="leading-[normal] text-white">{`SCOUT-3B  `}</span>
        <span className="leading-[normal] text-[#10b981]">{text}</span>
      </p>
      <p className="col-1 font-['Mulish:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-[28px] opacity-50 relative row-1 text-[#cacaca] text-[16px] tracking-[0.5px] w-[339.104px]">{text1}</p>
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] ml-[470.5px] mt-0 relative row-1 text-[18px] text-right text-white tracking-[0.3429px] w-[84.498px]">{text2}</p>
    </div>
  );
}
type List3Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function List3({ text, text1, text2, text3 }: List3Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-['Poppins:Medium',sans-serif] font-semibold ml-0 mt-0 not-italic relative row-1 text-[#273240] text-[0px] text-[18px] tracking-[0.3429px] w-[107.695px] whitespace-pre-wrap">
        <span className="leading-[normal] text-white">{text}</span>
        <span className="leading-[normal]">{`  `}</span>
        <span className="leading-[normal] text-[#f59e0b]">{text1}</span>
      </p>
      <p className="col-1 font-['Mulish:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-[28px] opacity-50 relative row-1 text-[#cacaca] text-[16px] tracking-[0.5px] w-[375.19px]">{text2}</p>
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] ml-[470.62px] mt-0 relative row-1 text-[18px] text-right text-white tracking-[0.3429px] w-[84.379px]">{text3}</p>
    </div>
  );
}
type List2Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function List2({ text, text1, additionalClassNames = "" }: List2Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <Helper text="SCOUT-3B" text1="•" additionalClassNames="w-[127.756px]" />
      <p className="col-1 font-['Mulish:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-[28px] opacity-50 relative row-1 text-[#cacaca] text-[16px] tracking-[0.5px] w-[283.284px]">{text}</p>
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] ml-[470.57px] mt-0 relative row-1 text-[18px] text-right text-white tracking-[0.3429px] w-[84.43px]">{text1}</p>
    </div>
  );
}
type List1Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function List1({ text, text1, text2, text3 }: List1Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-['Poppins:Medium',sans-serif] font-semibold ml-0 mt-0 not-italic relative row-1 text-[#273240] text-[0px] text-[18px] tracking-[0.3429px] w-[137.754px] whitespace-pre-wrap">
        <span className="leading-[normal] text-white">{text}</span>
        <span className="leading-[normal]">{`  `}</span>
        <span className="leading-[normal] text-[#ef4444]">{text1}</span>
      </p>
      <p className="col-1 font-['Mulish:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-[28px] opacity-50 relative row-1 text-[#cacaca] text-[16px] tracking-[0.5px] w-[339.66px]">{text2}</p>
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] ml-[470.57px] mt-0 relative row-1 text-[18px] text-right text-white tracking-[0.3429px] w-[84.43px]">{text3}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <p className={clsx("col-1 font-['Mulish:SemiBold',sans-serif] font-['Poppins:Medium',sans-serif] font-semibold ml-0 mt-0 not-italic relative row-1 text-[#273240] text-[0px] text-[18px] tracking-[0.3429px] whitespace-pre-wrap", additionalClassNames)}>
      <span className="leading-[normal] text-white">{text}</span>
      <span className="leading-[normal]">{`  `}</span>
      <span className="leading-[normal] text-[#10b981]">{text1}</span>
    </p>
  );
}
type ListProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function List({ text, text1, text2, text3 }: ListProps) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <Helper text={text} text1={text1} additionalClassNames="w-[107.727px]" />
      <p className="col-1 font-['Mulish:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-[28px] opacity-50 relative row-1 text-[#cacaca] text-[16px] tracking-[0.5px] w-[340.95px]">{text2}</p>
      <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] ml-[470.6px] mt-0 relative row-1 text-[18px] text-right text-white tracking-[0.3429px] w-[84.405px]">{text3}</p>
    </div>
  );
}
type AcitivityGrowthText1Props = {
  text: string;
  additionalClassNames?: string;
};

function AcitivityGrowthText1({ text, additionalClassNames = "" }: AcitivityGrowthText1Props) {
  return (
    <Wrapper additionalClassNames={clsx("absolute flex h-[26.758px] items-center justify-center top-[865.5px] w-[29.817px]", additionalClassNames)}>
      <p className="font-['Mulish:Bold',sans-serif] font-bold h-[12.67px] leading-[normal] relative text-[#a1a1a1] text-[10px] w-[28.574px]">{text}</p>
    </Wrapper>
  );
}
type AcitivityGrowthTextProps = {
  text: string;
  additionalClassNames?: string;
};

function AcitivityGrowthText({ text, additionalClassNames = "" }: AcitivityGrowthTextProps) {
  return (
    <Wrapper additionalClassNames={clsx("absolute flex h-[23.758px] items-center justify-center top-[866.5px] w-[25.17px]", additionalClassNames)}>
      <p className="font-['Mulish:Bold',sans-serif] font-bold h-[12.67px] leading-[normal] relative text-[#a1a1a1] text-[10px] w-[23.044px]">{text}</p>
    </Wrapper>
  );
}
type AcitivityGrowthHelperProps = {
  additionalClassNames?: string;
};

function AcitivityGrowthHelper({ additionalClassNames = "" }: AcitivityGrowthHelperProps) {
  return (
    <div className={clsx("absolute h-0 left-[190.18px] w-[548.999px]", additionalClassNames)}>
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 548.999 1">
          <line id="Line 5" stroke="var(--stroke-0, #F2F2F2)" x2="548.999" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

export default function Ledger() {
  return (
    <div className="bg-[#fffcf8] border border-[#e8e7e7] border-solid overflow-clip relative rounded-[40px] shadow-[0px_4px_90px_0px_rgba(0,0,0,0.06)] size-full" data-name="Ledger">
      <div className="absolute flex inset-[calc(41.99%-0.16px)_calc(8.58%-0.83px)_50.04%_calc(86.94%+0.74px)] items-center justify-center">
        <div className="flex-none h-[78.003px] rotate-[3.63deg] w-[59.633px]">
          <div className="relative size-full" data-name="Fill-12">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.6329 78.0031">
              <path clipRule="evenodd" d={svgPaths.p1bc29f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill-12" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[375px] left-[880px] top-[-1px] w-[559px]" />
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[normal] left-[140px] text-[#303030] text-[28px] top-[56px] whitespace-nowrap">Ledger</p>
      <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[0] left-[140px] text-[#6a6969] text-[16px] top-[99px] whitespace-pre">
        <span className="leading-[normal]">{`13:17:25  `}</span>
        <span className="leading-[normal] text-[#157aff]">{`•  LIVE`}</span>
      </p>
      <div className="absolute contents left-[804.88px] top-[-1px]" data-name="BMI">
        <div className="absolute bg-[#303030] h-[1024px] left-[805.88px] rounded-bl-[40px] rounded-tl-[40px] top-0 w-[634.117px]">
          <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-[-1px] pointer-events-none rounded-bl-[41px] rounded-tl-[41px]" />
        </div>
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[851.17px] text-[22px] text-white top-[59px] w-[79.264px]">Entries</p>
        <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[1257px] px-[24px] py-[14px] rounded-[12px] top-[49px] w-[149px]">
          <div aria-hidden="true" className="absolute border border-[#cacaca] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cacaca] text-[16px] whitespace-nowrap">Most Recent</p>
          <Frame>
            <g clipPath="url(#clip0_1_456)" id="Frame">
              <g id="Vector" />
              <path d={svgPaths.pa337080} fill="var(--fill-0, #CACACA)" id="Vector_2" />
            </g>
            <defs>
              <clipPath id="clip0_1_456">
                <rect fill="white" height="20" width="20" />
              </clipPath>
            </defs>
          </Frame>
        </div>
      </div>
      <div className="absolute contents left-[140px] top-[145px]" data-name="Blood Sugar">
        <div className="absolute bg-white border border-[#e8e7e7] border-solid h-[239px] left-[141px] rounded-[12px] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] top-[146px] w-[193px]" />
        <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] left-[235px] text-[16px] text-black top-[185px] whitespace-nowrap">Allowed</p>
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[161px] text-[#272927] text-[32px] top-[243px] whitespace-nowrap">218</p>
        <div className="absolute h-[72.5px] left-[161px] top-[302px] w-[151px]">
          <div className="absolute inset-[-0.69%_-0.33%_0_-0.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 73.0001">
              <g id="Group 11">
                <path d={svgPaths.p1d93ea80} fill="url(#paint0_linear_1_495)" id="Vector 1" />
                <path d={svgPaths.p34c2d140} id="Vector 2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_495" x1="76" x2="76" y1="0.500083" y2="73.0001">
                  <stop stopColor="#10B981" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[161px] top-[166px]">
          <div className="absolute bg-[rgba(16,185,129,0.2)] left-[161px] rounded-[12px] size-[58px] top-[166px]" />
        </div>
      </div>
      <div className="absolute contents left-[572px] top-[145px]" data-name="Blood Pressure">
        <div className="absolute bg-white border border-[#e8e7e7] border-solid h-[239px] left-[573px] rounded-[12px] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] top-[146px] w-[193px]" />
        <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] left-[667px] text-[16px] text-black top-[175px] w-[109px]">Paused</p>
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[593px] text-[#272927] text-[32px] top-[243px] whitespace-nowrap">5</p>
        <div className="absolute h-[71.839px] left-[593px] top-[301px] w-[151px]">
          <div className="absolute inset-[-0.7%_-0.27%_0_-0.21%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.73 72.34">
              <g id="Group 30">
                <path d={svgPaths.p25633600} fill="url(#paint0_linear_1_422)" id="Vector 5" />
                <path d={svgPaths.p3fd008a0} id="Vector 7" stroke="var(--stroke-0, #F59E0B)" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_422" x1="75.8184" x2="75.8184" y1="12.0007" y2="72.34">
                  <stop stopColor="#F59E0B" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[593px] top-[166px]">
          <div className="absolute bg-[rgba(245,158,11,0.3)] left-[593px] rounded-[12px] size-[58px] top-[166px]" />
        </div>
      </div>
      <div className="absolute contents left-[140px] top-[554px]" data-name="Acitivity Growth">
        <div className="absolute bg-white border border-[#e8e7e7] border-solid h-[412px] left-[141px] rounded-[12px] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] top-[555px] w-[625px]" />
        <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[624.73px] px-[20px] py-[14px] rounded-[12px] top-[575px] w-[122.496px]">
          <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#383838] text-[16px] whitespace-nowrap">Feb 2026</p>
          <Frame>
            <g clipPath="url(#clip0_1_499)" id="Frame">
              <g id="Vector" />
              <path d={svgPaths.pa337080} fill="var(--fill-0, #383838)" id="Vector_2" />
            </g>
            <defs>
              <clipPath id="clip0_1_499">
                <rect fill="white" height="20" width="20" />
              </clipPath>
            </defs>
          </Frame>
        </div>
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[normal] left-[167.82px] text-[#303030] text-[20px] top-[587px] whitespace-nowrap">Activity Overview</p>
        <AcitivityGrowthHelper additionalClassNames="top-[686px]" />
        <AcitivityGrowthHelper additionalClassNames="top-[735px]" />
        <AcitivityGrowthHelper additionalClassNames="top-[784px]" />
        <AcitivityGrowthHelper additionalClassNames="top-[833px]" />
        <div className="absolute bg-[#10b981] h-[36px] left-[219.68px] rounded-[10px] top-[820px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[67px] left-[219.68px] rounded-[10px] top-[745px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[22px] left-[219.68px] rounded-[10px] top-[715px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[15px] left-[276.91px] rounded-[10px] top-[732px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[11px] left-[305.52px] rounded-[10px] top-[741px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[11px] left-[362.75px] rounded-[10px] top-[738px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[25px] left-[391.36px] rounded-[10px] top-[688px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[25px] left-[419.97px] rounded-[10px] top-[716px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[25px] left-[505.81px] rounded-[10px] top-[771px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[25px] left-[534.42px] rounded-[10px] top-[737px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[25px] left-[620.26px] rounded-[10px] top-[731px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[25px] left-[706.09px] rounded-[10px] top-[700px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[12px] left-[648.87px] rounded-[10px] top-[701px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[12px] left-[677.48px] rounded-[10px] top-[768px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[53px] left-[563.03px] rounded-[10px] top-[698px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[53px] left-[591.64px] rounded-[10px] top-[706px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[49px] left-[448.58px] rounded-[10px] top-[710px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[64px] left-[477.19px] rounded-[10px] top-[732px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[59px] left-[334.13px] rounded-[10px] top-[727px] w-[5.365px]" />
        <div className="absolute bg-[#f59e0b] h-[28px] left-[248.3px] rounded-[10px] top-[693px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[16px] left-[248.3px] rounded-[10px] top-[840px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[103px] left-[248.3px] rounded-[10px] top-[729px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[16px] left-[276.91px] rounded-[10px] top-[755px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[31px] left-[305.52px] rounded-[10px] top-[760px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[31px] left-[334.13px] rounded-[10px] top-[794px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[60px] left-[362.75px] rounded-[10px] top-[757px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[42px] left-[391.36px] rounded-[10px] top-[721px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[65px] left-[419.97px] rounded-[10px] top-[749px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[65px] left-[448.58px] rounded-[10px] top-[767px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[21px] left-[477.19px] rounded-[10px] top-[804px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[21px] left-[505.81px] rounded-[10px] top-[804px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[21px] left-[534.42px] rounded-[10px] top-[770px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[21px] left-[591.64px] rounded-[10px] top-[767px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[21px] left-[620.26px] rounded-[10px] top-[764px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[21px] left-[677.48px] rounded-[10px] top-[788px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[42px] left-[648.87px] rounded-[10px] top-[721px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[58px] left-[563.03px] rounded-[10px] top-[759px] w-[5.365px]" />
        <div className="absolute bg-[#ef4444] h-[58px] left-[706.09px] rounded-[10px] top-[733px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[77px] left-[276.91px] rounded-[10px] top-[779px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[57px] left-[305.52px] rounded-[10px] top-[799px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[23px] left-[334.13px] rounded-[10px] top-[833px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[31px] left-[362.75px] rounded-[10px] top-[825px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[85px] left-[391.36px] rounded-[10px] top-[771px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[34px] left-[419.97px] rounded-[10px] top-[822px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[16px] left-[448.58px] rounded-[10px] top-[840px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[23px] left-[477.19px] rounded-[10px] top-[833px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[23px] left-[505.81px] rounded-[10px] top-[833px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[57px] left-[534.42px] rounded-[10px] top-[799px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[31px] left-[563.03px] rounded-[10px] top-[825px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[60px] left-[591.64px] rounded-[10px] top-[796px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[63px] left-[620.26px] rounded-[10px] top-[793px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[85px] left-[648.87px] rounded-[10px] top-[771px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[39px] left-[677.48px] rounded-[10px] top-[817px] w-[5.365px]" />
        <div className="absolute bg-[#10b981] h-[57px] left-[706.09px] rounded-[10px] top-[799px] w-[5.365px]" />
        <AcitivityGrowthText text="Jan 1" additionalClassNames="left-[209.85px]" />
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[normal] left-[167.82px] text-[#a1a1a1] text-[10px] top-[827px] whitespace-nowrap">20%</p>
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[normal] left-[167.82px] text-[#a1a1a1] text-[10px] top-[778px] whitespace-nowrap">40%</p>
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[normal] left-[167.82px] text-[#a1a1a1] text-[10px] top-[729px] whitespace-nowrap">60%</p>
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[normal] left-[167.82px] text-[#a1a1a1] text-[10px] top-[680px] whitespace-nowrap">80%</p>
        <AcitivityGrowthText text="Jan 2" additionalClassNames="left-[238.46px]" />
        <AcitivityGrowthText text="Jan 3" additionalClassNames="left-[267.07px]" />
        <AcitivityGrowthText text="Jan 4" additionalClassNames="left-[295.69px]" />
        <AcitivityGrowthText text="Jan 5" additionalClassNames="left-[324.3px]" />
        <AcitivityGrowthText text="Jan 6" additionalClassNames="left-[352.91px]" />
        <AcitivityGrowthText text="Jan 7" additionalClassNames="left-[381.52px]" />
        <AcitivityGrowthText text="Jan 8" additionalClassNames="left-[410.13px]" />
        <AcitivityGrowthText text="Jan 9" additionalClassNames="left-[438.75px]" />
        <AcitivityGrowthText1 text="Jan 10" additionalClassNames="left-[467.36px]" />
        <AcitivityGrowthText1 text="Jan 11" additionalClassNames="left-[495.97px]" />
        <AcitivityGrowthText1 text="Jan 12" additionalClassNames="left-[524.58px]" />
        <AcitivityGrowthText1 text="Jan 13" additionalClassNames="left-[553.2px]" />
        <AcitivityGrowthText1 text="Jan 14" additionalClassNames="left-[581.81px]" />
        <AcitivityGrowthText1 text="Jan 15" additionalClassNames="left-[610.42px]" />
        <AcitivityGrowthText1 text="Jan 16" additionalClassNames="left-[639.03px]" />
        <AcitivityGrowthText1 text="Jan 17" additionalClassNames="left-[667.65px]" />
        <AcitivityGrowthText1 text="Jan 18" additionalClassNames="left-[696.26px]" />
        <div className="absolute contents left-[171px] top-[924px]">
          <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[189.78px] text-[#383838] text-[12px] top-[924px] whitespace-nowrap">Allowed</p>
          <Wrapper1 additionalClassNames="left-[171px]">
            <circle cx="5" cy="5" fill="var(--fill-0, #10B981)" id="Ellipse 6" r="5" />
          </Wrapper1>
        </div>
        <div className="absolute contents left-[258px] top-[924px]">
          <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[276.78px] text-[#383838] text-[12px] top-[924px] whitespace-nowrap">Blocked</p>
          <Wrapper1 additionalClassNames="left-[258px]">
            <circle cx="5" cy="5" fill="var(--fill-0, #EF4444)" id="Ellipse 6" r="5" />
          </Wrapper1>
        </div>
        <div className="absolute contents left-[343px] top-[924px]">
          <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[361.78px] text-[#383838] text-[12px] top-[924px] whitespace-nowrap">Paused</p>
          <Wrapper1 additionalClassNames="left-[343px]">
            <circle cx="5" cy="5" fill="var(--fill-0, #F59E0B)" id="Ellipse 6" r="5" />
          </Wrapper1>
        </div>
      </div>
      <Wrapper2 additionalClassNames="absolute left-[35px] top-[924px]">
        <g clipPath="url(#clip0_1_453)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_453">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </Wrapper2>
      <div className="absolute contents left-[20px] top-[909px]">
        <div className="absolute bg-white border border-[#e8e7e7] border-solid left-[21px] rounded-[12px] size-[60px] top-[910px]" />
        <Wrapper2 additionalClassNames="absolute left-[36px] top-[925px]">
          <g clipPath="url(#clip0_1_470)" id="Frame">
            <g id="Vector" />
            <path d={svgPaths.p1b95bf00} fill="var(--fill-0, #707070)" id="Vector_2" />
          </g>
          <defs>
            <clipPath id="clip0_1_470">
              <rect fill="white" height="30" width="30" />
            </clipPath>
          </defs>
        </Wrapper2>
      </div>
      <div className="absolute contents left-[-1px] top-[-1px]" data-name="Sidebar">
        <div className="absolute bg-white border border-[#e8e7e7] border-solid h-[1024px] left-0 rounded-[12px] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] top-0 w-[101px]" />
        <Wrapper2 additionalClassNames="absolute left-[36px] top-[184px]">
          <g id="ic:round-dashboard">
            <path d={svgPaths.p3e5b5100} fill="var(--fill-0, #707070)" id="Vector" />
          </g>
        </Wrapper2>
        <div className="absolute contents left-[21px] top-[529px]">
          <div className="absolute bg-white left-[21px] rounded-[12px] size-[60px] top-[529px]" />
          <div className="absolute left-[36px] overflow-clip size-[30px] top-[544px]" data-name="lucide:settings">
            <div className="absolute inset-[8.41%_12.68%]" data-name="Group">
              <div className="absolute inset-[-5.01%_-5.58%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8909 27.4552">
                  <g id="Group">
                    <path d={svgPaths.p127e9980} id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path d={svgPaths.p25127a00} id="Vector_2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[21px] top-[619px]">
          <div className="absolute bg-white left-[21px] rounded-[12px] size-[60px] top-[619px]" />
          <div className="absolute flex items-center justify-center left-[36px] size-[30px] top-[634px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <Wrapper2 additionalClassNames="relative">
                <g id="heroicons-outline:logout">
                  <path d={svgPaths.p3f162c00} id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </g>
              </Wrapper2>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[140px] top-[427px]" data-name="Upcoming">
        <div className="absolute bg-white border border-[#e8e7e7] border-solid h-[84px] left-[141px] rounded-[12px] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] top-[428px] w-[625px]" />
        <div className="absolute content-stretch flex gap-[12px] items-center left-[167.82px] top-[456px] w-[579.399px]">
          <div className="relative shrink-0 size-[24px]" data-name="material-symbols:search-rounded">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="material-symbols:search-rounded">
                <path d={svgPaths.pded2700} fill="var(--fill-0, #707070)" id="Vector" />
              </g>
            </svg>
          </div>
          <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#a1a1a1] text-[20px] whitespace-nowrap">Search ledger...</p>
        </div>
      </div>
      <div className="absolute contents left-[356px] top-[145px]" data-name="Heart Rate">
        <div className="absolute bg-white border border-[#e8e7e7] border-solid h-[239px] left-[357px] rounded-[12px] shadow-[0px_1px_50px_0px_rgba(0,0,0,0.08)] top-[146px] w-[193px]" />
        <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] left-[451px] text-[16px] text-black top-[185px] whitespace-nowrap">Blocked</p>
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[377px] text-[#272927] text-[32px] top-[243px] whitespace-nowrap">23</p>
        <div className="absolute contents left-[377px] top-[166px]">
          <div className="absolute bg-[rgba(239,68,68,0.2)] left-[377px] rounded-[12px] size-[58px] top-[166px]" />
        </div>
        <div className="absolute h-[70.5px] left-[377px] top-[302px] w-[151px]">
          <div className="absolute inset-[-0.63%_-0.15%_0_-0.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.484 70.9476">
              <g id="Group 29">
                <path d={svgPaths.p6e1f900} fill="url(#paint0_linear_1_415)" fillOpacity="0.4" id="Vector 3" />
                <path d={svgPaths.p1676c8c0} id="Vector 4" stroke="var(--stroke-0, #EF4444)" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_415" x1="76.2029" x2="76.2029" y1="-19.5524" y2="67.4476">
                  <stop stopColor="#EF4444" stopOpacity="0.65" />
                  <stop offset="1" stopColor="#EF4444" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[14px] size-[72px] top-[43px]" data-name="svg">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <g id="svg">
            <g filter="url(#filter0_f_1_402)" id="Group">
              <path d={svgPaths.pb5eda80} fill="url(#paint0_linear_1_402)" id="Vector" opacity="0.9" stroke="url(#paint1_linear_1_402)" strokeWidth="0.875" />
            </g>
            <g filter="url(#filter1_f_1_402)" id="Group_2">
              <path d={svgPaths.p3a9fb100} fill="url(#paint2_linear_1_402)" id="Vector_2" opacity="0.6" stroke="url(#paint3_linear_1_402)" strokeWidth="0.7" />
            </g>
            <path d={svgPaths.p269b1470} id="Vector_3" opacity="0.8" stroke="url(#paint4_linear_1_402)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
            <g filter="url(#filter2_f_1_402)" id="Vector_4">
              <path d={svgPaths.p26b1ea00} fill="url(#paint5_radial_1_402)" />
            </g>
            <path d="M27 22.5L28.125 40.5" id="Vector_5" opacity="0.3" stroke="url(#paint6_linear_1_402)" strokeWidth="0.2625" />
            <path d="M45 22.5L43.875 40.5" id="Vector_6" opacity="0.3" stroke="url(#paint7_linear_1_402)" strokeWidth="0.2625" />
            <path d="M31.5 18L32.625 45" id="Vector_7" opacity="0.2" stroke="url(#paint8_linear_1_402)" strokeWidth="0.2625" />
            <path d="M40.5 18L39.375 45" id="Vector_8" opacity="0.2" stroke="url(#paint9_linear_1_402)" strokeWidth="0.2625" />
            <path d="M29.25 18L36 13.5L42.75 18" id="Vector_9" opacity="0.4" stroke="url(#paint10_linear_1_402)" strokeLinecap="round" strokeWidth="0.875" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58.2783" id="filter0_f_1_402" width="42.425" x="14.7875" y="5.73586">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_402" stdDeviation="0.2625" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.2018" id="filter1_f_1_402" width="26.85" x="22.575" y="14.6513">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_402" stdDeviation="0.35" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.25" id="filter2_f_1_402" width="10.25" x="30.875" y="27.5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_402" stdDeviation="0.875" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_402" x1="36" x2="36" y1="6.75" y2="63">
              <stop stopColor="#22D3EE" stopOpacity="0.15" />
              <stop offset="0.5" stopColor="#2563EB" stopOpacity="0.08" />
              <stop offset="1" stopColor="#1E40AF" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_402" x1="36" x2="36" y1="6.75" y2="63">
              <stop stopColor="#22D3EE" stopOpacity="0.5" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_402" x1="36" x2="36" y1="15.75" y2="51.75">
              <stop stopColor="white" stopOpacity="0.1" />
              <stop offset="1" stopColor="#22D3EE" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_402" x1="36" x2="36" y1="15.75" y2="51.75">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="1" stopColor="#22D3EE" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_402" x1="36" x2="36" y1="25.875" y2="38.25">
              <stop stopColor="#22D3EE" stopOpacity="0.9" />
              <stop offset="1" stopColor="#06B6D4" stopOpacity="0.7" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(36 32.625) scale(3.375)" gradientUnits="userSpaceOnUse" id="paint5_radial_1_402" r="1">
              <stop stopColor="#22D3EE" />
              <stop offset="1" stopColor="#06B6D4" stopOpacity="0.8" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_402" x1="0" x2="0" y1="0" y2="2.25">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_402" x1="0" x2="0" y1="0" y2="2.25">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_402" x1="0" x2="0" y1="0" y2="2.25">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_402" x1="0" x2="0" y1="0" y2="2.25">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_402" x1="29.25" x2="42.75" y1="15.75" y2="15.75">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Wrapper3 additionalClassNames="left-[32px] top-[270px]">
        <g id="tabler:robot">
          <path d={svgPaths.p8cacc0} id="Vector" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </Wrapper3>
      <div className="absolute left-[32px] overflow-clip size-[36px] top-[450px]" data-name="iconamoon:shield-yes">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30.0009">
            <g id="Group">
              <path d={svgPaths.p9263400} fill="var(--fill-0, #707070)" id="Vector" />
              <path d={svgPaths.pfc6fd00} id="Vector_2" stroke="var(--stroke-0, #707070)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#303030] left-[20px] rounded-[12px] size-[60px] top-[348px]" />
      <div className="absolute left-[32px] overflow-clip size-[36px] top-[360px]" data-name="majesticons:scroll">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Group">
          <div className="absolute inset-[-6.25%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
              <g id="Group">
                <path d={svgPaths.p2e1e3b00} fill="var(--fill-0, white)" id="Vector" />
                <path d={svgPaths.p38222380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Wrapper4 additionalClassNames="left-[173px]">
        <g id="lucide:check-line">
          <path d={svgPaths.p10b19680} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </Wrapper4>
      <Wrapper4 additionalClassNames="left-[605px]">
        <g id="gravity-ui:hand-stop">
          <path clipRule="evenodd" d={svgPaths.p1c48d580} fill="var(--fill-0, #F59E0B)" fillRule="evenodd" id="Vector" />
        </g>
      </Wrapper4>
      <Wrapper3 additionalClassNames="left-[387px] top-[176px]">
        <g id="ic:baseline-block">
          <path d={svgPaths.p2361c640} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </Wrapper3>
      <div className="absolute h-[509px] left-[850px] top-[58px] w-[555px]">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[0.17px] text-[22px] text-white top-0 w-[236.662px]">Entries</p>
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[normal] left-[0.17px] text-[#cacaca] text-[16px] top-[40px] w-[217.412px]">Last refreshed 2s ago</p>
        <div className="absolute content-stretch flex flex-col gap-[24px] items-start leading-[0] left-0 top-[101px] w-[555px]">
          <List text="ARIA-7X" text1="•" text2="Retrieve pending claims for daily triage" text3="14:32:15" />
          <List1 text="HELPER-2A" text1="•" text2="Send claims to external API" text3="14:32:08" />
          <List2 text="Flag unusual API traffic patterns" text1="14:31:55" />
          <List3 text="ARIA-7X" text1="•" text2="Pull ALL customer records for export" text3="14:31:02" />
          <List4 text="•" text1="Deliver compliance metrics to manager" text2="14:30:45" />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="List">
            <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-['Poppins:Medium',sans-serif] font-semibold ml-0 mt-0 not-italic relative row-1 text-[#273240] text-[0px] text-[18px] tracking-[0.3429px] w-[103.387px] whitespace-pre-wrap">
              <span className="leading-[normal] text-white">{`NOVA-3  `}</span>
              <span className="leading-[normal] text-[#ef4444]">•</span>
            </p>
            <p className="col-1 font-['Mulish:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-[28px] opacity-50 relative row-1 text-[#cacaca] text-[16px] tracking-[0.5px] w-[368.007px]">Override billing limit for customer #4421</p>
            <p className="col-1 font-['Mulish:SemiBold',sans-serif] font-semibold leading-[normal] ml-[470.51px] mt-0 relative row-1 text-[18px] text-right text-white tracking-[0.3429px] w-[84.488px]">14:28:44</p>
          </div>
          <List text="ARIA-7X" text1="•" text2="Retrieve pending claims for daily triage" text3="14:32:15" />
          <List1 text="HELPER-2A" text1="•" text2="Send claims to external API" text3="14:32:08" />
          <List2 text="Flag unusual API traffic patterns" text1="14:31:55" />
          <List3 text="ARIA-7X" text1="•" text2="Pull ALL customer records for export" text3="14:31:02" />
          <List4 text="•" text1="Deliver compliance metrics to manager" text2="14:30:45" />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="List">
            <p className="col-1 font-['Mulish:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 opacity-50 relative row-1 text-[#cacaca] text-[20px] text-center tracking-[0.5px] w-[555px]">See more</p>
          </div>
        </div>
      </div>
    </div>
  );
}