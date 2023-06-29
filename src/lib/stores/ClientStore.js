import { writable } from "svelte/store";
import { goto } from "$app/navigation";
import baseUrl from "$lib/utils/baseUrl";

export const client = writable({});

//TODO: add Loader/Spinner component when waiting for login to occur.
export const loginMerchant = async (loginInfo) => {
  console.log("Merchant Login Running");
  const response = await fetch(`${baseUrl}/merchants/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  });

  if (response.ok) {
    const data = await response.json();
    client.set(data);
    // TODO: if successful, add user to store? set cookies/localStorage?
    goto('/dashboard');
  } else {
    // TODO: add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(response.statusText);
  }
}

export const loginUser = async (loginInfo) => {
  console.log("User Login Running")
  const response = await fetch(`${baseUrl}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  });

  if (response.ok) {
    const data = await response.json();
    client.set(data);
    // if successful,  set cookies/localStorage?
    goto('/dashboard');
  } else {
    // add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(response.statusText);
  }
}

export const logoutClient = () => {
  client.set(null);
  goto('/');
}