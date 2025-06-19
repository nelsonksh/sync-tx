require('dotenv').config();

import AndamioSDK from "@andamiojs/sdk";
import { Network } from "../types/network";

export const sdk = new AndamioSDK(process.env.U5C || "http://localhost:50051", Network);
