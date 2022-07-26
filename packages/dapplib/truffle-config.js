require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot blanket razor muscle slow journey knife fresh gift'; 
let testAccounts = [
"0xe93eb390c4b3989000c4e9a3656c093738398cbaac10df03ec3bfef28c0a44c8",
"0x683aee392be88e187370aa72e998921909e1534f699fc787affac0e0a509d018",
"0x8c3d77b491cde705ca55a680481d564bad04ade5623cf10c19e7fc048442890d",
"0x4a2b417df4a75a951a455422b096de03c0fec9854c7fcb909819c976e3f7f534",
"0xcb2fcce7d0bb215e72389acc85a206a3f76de404e5250c76e28d0de2e2583b38",
"0x0652ae7f54b1a875d3300114d7b192cf253203c9c610a993a58c8a0bcc1700d2",
"0x3dde1142e38fa1e5370a85e353b06304e706a38e0f4e0363623ce77cc7eae034",
"0xdcd51b1f2641272fd331964fd6d06602aa5fdd1808ef43edac3fb79a766a749c",
"0x2f7ecfb04643e3e803e8a12bb1ff7165c07752cca812ba142bffbdc349d2e143",
"0xec6cf17f26f55fe2514dbc527a101f9ad563725605d6548eb793969b7efca82c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

