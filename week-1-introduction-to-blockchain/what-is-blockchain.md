# What Is Blockchain?

So, basically, blockchain is a chain of data stored as a hash, and it distributed to many computers

It has at least these 3 things:
1. Data that later stored as a hash (we can call it a "block")
2. Chain of data, chain of hashes (hence called "blockchain")
3. Computers (so the chain will be distributed to all computers)

## Data

The data is can be anything, then will be converted to a hash. And the hashing method is vary, and one of it is using SHA-256

The data usually is a public data, not a sensitive one. Why? because it will spread to computers publicly, this is a "decentralized" concept comes from. Not a private company that store your data, but everyone.

## Chain

Without the chain, it will not be called "blockchain", because the verification lies in this chain.

One block of data cannot verify the integrity of the data, but the chain of it can do.

The data is containing the previous hash and a timestamp. That way each data will be connected and can be verified

## Computers

The chain will be spread through all computers, and it depends on the network itself.

We can do it in local network, but the computers only a few. Also, the chance for making data not consistent is big.

Let's say that we create blockchain connection and it has only 10 computers. The hijacker only needs to change the data in 6 from 10 computers to make the data is not consistent. Because in that condition, we don't know which one is the real data and which one is the fake one. This also known as 50/50 attack .

That's why blockchain is suitable for internet network that a lot of computers are storing the blockchain so the hijacker will need more time to do 50/50 attack before it will be handled by the security team

## Usage

Mostly right now, the blockchain is suitable for "contract" type of data, either in the finance, or property, or anything as long the contract is there, so the contract will be quite persistent and cannot be hijacked easily.