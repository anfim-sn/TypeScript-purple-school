enum QuestiontStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted'
}

const request: {
  topicID: number;
  status: QuestiontStatus
} = {
  topicID: 0,
  status: QuestiontStatus.PUBLISHED
}

async function getFAQs(request: {topicID: number; status: QuestiontStatus}): Promise<{
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestiontStatus;
}[]> {
  const response = await fetch('src/2-task-functionType/faqs.json', {
    method: 'GET',
    // body: JSON.stringify(request)
  })
  const data = response.json()
  return data
}

export const functionType = getFAQs(request)