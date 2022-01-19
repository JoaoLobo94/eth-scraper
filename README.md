# Instalation

1. Clone the repository onto your machine.
2. cd onto your repository and run ```yarn install```

## Set up development environment
1. Go to [ETH SCAN](http://https://etherscan.io/myapikey), create an account and generate an API key.
2. Rename ```.envSample``` to ```.env``` and place your API key into the key ```REACT_APP_API```
3. Start your development server with ```yarn start```

# Usage
This simple app only requires 2 parameters to scrape the Ethereum blockchain. 
The wallet address you want to get information on, and the block from which you want to have this information.
Scrape! the ETH network and the data will be presented on a table for you, where you can go to the next and previous page.
The data you will be shown is the transaction hash, the wallet transaction was sent from, the wallet transaction was sent to, and the amount.

# How it works
This simple app works by connecting to the ethscan API and retrieving all the information in JSON format.
This information is then presented to the user, in a paginated form
At no point is the data stored in any database, as this application only relies on a frontend for API calls.
