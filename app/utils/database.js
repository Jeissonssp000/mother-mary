export async function fetchSingers() {
  const response = await fetch('/api/singers');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

export async function fetchSingerById(id) {
  const response = await fetch(`/api/singers?id=${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

export async function createSinger(data) {
  const response = await fetch('/api/singers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

export async function updateSinger(id, data) {
  const response = await fetch(`/api/singers`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, ...data }),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

export async function deleteSinger(id) {
  const response = await fetch(`/api/singers?id=${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}

