# web3 for all

a place where web3 is explained as simple as possible, like you’re five.

we’re adding new projects regularly, with over 25 projects already live, including ethereum, zksync, layerzero, eigenlayer, base, aave, chainlink, and more. it’s all open source, so anyone can jump in and contribute.

check it out at: web3forall.xyz


## how to contribute

contributing is simple and fun – whether it’s adding new projects, fixing a typo, or sharing cool diagrams, we’d love to see what you’ve got.


- fork the repo – start by forking this project to your github account.
- clone your fork – bring it to your local machine:
```
git clone https://github.com/<your-username>/web3-for-all.git
cd web3-for-all
```
- add a project or term – open the lib/constants.ts file and follow this format:
```
{
  name: "<the name of the project or term>",
  id: "<same as the name>",
  category: ["all", "<more categories>"],
  url: "",
  author: {
    name: "<your name>",
    url: "<your profile link>",
    image: "<your image link>"
  }
}
```
example:
```
{
  name: "arweave",
  id: "arweave",
  category: ["all", "layer 1"],
  url: "https://ik.imagekit.io/onboard/web3forall/arweave.png",
  author: {
    name: "helen",
    url: "https://github.com/hehozo",
    image: "https://github.com/hehozo.png"
  }
}
```
- add images –
   - if you have your image hosted somewhere, drop the URL directly.
   - if not, include it in the pull request, and i’ll upload it to imagekit for you.

- make a pull request – push your branch and submit a pull request to the main branch.

### join the community

got ideas? found something we can improve? open an issue or create a discussion in the issues section.

### shoutout to contributors

big love to everyone who’s contributed so far – you make this project better every day. ❤️
