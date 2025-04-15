export const apiURL = process.env.NEXT_PUBLIC_API_URL ?? "";
export const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN as string;
export const capitalizeFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
