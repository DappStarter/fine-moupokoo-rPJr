require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food street rival script uniform hunt kangaroo army gasp'; 
let testAccounts = [
"0xbd9ad3f9bc7a970e33942768f9220492690579baa26e22acf54be63c67f5b765",
"0x76bbebc6c2e630c8a71d7367466dc151828c5b47ce315278cf017a2094b3888c",
"0x509c154a662b0f289ddeb6e85d61d47e18815011a94db94c6b625b4a7adfde87",
"0xf6fa00dbbfcf987547cbf2dabdd5bc0713526e8c3a852f1abfb38b365f71b098",
"0xd6e2443939d6b4c494025667e438ce67e489d14cb4cc5bf78570ed307709a931",
"0xa46c23cfb387f77e98b6a374942ca31071dbe3ea748bbf338238ebcf29c8441c",
"0x0e94fe4d5fcfc93bbda6621ed6513898fddec64177de4e84f772730f25f75481",
"0x57dba8781cf5e61595b048a48698b6daec01b2e40f28e7370ecb69ec259456a8",
"0xc4da8048d9df6100b91fbc1da1e5735e952705433fad08164d525cff9550ea27",
"0x13293d5eb29b41c719df10be3e41d59f1a3eddf17bc0536cf4720ac5960dcae1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

