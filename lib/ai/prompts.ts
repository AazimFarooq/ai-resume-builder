export const summaryPrompt = `Write a professional summary for a {{jobTitle}} resume.
{{#if targetJob}}The target job is: {{targetJob}}.{{/if}}
{{#if experience}}Experience: {{experience}}{{/if}}
{{#if skills}}Skills: {{skills}}{{/if}}
Keep it concise, professional, and highlight key strengths.`

export const experiencePrompt = `Rewrite the following experience for a {{jobTitle}} resume in a professional, achievement-focused way:
{{experience}}
{{#if targetJob}}The target job is: {{targetJob}}.{{/if}}
Use bullet points and focus on accomplishments with metrics where possible.`

export const skillsPrompt = `Organize and format the following skills for a {{jobTitle}} resume:
{{skills}}
{{#if targetJob}}The target job is: {{targetJob}}.{{/if}}
Group them by category if appropriate and format them professionally.`

export const educationPrompt = `Format the following education information for a {{jobTitle}} resume:
{{education}}
Make it clear, professional, and properly formatted.`

export const fullResumePrompt = `Create a professional resume for a {{jobTitle}} with the following information:
{{#if experience}}Experience: {{experience}}{{/if}}
{{#if skills}}Skills: {{skills}}{{/if}}
{{#if education}}Education: {{education}}{{/if}}
{{#if targetJob}}Target job: {{targetJob}}{{/if}}
Format the resume in a professional way with clear sections for summary, experience, skills, and education.`

