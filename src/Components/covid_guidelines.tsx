import React, { useState } from "react";
import "../Style/covid_guidelines.css";

const covidGuidelines = [
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/health-care-facilities_8_1-01.tmb-1920v.png?sfvrsn=823c9ad5_7",
    description: "How to visit health care facilities",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/covid19-infographic-symptoms-final.tmb-1920v.png?sfvrsn=57850cbc_1",
    description: "Covid-19 symptoms and flu",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/infographics/are-you-caring-for-children_10_3.tmb-479v.png?sfvrsn=e57ac980_1",
    description: "Are you caring for child under age 5",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/infographics/are-you-a-healthworker_8_3.tmb-479v.png?sfvrsn=910144da_1",
    description: "Are you health worker",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/infographics/are-you-pregnant_11_3.tmb-479v.png?sfvrsn=71ea572b_1",
    description: "Are you pregnant",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/infographics/are-you-60-or-older_8_3.tmb-479v.png?sfvrsn=9a4b070e_1",
    description: "Are you 60 or older?",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/infographics/do-you-have-chronic-health-conditions_8_3.tmb-479v.png?sfvrsn=6d8ddaa3_1",
    description: "Do you chronic health conditions",
    showImage: false,
  },
  {
    link: [
      "https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-1.tmb-479v.png?sfvrsn=3d15aa1c_5",
      "https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-2.tmb-479v.png?sfvrsn=2bc43de1_5",
      "https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-3.tmb-479v.png?sfvrsn=b1ef6d45_5",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/infographic-covid-19-transmission-and-protections-final2.tmb-479v.jpg?sfvrsn=7fc5264a_1",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/myth_busters_hand_washing_4_5_7.tmb-549v.jpg?sfvrsn=1455bf22_1",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/myth_busters_hand_washing_4_5_1.tmb-479v.jpg?sfvrsn=ed64012e_1",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/myth_busters_hand_washing_4_5_5.tmb-479v.jpg?sfvrsn=4fdfb8fe_1",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/myth_busters_hand_washing_4_5_4.tmb-479v.jpg?sfvrsn=a8aaa062_1",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/myth_busters_hand_washing_4_5_3.tmb-479v.jpg?sfvrsn=5e266a3f_1",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/myth_busters_hand_washing_4_5_2.tmb-479v.jpg?sfvrsn=fb2e8292_1",
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/myth_busters_hand_washing_4_5_6.tmb-479v.jpg?sfvrsn=f60a78e1_1",
    ],
    description: "Protect yourself and others from getting sick",
    showImage: false,
  },
];

const covidQuery = [
  //{ link: ,
  //description: ,
  //},
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/who-3-factors-poster.tmb-1920v.jpg?sfvrsn=4f685207_1",
    description: "3 factor to help you make safer choices",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/tile_prepare_your_space_self_isolation_5_3.tmb-1920v.jpg?sfvrsn=2f582150_1",
    description: "If you have been diagnosed with covid-19",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/person-sick-in-your-household-what-to-do.tmb-1920v.jpg?sfvrsn=39d1287_8",
    description: "What to do if someone is sick in your household",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/visiting-family.tmb-1920v.jpg?sfvrsn=e4652390_7",
    description: "Visiting family in a long-term care facility",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/grocery-shopping.tmb-1920v.jpg?sfvrsn=57603db5_7",
    description: "Shopping for groceries",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/person-sick-in-your-household-prepare.tmb-1920v.jpg?sfvrsn=6736e6e5_7",
    description: "How to prepare in case someone is sick in your household",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/infographics/who_contact-tracing_covid-19-positive_05-05-21_300.tmb-1920v.jpeg?sfvrsn=b5b33156_1",
    description: "I just found out I have covid-19",
    showImage: false,
  },
  {
    link: "https://www.who.int/images/default-source/health-topics/coronavirus/infographics/who_contact-tracing_confirmed-contact_05-05-21_300.tmb-1920v.jpeg?sfvrsn=f94f44cc_1",
    description: "I just found out I'm a confirmed contact for covid-19",
    showImage: false,
  },
];

//const guideLineImgSources = [
//`https://www.who.int/images/default-source/health-topics/coronavirus/who-3-factors-poster.tmb-1920v.jpg?sfvrsn=4f685207_1`,
//`https://www.who.int/images/default-source/health-topics/coronavirus/tile_prepare_your_space_self_isolation_5_3.tmb-1920v.jpg?sfvrsn=2f582150_1`,
//];

