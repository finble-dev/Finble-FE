import { SERVER } from './config';

export const getTestPortfolio = async (token: any) => {
  const res = await fetch(`${SERVER}/test-portfolio/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  return res;
};

export const deleteTestPortfolio = async (token: any, id: number) => {
  await fetch(`${SERVER}/test-portfolio/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id: id,
    }),
  }).catch((err) => console.log(err));
};

export const postTestPortfolio = async (token: any, symbol: string) => {
  const res = await fetch(`${SERVER}/test-portfolio/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ symbol: symbol }),
  }).then((res) => {
    return res.json();
  });
  return res;
};

export const patchTestPortfolio = async (
  token: any,
  id: number,
  ratio: any
) => {
  let data = JSON.stringify({
    id: id,
    ratio: ratio === '' || 0 ? null : ratio,
  });

  const res = await fetch(`${SERVER}/test-portfolio/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data,
  }).then((response) => {
    return response.json();
  });

  return res;
};

export const getTestAnalysis = async (token: any) => {
  const res = await fetch(`${SERVER}/test-portfolio/analysis/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));

  return res;
};

export const postEmail = async (token: any, email: string) => {
  await fetch(`${SERVER}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ contact: email }),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log('유저 이메일 저장 : ', res);
    })
    .catch((err) => console.log(err));
};
