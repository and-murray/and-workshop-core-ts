# CORE TS WORKSHOP

This is a companion project for a series of Typescript Workshops.

The `examples` folder contains a series of Jupyter Notebooks for demonstrating various Typescript features during the sessions.
These examples use deno as the kernel to allow executing Typescript.

The `exercises` folder has 4 modules that must be updated to pass the included tests. Each module has comments explaining what is required, and the tests can be used for further reference.

## Getting Started

1. Clone this repo on your machine
2. Install VSCode
3. Install Jupyter Extension Pack - `ms-toolsai.jupyter`
4. Run the setup script: `./setup.sh`
5. Install node modules: `npm install`

## Troubleshooting

### `setup.sh` does not run correctly

The script checks for dependencies and installs them where it cannot find them.

If it fails, or you find that the Jupyter notebooks are not working then manually installing each dependency is suggested.

- [Homebrew](https://brew.sh/)
- [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
- Node
  - In the project directory - `nvm install; nvm use`
- Python3
  - `brew install python`
- Jupyter Lab
  - `brew install jupyterlab`
- [Deno](https://docs.deno.com/runtime/getting_started/installation/#download-and-install)
  - Homebrew recommended - `brew install deno`
- Deno Kernel for Jupyter
  - `deno jupyter --unstable --install`

```
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >>~/.zprofile
source ~/.zprofile
```

### Errors when running code blocks in notebooks

- Check dependencies are all installed correctly.
- Ensure that deno is selected as the Jupyter Kernel in VSCode.
- Restart VSCode after all dependencies are installed.

## Running exercises

You can run the various exercises with the below:

```
npm run exercise::basics
npm run exercise::functional
npm run exercise::object-oriented
npm run exercise::promises
```
