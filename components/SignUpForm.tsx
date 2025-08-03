'use client'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  type RegistrationFormData,
  registrationFormSchema,
} from '@/lib/schemas'

interface SignUpFormProps {
  hCaptchaSiteKey: string
}

const SignUpForm = React.memo(function SignUpForm({
  hCaptchaSiteKey,
}: SignUpFormProps) {
  const [verified, setVerified] = useState(false)
  const [hCaptchaToken, setHCaptchaToken] = useState<string>('')
  const router = useRouter()

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      course: '',
      shirt: '',
    },
  })

  const onSubmit = useCallback(
    async (data: RegistrationFormData) => {
      if (!verified || !hCaptchaToken) {
        return
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          'h-captcha-response': hCaptchaToken,
        }),
      })

      if (response.ok) {
        router.push('/done')
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || 'Unknown error occurred'}`)
      }
    },
    [router, verified, hCaptchaToken]
  )

  const handleCaptchaVerify = (token: string) => {
    setVerified(true)
    setHCaptchaToken(token)
  }

  return (
    <>
      <Title label="sign-up" />
      <div>
        You can register for the event with the following form. The number of
        spots is limited. We will get back to you not later than 4 days before
        the event to confirm or decline your registration.
        <br />
        The event is intended for the students at Technische Hochschule
        Ingolstadt. Therefore, these registrations will be accepted preferably.
        <br />
        <br />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <sup>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email address <sup>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Course of study <sup>*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Computer Science 3rd semester bachelor, ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shirt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>T-Shirt size (unisex)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="None selected" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="XXS">XXS</SelectItem>
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                      <SelectItem value="3XL">3XL</SelectItem>
                      <SelectItem value="4XL">4XL</SelectItem>
                      <SelectItem value="5XL">5XL</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <p>
                The above data is required for the planning and execution of the
                Neuland CTF. Photographs will also be taken at the event.
                Further information on data processing can be found in the{' '}
                <a href="/privacy_policy.pdf" target="_blank" rel="noreferrer">
                  privacy policy
                </a>
                .
              </p>

              <div className="flex justify-center">
                <HCaptcha
                  sitekey={hCaptchaSiteKey}
                  onVerify={handleCaptchaVerify}
                />
              </div>

              <div className="flex justify-center">
                <Button type="submit" disabled={!verified}>
                  Send
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
})

export default SignUpForm
