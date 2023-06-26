import { writable, get } from "svelte/store";
import { goto } from "$app/navigation";
import baseUrl from "$lib/utils/baseUrl";

export const merchant = writable({});

// TODO: a lot of the MerchantStore/UserStore is similar:
// Find a way to combine then and pick which functions to run based on Merchant/User???

export const loginMerchant = async (loginInfo) => {
  const response = await fetch(`${baseUrl}/merchants/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  });

  if (response.ok) {
    const data = await response.json();
    merchant.set(data);
    // TODO: if successful, add user to store? set cookies/localStorage?
    goto('/merchant-dash');
  } else {
    // TODO: add alert message component that shows that they couldn't be logged in.
    console.log('Could not log you in. Please try again.');
    throw new Error(response.statusText);
  }
}

export const logoutMerchant = () => {
  merchant.set(null);
  goto('/login/merchant');
}