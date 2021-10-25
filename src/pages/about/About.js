import "./About.css";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-index">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <i className="fab fa-ethereum fa-10x eth" />
        Ethereum is a decentralized, open-source blockchain with smart contract
        functionality. Ether (ETH or Ξ) is the native cryptocurrency of the
        platform. Amongst cryptocurrencies, Ether is second only to Bitcoin in
        market capitalization. Ethereum was conceived in 2013 by programmer
        Vitalik Buterin. In 2014, development work commenced and was
        crowdfunded, and the network went live on 30 July 2015. The platform
        allows anyone to deploy permanent and immutable decentralized
        applications onto it, with which users can interact. Decentralized
        finance (DeFi) applications provide a broad array of financial services
        without the need for typical financial intermediaries like brokerages,
        exchanges, or banks, such as allowing cryptocurrency users to borrow
        against their holdings or lend them out for interest. Ethereum also
        allows for the creation and exchange of NFTs, which are
        non-interchangeable tokens connected to digital works of art or other
        real-world items and sold as unique digital property. Additionally, many
        other cryptocurrencies operate as ERC-20 tokens on top of the Ethereum
        blockchain and have utilized the platform for initial coin offerings.
        Ethereum has started implementing a series of upgrades called Ethereum
        2.0, which includes a transition to proof of stake and aims to increase
        transaction throughput using sharding.
      </motion.p>
    </div>
  );
};
export default About;
