//const fs = require("fs");

const issuesArray = [
  {
    issue: "Education",
    subheading: "",
    link: "education",
    description:
      "When educators developed the School community-based management (SCBM) 20 years ago, Representative Sam Kong  became Gus  Webling Elementary School's Community Representative; he has been there ever since.  Upon being elected as state Representative, he can  no longer officially be the community representative, but still attends meetings though he does not have voting rights.</br></br>Representative Kong stays connected with curriculum development, operations and facility maintenance and also assists the school as it transitions through different administrations.Representative Kong has two children that have gone through the Aiea school system from elementary through high school;  his younger daughter recently graduated from Aiea High School.  As a parent Representative Kong knows how important it is to be involved  with your keiki’s education. He recently met with Aiea High School’s new principal to understand how he can best support the high school.  Representative Kong is leading the Drag Racing Against Gangs and Graffiti (<a href='http://www.draggteam.org'>DRAGG</a>) program at Aiea High School (AHS), a collaborative project between AHS, Local Law Enforcement,  and world class race drivers to support the school’s auto shop program and increase participation by at risk youth. </br></br>Representative Kong believe hawaii’s keiki deserve a high quality education provided by engaged, empowered teaches. He is currently Vice Chair of the House  Education Committee and hopes to advocate for students, teachers and administration through his role on this pivotal committee. He is committed to providing both high quality educational opportunities to Hawaii’s keiki and supporting Hawaii’s teachers.</br></br>Funds allocated to Aiea area schools under Representative Kong’s tenure: ",

    listTitle: "CIPS 2017-2018",
    listItems: [
      {
        itemTitle: "Pearl Ridge Elementary School",
        projects : [
          {
            itemDescription:
            "Design and construction for central courtyard improvements; ground and site improvements.",
            itemEnd: "Total Funding:  $135,900"
          }
        ]
      },
      {
        itemTitle: "Webling Elementary School",
        projects : [
          {
            itemDescription:
            "To finance construction for new playground equipment and site improvements.",
            itemEnd: "Total Funding: $125,000"
          }
        ]
      },
      {
        itemTitle: "Aiea  Intermediate School",
        projects : [
          {
            itemDescription:
            "Design and construction for improvements to the cafeteria stage.",
            itemEnd: "Total Funding: $450,000"
          },
          {
            itemDescription:
            "Design, construction, and equipment for an applied technology center.",
            itemEnd: "Total Funding: $3,200,000"
          },
          {
            itemDescription:
            "Construction and equipment to complete cafeteria renovation; ground and site improvements; equipment and appurtenances. ",
            itemEnd: "Total Funding: $550,000"
          },
        ]
      },
      {
        itemTitle: "Aiea High School",
        projects : [
          {
            itemDescription:
            "Design, construction, and equipment for a new building, and renovation and expansion for a girls’ athletic locker room, weight training facility, and other athletic facilities; ground and site improvements; equipment and appurtenances.",
            itemEnd: "Total Funding: $3,900,000"
          }
        ]
      }
    ]
  },
  {
    issue: "Community",
    subheading: "",
    link: "/community",
    description:
      "Back to the Graffiti Busters- As a volunteer, we were so good. We had distributed so much paint that we had graffiti under control for a long time. So we disbanded.  Well, all good things come to an end, I guess.  Graffiti came back but someone was beating me to it and covering it up!  I found out who when I got elected but I fell ill so I couldn't participate. We did get together later on though and I joined their team- The Lions Club.   Lions Club members from different clubs get together to do different projects taking care of the community.</br></br> Wanting to focus on Aiea, we started doing many projects in my district. Well from Salt Lake to Pearl City to be honest.  Though we do go out to Kailua, Kalihi and Chinatown on occasion.  We have done so many projects in Aiea and Pearl City each Saturday morning, that I've lost count.  But I couldn't imagine what our community would look like if we didn't.   From graffiti painting, landscaping, to just picking up trash, Lions have done so much that you may have not even noticed.  Thank you to those also who have done things out there in the community.  Oh yes. I may not know who you are, but I do know the work you do. It has not gone unnoticed."
  },
  {
    issue: "Business",
    subheading: "",
    link: "/business",
    description:
      "The business world presents its own challenges.  Being a local businessman, I know one has to deal with so much! From government and taxes, to the economy, the employees and their benefits- you name it.  I can relate! Looking back on 21 years of owning Aiea Florist, I do not regret a day of it! Wish my health didn't fail me and put me in a position to sell, but it did.  What I miss most is not designing and working with flowers, but being with my friends.  Fortunately, being an elected official allows me to be in contact with them, but it is not the same."
  },
  {
    issue: "Homeless",
    subheading: "",
    link: "/homeless",
    description:
      'When Representative Kong was the owner of Aiea Florist he let homeless individuals  spend the night in his florist. Solving the homeless crisis is a very personal, sincere issue for him, not a political platform.</br></br>Despite the state’s efforts in providing housing, homelessness continues to rise in Hawaii. According to the Department of Urban Development Hawaii has the highest rate of homeless per capita in the United States. Homelessness is a complex issue with multiple causes.</br></br>Representative Sam Kong’s goal is to address the homeless situation on Oahu through providing additional housing for homeless individuals and their families.  After personally assisting homeless individuals in the Aiea community for the past twenty five years, Representative Kong has  made homelessness a priority as an elected official.  His plan began with developing a team of government, business and and community leaders who could implement housing  solutions. They have identified properties throughout Oahu (City, State, and Federal) for possible development. Their first project is "Under and Upwards," a six acre Department  of transportation  (DOT) property located under the freeway in Pearl City off of Hugh St.  Representative Kong and his team  have recently received approval by the Pearl City neighborhood Board to continue with this project.</br></br>The second project is the Cedar Church  four acre property located on Waianae Valley Road.  (Crystal, can u add  more herr?) The third project is Hoomau Ke Ola, a 1,000-acre parcel which would serve  the chronically ill and drug abuse clients; This site is also located in Waianae.  The fourth project is a 3 ½ acre federal property Which will focus on meeting  the needs of homeless  veterans.  The land for these projects have been donated by various entities.  The planning  and design  of the first project has been done by a local architectural firm at minimal cost to the state. The building and operations of the housing will be a public-private endeavor.  The specific operational details such as admission criteria will be determined by the local community. Representative Kong is confident that implementing these projects will house homeless individuals and families in a cost conscious manner, and will be of  significant benefit to our community.'
  }
];

var issuesData = {
  issues: issuesArray
};

//console.log(galleryData.galleries[1]);

module.exports = issuesData;
