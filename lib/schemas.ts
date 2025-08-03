import { z } from 'zod'

export const registrationFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  course: z.string().min(1, {
    message: 'Course of study is required.',
  }),
  shirt: z.string().optional(),
})

export const submissionSchema = registrationFormSchema.extend({
  'h-captcha-response': z.string().min(1, {
    message: 'Captcha verification is required.',
  }),
})

export type RegistrationFormData = z.infer<typeof registrationFormSchema>
export type SubmissionData = z.infer<typeof submissionSchema>
