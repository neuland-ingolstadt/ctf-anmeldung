import {
  Body,
  Button,
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
import MailFooter from '@/mail/components/footer'

interface CTFSignupEmailConfirmationProps {
  name: string
  confirmationUrl: string
}

const CTFSignupEmailConfirmation = ({
  name,
  confirmationUrl,
}: CTFSignupEmailConfirmationProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>
          Please confirm your CTF registration - Neuland Ingolstadt e.V.
        </Preview>
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
                Confirm Your CTF Registration
              </Heading>

              <Text className="text-gray-300 text-[16px] leading-[24px] mb-[24px]">
                Hello {name},
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[24px] mb-[24px]">
                Thank you for signing up for our Capture The Flag (CTF) event!
                To complete your registration, please confirm your email address
                by clicking the button below.
              </Text>

              <Section className="text-center mb-[32px]">
                <Button
                  href={confirmationUrl}
                  className="bg-[#4ade80] text-black px-[24px] py-[12px] rounded-[6px] font-semibold text-[16px] no-underline inline-block"
                >
                  Confirm Email Address
                </Button>
              </Section>

              <Text className="text-gray-400 text-[14px] leading-[20px] mb-[16px]">
                If the button doesn't work, you can also copy and paste this
                link into your browser:
              </Text>

              <Text className="text-[#4ade80] text-[14px] leading-[20px] mb-[24px] break-all">
                {confirmationUrl}
              </Text>

              <Text className="text-gray-400 text-[14px] leading-[20px] mb-[24px]">
                This confirmation link will expire in 24 hours. If you didn't
                sign up for this event, you can safely ignore this email.
              </Text>

              <Hr className="border border-solid border-[#404040] my-[32px]" />

              <Text className="text-gray-400 text-[14px] leading-[20px]">
                We're excited to see you at the CTF event! If you have any
                questions, feel free to reach out to us.
              </Text>

              <Text className="text-gray-400 text-[14px] leading-[20px] mt-[16px]">
                Best regards,
                <br />
                The Neuland Ingolstadt Team
              </Text>
            </Section>

            <MailFooter />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default CTFSignupEmailConfirmation
