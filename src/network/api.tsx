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
  console.log('삭제 시작!!');
  await fetch(`${SERVER}/test-portfolio/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: id }),
  });
  // .then((response) => response.json())
  // .then((res) => {
  //   console.log('삭제 결과 : ', res);
  // });
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
    ratio: ratio,
  });
  if (ratio === 0) {
    data = JSON.stringify({
      id: id,
      ratio: null,
    });
  }

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
    });

  return res;
};