const CovidGuideLines = () => {
  //const imgSrc = guideLineImgSources[guidelineNum];
  const [stateChange, setStateChange] = useState(false);
  //const showImageFunc = (e: any) => {
  //return <img src={e["link"]} />;
  //};

  const showImageStateFunc = (e: any) => {
    e["showImage"] = !e["showImage"];
    setStateChange(!stateChange);
  };

  return (
    <div className="guidelineContainer">
      <div>
        <h2 id="guideline_h2"> Safety measures </h2>
        <ul id="guideline_ul">
          {covidGuidelines.map((e: any, index: number) => (
            <div key={index}>
              <li
                id="imageLinker"
                key={index}
                onClick={() => showImageStateFunc(e)}
              >
                {" "}
                {e["description"]}{" "}
              </li>
              {e["showImage"] ? (
                <img id="guideline_img" src={e["link"]} />
              ) : (
                <> </>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h2 id="guideline_h2">
          {" "}
          What to do to keep yourself and others safe from COVID-19{" "}
        </h2>{" "}
        <ul id="guideline_ul">
          <li id="explicit_li">
            {" "}
            Maintain at least a 1-metre distance between yourself and others to
            reduce your risk of infection when they cough, sneeze or speak.
            Maintain an even greater distance between yourself and others when
            indoors. The further away, the better.{" "}
          </li>
          <li id="explicit_li">
            {" "}
            Make wearing a mask a normal part of being around other people. The
            appropriate use, storage and cleaning or disposal are essential to
            make masks as effective as possible.{" "}
          </li>{" "}
        </ul>
        <ul id="guideline_ul">
          <h3 id="guideline_h3"> Basics on how to wear mask </h3>
          <li id="explicit_li">
            {" "}
            Clean your hands before you put your mask on, as well as before and
            after you take it off, and after you touch it at any time.{" "}
          </li>
          <li id="explicit_li">
            {" "}
            Make sure it covers both your nose, mouth and chin.{" "}
          </li>
          <li id="explicit_li">
            {" "}
            When you take off a mask, store it in a clean plastic bag, and every
            day either wash it if it’s a fabric mask, or dispose of a medical
            mask in a trash bin.
          </li>
          <li id="explicit_li"> Don’t use masks with valves. </li>
        </ul>
      </div>

      <div>
        <h2 id="guideline_h2"> What to do if you feel unwell </h2>
        <ul id="guideline_ul">
          <li id="explicit_li">
            Know the full range of symptoms of COVID-19. The most common
            symptoms of COVID-19 are fever, dry cough, and tiredness. Other
            symptoms that are less common and may affect some patients include
            loss of taste or smell, aches and pains, headache, sore throat,
            nasal congestion, red eyes, diarrhoea, or a skin rash.{" "}
          </li>
          <li id="explicit_li">
            {" "}
            Stay home and self-isolate even if you have minor symptoms such as
            cough, headache, mild fever, until you recover. Call your health
            care provider or hotline for advice. Have someone bring you
            supplies. If you need to leave your house or have someone near you,
            wear a medical mask to avoid infecting others.{" "}
          </li>
          <li id="explicit_li">
            {" "}
            If you have a fever, cough and difficulty breathing, seek medical
            attention immediately. Call by telephone first, if you can and
            follow the directions of your local health authority.{" "}
          </li>
          <li id="explicit_li">
            {" "}
            Keep up to date on the latest information from trusted sources, such
            as WHO or your local and national health authorities. Local and
            national authorities and public health units are best placed to
            advise on what people in your area should be doing to protect
            themselves.{" "}
          </li>
        </ul>
      </div>

      <div>
        <h2 id="guideline_h2"> covid-19 related Advisory </h2>
        <ul id="guideline_ul">
          {covidQuery.map((e: any, index: number) => (
            <div key={index}>
              <li
                id="imageLinker"
                key={index}
                onClick={() => showImageStateFunc(e)}
              >
                {" "}
                {e["description"]}{" "}
              </li>
              {e["showImage"] ? (
                <img id="guideline_img" src={e["link"]} />
              ) : (
                <> </>
              )}{" "}
            </div>
          ))}
        </ul>
        <footer id="guideline_footer">
          {" "}
          <h5 id="credit"> courtesy to: WHO </h5>{" "}
        </footer>
      </div>
    </div>
  );
};

export default CovidGuideLines;
