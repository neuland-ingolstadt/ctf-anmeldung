import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

interface CTFSignupConfirmationEmailProps {
  name: string
  email: string
  shirtSize?: string
  courseOfStudy: string
}

const CTFSignupConfirmationEmail = ({
  name,
  email,
  shirtSize,
  courseOfStudy,
}: CTFSignupConfirmationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>CTF Signup Received - Neuland Ingolstadt e.V.</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-[#1a1a1a] border border-solid border-[#404040] max-w-[600px] mx-auto">
            {/* Header Section */}
            <Section className="bg-[#2a2a2a] px-[32px] py-[24px] border-b border-solid border-[#404040]">
              <Text className="text-[#4ade80] text-[20px] font-bold m-0 font-mono">
                Neuland Ingolstadt e.V.
              </Text>
              <Text className="text-gray-400 text-[14px] m-0 mt-[4px]">
                The student association for all computer science enthusiasts at
                TH Ingolstadt.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="px-[32px] py-[32px]">
              <Heading className="text-white text-[24px] font-bold mb-[24px]">
                CTF Signup
              </Heading>

              <Text className="text-gray-300 text-[16px] mb-[24px] leading-[24px]">
                Thank you for your interest in our Capture The Flag (CTF) event.
                We have successfully received your signup with the following
                information:
              </Text>

              {/* Participant Data Section */}
              <Section className="bg-[#2a2a2a] border border-solid border-[#404040] p-[24px] mb-[24px]">
                <Text className="text-[#4ade80] text-[16px] font-semibold mb-[16px] m-0">
                  Registration Details
                </Text>
                <Hr className="border-[#404040] my-[16px]" />

                <Text className="text-gray-300 text-[14px] mb-[12px] m-0">
                  <span className="text-gray-400 font-medium">Name:</span>{' '}
                  {name}
                </Text>
                <Text className="text-gray-300 text-[14px] mb-[12px] m-0">
                  <span className="text-gray-400 font-medium">Email:</span>{' '}
                  {email}
                </Text>
                {shirtSize && (
                  <Text className="text-gray-300 text-[14px] mb-[12px] m-0">
                    <span className="text-gray-400 font-medium">
                      T-Shirt Size:
                    </span>{' '}
                    {shirtSize}
                  </Text>
                )}
                <Text className="text-gray-300 text-[14px] m-0">
                  <span className="text-gray-400 font-medium">
                    Course of Study:
                  </span>{' '}
                  {courseOfStudy}
                </Text>
              </Section>

              {/* What's Next */}
              <Section className="mb-[24px]">
                <Text className="text-white text-[18px] font-semibold mb-[16px]">
                  What happens next?
                </Text>
                <Text className="text-gray-300 text-[16px] mb-[16px] leading-[24px]">
                  Your application is now under review. We will evaluate all
                  submissions and notify selected participants via email not
                  later than 4 days before the event.
                </Text>

                <Section className="bg-[#1f2937] border-l-[3px] border-solid border-[#4ade80] pl-[20px] py-[16px] mb-[20px]">
                  <Text className="text-gray-300 text-[14px] mb-[8px] leading-[20px] m-0">
                    • Review period: until 4 days before the event
                  </Text>
                  <Text className="text-gray-300 text-[14px] mb-[8px] leading-[20px] m-0">
                    • Notification via email to: {email}
                  </Text>
                  <Text className="text-gray-300 text-[14px] mb-[8px] leading-[20px] m-0">
                    • Event details will be provided upon acceptance
                  </Text>
                  {shirtSize && (
                    <Text className="text-gray-300 text-[14px] leading-[20px] m-0">
                      • T-shirt will be prepared in size {shirtSize}
                    </Text>
                  )}
                </Section>
              </Section>

              <Text className="text-gray-300 text-[16px] mb-[20px] leading-[24px]">
                If you need to update any information or have questions about
                your application, please contact us as soon as possible.
              </Text>

              <Text className="text-gray-300 text-[16px]">
                Best regards,
                <br />
                <span className="text-[#4ade80] font-medium">
                  The Neuland Ingolstadt e.V. Team
                </span>
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-[#2a2a2a] px-[32px] py-[20px] border-t border-solid border-[#404040]">
              <Text className="text-[#4ade80] text-[14px] font-medium mb-[8px] m-0">
                Neuland Ingolstadt e.V.
              </Text>
              <Text className="text-gray-400 text-[12px] mb-[12px] m-0">
                Technische Hochschule Ingolstadt
                <br />
                Esplanade 10, 85049 Ingolstadt, Germany
              </Text>
              <Text className="text-gray-500 text-[11px] m-0">
                © {new Date().getFullYear()} Neuland Ingolstadt e.V. |
                <span className="text-gray-400"> Unsubscribe</span> |
                <span className="text-gray-400"> Privacy Policy</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

CTFSignupConfirmationEmail.PreviewProps = {
  name: 'Max Mustermann',
  email: 'mam124@thi.de',
  shirtSize: 'L',
  courseOfStudy: 'Computer Science',
} as CTFSignupConfirmationEmailProps

export default CTFSignupConfirmationEmail
