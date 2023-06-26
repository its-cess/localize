import { writable } from "svelte/store";
import { goto } from "$app/navigation";
import baseUrl from '$lib/utils/baseUrl';

export const user = writable({});

export const loginUser = async (loginInfo) => {
  const response = await fetch(`${baseUrl}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  });

  if (response.ok) {
    const data = await response.json();
    user.set(data);
    // if successful,  set cookies/localStorage?
    goto('/user-dash');
  } else {
    // add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(response.statusText);
  }
}

export const logoutUser = () => {
  user.set(null);
  goto('/login/user')
}