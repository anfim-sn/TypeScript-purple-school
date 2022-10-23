enum QuestiontStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted'
}

const request: {
  topicID: number;
  status: QuestiontStatus
} = {
  topicID: 5,
  status: QuestiontStatus.PUBLISHED
}

async function getFAQs(request: {topicID: number; status: QuestiontStatus}): Promise<{
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestiontStatus;
}[]> {
  const response = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(request)
  })
  const data = response.json()
  return data
}