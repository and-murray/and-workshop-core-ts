# homebrew
if ! command -v brew &>/dev/null; then
    echo "Homebrew is not installed. Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >>~/.zprofile
    source ~/.zprofile
else
    echo "Homebrew is already installed."
fi

# nvm
if [ ! -d "$HOME/.nvm" ]; then
    echo "nvm is not installed. Installing nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
else
    echo "nvm is already installed."
fi

# node
source ~/.nvm/nvm.sh
desired_version=$(cat .nvmrc)
if nvm ls | grep -q "$desired_version"; then
    echo "The desired Node.js version specified in .nvmrc is already installed."
else
    echo "The desired Node.js version specified in .nvmrc is not installed. Installing the desired version using nvm..."
    nvm install $desired_version
fi
nvm use

# python
if command -v python3 &>/dev/null; then
    echo "Python 3 is already installed."
else
    echo "Python 3 is not installed. Installing Python 3 using Homebrew..."
    brew install python
fi

# Check if JupyterLab is installed
if command -v jupyter-lab &>/dev/null; then
    echo "JupyterLab is already installed."
else
    echo "JupyterLab is not installed. Installing JupyterLab using pip..."
    brew install jupyterlab
fi

# deno (easier TS jupyter notebooks)
if [ ! -d "$HOME/.deno" ]; then
    echo "deno is not installed. Installing deno..."
    curl -fsSL https://deno.land/x/install/install.sh | sh
    echo 'export DENO_INSTALL="$HOME/.deno"' >>~/.zshrc
    echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >>~/.zshrc
    source ~/.zshrc
else
    echo "deno is already installed."
fi

if [ ! -d "$HOME/Library/Jupyter/kernels/deno" ]; then
    echo "deno kernel for Jupyter not installed. Installing now..."
    deno jupyter --unstable --install
else
    echo "deno kernel for Jupyter already installed."
fi
