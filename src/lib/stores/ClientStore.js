import { writable } from "svelte/store";
import { goto } from "$app/navigation";
import baseUrl from "$lib/utils/baseUrl";

export const client = writable({});

export const loginMerchant = async (loginInfo) => {
  const res = await fetch(`${baseUrl}/merchants/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  });

  if (res.ok) {
    const data = await res.json();
    client.set(data);
    // TODO: if successful, add user to store? set cookies/localStorage?
    // TODO: set client based on user or merchant cookie returned.
    goto('/merchant-dashboard');
  } else {
    // TODO: add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(res.statusText);
  }
};

export const loginUser = async (loginInfo) => {
  const res = await fetch(`${baseUrl}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  });

  if (res.ok) {
    const data = await res.json();
    client.set(data);
    // if successful,  set cookies/localStorage?
    // TODO: set client based on user or merchant cookie returned.
    goto('/user-dashboard');
  } else {
    // add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(res.statusText);
  }
};

export const signupMerchant = async (signupInfo) => {
  const res = await fetch(`${baseUrl}/merchants/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupInfo)
  });

  if (res.ok) {
    const data = await res.json();
    client.set(data);
    // if successful,  set cookies/localStorage?
    // TODO: set client based on user or merchant cookie returned.
    goto('/merchant-dashboard');
  } else {
    // add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(res.statusText);
  }
};

export const signupUser = async (signupInfo) => {
  const res = await fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupInfo)
  });

  if (res.ok) {
    const data = await res.json();
    client.set(data);
    // if successful,  set cookies/localStorage?
    // TODO: set client based on user or merchant cookie returned.
    goto('/user-dashboard');
  } else {
    // add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(res.statusText);
  }
};

export const logoutClient = () => {
  client.set(null);
  goto('/');
};