export const PORTFOLIO_FORM_URL =
  'https://vitt-mailer-livid.vercel.app/portfolio-form-submission';

export async function submitPortfolioForm({ name, email, subject, message }) {
  const response = await fetch(PORTFOLIO_FORM_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      message: `Subject: ${subject}\n\n${message}`,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Failed to send message. Please try again.');
  }

  return data;
}
