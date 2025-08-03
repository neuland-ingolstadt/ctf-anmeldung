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

interface CTFSignupNotificationEmailProps {
  name: string
  email: string
  shirtSize?: string
  courseOfStudy: string
  timestamp: string
}

const CTFSignupNotificationEmail = ({
  name,
  email,
  shirtSize,
  courseOfStudy,
  timestamp,
}: CTFSignupNotificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>New CTF Signup - {name}</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-[#1a1a1a] border border-solid border-[#404040] max-w-[600px] mx-auto">
            {/* Header Section */}
            <Section className="bg-[#2a2a2a] px-[32px] py-[24px] border-b border-solid border-[#404040]">
              <Text className="text-[#4ade80] text-[20px] font-bold m-0 font-mono">
                Neuland Ingolstadt e.V.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="px-[32px] py-[32px]">
              <Heading className="text-white text-[24px] font-bold mb-[8px]">
                New CTF Signup Received
              </Heading>

              <Text className="text-gray-400 text-[14px] mb-[24px] font-mono">
                Received: {timestamp}
              </Text>

              <Text className="text-gray-300 text-[16px] mb-[24px] leading-[24px]">
                A new participant has signed up for the CTF event. Please review
                the application details below.
              </Text>

              {/* Participant Data Section */}
              <Section className="bg-[#2a2a2a] border border-solid border-[#404040] p-[24px] mb-[24px]">
                <Text className="text-[#4ade80] text-[16px] font-semibold mb-[16px] m-0">
                  Participant Information
                </Text>
                <Hr className="border-[#404040] my-[16px]" />

                <Text className="text-gray-300 text-[14px] mb-[12px] m-0">
                  <span className="text-gray-400 font-medium">Full Name:</span>{' '}
                  {name}
                </Text>
                <Text className="text-gray-300 text-[14px] mb-[12px] m-0">
                  <span className="text-gray-400 font-medium">
                    Email Address:
                  </span>{' '}
                  {email}
                </Text>
                <Text className="text-gray-300 text-[14px] mb-[12px] m-0">
                  <span className="text-gray-400 font-medium">
                    T-Shirt Size:
                  </span>{' '}
                  {shirtSize || 'Not specified'}
                </Text>
                <Text className="text-gray-300 text-[14px] mb-[12px] m-0">
                  <span className="text-gray-400 font-medium">
                    Course of Study:
                  </span>{' '}
                  {courseOfStudy}
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="bg-[#2a2a2a] px-[32px] py-[20px] border-t border-solid border-[#404040]">
              <Text className="text-[#4ade80] text-[14px] font-medium mb-[8px] m-0">
                Neuland Ingolstadt e.V.
              </Text>
              <Text className="text-gray-500 text-[11px] m-0">
                © {new Date().getFullYear()} Neuland Ingolstadt e.V. | Internal
                Use Only
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

CTFSignupNotificationEmail.PreviewProps = {
  name: 'Max Mustermann',
  email: 'mam1234@thi.de',
  shirtSize: 'L',
  courseOfStudy: 'Computer Science',
  timestamp: new Date().toISOString(),
} as CTFSignupNotificationEmailProps

export default CTFSignupNotificationEmail
