const share = (name: string, id: string) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${name}: explain like i'm five by @suhailkakar. Check it out at https://web3forall.xyz?id=${id}`;
  window.open(twitterUrl, "_blank");
};

export { share };
