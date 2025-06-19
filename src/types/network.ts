/**
 * Represents the different network environments available.
 */
export type NetworkType = "Mainnet" | "Preprod" | "Preview";

/**
 * Maps each network name to its corresponding numeric ID.
 */
export type NetworkIdMap = {
    Mainnet: 1;
    Preprod: 0;
    Preview: 0;
};

/**
 * Runtime record of network names to their corresponding IDs.
 */
export const NETWORK_IDS: NetworkIdMap = {
    Mainnet: 1,
    Preprod: 0,
    Preview: 0,
};

/**
 * The current network selected via environment variable or defaulting to Preprod.
 */
export const Network: NetworkType = (process.env.NETWORK as NetworkType) || "Preprod";

/**
 * The numeric ID for the current network.
 */
export const NetworkId: 0 | 1 = NETWORK_IDS[Network];
