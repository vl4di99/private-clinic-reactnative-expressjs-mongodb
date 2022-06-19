import React from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BackgroundStack from "../../../theme/BackgroundStack";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const TermsAndConditionsScreen = () => (
  <BackgroundStack>
    <ScrollView style={style.scrollview}>
      <Text style={style.title}>Welcome to PrivateClinic!</Text>
      <Text style={style.texts2}>
        These terms and conditions outline the rules and regulations for the use
        of PrivateClinic's Application, located at PrivateClinic. By accessing
        this application we assume you accept these terms and conditions. Do not
        continue to use PrivateClinic if you do not agree to take all of the
        terms and conditions stated on this page. The following terminology
        applies to these Terms and Conditions, Privacy Statement and Disclaimer
        Notice and all Agreements: "Client", "You" and "Your" refers to you, the
        person log on this application and compliant to the Company’s terms and
        conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to
        our Company. "Party", "Parties", or "Us", refers to both the Client and
        ourselves. All terms refer to the offer, acceptance and consideration of
        payment necessary to undertake the process of our assistance to the
        Client in the most appropriate manner for the express purpose of meeting
        the Client’s needs in respect of provision of the Company’s stated
        services, in accordance with and subject to, prevailing law of
        Netherlands. Any use of the above terminology or other words in the
        singular, plural, capitalization and/or he/she or they, are taken as
        interchangeable and therefore as referring to same.
      </Text>
      <Text style={style.texts}>Cookies</Text>
      <Text style={style.texts2}>
        We employ the use of cookies. By accessing PrivateClinic, you agreed to
        use cookies in agreement with the PrivateClinic's Privacy Policy. Most
        interactive websites and applications use cookies to let us retrieve the
        user’s details for each visit. Cookies are used by our application to
        enable the functionality of certain areas to make it easier for people
        visiting our application. Some of our affiliate/advertising partners may
        also use cookies.
      </Text>
      <Text style={style.texts}>License</Text>
      <Text style={style.texts2}>
        Unless otherwise stated, PrivateClinic and/or its licensors own the
        intellectual property rights for all material on PrivateClinic. All
        intellectual property rights are reserved. You may access this from
        PrivateClinic for your own personal use subjected to restrictions set in
        these terms and conditions. You must not: Republish material from
        PrivateClinic Sell, rent or sub-license material from PrivateClinic
        Reproduce, duplicate or copy material from PrivateClinic Redistribute
        content from PrivateClinic This Agreement shall begin on the date
        hereof. Our Terms and Conditions were created with the help of the Terms
        And Conditions Template. Parts of this application offer an opportunity
        for users to post and exchange opinions and information in certain areas
        of the application. PrivateClinic does not filter, edit, publish or
        review Comments prior to their presence on the application. Comments do
        not reflect the views and opinions of PrivateClinic,its agents and/or
        affiliates. Comments reflect the views and opinions of the person who
        post their views and opinions. To the extent permitted by applicable
        laws, PrivateClinic shall not be liable for the Comments or for any
        liability, damages or expenses caused and/or suffered as a result of any
        use of and/or posting of and/or appearance of the Comments on this
        application. PrivateClinic reserves the right to monitor all Comments
        and to remove any Comments which can be considered inappropriate,
        offensive or causes breach of these Terms and Conditions. You warrant
        and represent that: You are entitled to post the Comments on our
        application and have all necessary licenses and consents to do so; The
        Comments do not invade any intellectual property right, including
        without limitation copyright, patent or trademark of any third party;
        The Comments do not contain any defamatory, libelous, offensive,
        indecent or otherwise unlawful material which is an invasion of privacy
        The Comments will not be used to solicit or promote business or custom
        or present commercial activities or unlawful activity. You hereby grant
        PrivateClinic a non-exclusive license to use, reproduce, edit and
        authorize others to use, reproduce and edit any of your Comments in any
        and all forms, formats or media.
      </Text>
      <Text style={style.texts}>Hyperlinks</Text>
      <Text style={style.texts2}>
        The following organizations may link to our Application without prior
        written approval: Government agencies; Search engines; News
        organizations; Online directory distributors may link to our Application
        in the same manner as they hyperlink to the Applications of other listed
        businesses; and System wide Accredited Businesses except soliciting
        non-profit organizations, charity shopping malls, and charity
        fundraising groups which may not hyperlink to our Application. These
        organizations may link to our home page, to publications or to other
        Application information so long as the link: (a) is not in any way
        deceptive; (b) does not falsely imply sponsorship, endorsement or
        approval of the linking party and its products and/or services; and (c)
        fits within the context of the linking party’s site. We may consider and
        approve other link requests from the following types of organizations:
        commonly-known consumer and/or business information sources; dot.com
        community sites; associations or other groups representing charities;
        online directory distributors; internet portals; accounting, law and
        consulting firms; and educational institutions and trade associations.
        We will approve link requests from these organizations if we decide
        that: (a) the link would not make us look unfavorably to ourselves or to
        our accredited businesses; (b) the organization does not have any
        negative records with us; (c) the benefit to us from the visibility of
        the hyperlink compensates the absence of PrivateClinic; and (d) the link
        is in the context of general resource information. These organizations
        may link to our home page so long as the link: (a) is not in any way
        deceptive; (b) does not falsely imply sponsorship, endorsement or
        approval of the linking party and its products or services; and (c) fits
        within the context of the linking party’s site. If you are one of the
        organizations listed in paragraph 2 above and are interested in linking
        to our application, you must inform us by sending an e-mail to
        PrivateClinic. Please include your name, your organization name, contact
        information as well as the URL of your site, a list of any URLs from
        which you intend to link to our Application, and a list of the URLs on
        our site to which you would like to link. Wait 2-3 weeks for a response.
        Approved organizations may hyperlink to our application as follows: By
        use of our corporate name; or By use of the uniform resource locator
        being linked to; or By use of any other description of our Application
        being linked to that makes sense within the context and format of
        content on the linking party’s site. No use of PrivateClinic's logo or
        other artwork will be allowed for linking absent a trademark license
        agreement.
      </Text>
      <Text style={style.texts}>Disclaimer</Text>
      <Text style={style.texts2}>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will: limit or
        exclude our or your liability for death or personal injury; limit or
        exclude our or your liability for fraud or fraudulent misrepresentation;
        limit any of our or your liabilities in any way that is not permitted
        under applicable law; or exclude any of our or your liabilities that may
        not be excluded under applicable law. The limitations and prohibitions
        of liability set in this Section and elsewhere in this disclaimer: (a)
        are subject to the preceding paragraph; and (b) govern all liabilities
        arising under the disclaimer, including liabilities arising in contract,
        in tort and for breach of statutory duty. As long as the website and the
        information and services on the website are provided free of charge, we
        will not be liable for any loss or damage of any nature.
      </Text>
    </ScrollView>
  </BackgroundStack>
);

const TermsAndConditionsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
      />
    </Stack.Navigator>
  );
};

export default TermsAndConditionsStackNavigator;
const style = StyleSheet.create({
  scrollview: {
    flex: 1,
    marginLeft: WIDTH / 15,
    marginRight: WIDTH / 15,
    marginTop: HEIGHT / 20,
    marginBottom: HEIGHT / 20,
  },
  title: {
    textAlign: "center",
    fontSize: WIDTH * 0.06,
    color: "#618A3D",
    marginBottom: HEIGHT / 24,
    textDecorationLine: "underline",
  },
  texts: {
    textAlign: "left",
    fontSize: 17,
    color: "#618A3D",
    marginTop: HEIGHT / 24,
  },
  texts2: {
    textAlign: "justify",
    fontSize: 16,
    color: "#093923",
  },
});
