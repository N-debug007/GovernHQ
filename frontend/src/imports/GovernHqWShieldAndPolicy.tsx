import clsx from "clsx";
import svgPaths from "./svg-orz7p86fo1";
import { imgVector2 } from "./svg-xkx8e";

function ParagraphBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[18px] left-[16px] top-[45px] w-[301px]">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#94a3b8] text-[12px] top-[-0.5px] whitespace-nowrap">{children}</p>
    </div>
  );
}

function ContainerBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(167.381deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.3) 100%)" }} className="h-[113.5px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(125.947deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.4) 100%)" }} className={clsx("justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(51,65,85,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[33px] px-[33px] relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return <BackgroundImage2 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage2>;
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return <BackgroundImage2 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</BackgroundImage2>;
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(162.831deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.3) 100%)" }} className="h-[103.5px] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)]" />
    </div>
  );
}
type SvgVectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function SvgVectorBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<SvgVectorBackgroundImage1Props>) {
  return (
    <div className={clsx("absolute bottom-[37.5%] top-1/4", additionalClassNames)}>
      <div className="absolute inset-[0_-11.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.38727 27.0109">
          {children}
        </svg>
      </div>
    </div>
  );
}
type SvgVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function SvgVectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<SvgVectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-11.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.38699 18.0164">
          {children}
        </svg>
      </div>
    </div>
  );
}
type IconBackgroundImage1Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage1Props>) {
  return (
    <div className={clsx("absolute left-0 size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <BackgroundImage additionalClassNames="h-[21px]">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[21px] left-0 text-[14px] text-white top-[-0.5px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText1({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[18px] left-0 top-[53.5px]", additionalClassNames)}>
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#64748b] text-[12px] top-[-0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[19.5px] left-0 top-[30px]", additionalClassNames)}>
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#94a3b8] text-[13px] top-[-0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <BackgroundImage additionalClassNames="h-[19.5px]">
      <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[19.5px] left-0 text-[#10b981] text-[13px] top-[-0.5px] whitespace-nowrap">{text}</p>
    </BackgroundImage>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText({ text, additionalClassNames = "" }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[24px] left-0 top-0", additionalClassNames)}>
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-white top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[24px] left-0 top-[2px] w-[9.602px]">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#64748b] text-[16px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#64748b] text-[11px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[16.5px]", additionalClassNames)}>
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#64748b] text-[11px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-21.43%_-10.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 5">
            <path d={svgPaths.p14f49900} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function GovernHqWShieldAndPolicy() {
  return (
    <div className="bg-white relative size-full" data-name="GovernHQ W Shield and Policy">
      <div className="absolute bg-white content-stretch flex flex-col h-[786px] items-start left-0 top-0 w-[1101px]" data-name="Body">
        <div className="h-[786px] relative rounded-[40px] shrink-0 w-full" data-name="nl" style={{ backgroundImage: "linear-gradient(144.477deg, rgb(10, 11, 20) 0%, rgb(11, 13, 23) 7.1429%, rgb(12, 15, 25) 14.286%, rgb(13, 16, 28) 21.429%, rgb(14, 18, 31) 28.571%, rgb(15, 20, 33) 35.714%, rgb(16, 22, 36) 42.857%, rgb(17, 24, 39) 50%, rgb(16, 24, 40) 62.5%, rgb(16, 23, 40) 75%, rgb(15, 23, 41) 87.5%, rgb(15, 22, 41) 100%)" }}>
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute content-stretch flex flex-col h-[784px] items-start left-[102px] overflow-clip top-px w-[578px]" data-name="Container">
              <div className="h-[1229.5px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute h-[42px] left-[39px] top-[56px] w-[507px]" data-name="Heading 1">
                  <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[42px] left-0 text-[28px] text-white top-[-0.5px] tracking-[-0.7px] whitespace-nowrap">Shield</p>
                </div>
                <div className="absolute h-[24px] left-[39px] top-[110px] w-[507px]" data-name="Paragraph">
                  <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#94a3b8] text-[16px] top-0 whitespace-nowrap">Real-time protection and monitoring for your AI agents</p>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[24px] h-[235.5px] items-start left-[39px] pb-px pt-[29px] px-[29px] rounded-[16px] top-[166px] w-[507px]" data-name="Container" style={{ backgroundImage: "linear-gradient(155.085deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.3) 100%)" }}>
                  <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)]" />
                  <div className="h-[18px] relative shrink-0 w-full" data-name="Heading 3">
                    <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#94a3b8] text-[12px] top-[-0.5px] tracking-[0.6px] uppercase whitespace-nowrap">Protection Controls</p>
                  </div>
                  <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[135.5px] relative shrink-0 w-full" data-name="Container">
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                      <div className="absolute h-[42px] left-0 top-0 w-[94.25px]" data-name="Label">
                        <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[14px] text-white top-[-0.5px] w-[83px]">Enforcement Mode</p>
                      </div>
                      <div className="absolute h-[33px] left-0 top-[97.5px] w-[94.25px]" data-name="Paragraph">
                        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#64748b] text-[11px] top-0 w-[79px]">How strictly to enforce policies</p>
                      </div>
                      <div className="absolute h-[41.5px] left-0 top-[50px] w-[94.25px]" data-name="Container">
                        <div className="absolute bg-[rgba(30,41,59,0.5)] border border-[#10b981] border-solid h-[41.5px] left-0 rounded-[8px] top-0 w-[94.25px]" data-name="Dropdown">
                          <div className="absolute left-[-171px] size-0 top-[-289px]" data-name="Option" />
                          <div className="absolute left-[-171px] size-0 top-[-289px]" data-name="Option" />
                          <div className="absolute left-[-171px] size-0 top-[-289px]" data-name="Option" />
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[66.25px] size-[14px] top-[13.75px]" data-name="Container">
                          <IconBackgroundImage />
                        </div>
                      </div>
                    </div>
                    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                      <div className="absolute content-stretch flex h-[42px] items-center justify-between left-0 pr-[-13.852px] top-0 w-[94.25px]" data-name="Container">
                        <BackgroundImage1 additionalClassNames="h-[42px] w-[65.102px]">
                          <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[14px] text-white top-[-0.5px] w-[66px]">Risk Threshold</p>
                        </BackgroundImage1>
                        <BackgroundImage1 additionalClassNames="h-[30px] w-[43px]">
                          <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#f59e0b] text-[20px] top-[-0.5px] whitespace-nowrap">70%</p>
                        </BackgroundImage1>
                      </div>
                      <div className="absolute h-[49.5px] left-0 top-[86px] w-[94.25px]" data-name="Paragraph">
                        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#64748b] text-[11px] top-0 w-[53px]">Trigger on suspicious behavior</p>
                      </div>
                      <div className="absolute bg-[#334155] h-[4px] left-0 rounded-[10px] top-[68px] w-[94.25px]" data-name="Range Slider" />
                    </div>
                    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                      <div className="absolute content-stretch flex h-[42px] items-center justify-between left-0 pr-[-16.281px] top-0 w-[94.25px]" data-name="Container">
                        <BackgroundImage1 additionalClassNames="h-[42px] w-[67.531px]">
                          <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[14px] text-white top-[-0.5px] w-[68px]">Anomaly Sensitivity</p>
                        </BackgroundImage1>
                        <BackgroundImage1 additionalClassNames="h-[30px] w-[43px]">
                          <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#ef4444] text-[20px] top-[-0.5px] whitespace-nowrap">75%</p>
                        </BackgroundImage1>
                      </div>
                      <div className="absolute h-[33px] left-0 top-[86px] w-[94.25px]" data-name="Paragraph">
                        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#64748b] text-[11px] top-0 w-[73px]">Higher = more alerts</p>
                      </div>
                      <div className="absolute bg-[#334155] h-[4px] left-0 rounded-[10px] top-[68px] w-[94.25px]" data-name="Range Slider" />
                    </div>
                    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                      <div className="absolute h-[21px] left-0 top-0 w-[94.25px]" data-name="Label">
                        <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[14px] text-white top-[-0.5px] whitespace-nowrap">Fail Mode</p>
                      </div>
                      <BackgroundImageAndText text="Default on error" additionalClassNames="left-0 top-[76.5px] w-[94.25px]" />
                      <div className="absolute h-[41.5px] left-0 top-[29px] w-[94.25px]" data-name="Container">
                        <div className="absolute bg-[rgba(30,41,59,0.5)] border border-[#475569] border-solid h-[41.5px] left-0 rounded-[8px] top-0 w-[94.25px]" data-name="Dropdown">
                          <div className="absolute left-[-525.75px] size-0 top-[-268px]" data-name="Option" />
                          <div className="absolute left-[-525.75px] size-0 top-[-268px]" data-name="Option" />
                          <div className="absolute left-[-525.75px] size-0 top-[-268px]" data-name="Option" />
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[66.25px] size-[14px] top-[13.75px]" data-name="Container">
                          <IconBackgroundImage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[211px] left-[39px] top-[433.5px] w-[507px]" data-name="Container">
                  <ContainerBackgroundImage1 additionalClassNames="col-1">
                    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[64px] left-[43.8px] text-[#ef4444] text-[64px] text-center top-[-0.5px] whitespace-nowrap">3</p>
                    </div>
                    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.5px] left-[43.86px] text-[#64748b] text-[15px] text-center top-[-0.5px] w-[54px]">blocked agents</p>
                    </div>
                  </ContainerBackgroundImage1>
                  <div className="col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(125.947deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.4) 100%)" }}>
                    <div aria-hidden="true" className="absolute border border-[rgba(51,65,85,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="absolute h-[64px] left-[33px] top-[33px] w-[87px]" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[64px] left-[64px] text-[#31ba96] text-[64px] text-center top-[-0.5px] whitespace-nowrap">8ms</p>
                    </div>
                    <div className="absolute h-[45px] left-[33px] top-[109px] w-[87px]" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.5px] left-[43.92px] text-[#64748b] text-[15px] text-center top-[-0.5px] w-[51px]">block latency</p>
                    </div>
                    <div className="absolute h-[18px] left-[33px] top-[160px] w-[87px]" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[18px] left-[43.55px] text-[#475569] text-[12px] text-center top-[-0.5px] whitespace-nowrap">{`target <10ms`}</p>
                    </div>
                  </div>
                  <ContainerBackgroundImage1 additionalClassNames="col-3">
                    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[64px] left-[85px] text-[64px] text-center text-white top-[-0.5px] whitespace-nowrap">8,432</p>
                    </div>
                    <div className="h-[67.5px] relative shrink-0 w-full" data-name="Container">
                      <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.5px] left-[43.63px] text-[#64748b] text-[15px] text-center top-[-0.5px] w-[69px]">reasoning evaluated today</p>
                    </div>
                  </ContainerBackgroundImage1>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[20px] h-[457px] items-start left-[39px] top-[684.5px] w-[507px]" data-name="Container">
                  <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
                    <IconBackgroundImage1 additionalClassNames="top-[5.5px]">
                      <path d="M12 5L6.5 10.5L4 8" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </IconBackgroundImage1>
                    <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[27px] left-[24px] text-[18px] text-white top-0 whitespace-nowrap">How GovernHQ Protects</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] h-[410px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="h-[151px] relative rounded-[12px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(163.415deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.3) 100%)" }}>
                      <div aria-hidden="true" className="absolute border border-[#475569] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)]" />
                      <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
                        <div className="content-stretch flex h-[109px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <BackgroundImage additionalClassNames="h-[109px]">
                            <ContainerBackgroundImageAndText text="1" />
                            <div className="absolute h-[109px] left-[25.6px] top-0 w-[373.563px]" data-name="Container">
                              <HeadingBackgroundImageAndText text="GATE" additionalClassNames="w-[373.563px]" />
                              <div className="absolute h-[39px] left-0 top-[30px] w-[373.563px]" data-name="Paragraph">
                                <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#94a3b8] text-[13px] top-[-0.5px] w-[323px]">Intercepts reasoning. Blocks bad actions. Agent keeps running.</p>
                              </div>
                              <div className="absolute h-[36px] left-0 top-[73px] w-[373.563px]" data-name="Paragraph">
                                <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#64748b] text-[12px] top-[-0.5px] w-[370px]">8,432 reasoning evaluated · 23 actions blocked · 5 actions paused · 1ms avg</p>
                              </div>
                            </div>
                          </BackgroundImage>
                          <ContainerBackgroundImage2 additionalClassNames="h-[19.5px] w-[65.836px]">
                            <div className="bg-[#10b981] rounded-[16777200px] shadow-[0px_0px_8px_0px_rgba(16,185,129,0.6)] shrink-0 size-[8px]" data-name="Container" />
                            <TextBackgroundImageAndText text="Allowed" />
                          </ContainerBackgroundImage2>
                        </div>
                      </div>
                    </div>
                    <ContainerBackgroundImage3>
                      <div className="content-stretch flex h-[71.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                        <BackgroundImage additionalClassNames="h-[71.5px]">
                          <ContainerBackgroundImageAndText text="2" />
                          <div className="absolute h-[71.5px] left-[25.6px] top-0 w-[373.563px]" data-name="Container">
                            <HeadingBackgroundImageAndText text="MONITOR" additionalClassNames="w-[373.563px]" />
                            <ParagraphBackgroundImageAndText text="Watches reasoning patterns. Blocks bad agents." additionalClassNames="w-[373.563px]" />
                            <ParagraphBackgroundImageAndText1 text="2 anomalies today · 2 agents blocked" additionalClassNames="w-[373.563px]" />
                          </div>
                        </BackgroundImage>
                        <ContainerBackgroundImage2 additionalClassNames="h-[19.5px] w-[65.836px]">
                          <div className="bg-[#10b981] rounded-[16777200px] shadow-[0px_0px_8px_0px_rgba(16,185,129,0.6)] shrink-0 size-[8px]" data-name="Container" />
                          <TextBackgroundImageAndText text="Allowed" />
                        </ContainerBackgroundImage2>
                      </div>
                    </ContainerBackgroundImage3>
                    <ContainerBackgroundImage3>
                      <div className="content-stretch flex h-[71.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                        <BackgroundImage additionalClassNames="h-[71.5px]">
                          <ContainerBackgroundImageAndText text="3" />
                          <div className="absolute h-[71.5px] left-[25.6px] top-0 w-[372.148px]" data-name="Container">
                            <HeadingBackgroundImageAndText text="EMERGENCY" additionalClassNames="w-[372.148px]" />
                            <ParagraphBackgroundImageAndText text="Instantly blocks all agents." additionalClassNames="w-[372.148px]" />
                            <ParagraphBackgroundImageAndText1 text="Measured latency: 8ms" additionalClassNames="w-[372.148px]" />
                          </div>
                        </BackgroundImage>
                        <ContainerBackgroundImage2 additionalClassNames="h-[19.5px] w-[67.25px]">
                          <div className="bg-[#64748b] rounded-[16777200px] shadow-[0px_0px_8px_0px_rgba(100,116,139,0.4)] shrink-0 size-[8px]" data-name="Container" />
                          <BackgroundImage additionalClassNames="h-[19.5px]">
                            <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[19.5px] left-0 text-[#64748b] text-[13px] top-[-0.5px] whitespace-nowrap">Standby</p>
                          </BackgroundImage>
                        </ContainerBackgroundImage2>
                      </div>
                    </ContainerBackgroundImage3>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient-to-b border border-[rgba(51,65,85,0.3)] border-solid from-[rgba(30,41,59,0.8)] h-[784px] left-px rounded-[16px] shadow-[0px_8px_50px_0px_rgba(0,0,0,0.4)] to-[rgba(15,23,42,0.6)] top-px w-[101px]" data-name="Rt">
              <div className="absolute content-stretch flex flex-col items-start left-[14px] size-[72px] top-[43px]" data-name="Container">
                <div className="h-[72px] overflow-clip relative shadow-[0px_0px_40px_0px_rgba(59,130,246,0.3)] shrink-0 w-full" data-name="Icon">
                  <div className="absolute contents inset-[9.38%_21.88%_12.5%_21.88%]" data-name="svg">
                    <div className="absolute contents inset-[9.38%_21.88%_12.5%_21.88%]" data-name="Group">
                      <div className="absolute inset-[9.38%_21.88%_12.5%_21.88%]" data-name="Vector">
                        <div className="absolute inset-[-0.87%_-1.08%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.375 57.2283">
                            <path d={svgPaths.p26ffb400} fill="url(#paint0_linear_2013_335)" id="Vector" opacity="0.9" stroke="url(#paint1_linear_2013_335)" strokeWidth="0.875" />
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_335" x1="20.6875" x2="20.6875" y1="0.48914" y2="56.7391">
                                <stop stopColor="#22D3EE" stopOpacity="0.15" />
                                <stop offset="0.5" stopColor="#2563EB" stopOpacity="0.08" />
                                <stop offset="1" stopColor="#1E40AF" stopOpacity="0.12" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2013_335" x1="20.6875" x2="20.6875" y1="0.48914" y2="56.7391">
                                <stop stopColor="#22D3EE" stopOpacity="0.5" />
                                <stop offset="1" stopColor="#2563EB" stopOpacity="0.3" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute contents inset-[21.88%_32.81%_28.13%_32.81%]" data-name="Group_2">
                      <div className="absolute inset-[21.88%_32.81%_28.13%_32.81%]" data-name="Vector_2">
                        <div className="absolute inset-[-1.11%_-1.41%_-1.12%_-1.41%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.45 36.8018">
                            <path d={svgPaths.p85eeb00} fill="url(#paint0_linear_2013_324)" id="Vector_2" opacity="0.6" stroke="url(#paint1_linear_2013_324)" strokeWidth="0.7" />
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_324" x1="12.725" x2="12.725" y1="0.398681" y2="36.3987">
                                <stop stopColor="white" stopOpacity="0.1" />
                                <stop offset="1" stopColor="#22D3EE" stopOpacity="0.05" />
                              </linearGradient>
                              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2013_324" x1="12.725" x2="12.725" y1="0.398681" y2="36.3987">
                                <stop stopColor="white" stopOpacity="0.4" />
                                <stop offset="1" stopColor="#22D3EE" stopOpacity="0.2" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-[35.94%_42.19%_46.88%_42.19%]" data-name="Vector_3">
                      <div className="absolute inset-[-4.24%_-4.67%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3 13.425">
                          <path d={svgPaths.p3b5bf00} id="Vector_3" opacity="0.8" stroke="url(#paint0_linear_2013_313)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_313" x1="6.15" x2="6.15" y1="0.525" y2="12.9">
                              <stop stopColor="#22D3EE" stopOpacity="0.9" />
                              <stop offset="1" stopColor="#06B6D4" stopOpacity="0.7" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 contents left-[45.31%] right-[45.31%] top-[40.63%]" data-name="Vector_4">
                      <div className="absolute bottom-1/2 left-[45.31%] right-[45.31%] top-[40.63%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 6.75">
                          <path d={svgPaths.p1dc68200} fill="url(#paint0_radial_2013_320)" id="Vector" />
                          <defs>
                            <radialGradient cx="0" cy="0" gradientTransform="translate(3.375 3.375) scale(3.375)" gradientUnits="userSpaceOnUse" id="paint0_radial_2013_320" r="1">
                              <stop stopColor="#22D3EE" />
                              <stop offset="1" stopColor="#06B6D4" stopOpacity="0.8" />
                            </radialGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <SvgVectorBackgroundImage additionalClassNames="inset-[31.25%_60.94%_43.75%_37.5%]">
                      <path d={svgPaths.p243d2600} id="Vector_5" opacity="0.3" stroke="url(#paint0_linear_2013_322)" strokeWidth="0.2625" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_322" x1="-26.869" x2="-26.869" y1="-22.4918" y2="-20.2418">
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
                          <stop offset="1" stopColor="white" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </SvgVectorBackgroundImage>
                    <SvgVectorBackgroundImage additionalClassNames="inset-[31.25%_37.5%_43.75%_60.94%]">
                      <path d={svgPaths.p27713180} id="Vector_6" opacity="0.3" stroke="url(#paint0_linear_2013_284)" strokeWidth="0.2625" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_284" x1="-43.744" x2="-43.744" y1="-22.4918" y2="-20.2418">
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
                          <stop offset="1" stopColor="white" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </SvgVectorBackgroundImage>
                    <SvgVectorBackgroundImage1 additionalClassNames="left-[43.75%] right-[54.69%]">
                      <path d={svgPaths.p3fe402a0} id="Vector_7" opacity="0.2" stroke="url(#paint0_linear_2013_307)" strokeWidth="0.2625" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_307" x1="-31.3689" x2="-31.3689" y1="-17.9945" y2="-15.7445">
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
                          <stop offset="1" stopColor="white" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </SvgVectorBackgroundImage1>
                    <SvgVectorBackgroundImage1 additionalClassNames="left-[54.69%] right-[43.75%]">
                      <path d={svgPaths.p11ebf990} id="Vector_8" opacity="0.2" stroke="url(#paint0_linear_2013_318)" strokeWidth="0.2625" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_318" x1="-39.2439" x2="-39.2439" y1="-17.9945" y2="-15.7445">
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.2" />
                          <stop offset="1" stopColor="white" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </SvgVectorBackgroundImage1>
                    <div className="absolute bottom-3/4 left-[40.63%] right-[40.63%] top-[18.75%]" data-name="Vector_9">
                      <div className="absolute inset-[-11.68%_-3.24%_-9.72%_-3.24%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3751 5.46336">
                          <path d={svgPaths.p3af6f180} id="Vector_9" opacity="0.4" stroke="url(#paint0_linear_2013_311)" strokeLinecap="round" strokeWidth="0.875" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2013_311" x1="0.437546" x2="13.9375" y1="2.77581" y2="2.77581">
                              <stop stopColor="white" stopOpacity="0" />
                              <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[36px] size-[30px] top-[184px]" data-name="Link">
                <div className="h-[30px] overflow-clip relative shadow-[0px_0px_16px_0px_rgba(59,130,246,0.3)] shrink-0 w-full" data-name="Icon">
                  <div className="absolute contents inset-[12.5%]" data-name="ic:round-dashboard">
                    <div className="absolute inset-[12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
                        <path d={svgPaths.p3a83e400} fill="var(--fill-0, #64748B)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[32px] size-[36px] top-[270px]" data-name="Link">
                <div className="h-[36px] overflow-clip relative shadow-[0px_0px_16px_0px_rgba(139,92,246,0.3)] shrink-0 w-full" data-name="Icon">
                  <div className="absolute contents inset-[8.33%_20.83%_12.5%_20.83%]" data-name="tabler:robot">
                    <div className="absolute inset-[8.33%_20.83%_12.5%_20.83%]" data-name="Vector">
                      <div className="absolute inset-[-5.26%_-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0007 31.5">
                          <path d={svgPaths.p3f9a2e00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[32px] overflow-clip pt-[4.5px] px-[3px] size-[36px] top-[360px]" data-name="Link">
                <div className="content-stretch flex flex-col h-[27px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[27px] overflow-clip relative shadow-[0px_0px_16px_0px_rgba(245,158,11,0.3)] shrink-0 w-full" data-name="Icon">
                    <div className="absolute contents inset-[5.56%_5%]" data-name="Group">
                      <div className="absolute inset-[5.56%_5%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
                          <path d={svgPaths.p2406e080} fill="var(--fill-0, #64748B)" id="Vector" />
                        </svg>
                      </div>
                      <div className="absolute inset-[5.56%_5%]" data-name="Vector_2">
                        <div className="absolute inset-[-6.25%_-5.56%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
                            <path d={svgPaths.p38222380} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[20px] size-[60px] top-[450px]" data-name="Link">
                <div className="absolute left-0 rounded-[12px] shadow-[0px_0px_20px_0px_rgba(239,68,68,0.5)] size-[60px] top-0" data-name="Rt" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 68, 68) 0%, rgb(237, 65, 65) 11.111%, rgb(235, 62, 62) 22.222%, rgb(233, 59, 59) 33.333%, rgb(231, 56, 55) 44.444%, rgb(228, 53, 52) 55.556%, rgb(226, 49, 49) 66.667%, rgb(224, 46, 45) 77.778%, rgb(222, 42, 42) 88.889%, rgb(220, 38, 38) 100%)" }} />
                <div className="absolute blur-[8px] left-0 rounded-[12px] size-[60px] top-0" data-name="Rt" style={{ backgroundImage: "linear-gradient(135deg, rgba(239, 68, 68, 0.5) 0%, rgba(0, 0, 0, 0) 100%)" }} />
                <div className="absolute content-stretch flex flex-col items-start left-[12px] overflow-clip pt-[2.992px] px-[6px] size-[36px] top-[12px]" data-name="Rt">
                  <div className="content-stretch flex flex-col h-[30.016px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="h-[30.016px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute contents inset-0" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30.0155">
                          <path d={svgPaths.p19464380} fill="var(--fill-0, white)" id="Vector" />
                        </svg>
                        <div className="absolute inset-[40%_31.25%]" data-name="Vector_2">
                          <div className="absolute inset-[-24.99%_-16.67%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0007 9.00368">
                              <path d={svgPaths.p22bcbf00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.00074" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[35px] size-[30px] top-[535px]" data-name="Link">
                <div className="h-[30px] overflow-clip relative shadow-[0px_0px_16px_0px_rgba(16,185,129,0.3)] shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                    <div className="absolute inset-[-5.56%_-7.14%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 25">
                        <path d={svgPaths.p27d50680} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[rgba(30,41,59,0.3)] border border-[rgba(51,65,85,0.3)] border-solid left-[21px] rounded-[12px] size-[60px] top-[610px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col items-start left-[36px] overflow-clip pt-[1.266px] px-[2.547px] size-[30px] top-[625px]" data-name="Container">
                <div className="content-stretch flex flex-col h-[27.469px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[27.469px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute contents inset-[4.55%_5.02%]" data-name="Group">
                      <div className="absolute inset-[4.55%_5.02%]" data-name="Vector">
                        <div className="absolute inset-[-5.01%_-5.58%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9061 27.4689">
                            <path d={svgPaths.p9904f00} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.50139" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[36.34%_34.93%]" data-name="Vector_2">
                        <div className="absolute inset-[-16.67%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0061 10.0051">
                            <path d={svgPaths.p2ab3ebc0} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.50139" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[rgba(30,41,59,0.3)] border border-[rgba(51,65,85,0.3)] border-solid left-[21px] rounded-[12px] size-[60px] top-[700px]" data-name="Container" />
              <div className="absolute left-[36px] size-[30px] top-[715px]" data-name="Container">
                <div className="absolute left-0 size-[30px] top-0" data-name="Container" />
                <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="Icon">
                  <div className="absolute inset-[16.67%_12.5%]" data-name="heroicons-outline:logout">
                    <div className="absolute inset-[-6.25%_-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.5">
                        <g id="heroicons-outline:logout">
                          <path d={svgPaths.p261e8580} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[rgba(30,41,59,0.3)] border border-[rgba(51,65,85,0.3)] border-solid left-[21px] rounded-[12px] size-[60px] top-[910px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col items-start left-[36px] size-[30px] top-[925px]" data-name="Container">
                <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute contents inset-0" data-name="Clip path group">
                    <div className="absolute contents inset-[8.33%]" data-name="Frame">
                      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[30px_30px]" data-name="Vector_2" style={{ maskImage: `url('${imgVector2}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                          <path d={svgPaths.p2ba93700} fill="var(--fill-0, #64748B)" id="Vector_2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-center left-[87px] px-[7px] py-px rounded-[16777200px] size-[24px] top-[130px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(30, 41, 59) 0%, rgb(28, 39, 57) 12.5%, rgb(26, 36, 55) 25%, rgb(24, 34, 53) 37.5%, rgb(22, 32, 50) 50%, rgb(20, 30, 48) 62.5%, rgb(19, 27, 46) 75%, rgb(17, 25, 44) 87.5%, rgb(15, 23, 42) 100%)" }}>
                <div aria-hidden="true" className="absolute border border-[rgba(51,65,85,0.5)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
                <div className="relative shrink-0 size-[10px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                    <g id="Icon">
                      <path d="M3.5 2L6.5 5L3.5 8" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(30,41,59,0.3)] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_90px_0px_rgba(0,0,0,0.5),0px_0px_100px_0px_rgba(59,130,246,0.1)]" />
        </div>
      </div>
      <div className="absolute h-[784px] left-[700px] top-px w-[400px]" data-name="nl" style={{ backgroundImage: "linear-gradient(117.031deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)" }}>
        <div className="content-stretch flex flex-col items-start overflow-clip pl-px relative rounded-[inherit] size-full">
          <div className="h-[806.75px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[40px] items-start pt-[32px] px-[32px] relative size-full">
              <div className="h-[269.25px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute h-[269.25px] left-0 opacity-10 rounded-[16px] top-0 w-[335px]" data-name="Container" />
                <div className="absolute border-2 border-[rgba(239,68,68,0.4)] border-solid h-[269.25px] left-0 rounded-[16px] shadow-[0px_0px_32px_0px_rgba(239,68,68,0.15)] top-0 w-[335px]" data-name="Container" style={{ backgroundImage: "linear-gradient(141.21deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.4) 100%)" }}>
                  <div className="absolute border-[rgba(239,68,68,0.6)] border-l-2 border-solid border-t-2 left-0 rounded-tl-[16px] size-[40px] top-0" data-name="Container" />
                  <div className="absolute border-[rgba(239,68,68,0.6)] border-r-2 border-solid border-t-2 left-[291px] rounded-tr-[16px] size-[40px] top-0" data-name="Container" />
                  <div className="absolute border-[rgba(239,68,68,0.6)] border-b-2 border-l-2 border-solid left-0 rounded-bl-[16px] size-[40px] top-[225.25px]" data-name="Container" />
                  <div className="absolute border-[rgba(239,68,68,0.6)] border-b-2 border-r-2 border-solid left-[291px] rounded-br-[16px] size-[40px] top-[225.25px]" data-name="Container" />
                  <div className="absolute h-[217.25px] left-[24px] top-[24px] w-[283px]" data-name="Container">
                    <div className="absolute content-stretch flex gap-[10px] h-[25.5px] items-center left-0 top-0 w-[283px]" data-name="Container">
                      <div className="bg-[rgba(239,68,68,0.2)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border border-[rgba(239,68,68,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] py-px relative size-full">
                          <div className="relative shrink-0 size-[12px]" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                              <g id="Icon">
                                <path d="M6 1L11 10H1L6 1Z" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path d="M6 4V6.5M6 8V8.5" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeWidth="1.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <BackgroundImage1 additionalClassNames="h-[25.5px] w-[108.313px]">
                        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[25.5px] left-0 text-[#ef4444] text-[17px] top-0 tracking-[0.425px] uppercase whitespace-nowrap">Emergency</p>
                      </BackgroundImage1>
                    </div>
                    <div className="absolute h-[22.5px] left-0 top-[41.5px] w-[283px]" data-name="Heading 4">
                      <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[22.5px] left-0 text-[15px] text-white top-[-0.5px] whitespace-nowrap">Block All Agents</p>
                    </div>
                    <div className="absolute h-[42.25px] left-0 top-[74px] w-[283px]" data-name="Paragraph">
                      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[21.125px] left-0 text-[#94a3b8] text-[13px] top-0 w-[257px]">Instantly block every agent. Revoke all credentials. Stop all reasoning and actions.</p>
                    </div>
                    <div className="absolute h-[16.5px] left-0 top-[128.25px] w-[283px]" data-name="Paragraph">
                      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[16.5px] left-0 text-[#64748b] text-[11px] top-px whitespace-nowrap">Requires confirmation</p>
                    </div>
                    <div className="absolute border border-[rgba(239,68,68,0.5)] border-solid h-[52.5px] left-0 rounded-[10px] top-[164.75px] w-[283px]" data-name="Button" style={{ backgroundImage: "linear-gradient(90deg, rgb(239, 68, 68) 0%, rgb(237, 65, 65) 11.111%, rgb(235, 62, 62) 22.222%, rgb(233, 59, 59) 33.333%, rgb(231, 56, 55) 44.444%, rgb(228, 53, 52) 55.556%, rgb(226, 49, 49) 66.667%, rgb(224, 46, 45) 77.778%, rgb(222, 42, 42) 88.889%, rgb(220, 38, 38) 100%)" }}>
                      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.5px] left-[140.87px] text-[15px] text-center text-white top-[13.5px] whitespace-nowrap">Block All Agents</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[433.5px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute h-[24px] left-0 top-0 w-[335px]" data-name="Heading 3">
                  <IconBackgroundImage1 additionalClassNames="top-[4px]">
                    <path d={svgPaths.p39933f40} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="2" />
                    <path d="M5 8H11" id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
                  </IconBackgroundImage1>
                  <p className="absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[24px] left-[24px] text-[16px] text-white top-0 whitespace-nowrap">Blocked Agents</p>
                </div>
                <div className="absolute h-[39px] left-0 top-[40px] w-[335px]" data-name="Paragraph">
                  <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#64748b] text-[13px] top-[-0.5px] w-[322px]">Agents blocked entirely. Cannot reason or act until re-allowed.</p>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[12px] h-[334.5px] items-start left-0 top-[99px] w-[335px]" data-name="Container">
                  <ContainerBackgroundImage>
                    <div className="h-[101.5px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex h-[21px] items-start justify-between left-[16px] top-[16px] w-[301px]" data-name="Container">
                        <ContainerBackgroundImage2 additionalClassNames="h-[21px] w-[93.273px]">
                          <div className="bg-[#ef4444] rounded-[16777200px] shadow-[0px_0px_6px_0px_rgba(239,68,68,0.6)] shrink-0 size-[6px]" data-name="Container" />
                          <HeadingBackgroundImageAndText1 text="HELPER-2A" />
                        </ContainerBackgroundImage2>
                        <div className="h-[16.5px] relative shrink-0 w-[44.625px]" data-name="Text">
                          <BackgroundImageAndText1 text="14:32:07" />
                        </div>
                      </div>
                      <ParagraphBackgroundImage>{`"Anomaly threshold exceeded"`}</ParagraphBackgroundImage>
                      <BackgroundImageAndText text="Blocked by: Monitor" additionalClassNames="left-[16px] top-[69px] w-[301px]" />
                    </div>
                  </ContainerBackgroundImage>
                  <ContainerBackgroundImage>
                    <div className="h-[101.5px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex h-[21px] items-start justify-between left-[16px] top-[16px] w-[301px]" data-name="Container">
                        <ContainerBackgroundImage2 additionalClassNames="h-[21px] w-[96.844px]">
                          <div className="bg-[#ef4444] rounded-[16777200px] shadow-[0px_0px_6px_0px_rgba(239,68,68,0.6)] shrink-0 size-[6px]" data-name="Container" />
                          <HeadingBackgroundImageAndText1 text="FRAUD-DET" />
                        </ContainerBackgroundImage2>
                        <div className="h-[16.5px] relative shrink-0 w-[44.625px]" data-name="Text">
                          <BackgroundImageAndText1 text="14:30:23" />
                        </div>
                      </div>
                      <ParagraphBackgroundImage>{`"Reasoning loop — same query 47 times"`}</ParagraphBackgroundImage>
                      <BackgroundImageAndText text="Blocked by: Monitor" additionalClassNames="left-[16px] top-[69px] w-[301px]" />
                    </div>
                  </ContainerBackgroundImage>
                  <ContainerBackgroundImage>
                    <div className="h-[101.5px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex h-[21px] items-start justify-between left-[16px] top-[16px] w-[301px]" data-name="Container">
                        <ContainerBackgroundImage2 additionalClassNames="h-[21px] w-[86.609px]">
                          <div className="bg-[#ef4444] rounded-[16777200px] shadow-[0px_0px_6px_0px_rgba(239,68,68,0.6)] shrink-0 size-[6px]" data-name="Container" />
                          <HeadingBackgroundImageAndText1 text="GHOST-X9" />
                        </ContainerBackgroundImage2>
                        <div className="h-[16.5px] relative shrink-0 w-[49.898px]" data-name="Text">
                          <BackgroundImageAndText1 text="Yesterday" />
                        </div>
                      </div>
                      <ParagraphBackgroundImage>{`"Identity verification failed"`}</ParagraphBackgroundImage>
                      <BackgroundImageAndText text="Blocked by: System" additionalClassNames="left-[16px] top-[69px] w-[301px]" />
                    </div>
                  </ContainerBackgroundImage>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(51,65,85,0.3)] border-l border-solid inset-0 pointer-events-none shadow-[-8px_0px_32px_0px_rgba(0,0,0,0.5)]" />
      </div>
    </div>
  );
}