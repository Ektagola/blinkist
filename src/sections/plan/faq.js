import {
  Container,
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react"
import React from "react"

export default function FAQ() {
  const data = [
    {
      ques: "Can I buy a Team Plan with my existing premium account?",
      ans: "You’re about to create a team with your personal email. Don't worry—you'll still have access to Blinkist content and your existing personal library. What you’ll get is an additional dedicated space to manage your team in your account settings. Your owner seat will be free every year.The privacy of you and your team is one of our biggest priorities. Items saved in an individual library stay private to that team member. As a team owner, you cannot see the personal library of a team member—and they cannot see yours.Since you’ve been added to your team plan, you won’t need to keep your personal subscription. You’ll be able to continue using Blinkist as before, just as a member of your team. If you bought your personal subscription through the Apple App Store, it will need to be cancelled directly from your app store account. Here’s how to do it.",
    },
    {
      ques: "Can I buy Blinkist Premium subscriptions as gifts for multiple people without having to buy a Teams plan?",
      ans: "Absolutely. Email sales@blinkist.com and we can arrange that for you. The minimum purchase order is $1,975.",
    },
    {
      ques: "How is Blinkist Teams different from Blinkist Enterprise?",
      ans:
        "The Blinkist Teams plan is for teams and organizations of 5–50 people. It’s self-serve to get you set up and enjoying Blinkist within minutes, and payment is via credit/debit card or PayPal." +
        "The Enterprise Plan is for a minimum of 51 people, and is designed for larger departments up to organization-wide access.The Enterprise plan includes the services of a customer success partner who will work with you to create curated learning paths and integrate Blinkist into your organization." +
        "To compare the two plans, see our plans page. If you’re interested in the Enterprise Plan, fill out our form to get in touch here.",
    },
    {
      ques: "How is my Blinkist Teams plan billed?",
      ans:
        "When you checkout, you have the option to pay by credit/debit card or PayPal, and you’re billed upfront for the full year at the time of purchase. Your subscription is activated immediately and set to renew automatically each year." +
        "We don’t currently offer monthly billing, and we don’t offer billing based on usage. You should first see how many people in your organization are interested to determine the number of seats you need.",
    },
    {
      ques: "Can I increase or decrease the number of seats on my Blinkist Teams plan once it’s started?",
      ans: "You can remove people to free up seats in your Blinkist Teams plan whenever you like, and can do so from your Partner Portal. You can always increase the number of seats, too. However, you won’t be able to decrease the number of seats until your next annual billing period. To increase or decrease the number of seats, email support@blinkist.com.",
    },
    {
      ques: "What payment methods can I use for my Blinkist Teams plan?",
      ans: "We accept most major credit and debit cards through our website. We don’t accept cheques, and don’t currently offer payment by invoicing.",
    },
    {
      ques: "How much does it cost to purchase a Blinkist Teams plan?",
      ans: "",
    },
    {
      ques: "When does access to Blinkist start for my team?",
      ans:
        "Your 12-month subscription starts as soon as you complete the purchase, not from when someone first joins your team. After completing your purchase, you’ll receive a welcome email with your unique link. You need to share this with the people you want to join your team. They’ll then need to tap on the link and sign up to join your team." +
        "Don’t worry if you lose track of this email—you can find your unique link at any time in your Partner Portal. We’ve also provided you with a suggested message template with activation instructions for your team to make it even easier to get started!",
    },
    {
      ques: "How do I add or remove people from my team?",
      ans:
        "To add people to your team, simply copy the message template from your Partner Portal (which includes your invite link) and send it to the people you want to join. They’ll need to tap on the link to complete their signup. Once this is done, they’ll have instant access to Blinkist Premium and their email address will appear in your Partner Portal." +
        "Removing people is also done via your Partner Portal. When you remove someone, they’ll lose their Blinkist Premium access 2 hours later.",
    },
    {
      ques: "Does my Blinkist Teams plan automatically renew?",
      ans: "Yes, your Blinkist Teams plan is set to automatically renew annually. After purchasing, you can cancel your auto-renewal from your Settings, but you and your team will lose access once your billing year is over unless you manually renew.",
    },
    {
      ques: "Can I cancel my Blinkist Teams subscription? How do I do it?",
      ans: "Yes, you can cancel your annual Teams subscription anytime from your Settings page. You and your team will keep access until the end of your current billing period.",
    },
    {
      ques: "Can I test out Blinkist before purchasing for my organization?",
      ans: "If you are interested in piloting Blinkist Enterprise for your organization please contact sales@blinkist.com. We also offer a 14-day money back guarantee with our Blinkist Teams plan.",
    },
    {
      ques: "If I change my mind, can I get a refund?",
      ans:
        "You have a 14-day cooling off period, meaning you can get a full refund if you change your mind within 2 weeks. If you want to do this, email support@blinkist.com." +
        "If you change your mind after 14 days, we don’t offer refunds. But you can cancel your subscription from your Settings so it doesn’t automatically renew at the start of your next annual billing cycle.",
    },
    {
      ques: "I still have more questions, how do I get in touch?",
      ans:
        "If you have questions about how Blinkist will fit within your organization please contact sales@blinkist.com or schedule a demo to talk with a member of our team." +
        "If you need help managing your Teams account, reach out to support@blinkist.com.",
    },
  ]
  return (
    <Box maxW={"full"} bgColor="#f1f6f4">
      <Container maxW={"5xl"} py={{ lg: 10, sm: 5}}>
        <Text
          fontWeight={"bold"}
          color="#0B4464"
          fontSize={"3xl"}
          py={8}
          textAlign="center"
        >
          Frequently asked questions
        </Text>
        <Accordion allowToggle>
          {data.map(faq => (
            <AccordionItem>
              <AccordionButton>
                <Box
                  _hover={{
                    bgColor: "transparent",
                  }}
                  py={5}
                  flex="1"
                  fontSize={{lg: "2xl", md: "xl", base: "16px"}}
                  textAlign="left"
                  fontWeight={"semibold"}
                  color={"#0B4464"}
                >
                  {faq.ques}
                </Box>
                <AccordionIcon fontSize={"2xl"} />
              </AccordionButton>
              <AccordionPanel pb={4} color="gray.600">{faq.ans} </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  )
}
