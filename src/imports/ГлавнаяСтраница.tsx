import svgPaths from "./svg-owh6zfaq0g";

function Home1() {
  return <div className="absolute bg-[rgba(226,232,240,0.5)] left-[391px] rounded-[33554400px] size-[256px] top-[11px]" data-name="Home" />;
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[384px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#0f172b] text-[30px] top-[-2px] tracking-[-0.75px] whitespace-nowrap">Аренда вещей</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[78px] left-[0.5px] top-[52px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#62748e] text-[16px] top-[-2px] w-[343px]">Находите нужные вещи рядом, арендуйте на удобный срок и получайте подсказки по выбору, использованию и безопасности.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[24px] left-0 top-[146px] w-[108.406px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-2px] whitespace-nowrap">Найти вещь →</p>
    </div>
  );
}

function Home2() {
  return (
    <div className="absolute h-[170px] left-[33px] top-[33px] w-[384px]" data-name="Home">
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#f8fafc] col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Home1 />
        <Home2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Home3() {
  return <div className="absolute bg-[rgba(190,219,255,0.5)] left-[391px] rounded-[33554400px] size-[256px] top-[11px]" data-name="Home" />;
}

function Heading1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[384px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#0f172b] text-[30px] top-[-2px] tracking-[-0.75px] whitespace-nowrap">Совместное владение</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[78px] left-0 top-[52px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.5px] not-italic text-[#62748e] text-[16px] top-[-2px] w-[351px]">Покупайте дорогие вещи вместе с другими и пользуйтесь ими по прозрачному графику и понятным правилам.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[24px] left-0 top-[146px] w-[155.891px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-2px] whitespace-nowrap">Узнать подробнее →</p>
    </div>
  );
}

function Home4() {
  return (
    <div className="absolute h-[170px] left-[33px] top-[33px] w-[384px]" data-name="Home">
      <Heading1 />
      <Paragraph1 />
      <Container1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#eff6ff] col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Home3 />
        <Home4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[236px] relative shrink-0 w-full" data-name="Section">
      <Link />
      <Link1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[263.516px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#0f172b] text-[24px] tracking-[-0.6px] whitespace-nowrap">Популярные категории</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.188px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] whitespace-nowrap">Все категории</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[32px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Link2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1adf7700} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 18H12.01" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home5() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Home6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.531px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Электроника</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home5 />
          <Home6 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3d8d8b00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home7() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Home8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.984px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Транспорт</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home7 />
          <Home8 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2ff98c00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2bb44e80} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.3 2.3L9.586 9.586" id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ae99c00} id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home9() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Home10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[89.859px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Инструменты</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home9 />
          <Home10 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b8b3180} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home11() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Home12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.594px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Спорт</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-white col-4 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home11 />
          <Home12 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 11H10" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 9V13" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 12H15.01" id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M18 10H18.01" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p26c79e00} id="Vector_5" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home13() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Home14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.047px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Хобби</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-white col-5 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home13 />
          <Home14 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p35061900} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.3 7L12 12L20.7 7" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 22V12" id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home15() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Home16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.25px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Техника</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-white col-6 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home15 />
          <Home16 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27f53c00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p16b88f0} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home17() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Home18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[79.766px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Фото/Видео</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-white col-7 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home17 />
          <Home18 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p9b81900} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Home19() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] w-[48px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Home20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.641px]" data-name="Home">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-center whitespace-nowrap">Разное</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-white col-8 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-px py-[17px] relative size-full">
          <Home19 />
          <Home20 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[114px] relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[170px] items-start relative shrink-0 w-full" data-name="Section">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[#0f172b] text-[24px] tracking-[-0.6px]">Рекомендуем вам</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[23px] relative shrink-0 w-[106.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#0f172b] text-[0px] top-[-1px] whitespace-nowrap">
          <span className="leading-[22.5px] text-[18px]">{`1 200 ₽ `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#62748e] text-[14px]">/ день</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-center justify-between left-0 pr-[187.547px] top-0 w-[294px]" data-name="Container">
      <Text />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[19.25px] items-start left-0 overflow-clip top-[27px] w-[294px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] min-h-px min-w-px not-italic relative text-[#1d293d] text-[14px]">Sony PlayStation 5 с 2 джойстиками</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6932200} fill="var(--fill-0, #CAD5E2)" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[16.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] whitespace-nowrap">4.9</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[67.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">· 12 отзывов</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#62748e] text-[12px]">Москва, м. Китай-город</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-0 pt-[8px] top-[54.25px] w-[294px]" data-name="Container">
      <Container7 />
      <Paragraph2 />
    </div>
  );
}

function Home21() {
  return (
    <div className="absolute h-[98.25px] left-0 top-[306px] w-[294px]" data-name="Home">
      <Container5 />
      <Heading4 />
      <Container6 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[122px] size-[48px] top-[122px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pb24b000} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p10125e00} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex h-[25px] items-start left-[12px] px-[9px] py-[5px] rounded-[8px] top-[12px] w-[61.938px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#314158] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">Аренда</p>
    </div>
  );
}

function Home22() {
  return (
    <div className="absolute bg-[#f1f5f9] border border-[#e2e8f0] border-solid left-0 overflow-clip rounded-[14px] size-[294px] top-0" data-name="Home">
      <Icon9 />
      <Container8 />
    </div>
  );
}

function Link11() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <Home21 />
      <Home22 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[23px] relative shrink-0 w-[147.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#0f172b] text-[0px] top-[-1px] whitespace-nowrap">
          <span className="leading-[22.5px] text-[18px]">{`15 000 ₽ `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#62748e] text-[14px]">/ доля 10%</span>
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-center justify-between left-0 pr-[146.656px] top-0 w-[294px]" data-name="Container">
      <Text3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex h-[19.25px] items-start left-0 overflow-clip top-[27px] w-[294px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] min-h-px min-w-px not-italic relative text-[#1d293d] text-[14px]">Электросамокат Ninebot E2 Pro</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6932200} fill="var(--fill-0, #CAD5E2)" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[6.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">· 4 отзывов</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#62748e] text-[12px]">Доступно онлайн</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-0 pt-[8px] top-[54.25px] w-[294px]" data-name="Container">
      <Container11 />
      <Paragraph3 />
    </div>
  );
}

function Home23() {
  return (
    <div className="absolute h-[98.25px] left-0 top-[306px] w-[294px]" data-name="Home">
      <Container9 />
      <Heading5 />
      <Container10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[122px] size-[48px] top-[122px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pb24b000} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p10125e00} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex h-[23px] items-start left-[12px] px-[8px] py-[4px] rounded-[8px] top-[12px] w-[89.688px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">Совладение</p>
    </div>
  );
}

function Home24() {
  return (
    <div className="absolute bg-[#f1f5f9] border border-[#e2e8f0] border-solid left-0 overflow-clip rounded-[14px] size-[294px] top-0" data-name="Home">
      <Icon11 />
      <Container12 />
    </div>
  );
}

function Link12() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <Home23 />
      <Home24 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[23px] relative shrink-0 w-[91.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#0f172b] text-[0px] top-[-1px] whitespace-nowrap">
          <span className="leading-[22.5px] text-[18px]">{`800 ₽ `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#62748e] text-[14px]">/ день</span>
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-center justify-between left-0 pr-[202.875px] top-0 w-[294px]" data-name="Container">
      <Text6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex h-[19.25px] items-start left-0 overflow-clip top-[27px] w-[294px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] min-h-px min-w-px not-italic relative text-[#1d293d] text-[14px]">Перфоратор Makita HR2470</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6932200} fill="var(--fill-0, #CAD5E2)" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[16.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] whitespace-nowrap">4.8</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[67.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">· 35 отзывов</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#62748e] text-[12px]">Москва, м. Выхино</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-0 pt-[8px] top-[54.25px] w-[294px]" data-name="Container">
      <Container15 />
      <Paragraph4 />
    </div>
  );
}

function Home25() {
  return (
    <div className="absolute h-[98.25px] left-0 top-[306px] w-[294px]" data-name="Home">
      <Container13 />
      <Heading6 />
      <Container14 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[122px] size-[48px] top-[122px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pb24b000} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p10125e00} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex h-[25px] items-start left-[12px] px-[9px] py-[5px] rounded-[8px] top-[12px] w-[61.938px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#314158] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">Аренда</p>
    </div>
  );
}

function Home26() {
  return (
    <div className="absolute bg-[#f1f5f9] border border-[#e2e8f0] border-solid left-0 overflow-clip rounded-[14px] size-[294px] top-0" data-name="Home">
      <Icon13 />
      <Container16 />
    </div>
  );
}

function Link13() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <Home25 />
      <Home26 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[23px] relative shrink-0 w-[137px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#0f172b] text-[0px] top-[-1px] whitespace-nowrap">
          <span className="leading-[22.5px] text-[18px]">{`2 500 ₽ `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#62748e] text-[14px]">/ доля 25%</span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-center justify-between left-0 pr-[157px] top-0 w-[294px]" data-name="Container">
      <Text9 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex h-[19.25px] items-start left-0 overflow-clip top-[27px] w-[294px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] min-h-px min-w-px not-italic relative text-[#1d293d] text-[14px]">Сапборд Gladiator Pro 10.6</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6932200} fill="var(--fill-0, #CAD5E2)" id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[16.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#314158] text-[12px] whitespace-nowrap">4.7</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[61.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap">· 2 отзывов</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#62748e] text-[12px]">Пироговское вдхр.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-0 pt-[8px] top-[54.25px] w-[294px]" data-name="Container">
      <Container19 />
      <Paragraph5 />
    </div>
  );
}

function Home27() {
  return (
    <div className="absolute h-[98.25px] left-0 top-[306px] w-[294px]" data-name="Home">
      <Container17 />
      <Heading7 />
      <Container18 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[122px] size-[48px] top-[122px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pb24b000} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p10125e00} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex h-[23px] items-start left-[12px] px-[8px] py-[4px] rounded-[8px] top-[12px] w-[89.688px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">Совладение</p>
    </div>
  );
}

function Home28() {
  return (
    <div className="absolute bg-[#f1f5f9] border border-[#e2e8f0] border-solid left-0 overflow-clip rounded-[14px] size-[294px] top-0" data-name="Home">
      <Icon15 />
      <Container20 />
    </div>
  );
}

function Link14() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Link">
      <Home27 />
      <Home28 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[404.25px] relative shrink-0 w-full" data-name="Container">
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[460.25px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading3 />
      <Container4 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[rgba(43,127,255,0.1)] blur-[64px] left-[-79px] rounded-[33554400px] size-[256px] top-[-79px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute bg-[rgba(173,70,255,0.1)] blur-[64px] left-[1015px] rounded-[33554400px] size-[192px] top-[121px]" data-name="Container" />;
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[159.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#155dfc] text-[14px] tracking-[0.35px] uppercase whitespace-nowrap">Безопасная сделка</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[576px]" data-name="Container">
      <Icon16 />
      <Text12 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[36px] left-0 top-[40px] w-[576px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#0f172b] text-[30px] top-[-2px] whitespace-nowrap">Сдавайте свои вещи и зарабатывайте</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[92px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#45556c] text-[18px] top-[-1px] w-[546px]">Сдавайте вещи спокойнее: платформа проверяет пользователей, поддерживает безопасную сделку и помогает снизить риски.</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute bg-[#155dfc] h-[48px] left-0 rounded-[14px] top-[182.5px] w-[227.75px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[24px] not-italic text-[16px] text-white top-[10px] whitespace-nowrap">Разместить объявление</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[230.5px] left-[49px] top-[61.75px] w-[576px]" data-name="Container">
      <Container24 />
      <Heading8 />
      <Paragraph6 />
      <Link15 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="Icon">
          <path d={svgPaths.p15df96b2} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d={svgPaths.p1218c580} id="Vector_2" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[84.077px] py-px relative rounded-[16px] size-[256px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <Icon17 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white h-[354px] relative rounded-[24px] shrink-0 w-full" data-name="Section">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container21 />
        <Container22 />
        <Container23 />
        <div className="absolute flex items-center justify-center left-[936.48px] size-[269.047px] top-[42.48px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-3">
            <Container25 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1476.25px] items-start left-[118.5px] pt-[32px] px-[16px] top-[65px] w-[1280px]" data-name="Home">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-2px] whitespace-nowrap">Платформа</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">О компании</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Вакансии</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Реквизиты</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading9 />
      <List />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-2px] whitespace-nowrap">Помощь</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Поддержка</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Безопасность</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Правила</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading10 />
      <List1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-2px] whitespace-nowrap">Сервисы</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Совместное владение</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Доставка</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#62748e] text-[14px]">Безопасная сделка</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container29() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading11 />
      <List2 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-2px] whitespace-nowrap">Приложение</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e2e8f0] h-[40px] relative rounded-[10px] shrink-0 w-[128px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">App Store</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e2e8f0] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[128px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap">Google Play</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading12 />
      <Container31 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] px-[16px] relative size-full">
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[105.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">© 2026 Платформа</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[170.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">Пользовательское соглашение</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pt-[33px] px-[16px] relative size-full">
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[48px] h-[322px] items-start left-0 pt-[49px] px-[118.5px] top-[1621.25px] w-[1517px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container26 />
      <Container32 />
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute bg-white h-[1943.25px] left-0 top-0 w-[1517px]" data-name="Layout">
      <Home />
      <Footer />
    </div>
  );
}

function Container34() {
  return <div className="bg-white rounded-[6px] shrink-0 size-[16px]" data-name="Container" />;
}

function Header1() {
  return (
    <div className="bg-[#155dfc] relative rounded-[4px] shrink-0 size-[32px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#0f172b] text-[20px] tracking-[-0.5px] whitespace-nowrap">ВещьВокруг</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-[16px] w-[149.047px]" data-name="Link">
      <Header1 />
      <Header2 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2.66667 8H13.3333" id="Vector" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 4H13.3333" id="Vector_2" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 12H13.3333" id="Vector_3" stroke="var(--stroke-0, #1D293D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[40px] left-[189.05px] rounded-[10px] top-[12px] w-[106.938px]" data-name="Button">
      <Icon18 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[65px] not-italic text-[#1d293d] text-[14px] text-center top-[9px] whitespace-nowrap">Каталог</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p9bfa300} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2f84f400} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[10px] relative shrink-0 w-[52.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[10px] left-[26px] not-italic text-[#62748e] text-[10px] text-center top-[-1px] whitespace-nowrap">Избранное</p>
      </div>
    </div>
  );
}

function NavIcon() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-center justify-center left-0 py-[7px] top-0 w-[56px]" data-name="NavIcon">
      <Icon20 />
      <Text15 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[18px] size-[20px] top-[7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p383b2000} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[10px] left-[0.38px] top-[31px] w-[55.25px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[10px] left-[28px] not-italic text-[#62748e] text-[10px] text-center top-[-1px] whitespace-nowrap">Сообщения</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#155dfc] border-2 border-solid border-white h-[18px] left-[26.23px] rounded-[33554400px] top-[4px] w-[21.766px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[10px] left-[9.5px] not-italic text-[10px] text-center text-white top-px whitespace-nowrap">2</p>
    </div>
  );
}

function NavIcon1() {
  return (
    <div className="absolute h-[48px] left-[60px] top-0 w-[56px]" data-name="NavIcon">
      <Icon21 />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[10px] relative shrink-0 w-[43.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[10px] left-[22.5px] not-italic text-[#62748e] text-[10px] text-center top-[-1px] whitespace-nowrap">Профиль</p>
      </div>
    </div>
  );
}

function NavIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-center justify-center left-[120px] py-[7px] top-0 w-[56px]" data-name="NavIcon">
      <Icon22 />
      <Text18 />
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <NavIcon />
        <NavIcon1 />
        <NavIcon2 />
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[10px] shrink-0 w-[105.734px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Разместить</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[914.27px] top-[8px] w-[349.734px]" data-name="Container">
      <Button3 />
      <Container36 />
      <Link17 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f9fafb] h-[40px] left-0 rounded-[10px] top-0 w-[570.281px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[16px] pr-[40px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#90a1b9] text-[14px] whitespace-nowrap">Поиск по товарам, аренде и совладению...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[530.28px] px-[12px] size-[40px] top-0" data-name="Button">
      <Icon23 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[40px] left-[319.98px] top-[12px] w-[570.281px]" data-name="Container">
      <TextInput />
      <Button4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Link16 />
      <Button2 />
      <Container35 />
      <Container37 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-0 pb-px px-[118.5px] top-0 w-[1517px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container33 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Главная страница">
      <Layout />
      <Header />
    </div>
  );
}