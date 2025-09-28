import { Section, Tailwind, Text } from '@react-email/components'
import { memo } from 'react'

const MailFooter = memo(function MailFooter() {
  return (
    <Tailwind>
      <Section className="bg-[#2a2a2a] px-[32px] py-[24px] border-t border-solid border-[#404040]">
        <Text className="text-[#4ade80] text-[16px] font-bold mb-[16px] m-0">
          Neuland Ingolstadt e.V.
        </Text>

        <Text className="text-gray-300 text-[13px] mb-[16px] m-0 leading-[1.6]">
          Esplanade 10
          <br />
          85049 Ingolstadt
          <br />
          <br />
          <strong className="text-gray-200">Kontakt:</strong>
          <br />
          E-Mail:{' '}
          <span className="text-[#4ade80]">info@neuland-ingolstadt.de</span>
          <br />
          Telefon: 015678 384646
          <br />
          <br />
        </Text>

        <Text className="text-gray-300 text-[13px] m-0 leading-[1.6]">
          <strong className="text-gray-200">Vorstand:</strong>
          <br />
          Erster Vorstand: Felix Weber
          <br />
          Zweiter Vorstand: Timo Weese
          <br />
          Dritter Vorstand: Philipp Opheys
          <br />
          <br />
        </Text>

        <Text className="text-gray-400 text-[12px] m-0 leading-[1.5]">
          <strong className="text-gray-300">Registrierung:</strong>
          <br />
          Registergericht: Amtsgericht Ingolstadt
          <br />
          Registernummer: VR 201088
        </Text>

        <Text className="text-gray-500 text-[11px] m-0 pt-[8px]">
          © {new Date().getFullYear()} Neuland Ingolstadt e.V. Alle Rechte
          vorbehalten.
        </Text>
      </Section>
    </Tailwind>
  )
})

export default MailFooter
